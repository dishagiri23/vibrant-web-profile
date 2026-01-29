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
        
        <div className="max-w-3xl mx-auto px-2 sm:px-0">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-primary/20"></div>
            
            <div className="space-y-8">
              {educationData.map((item, index) => (
                <div 
                  key={index} 
                  className="relative pl-10 sm:pl-20 animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 sm:left-6 top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-primary border-4 border-background shadow-lg"></div>
                  
                  <Card className="card-hover">
                    <CardHeader className="p-4 sm:p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/10 p-2 rounded-md shrink-0">
                            <GraduationCap className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
                          </div>
                          <div className="min-w-0">
                            <CardTitle className="text-base sm:text-lg leading-tight">{item.degree}</CardTitle>
                            <p className="text-xs sm:text-sm text-muted-foreground mt-1 break-words">{item.institution}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground ml-11 sm:ml-0">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4" />
                          <span>{item.period}</span>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 pt-0 sm:p-6 sm:pt-0">
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