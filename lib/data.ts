// lib/data.ts

export const skills = [
  // Languages — 5
  {
    name: "Java",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
    category: "Languages",
  },
  {
    name: "Python",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
    category: "Languages",
  },
  {
    name: "JavaScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    category: "Languages",
  },
  {
    name: "TypeScript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
    category: "Languages",
  },
  {
    name: "SQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
    category: "Languages",
  },

  // Frontend — 5
  {
    name: "Next.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
    category: "Frontend",
  },
  {
    name: "React",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
    category: "Frontend",
  },
  {
    name: "ShadCN UI",
    image: "https://ui.shadcn.com/favicon.ico",
    category: "Frontend",
  },
  {
    name: "Redux Toolkit",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg",
    category: "Frontend",
  },

  // Backend & Database — 5
  {
    name: "Node.js",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
    category: "Backend",
  },
  {
    name: "Express.js",
    image:
      "https://logowik.com/content/uploads/images/express-js1720895488.logowik.com.webp",
    category: "Backend",
  },
  {
    name: "FastAPI",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
    category: "Backend",
  },
  {
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
    category: "Backend",
  },
  {
    name: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
    category: "Backend",
  },

  // AI & Data — 7
  {
    name: "LangChain",
    image: "https://cdn.simpleicons.org/langchain",
    category: "AI & Data",
  },
  {
    name: "LangGraph",
    image: "https://cdn.simpleicons.org/langgraph",
    category: "AI & Data",
  },
  {
    name: "RAG",
    image: "https://cdn-icons-png.flaticon.com/512/8475/8475078.png",
    category: "AI & Data",
  },
  {
    name: "Sentence Transformers",
    image: "https://cdn.simpleicons.org/huggingface",
    category: "AI & Data",
  },
  {
    name: "Supabase",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/supabase/supabase-original.svg",
    category: "AI & Data",
  },
  {
    name: "pgvector",
    image: "https://cdn.simpleicons.org/postgresql",
    category: "AI & Data",
  },
  {
    name: "Groq",
    image: "https://www.ciscoinvestments.com/hubfs/Portfolio/groq-logo.png",
    category: "AI & Data",
  },

  // Tools & Platforms — 2
  {
    name: "Git",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
    category: "Tools",
  },
  {
    name: "Vercel",
    image:
      "https://cdn.brandfetch.io/vercel.com/fallback/lettermark/theme/dark/h/256/w/256/icon?c=1bfwsmEH20zzEfSNTed",
    category: "Tools",
  },
];

export const projects = [
  {
    id: 1,
    title: "JobPilot.AI",
    description:
      "Agentic job-discovery platform that parses conversational intent to rank live postings across job sources (Adzuna, Greenhouse) by semantic relevance and resume fit, powered by a deterministic pre-filtering layer and fault-tolerant LLM batch pipeline, with a companion Chrome extension for real-time resume-fit analysis.",
    image: "https://img.youtube.com/vi/aR-OQv9bZLM/hqdefault.jpg",
    video: "https://www.youtube.com/embed/aR-OQv9bZLM",
    github: "https://github.com/Aditya06pandey1368/JobPilot.AI",
    liveLink: "https://jobpilotai-mu.vercel.app/",
  },

  {
    id: 2,
    title: "EmbedAI",
    description:
      "B2B SaaS platform that enables businesses to deploy custom AI chatbots trained on their own documents and embed them on any website via a single script tag, powered by a production-grade RAG pipeline with HNSW-indexed vector search and multi-tenant data isolation.",
    image: "https://img.youtube.com/vi/j3iijUtAZ2c/hqdefault.jpg",
    video: "https://www.youtube.com/embed/j3iijUtAZ2c",
    github: "https://github.com/Aditya06pandey1368/EmbedAI",
    liveLink: "https://embed-ai-nu.vercel.app/",
  },

  {
    id: 3,
    title: "AI-Grievance Intelligence System",
    description:
      "An enterprise-grade hybrid microservices platform utilizing FastAPI and Node.js. It features a Semantic Deduplication Layer using vector embeddings to autonomously block spam and route civic complaints with a Human-in-the-Loop ML pipeline.",
    image: "https://img.youtube.com/vi/Fa_mEbzCFNQ/hqdefault.jpg",
    video: "https://www.youtube.com/embed/Fa_mEbzCFNQ",
    github: "https://github.com/Aditya06pandey1368/AI-Grievance-System",
    liveLink: null,
  },

  {
    id: 4,
    title: "ScholarHub - LMS Platform",
    description:
      "A production-ready Learning Management System featuring Stripe payment infrastructure, Cloudinary video streaming, and an AI tutor powered by the Gemini API. Optimized with MongoDB Compound Indexing to reduce query times by 40%.",
    image: "https://img.youtube.com/vi/s6PmXxvdVZ0/hqdefault.jpg",
    video: "https://www.youtube.com/embed/s6PmXxvdVZ0",
    github: "https://github.com/Aditya06pandey1368/LMS-Project",
    liveLink: "https://lms-project-frontend-bdbm.onrender.com/",
  },
];