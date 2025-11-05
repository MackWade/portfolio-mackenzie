import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-primary/15 rounded-full blur-2xl animate-blob animation-delay-1000" />
        <div className="absolute bottom-40 right-10 w-56 h-56 bg-secondary/15 rounded-full blur-2xl animate-blob animation-delay-3000" />
      </div>

      {/* Floating bubbles */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-10 left-20 w-12 h-12 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-32 right-32 w-8 h-8 bg-secondary/40 rounded-full animate-float animation-delay-1000" />
        <div className="absolute top-64 left-1/4 w-16 h-16 bg-accent/25 rounded-full animate-float animation-delay-2000" />
        <div className="absolute bottom-32 right-1/3 w-10 h-10 bg-primary/35 rounded-full animate-float animation-delay-3000" />
        <div className="absolute bottom-48 left-16 w-14 h-14 bg-secondary/30 rounded-full animate-float animation-delay-4000" />
        <div className="absolute top-48 right-16 w-6 h-6 bg-accent/40 rounded-full animate-float animation-delay-500" />
        <div className="absolute bottom-24 left-1/2 w-20 h-20 bg-primary/20 rounded-full animate-float animation-delay-1500" />
        <div className="absolute top-96 left-40 w-10 h-10 bg-secondary/35 rounded-full animate-float animation-delay-2500" />
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-8 animate-fade-in">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium text-primary">Software Engineer & Cybersecurity Enthusiast</span>
        </div>

        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in">
          <span className="text-foreground">Hi, I'm </span>
          <span className="text-gradient">Mackenzie Wade</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto animate-fade-in">
          Building secure, scalable software solutions with expertise in full-stack development, 
          cloud infrastructure, and cybersecurity. Currently pursuing BS in Software Engineering at RIT.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-soft hover:shadow-glow transition-all hover:scale-105">
            View My Work
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-6 rounded-full border-2 hover:bg-primary/5 transition-smooth"
            onClick={() => window.open('https://linkedin.com/in/mackenziew8', '_blank')}
          >
            Connect on LinkedIn
          </Button>
        </div>

        {/* More floating elements */}
        <div className="absolute top-1/4 left-10 animate-float">
          <div className="w-16 h-16 rounded-full gradient-card opacity-60" />
        </div>
        <div className="absolute bottom-1/3 right-16 animate-float animation-delay-2000">
          <div className="w-20 h-20 rounded-full gradient-accent opacity-60" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float animation-delay-1000">
          <div className="w-12 h-12 rounded-full gradient-hero opacity-50" />
        </div>
        <div className="absolute bottom-1/4 left-1/4 animate-float animation-delay-3000">
          <div className="w-14 h-14 rounded-full gradient-card opacity-50" />
        </div>
        <div className="absolute top-2/3 right-10 animate-float animation-delay-4000">
          <div className="w-10 h-10 rounded-full gradient-accent opacity-60" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
