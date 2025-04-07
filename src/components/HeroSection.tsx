
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import portfolioData from "@/data/portfolioData";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const { name, headline, image } = portfolioData.basics.personalInfo;
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  const roles = headline.split("|").map(role => role.trim());

  useEffect(() => {
    if (!isTyping) return;

    const currentRole = roles[currentRoleIndex];
    
    if (typedText.length < currentRole.length) {
      const timeout = setTimeout(() => {
        setTypedText(currentRole.slice(0, typedText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIsTyping(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [typedText, isTyping, currentRoleIndex, roles]);

  useEffect(() => {
    if (!isTyping) {
      const timeout = setTimeout(() => {
        setTypedText("");
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setIsTyping(true);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [isTyping, roles.length]);

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative pt-20 pb-10"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-xl md:text-2xl mb-2 text-foreground/80">Hello, I'm</h2>
              <h1 className="text-4xl md:text-6xl font-bold mb-4 gradient-text">{name}</h1>
              <div className="h-16 md:h-24">
                <h2 className="text-xl md:text-3xl font-medium text-foreground/90 min-h-8">
                  <span>{typedText}</span>
                  <span className="inline-block w-1 h-6 md:h-8 ml-1 bg-primary animate-pulse-slow"></span>
                </h2>
              </div>
              <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6">
                <a href="#projects">
                  <Button className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2">
                    View Projects
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                    Contact Me
                  </Button>
                </a>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-full blur-3xl"></div>
              <div className="relative">
                <div className="w-full aspect-square rounded-full overflow-hidden border-2 border-primary/30 p-2 bg-background/50 backdrop-blur-sm shadow-xl">
                  <img 
                    src={image} 
                    alt={name} 
                    className="w-full h-full object-cover rounded-full animate-float"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24 md:w-32 md:h-32 bg-primary rounded-full flex items-center justify-center text-white font-medium text-sm md:text-base p-2 shadow-lg z-10 animate-pulse-slow">
                  <span className="text-center">Open to Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center opacity-0 animate-fade-in" style={{ animationDelay: "1s" }}>
        <a 
          href="#about" 
          className="text-primary hover:text-primary/80 transition-colors"
          aria-label="Scroll down to About section"
        >
          <ChevronDown size={32} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
