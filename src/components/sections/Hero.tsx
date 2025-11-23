import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Download, Code2 } from "lucide-react";
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
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 flex items-center gap-3 flex-wrap">
              Hi, I'm <Code2 className="text-primary h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 lg:h-14 lg:w-14" /> <span className="text-primary">Disha Giri</span>
            </h1>
            <div className="mb-6 h-16 md:h-20">
              <p className="text-lg sm:text-xl md:text-2xl font-medium bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent min-h-[2em]">
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
              <a href="https://discord.com/users/1332623921307975762" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
              </a>
              <a href="mailto:disha.career@outlook.com" className="text-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80">
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
