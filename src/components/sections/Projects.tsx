
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
  hoverImage?: string;
};

const projects: Project[] = [
  {
    title: "Personal Blog",
    description: "A responsive blog website with a clean design",
    techStack: ["React", "Tailwind CSS", "Node.js"],
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    liveUrl: "#",
    githubUrl: "https://github.com/dishagiri23/tech-tales-by-disha",
  },
  {
    title: "Weather App",
    description: "Real-time weather data visualization application",
    techStack: ["JavaScript", "HTML", "CSS", "API Integration"],
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    liveUrl: "#",
    githubUrl: "https://github.com/dishagiri23",
  },
  {
    title: "E-commerce Store",
    description: "Fully functional e-commerce platform with product listings",
    techStack: ["React", "Express", "MongoDB", "Node.js"],
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    liveUrl: "https://personalshopease.netlify.app/",
    githubUrl: "https://github.com/dishagiri23/Personal-Ecommerce-Website",
    hoverImage: "/lovable-uploads/46033ddd-1fbe-41be-96f7-c8e342c7b0f0.png",
  },
  {
    title: "Task Manager",
    description: "Productivity app to manage daily tasks and schedules",
    techStack: ["React", "Firebase", "Material UI"],
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    liveUrl: "#",
    githubUrl: "https://github.com/dishagiri23",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Projects" 
          subtitle="Check out some of my recent work"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const ProjectCard = (
              <Card key={index} className="overflow-hidden card-hover max-w-sm mx-auto">
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
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Repo
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            );

            // If project has hover image, wrap it in HoverCard
            if (project.hoverImage) {
              return (
                <HoverCard key={index}>
                  <HoverCardTrigger asChild>
                    {ProjectCard}
                  </HoverCardTrigger>
                  <HoverCardContent className="w-80">
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold">{project.title} Preview</h4>
                      <img 
                        src={project.hoverImage} 
                        alt={`${project.title} screenshot`}
                        className="w-full rounded-md border"
                      />
                    </div>
                  </HoverCardContent>
                </HoverCard>
              );
            }

            return ProjectCard;
          })}
        </div>
      </div>
    </section>
  );
}
