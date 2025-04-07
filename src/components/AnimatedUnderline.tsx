
import React from "react";

interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
}

export const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({ 
  children, 
  className = ""
}) => {
  return (
    <span className={`relative inline-block group ${className}`}>
      {children}
      <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
    </span>
  );
};
