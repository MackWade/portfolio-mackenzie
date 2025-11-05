import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MessageSquare, Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative bubbles */}
      <div className="absolute top-16 right-20 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 left-16 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-float animation-delay-2000" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-accent/10 rounded-full blur-lg animate-float animation-delay-1000" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in collaboration or have a project in mind? I'd love to hear from you!
          </p>
        </div>

        <Card className="p-8 md:p-12 shadow-soft">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium">Name</label>
                <Input
                  placeholder="Your name"
                  className="h-12 rounded-2xl border-2"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Email</label>
                <Input
                  type="email"
                  placeholder="your@email.com"
                  className="h-12 rounded-2xl border-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Subject</label>
              <Input
                placeholder="Project collaboration, job opportunity, etc."
                className="h-12 rounded-2xl border-2"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Message</label>
              <Textarea
                placeholder="Tell me about your project or opportunity..."
                className="min-h-32 rounded-2xl border-2 resize-none"
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full md:w-auto px-8 py-6 rounded-full shadow-soft hover:shadow-glow transition-smooth text-lg"
            >
              Send Message
              <Send className="ml-2 w-5 h-5" />
            </Button>
          </form>

          <div className="flex flex-col md:flex-row gap-6 mt-12 pt-12 border-t">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Email</p>
                <a href="mailto:Mackenzie.wade8@gmail.com" className="font-semibold hover:text-primary transition-smooth">
                  Mackenzie.wade8@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-card flex items-center justify-center">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">LinkedIn</p>
                <a 
                  href="https://linkedin.com/in/mackenziew8" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-semibold hover:text-primary transition-smooth"
                >
                  linkedin.com/in/mackenziew8
                </a>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
