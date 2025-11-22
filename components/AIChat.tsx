import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import { Message } from '../types';
import { createPortfolioChat, sendMessageStream } from '../services/geminiService';
import { GenerateContentResponse } from '@google/genai';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'init', role: 'model', text: "Hello! I'm Manish's AI assistant. Ask me anything about his projects, skills, or experience." }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  
  const chatSessionRef = useRef<any>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && !chatSessionRef.current) {
      try {
        chatSessionRef.current = createPortfolioChat();
      } catch (e) {
        console.error("Failed to init chat", e);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = async (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!inputValue.trim() || !chatSessionRef.current) return;

    const userText = inputValue.trim();
    setInputValue('');
    
    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: userText
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    try {
      const streamResult = await sendMessageStream(chatSessionRef.current, userText);
      
      let fullResponseText = "";
      const botMessageId = (Date.now() + 1).toString();
      
      setMessages(prev => [...prev, { id: botMessageId, role: 'model', text: '' }]);

      for await (const chunk of streamResult) {
         const c = chunk as GenerateContentResponse;
         const text = c.text;
         if (text) {
            fullResponseText += text;
            setMessages(prev => prev.map(msg => 
                msg.id === botMessageId ? { ...msg, text: fullResponseText } : msg
            ));
         }
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        id: Date.now().toString(), 
        role: 'model', 
        text: "Sorry, I encountered a connection error." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Clean Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 right-8 z-40 w-14 h-14 bg-primary text-white shadow-lg shadow-primary/30 hover:scale-105 transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100'
        }`}
        aria-label="Chat with AI"
      >
        <MessageSquare size={24} />
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-8 right-8 z-50 w-[90vw] md:w-[380px] bg-darker border border-white/10 shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right ${
        isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-95 opacity-0 translate-y-10 pointer-events-none'
      }`} style={{ height: '500px', maxHeight: '80vh' }}>
        
        {/* Header */}
        <div className="h-14 bg-card border-b border-white/5 flex justify-between items-center px-4">
          <div className="flex items-center gap-3">
             <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
             <span className="text-white font-medium text-sm">AI Assistant</span>
          </div>
          <button 
            onClick={() => setIsOpen(false)}
            className="text-slate-400 hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Chat Area */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-dark custom-scrollbar">
          {messages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[85%] p-3 text-sm leading-relaxed ${
                msg.role === 'user' 
                  ? 'bg-primary text-white' 
                  : 'bg-card text-slate-300 border border-white/5'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isTyping && (
             <div className="text-slate-500 text-xs pl-2 animate-pulse">
               Thinking...
             </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-3 bg-card border-t border-white/5">
          <div className="flex items-center gap-2 bg-dark border border-white/10 px-4 py-2 focus-within:border-primary transition-colors">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask about Manish..."
              className="w-full bg-transparent border-none text-sm text-white placeholder:text-slate-600 focus:outline-none"
              autoFocus
            />
            <button 
              type="submit"
              disabled={!inputValue.trim() || isTyping}
              className="text-primary hover:text-blue-400 transition-colors disabled:opacity-30"
            >
              <Send size={16} />
            </button>
          </div>
        </form>

      </div>
    </>
  );
};

export default AIChat;