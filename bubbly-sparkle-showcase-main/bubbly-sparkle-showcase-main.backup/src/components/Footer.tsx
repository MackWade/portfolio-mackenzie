import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-gradient mb-2">Mackenzie Wade</h3>
            <p className="text-muted-foreground">Software Engineer | Cybersecurity Enthusiast | Problem Solver</p>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <span>Built with</span>
            <Heart className="w-4 h-4 fill-primary text-primary animate-pulse" />
            <span>and lots of coffee</span>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Mackenzie Wade. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
