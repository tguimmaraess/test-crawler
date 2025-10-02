import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Community from "@/components/Community";
import Footer from "@/components/Footer";

function Home() {
  return (
    <div className="min-h-screen w-full bg-white text-gray-900 scroll-smooth">
      <Header />
      <main className="w-full">
        <Hero />
        <Features />
        <Community />
      </main>
      <Footer />
    </div>
  );
}

export default Home;

