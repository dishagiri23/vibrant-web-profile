import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Download, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { useState, useEffect } from "react";

export function Hero() {
  const roles = [
    "Frontend Developer",
    "Backend Developer",
    "Web Designing",
    "MERN Stack Developer",
    "Full Stack Developer"
  ];
  
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayedText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayedText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentRole.substring(0, displayedText.length - 1)
          : currentRole.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex]);

  const handleHireMe = () => {
    window.location.href = "mailto:disha.career@outlook.com?subject=Job Opportunity";
    toast.success("Opening email client");
  };

  const handleDownloadResume = () => {
    const downloadToast = toast.info("Starting resume download...");
    
    const resumeLink = "/Disha_Giri_Resume.pdf";
    const link = document.createElement('a');
    link.href = resumeLink;
    link.setAttribute('download', 'Disha_Giri_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    setTimeout(() => {
      toast.dismiss(downloadToast);
      toast.success("Resume downloaded successfully!");
    }, 1000);
  };

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center pt-16 section-padding">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 flex items-center gap-3 flex-wrap">
              Hi, I'm 
              <span className="flex items-center gap-2">
                <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-primary animate-pulse" />
                <span className="text-primary">Disha Giri</span>
              </span>
            </h1>
            <div className="mb-6 h-16 md:h-20">
              <p className="text-xl md:text-2xl font-medium bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent min-h-[2em]">
                {displayedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
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
              <a href="mailto:disha.career@outlook.com" className="text-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center animate-fade-in">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#a78bfa] to-[#c4b5fd] opacity-30 blur-3xl"></div>
              <div className="relative bg-card border-2 border-primary/20 rounded-full w-full h-full flex items-center justify-center overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbW1vdWdzbGV0OHM2eXgwcmw1bHF0MXN2cWZweXlnbTVpODNjc2VkciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/765ccrAiB0g9z6EApL/giphy.gif" 
                    alt="Developer Animation" 
                    className="w-4/5 h-4/5 object-cover rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
