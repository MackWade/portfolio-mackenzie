import Hero from "@/components/Hero";
import Skills from "@/components/Services";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopNav />
      <div id="top" />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
