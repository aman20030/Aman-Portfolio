
import { useState } from "react";
import { Briefcase, Calendar } from "lucide-react";
import portfolioData from "@/data/portfolioData";

export const ExperienceSection = () => {
  const { experience } = portfolioData;
  const [expanded, setExpanded] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpanded(expanded === index ? null : index);
  };

  const formatDate = (dateString: string) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'long'
    }).format(date);
  };

  return (
    <section id="experience" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Professional Experience</h2>
        
        <div className="mt-12 max-w-4xl mx-auto">
          {experience.map((job, index) => (
            <div 
              key={index} 
              className={`mb-10 opacity-0 animate-fade-in relative pl-8 ${index !== experience.length - 1 ? 'timeline-item' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-primary z-10 border-4 border-background"></div>
              
              {index !== experience.length - 1 && (
                <div className="absolute left-2 top-5 bottom-0 w-[1px] bg-border"></div>
              )}
              
              <div className="ml-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{job.jobTitle}</h3>
                  <div className="flex items-center text-foreground/70 text-sm mt-1 sm:mt-0">
                    <Calendar size={14} className="mr-1" />
                    <span>
                      {formatDate(job.duration.start)} - {job.duration.end ? formatDate(job.duration.end) : 'Present'}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center text-primary font-medium mb-3">
                  <Briefcase size={16} className="mr-2" />
                  <a 
                    href={job.company.url || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {job.company.name}
                  </a>
                  <span className="mx-2">•</span>
                  <span className="text-foreground/70 text-sm">
                    {job.location.city}, {job.location.country}
                  </span>
                </div>
                
                <div className="mb-4">
                  <ul className="space-y-2">
                    {(expanded === index ? job.responsibilities : job.responsibilities.slice(0, 2)).map((responsibility, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        <span className="text-foreground/80 text-sm">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {job.responsibilities.length > 2 && (
                    <button 
                      onClick={() => toggleExpanded(index)} 
                      className="text-primary hover:text-primary/80 text-sm mt-2 focus:outline-none"
                    >
                      {expanded === index ? "Show Less" : "Show More"}
                    </button>
                  )}
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {job.technologiesUsed.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
