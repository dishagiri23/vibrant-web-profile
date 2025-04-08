
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Database, Wrench } from "lucide-react";

type Skill = {
  name: string;
  icon?: JSX.Element;
};

const frontendSkills: Skill[] = [
  { name: "HTML5" },
  { name: "CSS3" },
  { name: "JavaScript" },
  { name: "React.js" },
  { name: "Tailwind CSS" },
  { name: "Bootstrap" },
  { name: "Responsive Design" },
];

const backendSkills: Skill[] = [
  { name: "Node.js" },
  { name: "Express.js" },
  { name: "RESTful APIs" },
  { name: "Authentication" },
];

const databaseSkills: Skill[] = [
  { name: "MongoDB" },
  { name: "MySQL" },
  { name: "Firebase" },
];

const toolsSkills: Skill[] = [
  { name: "Git & GitHub" },
  { name: "VS Code" },
  { name: "npm" },
  { name: "Postman" },
  { name: "Figma" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Skills" 
          subtitle="Technologies I work with"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-md">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {frontendSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary rounded-lg text-secondary-foreground text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-md">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {backendSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary rounded-lg text-secondary-foreground text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-md">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Database</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {databaseSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary rounded-lg text-secondary-foreground text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-md">
                <Wrench className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Tools</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {toolsSkills.map((skill, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-secondary rounded-lg text-secondary-foreground text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
