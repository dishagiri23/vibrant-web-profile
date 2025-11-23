import { SectionHeading } from "@/components/SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

type ExperienceItem = {
  title: string;
  company: string;
  type: string;
  period: string;
  description?: string;
};

const experienceData: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "ApexPlanet Software Pvt Ltd",
    type: "Internship",
    period: "October 2025 - November 2025",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/50 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Experience" 
          subtitle="My professional journey"
        />
        
        <div className="max-w-3xl mx-auto md:mr-auto md:ml-0">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            <div className="space-y-8">
              {experienceData.map((item, index) => (
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
                            <Briefcase className="h-5 w-5 text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-lg break-words">{item.title}</CardTitle>
                            <p className="text-sm text-muted-foreground mt-1 break-words">{item.company}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground flex-shrink-0 w-full sm:w-auto">
                          <Calendar className="h-4 w-4" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {item.type}
                      </span>
                      {item.description && (
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      )}
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