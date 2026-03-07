// lib/data.ts

export const skills = [
  // You will drop the actual SVG images into your public/icons folder later
  { name: "React", image: "/icons/react.svg" },
  { name: "Next.js", image: "/icons/nextjs.svg" },
  { name: "Node.js", image: "/icons/nodejs.svg" },
  { name: "Express.js", image: "/icons/express.svg" },
  { name: "MongoDB", image: "/icons/mongodb.svg" },
  { name: "Tailwind CSS", image: "/icons/tailwind.svg" },
  { name: "TypeScript", image: "/icons/typescript.svg" },
  { name: "Java", image: "/icons/java.svg" },
];

export const projects = [
  {
    id: 1,
    title: "PingWatch",
    description: "A full-stack MERN uptime monitor with secure JWT authentication, background cron jobs, and a real-time dashboard.",
    image: "/images/pingwatch.png", 
    video: null, // Null means the video player will completely hide itself
    github: "https://github.com/yourusername/pingwatch",
    liveLink: null, // Null means the Live Demo button will hide itself
  },
  {
    id: 2,
    title: "ScholarHub",
    description: "A production-ready Learning Management System (LMS) featuring secure payment integration and AI-generated study materials.",
    image: "/images/scholarhub.png",
    video: "https://www.youtube.com/embed/your-video-id", // Example of a video link
    github: "https://github.com/yourusername/scholarhub",
    liveLink: "https://scholarhub-demo.com",
  }
];