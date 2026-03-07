import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
}