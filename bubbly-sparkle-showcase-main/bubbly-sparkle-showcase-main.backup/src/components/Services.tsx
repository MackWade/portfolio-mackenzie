import { Code2, Shield, Cloud, Cpu } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Proficient in React, Angular, Vue, Node.js, Django, and modern web technologies for building responsive applications.",
    color: "text-primary",
    gradient: "gradient-hero",
    tech: "React • Angular • Vue • Node.js • Django"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Experience in security research, vulnerability analysis, threat detection, and network traffic analysis.",
    color: "text-secondary",
    gradient: "gradient-card",
    tech: "Network Security • Threat Detection • Malware Analysis"
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "Hands-on experience with AWS, Azure, Docker, Kubernetes, and infrastructure automation using Terraform.",
    color: "text-accent",
    gradient: "gradient-accent",
    tech: "AWS • Azure • Docker • Kubernetes • Terraform"
  },
  {
    icon: Cpu,
    title: "Languages & Tools",
    description: "Strong foundation in Python, Java, C++, TypeScript, and experience with ML frameworks like PyTorch.",
    color: "text-primary",
    gradient: "gradient-hero",
    tech: "Python • Java • C++ • TypeScript • Go"
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative bubbles */}
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-float animation-delay-2000" />
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-accent/10 rounded-full blur-xl animate-float animation-delay-1000" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Technical <span className="text-gradient">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Diverse skill set spanning software development, security, and cloud technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-8 hover:scale-105 transition-bounce cursor-pointer shadow-card hover:shadow-soft group"
            >
              <div className={`w-14 h-14 rounded-2xl ${skill.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth`}>
                <skill.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{skill.title}</h3>
              <p className="text-muted-foreground mb-4">{skill.description}</p>
              <p className="text-sm text-primary/70 font-medium">{skill.tech}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
