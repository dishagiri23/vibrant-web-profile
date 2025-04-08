
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Download } from "lucide-react";
import { toast } from "sonner";

export function Hero() {
  const handleHireMe = () => {
    window.location.href = "mailto:dishagiri09170@gmail.com?subject=Job Opportunity";
    toast.success("Opening email client");
  };

  const handleDownloadResume = () => {
    // In a real app, link to an actual resume file
    const dummyLink = document.createElement('a');
    dummyLink.href = "#";
    dummyLink.setAttribute('download', 'Disha_Giri_Resume.pdf');
    dummyLink.click();
    toast.success("Resume download started");
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Hi, I'm <span className="text-primary">Disha Giri</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              A passionate Web Developer building modern web applications
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <Button onClick={handleHireMe} size="lg">
                Hire Me
              </Button>
              <Button variant="outline" size="lg" onClick={handleDownloadResume}>
                <Download size={18} className="mr-2" /> Resume
              </Button>
            </div>
            <div className="flex space-x-4">
              <a href="https://github.com/dishagiri23" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://twitter.com/Dev_DishaGiri" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Twitter size={24} />
              </a>
              <a href="https://www.linkedin.com/in/disha-giri-414a72314/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:dishagiri09170@gmail.com" className="text-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-300 opacity-20 blur-3xl"></div>
              <div className="relative bg-card border-2 border-primary/20 rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                <div className="text-6xl md:text-8xl font-bold text-primary">DG</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
