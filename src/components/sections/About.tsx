
import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-20 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me better"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <p className="text-lg leading-relaxed">
              I'm a BCA student passionate about web development, focused on creating responsive and user-friendly websites that solve real problems.
            </p>
            <p className="text-lg leading-relaxed">
              My technical journey includes building applications with modern technologies like HTML, CSS, JavaScript, and React, constantly exploring new tools to enhance my development skills.
            </p>
            <p className="text-lg leading-relaxed">
              I excel at quickly adapting to new technologies and have a keen eye for design details that improve user experience. My goal is to create projects that are both technically sound and genuinely accessible to users.
            </p>
          </div>
          
          <div className="relative flex justify-center animate-fade-in">
            <div className="relative max-w-md">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-400 rounded-lg blur opacity-25"></div>
              <div className="relative bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4">Personal Details</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="font-semibold w-24">Name:</span>
                    <span>Disha Giri</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold w-24">Email:</span>
                    <span className="break-all">dishagiri09170@gmail.com</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold w-24">Location:</span>
                    <span>India</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold w-24">Study:</span>
                    <span>BCA (Bachelor of Computer Applications)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold w-24">Interests:</span>
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
