
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import portfolioData from "@/data/portfolioData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const ProjectsSection = () => {
  const { projects } = portfolioData;
  const [displayCount, setDisplayCount] = useState(6);

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 6, projects.length));
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">My Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.slice(0, displayCount).map((project, index) => (
            <div 
              key={index} 
              className="bg-secondary/5 border border-border rounded-xl overflow-hidden card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="flex gap-2">
                    {project.url && (
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="p-2 bg-primary rounded-full text-white hover:bg-primary/90 transition-colors"
                        aria-label={`Visit ${project.title} website`}
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
              
              <div className="p-5 space-y-4">
                <h3 className="text-xl font-bold line-clamp-2">{project.title}</h3>
                <p className="text-foreground/70 text-sm line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologiesUsed.slice(0, 3).map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologiesUsed.length > 3 && (
                    <Badge variant="outline" className="bg-secondary/20 text-foreground/70 border-secondary/20">
                      +{project.technologiesUsed.length - 3}
                    </Badge>
                  )}
                </div>
                
                {project.url && (
                  <div className="pt-2">
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {displayCount < projects.length && (
          <div className="mt-12 text-center">
            <Button 
              onClick={handleLoadMore}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Load More Projects
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
