import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar } from "lucide-react";

type EducationItem = {
  institution: string;
  degree: string;
  period: string;
  type: string;
};

const educationData: EducationItem[] = [
  {
    institution: "Kingston School of Management and Science",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "2023 - Present",
    type: "College",
  },
  {
    institution: "Taki S.L Girls' High School",
    degree: "Higher Secondary School",
    period: "2021 - 2023",
    type: "School",
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Education" 
          subtitle="My academic journey"
        />
        
        <div className="max-w-3xl mx-auto md:mr-auto md:ml-0">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-lg"></div>
                  
                  <Card className="card-hover">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row items-start justify-between gap-3">
                        <div className="flex items-start gap-3 w-full">
                          <div className="bg-primary/10 p-2 rounded-md flex-shrink-0">
                            <GraduationCap className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg break-words">{item.degree}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1 break-words">{item.institution}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground flex-shrink-0 w-full sm:w-auto">
                          <Calendar className="h-4 w-4" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {item.type}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}