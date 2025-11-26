
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { SearchDialog } from "@/components/SearchDialog";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigate = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -70; // Adjust based on navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      
      window.scrollTo({ top: y, behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <a href="#home" className="flex items-center gap-2 group">
              <span className="text-lg font-semibold">Portfolio</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <div className="flex items-center space-x-4">
              {["home", "about", "education", "projects", "skills", "contact"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-base capitalize"
                  onClick={() => handleNavigate(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <SearchDialog onNavigate={handleNavigate} />
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {["home", "about", "education", "projects", "skills", "contact"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-base capitalize justify-start"
                  onClick={() => handleNavigate(item)}
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
