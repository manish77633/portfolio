export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  highlights: string[];
}

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  isTyping?: boolean;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'about',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  CONTACT = 'contact'
}