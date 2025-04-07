
import { useState } from "react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import portfolioData from "@/data/portfolioData";

export const EducationSection = () => {
  const { education } = portfolioData;
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
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="mt-12 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div 
              key={index} 
              className={`mb-10 opacity-0 animate-fade-in relative pl-8 ${index !== education.length - 1 ? 'timeline-item' : ''}`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
            >
              <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-primary z-10 border-4 border-background"></div>
              
              {index !== education.length - 1 && (
                <div className="absolute left-2 top-5 bottom-0 w-[1px] bg-border"></div>
              )}
              
              <div className="ml-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <div className="flex items-center text-foreground/70 text-sm mt-1 sm:mt-0">
                    <Calendar size={14} className="mr-1" />
                    <span>
                      {formatDate(edu.duration.start)} - {formatDate(edu.duration.end)}
                    </span>
                  </div>
                </div>
                
                <div className="flex items-center text-primary font-medium mb-2">
                  <GraduationCap size={16} className="mr-2" />
                  <a 
                    href={edu.institution.url || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {edu.institution.name}
                  </a>
                </div>
                
                <div className="flex items-center text-foreground/70 text-sm mb-3">
                  <MapPin size={14} className="mr-1" />
                  <span>
                    {edu.location.city}, {edu.location.state}, {edu.location.country}
                  </span>
                  <span className="mx-2">•</span>
                  <span className="font-medium">{edu.score}</span>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <p className="text-foreground/80 text-sm font-medium mb-1">Field of Study: {edu.fieldOfStudy}</p>
                  </div>
                  
                  {edu.relevantCoursework.length > 0 && (
                    <div>
                      <p className="text-foreground/80 text-sm font-medium mb-1">Relevant Coursework:</p>
                      <div className="flex flex-wrap gap-2">
                        {(expanded === index ? edu.relevantCoursework : edu.relevantCoursework.slice(0, 3)).map((course, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-md"
                          >
                            {course}
                          </span>
                        ))}
                        
                        {edu.relevantCoursework.length > 3 && expanded !== index && (
                          <button 
                            onClick={() => toggleExpanded(index)} 
                            className="px-2 py-1 bg-secondary/20 text-foreground/70 text-xs rounded-md"
                          >
                            +{edu.relevantCoursework.length - 3} more
                          </button>
                        )}
                      </div>
                      
                      {expanded === index && (
                        <button 
                          onClick={() => toggleExpanded(index)} 
                          className="text-primary hover:text-primary/80 text-xs mt-2 focus:outline-none"
                        >
                          Show Less
                        </button>
                      )}
                    </div>
                  )}
                  
                  {edu.honors && edu.honors.length > 0 && (
                    <div>
                      <p className="text-foreground/80 text-sm font-medium mb-1">Honors:</p>
                      <ul className="list-disc list-inside text-sm text-foreground/80 pl-1">
                        {edu.honors.map((honor, idx) => (
                          <li key={idx}>{honor}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {edu.extracurricularActivities && edu.extracurricularActivities.length > 0 && (
                    <div>
                      <p className="text-foreground/80 text-sm font-medium mb-1">Extracurricular Activities:</p>
                      <div className="flex flex-wrap gap-2">
                        {edu.extracurricularActivities.map((activity, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-secondary/20 text-foreground/80 text-xs rounded-md"
                          >
                            {activity}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
