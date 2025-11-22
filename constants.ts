import { Project, Experience } from './types';

export const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
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
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Wanderlust",
    description: "A full-stack Airbnb-inspired accommodation booking platform. Features include listing creation, map integration, user authentication, and booking management. Built with the MERN stack.",
    technologies: ["MongoDB", "Express", "React", "Node.js"],
    imageUrl: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com/manish77633/wanderlust",
    liveUrl: "https://wanderlust-k2io.onrender.com/listings"
  },
  {
    id: 2,
    title: "Arihant Marble House",
    description: "A professional business website designed for a marble and granite supplier. Developed using WordPress with custom HTML/CSS/JS for specific interactive elements.",
    technologies: ["WordPress", "HTML", "CSS", "JavaScript"],
    imageUrl: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1000&auto=format&fit=crop",
    githubUrl: "https://github.com/manish77633",
    liveUrl: "https://arihantmarblehouse.com/"
  },
  {
    id: 3,
    title: "ATM Management System",
    description: "A robust console-based banking system...",
    technologies: ["C++", "OOP", "File Handling", "Auth"],
    imageUrl: "https://googleusercontent.com/image_collection/image_retrieval/6530429226858656082",
    githubUrl: "https://github.com/manish77633",
    liveUrl: ""
  }
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