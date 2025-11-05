import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "SousChef",
    description: "Food processing application utilizing computer vision to turn identifiable ingredients into recipes. Configured Terraform to automate AWS infrastructure deployment.",
    tech: ["C#", "JavaScript", "React", "AWS", "Terraform", "DynamoDB"],
    type: "Collaborative Project",
    gradient: "gradient-hero",
  },
  {
    title: "DataDynamic",
    description: "Interactive data visualization tool automating descriptive analytics. Implemented dimensionality reduction algorithms and end-to-end UI tests using Cypress.",
    tech: ["C++", "Python", "Flask", "Vue", "Docker", "Cypress"],
    type: "Personal Project",
    gradient: "gradient-card",
  },
  {
    title: "Security Research",
    description: "Researched trending security vulnerabilities, engineered automation tools leveraging ML techniques, and authored technical reports documenting security findings.",
    tech: ["Python", "ML/Data Science", "Security Analysis"],
    type: "Research Project",
    gradient: "gradient-accent",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      {/* Decorative bubbles */}
      <div className="absolute top-32 left-16 w-28 h-28 bg-secondary/10 rounded-full blur-xl animate-float animation-delay-1000" />
      <div className="absolute bottom-32 right-16 w-36 h-36 bg-primary/10 rounded-full blur-2xl animate-float animation-delay-3000" />
      <div className="absolute top-2/3 left-1/3 w-20 h-20 bg-accent/10 rounded-full blur-lg animate-float" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 hover:scale-105 transition-bounce cursor-pointer shadow-card hover:shadow-soft group"
            >
              <div className={`w-12 h-12 rounded-xl ${project.gradient} mb-6 group-hover:scale-110 transition-smooth`} />
              
              <div className="mb-4">
                <span className="text-sm text-muted-foreground">{project.type}</span>
                <h3 className="text-2xl font-bold mt-1">{project.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="rounded-full">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
