import { url } from 'inspector';
import { Project, Experience } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '/Manish_Kumar_Resume.pdf', download: '' },
];

export const SKILLS = [
  { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "C", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },

  // New MERN-stack and GitHub skills added below:
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" }
];

export const PROJECTS: Project[] = [
  {
  id: 1,
  title: "ChatPlug - AI Chatbot Platform",
  description: "A full-stack SaaS platform to create, train, and embed AI-powered chatbots on any website. Features PDF/URL knowledge base training, RAG-based responses, real-time streaming chat, analytics dashboard, and an embeddable widget script. Built with React, Node.js, MongoDB, and OpenAI.",
  technologies: ["React", "Node.js", "MongoDB", "Express", "OpenAI", "Tailwind CSS", "Zustand"],
  imageUrl: "/assets/chatplug.png",
  githubUrl: "https://github.com/manish77633/chatplug-V1",
  liveUrl: "https://chatplug-v1.vercel.app"
},
  {
    id: 2,
    title: "Aurelia Luxe - Full-Stack E-commerce",
    description: "A dynamic MERN stack e-commerce platform featuring advanced multi-level category filtering and an interactive multi-angle product image gallery. Designed with scalable MongoDB schemas for robust inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    imageUrl: "/assets/aurelia-home.png",
    githubUrl: "https://github.com/manish77633/aurelia",
    liveUrl: "https://aurelia-beryl.vercel.app"
  },
  {
    id: 3, // Ya jo bhi next ID ho
    title: "Velour - Premium E-commerce",
    description: "A high-end fashion e-commerce platform featuring a sleek UI, secure Razorpay payment integration, and Google OAuth. Includes a fully functional admin dashboard for product management, real-time cart updates with Redux Toolkit, and persistent user sessions.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux Toolkit", "Tailwind CSS", "Razorpay"],
    imageUrl: "/assets/velour-home.png",
    githubUrl: "https://github.com/manish77633/Velour-", // Apna asli repo link check kar lena
    liveUrl: "https://velour-virid.vercel.app"
  },
  {
    id: 4,
    title: "Mockify AI",
    description: "A production-grade SaaS platform for generating deterministic mock API endpoints. Features sub-12ms latency using smart edge-caching and context-aware dataset generation with LLM integration. Includes a premium dashboard with custom schema builders and real-time monitoring.",
    technologies: ["React", "Node.js", "MongoDB", "Gemini/Llama API", "Framer Motion", "Tailwind CSS"],
    imageUrl: "./assets/mokify.png",
    githubUrl: "https://github.com/manish77633/mockify-ai",
    liveUrl: "https://mockify-ai-f2ol.vercel.app/"
  },
  {
    id: 5,
    title: "Wanderlust",
    description: "A full-stack Airbnb-inspired accommodation booking platform. Features include listing creation, map integration, user authentication, and booking management. Built with the MERN stack.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com/manish77633/wanderlust",
    liveUrl: "https://wanderlust-w38u.onrender.com/listings"
  },

  {
    id: 6, // Id check kar lena sequence ke hisaab se
    title: "Zerodha Clone (onworking)",
    description: "A comprehensive stock trading platform clone featuring a professional landing page and a functional trading dashboard. Includes real-time data visualization for holdings/positions, user authentication, and a complete order management system. Built for high performance and responsiveness.",
    technologies: ["MongoDB", "Express", "React", "Node.js", "Tailwind CSS", "Axios"],
    imageUrl: "https://zerodha.com/static/images/products-kite.png", // Stock Market professional image
    githubUrl: "https://github.com/manish77633/Zerodha",
    liveUrl: "https://zerodha-375eo5zg1-manishs-projects-e32ba696.vercel.app/"
  },
  {
    id: 7,
    title: "Arihant Marble House",
    description: "A professional business website designed for a marble and granite supplier. Developed using WordPress with custom HTML/CSS/JS for specific interactive elements.",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com/manish77633",
    liveUrl: "https://arihantmarblehouse.com/"
  },

];

export const EDUCATION: Experience[] = [
  {
    id: 1,
    company: "IPS College",
    role: "Bachelor of Computer Application",
    period: "July 2023 - Current",
    description: "Specializing in Software Development. Focusing on Data Structures and Algorithms (C++) and Full Stack Development.",
    highlights: [
      "Data Structures & Algorithms",
      "Backend Architecture",
      "Database Management"
    ]
  },
  {
    id: 2,
    company: "The Castle Convent Sr Sec School",
    role: "Senior Secondary (XII)",
    period: "2022 — 2023",
    description: "Completed higher secondary education with a focus on Science and Mathematics.",
    highlights: []
  },
  {
    id: 3,
    company: "The Castle Convent Sr Sec School",
    role: "Secondary (X)",
    period: "2020 — 2021",
    description: "Completed secondary education foundation.",
    highlights: []
  }
];

export const CONTACT_INFO = {
  phone: "7976466048",
  email: "manishkumar20047877@gmail.com",
  location: "Jaipur, Rajasthan",
  github: "https://github.com/manish77633",
  linkedin: "https://linkedin.com/in/manish-kumar-b14",
  leetcode: "https://leetcode.com/u/manish_7877"
};

export const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Manish Kumar.
Manish is a React Full Stack Developer and a C++ Programmer based in Jaipur, Rajasthan.
Skills: C++, C, React, MySQL, Python (Basic), Figma.
Projects: Wanderlust (MERN Stack), Arihant Marble House (WordPress/Web), ATM System (C++).
Education: BCA at IPS College (July 2023 - Current).
Tone: Professional, Tech-focused, Concise.
`;

// Code Snippets for Hero Animation
export const CODE_SNIPPETS = [
  {
    label: "Hero.tsx",
    language: "typescript",
    code: `const Hero = () => {
  return (
    <section className="flex items-center">
      <h1>Hi, I'm <span className="text-blue">Manish</span></h1>
      <p>React Full Stack Developer</p>
      <p>C++ Programmer</p>
      
      <div className="skills">
        <Skill name="React" level="Advanced" />
        <Skill name="Node.js" level="Intermediate" />
        <Skill name="C++" level="Advanced" />
      </div>
    </section>
  );
};`
  },
  {
    label: "Project.cpp",
    language: "cpp",
    code: `class ATM_System {
private:
    string userPIN;
    double balance;
public:
    void withdraw(double amount) {
        if (amount <= balance) {
            balance -= amount;
            logTransaction("Withdrawal", amount);
            cout << "Success!";
        } else {
            throw InsufficientFunds();
        }
    }
};`
  },
  {
    label: "Config.json",
    language: "json",
    code: `{
  "developer": "Manish Kumar",
  "location": "Jaipur, India",
  "role": "Full Stack Engineer",
  "status": "Open for Work",
  "contacts": {
    "email": "manish@dev.com",
    "github": "@manish77633"
  },
  "hobbies": ["Coding", "Gaming"]
}`
  }
];