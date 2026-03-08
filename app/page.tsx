import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import CodingProfiles from "@/components/CodingProfiles";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <CodingProfiles />
      <Footer />
    </main>
  );
}