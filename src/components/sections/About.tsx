
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
            <p className="text-lg">
              I'm a Computer Science student passionate about full-stack web development, focused on creating responsive and user-friendly websites.
            </p>
            <p className="text-lg">
              I build modern web applications using HTML, CSS, JavaScript, and React, constantly exploring new technologies to enhance my development skills.
            </p>
            <p className="text-lg">
              My strengths include problem-solving, quick adaptation to new technologies, and a keen eye for design details that improve user experience.
            </p>
            <p className="text-lg">
              I focus on writing clean, readable code and am committed to continuous learning and improvement. I believe good code should be both functional and maintainable.
            </p>
            <p className="text-lg">
              My goal is to create projects that are not only technically sound but also genuinely useful and accessible to users. I'm excited about contributing to solutions that make a positive impact.
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
                    <span>Computer Science</span>
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold w-24">Interests:</span>
                    <span>Web Development, Problem Solving, Learning New Technologies</span>
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
