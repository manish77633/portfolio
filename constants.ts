import { url } from 'inspector';
import { Project, Experience } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
  { name: 'Resume', href: '/ManishResume.pdf', download: '' },
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
    title: "DotCom Growth - Digital Marketing Website",
    description: "A modern digital marketing agency website designed to showcase services, business solutions, and growth-focused strategies through a premium responsive interface. Built to deliver an engaging user experience with clean layouts and strong visual hierarchy.",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    imageUrl: "/assets/dotcom.png",
    githubUrl: "https://github.com/manish77633",
    liveUrl: "https://dotcom-growthv1.vercel.app/"
  },
  {
    id: 2,
    title: "Ammaai - Handicraft Web App",
    description: "A modern handcraft web application designed to present handmade products and craft-related content through a clean, responsive interface. Built to provide an accessible browsing experience across desktop and mobile devices.",
    technologies: ["React", "JavaScript", "CSS"],
    imageUrl: "/assets/ammaai.png",
    githubUrl: "https://github.com/manish77633",
    liveUrl: "https://hand-craftvercelapp.vercel.app/"
  },
  {
    id: 3,
    title: "Mittal Sports - Sports Website",
    description: "A modern, responsive sports website designed to deliver an engaging browsing experience with a clean interface, structured content, and mobile-friendly layouts. Built with Next.js to provide a fast and scalable web experience.",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    imageUrl: "/assets/mittal-sports.png",
    githubUrl: "https://github.com/manish77633",
    liveUrl: "https://mittal-sports.vercel.app/"
  },
  {
    id: 4,
    title: "Uplook Unisex Salon - Salon Website",
    description: "A modern website for a unisex salon, designed to showcase salon services through an elegant interface and a responsive layout. Focused on presenting the salon's brand, improving service discovery, and providing visitors with a smooth browsing experience.",
    technologies: ["Next.js", "React", "JavaScript", "Tailwind CSS"],
    imageUrl: "/assets/uplooks.png",
    githubUrl: "https://github.com/manish77633",
    liveUrl: "https://uplooksunisexsalon.vercel.app/"
  },
  {
    id: 5,
    title: "ChatPlug - AI Chatbot Platform",
    description: "A full-stack SaaS platform to create, train, and embed AI-powered chatbots on any website. Features PDF/URL knowledge base training, RAG-based responses, real-time streaming chat, analytics dashboard, and an embeddable widget script. Built with React, Node.js, MongoDB, and OpenAI.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "OpenAI", "Pinecone", "RAG", "Tailwind CSS", "Zustand", "Razorpay"],
    imageUrl: "/assets/chatplug.png",
    githubUrl: "https://github.com/manish77633/chatplug-V1",
    liveUrl: "https://chatplug-v1.vercel.app"
  },

  {
    id: 6,
    title: "Aurelia Luxe - Full-Stack E-commerce",
    description: "A dynamic MERN stack e-commerce platform featuring advanced multi-level category filtering and an interactive multi-angle product image gallery. Designed with scalable MongoDB schemas for robust inventory management.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    imageUrl: "/assets/aurelia-home.png",
    githubUrl: "https://github.com/manish77633/aurelia",
    liveUrl: "https://aurelia-beryl.vercel.app"
  },
  {
    id: 7, // Ya jo bhi next ID ho
    title: "Velour - Premium E-commerce",
    description: "A high-end fashion e-commerce platform featuring a sleek UI, secure Razorpay payment integration, and Google OAuth. Includes a fully functional admin dashboard for product management, real-time cart updates with Redux Toolkit, and persistent user sessions.",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Redux Toolkit", "Tailwind CSS", "Razorpay"],
    imageUrl: "/assets/velour-home.png",
    githubUrl: "https://github.com/manish77633/Velour-", // Apna asli repo link check kar lena
    liveUrl: "https://velour-virid.vercel.app"
  },
  {
    id: 8,
    title: "Mockify AI",
    description: "A production-grade SaaS platform for generating deterministic mock API endpoints. Features sub-12ms latency using smart edge-caching and context-aware dataset generation with LLM integration. Includes a premium dashboard with custom schema builders and real-time monitoring.",
    technologies: ["React", "Node.js", "MongoDB", "Gemini/Llama API", "Framer Motion", "Tailwind CSS"],
    imageUrl: "./assets/mokify.png",
    githubUrl: "https://github.com/manish77633/mockify-ai",
    liveUrl: "https://mockify-ai-f2ol.vercel.app/"
  },
  {
    id: 9,
    title: "Nexvia",
    description: "A modern animated landing page built to explore motion design and interactive UI effects. Focused on smooth page transitions, scroll-based animations, and engaging visual interactions.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
      "Lucide React",
      "React Intersection Observer"
    ],
    imageUrl: "./assets/image.png",
    githubUrl: "https://github.com/manish77633/nexvia",
    liveUrl: "https://nexvia-chi.vercel.app/"
  },
  {
    id: 10,
    title: "VKA Capital Bridge",
    description: "A premium business landing page for VKA Capital Bridge, showcasing infrastructure, finance, surety bond, and Dubai real estate advisory services. Designed with a clean, professional interface and responsive layout.",
    technologies: [
      "React",
      "Vite",
      "CSS",
      "JavaScript"
    ],
    imageUrl: "./assets/vka.png",
    githubUrl: "https://github.com/manish77633/onepage-",
    liveUrl: "https://onepage-ashen-pi.vercel.app/"
  },
  {
    id: 11,
    title: "Wanderlust",
    description: "A full-stack Airbnb-inspired accommodation booking platform. Features include listing creation, map integration, user authentication, and booking management. Built with the MERN stack.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com/manish77633/wanderlust",
    liveUrl: "https://wanderlust-w38u.onrender.com/listings"
  },


  {
    id: 12,
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