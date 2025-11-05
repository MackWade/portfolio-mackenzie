import { Card } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Cybersecurity Tech Fellow",
    company: "CodePath",
    location: "San Francisco, CA",
    period: "January 2024 – Present",
    points: [
      "Mentored 300+ students in developing intermediate cybersecurity principles and technical problem-solving skills",
      "Led students through hands-on cybersecurity labs involving network traffic analysis and threat detection",
      "Guided students through analysis of security incident case studies involving malware and phishing",
    ],
    gradient: "gradient-hero",
  },
  {
    title: "Software Security Researcher",
    company: "Productivity Laboratory",
    location: "Rochester, NY",
    period: "March 2023 – December 2023",
    points: [
      "Researched trending security vulnerabilities, identifying root causes and appropriate mitigations",
      "Engineered automation tools leveraging ML/data science techniques to analyze data sets",
      "Authored technical reports documenting discoveries and identifiable security vulnerabilities",
    ],
    gradient: "gradient-card",
  },
  {
    title: "Software Engineering Intern",
    company: "EagleHawk",
    location: "Buffalo, NY",
    period: "January 2023 – March 2023",
    points: [
      "Collaborated with engineers to implement new user accessibility features, improving application usability",
      "Processed and analyzed geospatial data to generate detailed thermal imaging maps for water leakage detection",
      "Enhanced code quality by fixing critical bugs and implementing test suites with 95% code coverage",
    ],
    gradient: "gradient-accent",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden">
      {/* Decorative bubbles */}
      <div className="absolute top-24 left-12 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float animation-delay-1000" />
      <div className="absolute bottom-32 right-20 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-float animation-delay-3000" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building expertise through hands-on roles in software engineering and cybersecurity
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 hover:scale-[1.02] transition-bounce shadow-card hover:shadow-soft group"
            >
              <div className="flex items-start gap-6">
                <div className={`w-12 h-12 rounded-xl ${exp.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth`}>
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-2xl font-bold">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  
                  <p className="text-lg text-primary mb-4">
                    {exp.company} • {exp.location}
                  </p>
                  
                  <ul className="space-y-2">
                    {exp.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Education Section */}
        <Card className="p-8 mt-12 shadow-card">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center flex-shrink-0">
              <GraduationCap className="w-6 h-6 text-white" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-6">Education</h3>
              
              <div className="space-y-4">
                <div>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-xl font-semibold">Rochester Institute of Technology</h4>
                    <span className="text-sm text-muted-foreground">August 2025</span>
                  </div>
                  <p className="text-primary">Bachelor of Science (BS) in Software Engineering</p>
                </div>
                
                <div className="pt-4 border-t">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <h4 className="text-xl font-semibold">Tyler Junior College</h4>
                    <span className="text-sm text-muted-foreground">May 2019</span>
                  </div>
                  <p className="text-primary">Associate of Science (AS) in General Studies (Dual Enrollment)</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Experience;
