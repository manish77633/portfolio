import { GoogleGenAI, Chat } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Initialize the client with the API key from the environment
// Note: In a real production build, ensure the key is not exposed to the public if not using a proxy.
// For this demo environment, we use process.env.API_KEY directly.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const createPortfolioChat = (): Chat => {
  return ai.chats.create({
    model: 'gemini-2.5-flash',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
    },
  });
};

export const sendMessageStream = async (chat: Chat, message: string) => {
  try {
    return await chat.sendMessageStream({ message });
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    throw error;
  }
};