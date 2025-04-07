
import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-foreground/70 text-sm">
            &copy; {currentYear} Aayush Sharma. All rights reserved.
          </p>
          
          <p className="text-foreground/60 text-xs mt-2 flex items-center justify-center">
            Made with <Heart className="h-3 w-3 text-red-500 mx-1" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
