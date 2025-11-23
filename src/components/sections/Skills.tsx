
import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Server, Database, Wrench } from "lucide-react";

type Skill = {
  name: string;
  icon: string;
};

const frontendSkills: Skill[] = [
  { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
  { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
  { name: "SCSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
];

const backendSkills: Skill[] = [
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  { name: "RESTful APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "Authentication", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" },
];

const databaseSkills: Skill[] = [
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

const toolsSkills: Skill[] = [
  { name: "Git & GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Postman", icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 section-padding">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <SectionHeading 
          title="Skills" 
          subtitle="Technologies I work with"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          <Card className="card-hover">
            <CardHeader className="flex flex-row items-center gap-4">
              <div className="bg-primary/10 p-2 rounded-md">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4 justify-center">
                {frontendSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-10 h-10"
                      title={skill.name}
                    />
                    <span className="text-xs text-center">{skill.name}</span>
                  </div>
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
              <div className="flex flex-wrap gap-4 justify-center">
                {backendSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className={`w-10 h-10 ${skill.name === 'Express.js' ? 'dark:invert dark:brightness-90 brightness-75' : ''}`}
                      title={skill.name}
                    />
                    <span className="text-xs text-center">{skill.name}</span>
                  </div>
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
              <div className="flex flex-wrap gap-4 justify-center">
                {databaseSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-10 h-10"
                      title={skill.name}
                    />
                    <span className="text-xs text-center">{skill.name}</span>
                  </div>
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
              <div className="flex flex-wrap gap-4 justify-center">
                {toolsSkills.map((skill, index) => (
                  <div key={index} className="flex flex-col items-center gap-2">
                    <img 
                      src={skill.icon} 
                      alt={skill.name}
                      className="w-10 h-10"
                      title={skill.name}
                    />
                    <span className="text-xs text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
