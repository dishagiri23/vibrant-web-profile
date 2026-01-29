import { SectionHeading } from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const ref = useScrollAnimation();
  
  return (
    <section id="about" className="py-20 section-padding" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me better"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 scroll-animate">
            <p className="text-lg leading-relaxed">
              I'm a skilled developer with expertise in Frontend, Backend, Fullstack, and MERN stack technologies. I also have a strong interest in AI, focusing on building scalable web applications and innovative solutions.
            </p>
          </div>
          
          <div className="relative flex justify-center scroll-animate">
            <div className="relative max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-400 rounded-lg blur opacity-25"></div>
              <div className="relative bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                <ul className="space-y-3">
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold sm:w-24 mb-1 sm:mb-0">Name:</span>
                    <span>Disha Giri</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold sm:w-24 mb-1 sm:mb-0">Email:</span>
                    <span className="break-all">disha.career@outlook.com</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold sm:w-24 mb-1 sm:mb-0">Location:</span>
                    <span>India</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold sm:w-24 mb-1 sm:mb-0">Study:</span>
                    <span>BCA (Bachelor of Computer Applications)</span>
                  </li>
                  <li className="flex flex-col sm:flex-row sm:items-start">
                    <span className="font-semibold sm:w-24 mb-1 sm:mb-0">Interests:</span>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Web Development</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">Problem Solving</span>
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs">New Technologies</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
