
import { Check } from "lucide-react";
import portfolioData from "@/data/portfolioData";

export const AboutSection = () => {
  const { about } = portfolioData;
  const { programmingLanguages, webDevelopment, databases, versionControl, dataAnalysis } = about.technicalSkills;

  return (
    <section id="about" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-4">Professional Summary</h3>
            <p className="text-foreground/80 leading-relaxed">
              {about.professionalSummary.summary}
            </p>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Key Strengths</h4>
              <ul className="space-y-3">
                {about.professionalSummary.keyStrengths.map((strength, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground/80">{strength}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-2xl font-bold mb-4">Technical Skills</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Programming Languages</h4>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full bg-secondary/30 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Web Development</h4>
                <div className="flex flex-wrap gap-2">
                  {webDevelopment.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full bg-secondary/30 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Databases</h4>
                <div className="flex flex-wrap gap-2">
                  {databases.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full bg-secondary/30 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Version Control</h4>
                <div className="flex flex-wrap gap-2">
                  {versionControl.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full bg-secondary/30 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-primary">Data Analysis</h4>
                <div className="flex flex-wrap gap-2">
                  {dataAnalysis.map((skill, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full bg-secondary/30 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-semibold mb-4">Interests</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4 mt-2">
                {about.interests.map((interest, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                    <span className="text-foreground/80 text-sm">{interest}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
