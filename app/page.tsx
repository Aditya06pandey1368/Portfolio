import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* A temporary spacer so we can see the navbar working */}
      <div className="pt-32 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold">Portfolio Framework Online.</h1>
      </div>
    </main>
  );
}