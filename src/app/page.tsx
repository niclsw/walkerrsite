import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Writing from "@/components/sections/Writing";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="font-sans">
      <Hero />
      <About />
      <Projects />
      <Writing />
      <Contact />
    </div>
  );
}
