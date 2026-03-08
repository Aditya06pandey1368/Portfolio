// lib/data.ts

export const skills = [
  // Core Languages
  { name: "Java", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "TypeScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  
  // Frontend & State Management
  { name: "Next.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Redux Toolkit", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
  { name: "Tailwind CSS", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  
  // Backend & AI
  { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", image: "https://www.peanutsquare.com/wp-content/uploads/2024/04/Express.png" },
  { name: "FastAPI", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg" },
  { name: "Gemini API", image: "https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" },
  
  // Databases & Tools
  { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
  { name: "PostgreSQL", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
  { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
  { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
];

export const projects = [
  {
    id: 1,
    title: "AI-Grievance Intelligence System",
    description: "An enterprise-grade hybrid microservices platform utilizing FastAPI and Node.js. It features a Semantic Deduplication Layer using vector embeddings to autonomously block spam and route civic complaints with a Human-in-the-Loop ML pipeline.",
    image: "/images/ai-grievance.png", // Keep as a fallback just in case YouTube fails
    video: "https://www.youtube.com/embed/Fa_mEbzCFNQ", 
    github: "https://github.com/Aditya06pandey1368/AI-Grievance-System",
    liveLink: null, 
  },
  {
    id: 2,
    title: "ScholarHub - LMS Platform",
    description: "A production-ready Learning Management System featuring Stripe payment infrastructure, Cloudinary video streaming, and an AI tutor powered by the Gemini API. Optimized with MongoDB Compound Indexing to reduce query times by 40%.",
    image: "/images/scholarhub.png", // Keep as a fallback
    video: "https://www.youtube.com/embed/s6PmXxvdVZ0", 
    github: "https://github.com/Aditya06pandey1368/LMS-Project",
    liveLink: "https://lms-project-frontend-bdbm.onrender.com/",
  }
];