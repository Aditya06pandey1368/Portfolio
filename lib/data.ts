// lib/data.ts

export const skills = [
  // Languages
  {
    name: "Java",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    category: "Languages",
  },
  {
    name: "Python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    category: "Languages",
  },
  {
    name: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    category: "Languages",
  },
  {
    name: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    category: "Languages",
  },
  {
    name: "SQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    category: "Languages",
  },

  // Frontend
  {
    name: "Next.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
  },
  {
    name: "React",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    category: "Frontend",
  },
  {
    name: "ShadCN UI",
    image: "https://ui.shadcn.com/favicon.ico",
    category: "Frontend",
  },
  {
    name: "Redux",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    category: "Frontend",
  },

  // Backend & Database
  {
    name: "Node.js",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    category: "Backend",
  },
  {
    name: "Express.js",
    image: "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png",
    category: "Backend",
  },
  {
    name: "MongoDB",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    category: "Backend",
  },

  // AI & Data
  {
    name: "Pandas",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg",
    category: "AI & Data",
  },
  {
    name: "NumPy",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg",
    category: "AI & Data",
  },
  {
    name: "Scikit-learn",
    image: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
    category: "AI & Data",
  },
  {
    name: "HuggingFace",
    image: "https://huggingface.co/front/assets/huggingface_logo-noborder.svg",
    category: "AI & Data",
  },

  // Tools & Platforms
  {
    name: "Git",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    category: "Tools",
  },
  {
    name: "Vercel",
    image: "https://cdn.brandfetch.io/vercel.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed",
    category: "Tools",
  },
];

export const projects = [
  {
    id: 1,
    title: "EmbedAI",
    description: "B2B SaaS platform that enables businesses to deploy custom AI chatbots trained on their own documents and embed them on any website via a single script tag, powered by a production-grade RAG pipeline with HNSW-indexed vector search and multi-tenant data isolation.",
    image: "https://img.youtube.com/vi/j3iijUtAZ2c/maxresdefault.jpg",
    video: "https://www.youtube.com/embed/j3iijUtAZ2c", 
    github: "https://github.com/Aditya06pandey1368/EmbedAI", 
    liveLink: "https://embed-ai-nu.vercel.app/", 
  },
  {
    id: 2,
    title: "AI-Grievance Intelligence System",
    description: "An enterprise-grade hybrid microservices platform utilizing FastAPI and Node.js. It features a Semantic Deduplication Layer using vector embeddings to autonomously block spam and route civic complaints with a Human-in-the-Loop ML pipeline.",
    image: "https://img.youtube.com/vi/Fa_mEbzCFNQ/maxresdefault.jpg", // Keep as a fallback
    video: "https://www.youtube.com/embed/Fa_mEbzCFNQ", 
    github: "https://github.com/Aditya06pandey1368/AI-Grievance-System",
    liveLink: null, 
  },
  {
    id: 3,
    title: "ScholarHub - LMS Platform",
    description: "A production-ready Learning Management System featuring Stripe payment infrastructure, Cloudinary video streaming, and an AI tutor powered by the Gemini API. Optimized with MongoDB Compound Indexing to reduce query times by 40%.",
    image: "https://img.youtube.com/vi/s6PmXxvdVZ0/maxresdefault.jpg", // Keep as a fallback
    video: "https://www.youtube.com/embed/s6PmXxvdVZ0", 
    github: "https://github.com/Aditya06pandey1368/LMS-Project",
    liveLink: "https://lms-project-frontend-bdbm.onrender.com/",
  }
];