import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import blogProjectImg from "@/assets/blog-project.jpg";
import weatherProjectImg from "@/assets/weather-project.jpg";
import ecommerceProjectImg from "@/assets/ecommerce-project.jpg";
import taskManagerProjectImg from "@/assets/task-manager-project.jpg";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
};

const projects: Project[] = [
  {
    title: "Personal Blog",
    description: "A responsive blog website with a clean design",
    techStack: ["React", "Tailwind CSS", "Node.js"],
    image: blogProjectImg,
    liveUrl: "#",
    githubUrl: "https://github.com/dishagiri23/tech-tales-by-disha",
  },
  {
    title: "Weather App",
    description: "Real-time weather data visualization application",
    techStack: ["JavaScript", "HTML", "CSS", "API Integration"],
    image: weatherProjectImg,
    liveUrl: "#",
    githubUrl: "https://github.com/dishagiri23",
  },
  {
    title: "E-commerce Store",
    description: "Fully functional e-commerce platform with product listings",
    techStack: ["React", "Express", "MongoDB", "Node.js"],
    image: ecommerceProjectImg,
    liveUrl: "https://personalshopease.netlify.app/",
    githubUrl: "https://github.com/dishagiri23/Personal-Ecommerce-Website",
  },
  {
    title: "Task Manager",
    description: "Productivity app to manage daily tasks and schedules",
    techStack: ["React", "Firebase", "Material UI"],
    image: taskManagerProjectImg,
    liveUrl: "#",
    githubUrl: "https://github.com/dishagiri23",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50 section-padding">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <SectionHeading 
          title="Projects" 
          subtitle="Check out some of my recent work"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden card-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="aspect-video overflow-hidden bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-300" 
                />
              </div>
              <CardHeader className="p-4">
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between p-4">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <Github size={16} className="mr-2" />
                    Repo
                  </a>
                </Button>
                <Button size="sm" asChild>
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
