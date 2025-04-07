
import { useState } from "react";
import { Award, Calendar, ExternalLink } from "lucide-react";
import portfolioData from "@/data/portfolioData";
import { Button } from "@/components/ui/button";

export const CertificationsSection = () => {
  const { certifications } = portfolioData;
  const [displayCount, setDisplayCount] = useState(6);
  const [selectedCert, setSelectedCert] = useState<number | null>(null);

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + 6, certifications.length));
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
    <section id="certifications" className="py-20 bg-secondary/5">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center">Certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {certifications.slice(0, displayCount).map((certification, index) => (
            <div 
              key={index} 
              className="bg-background border border-border rounded-xl overflow-hidden card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="relative aspect-video overflow-hidden bg-secondary/10">
                <img 
                  src={certification.image} 
                  alt={certification.title} 
                  className="w-full h-full object-contain p-2" 
                  onClick={() => setSelectedCert(index)}
                  style={{ cursor: 'pointer' }}
                />
              </div>
              
              <div className="p-5 space-y-3">
                <h3 className="text-lg font-bold line-clamp-2">{certification.title}</h3>
                
                <div className="flex items-center text-foreground/70 text-sm">
                  <Award size={14} className="mr-1" />
                  <a 
                    href={certification.issuingOrganization.url || "#"} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    {certification.issuingOrganization.name}
                  </a>
                </div>
                
                <div className="flex items-center text-foreground/70 text-sm">
                  <Calendar size={14} className="mr-1" />
                  <span>Issued: {formatDate(certification.issueDate)}</span>
                </div>
                
                {certification.expirationDate && (
                  <div className="flex items-center text-foreground/70 text-sm">
                    <Calendar size={14} className="mr-1" />
                    <span>Expires: {formatDate(certification.expirationDate)}</span>
                  </div>
                )}
                
                {certification.credentialID && (
                  <div className="text-foreground/70 text-sm">
                    <span className="font-medium">Credential ID:</span> {certification.credentialID}
                  </div>
                )}
                
                <p className="text-foreground/70 text-sm line-clamp-2 mt-2">
                  {certification.description}
                </p>
                
                <div className="pt-2">
                  <button 
                    onClick={() => setSelectedCert(index)}
                    className="text-primary hover:text-primary/80 text-sm font-medium flex items-center gap-1"
                  >
                    View Certificate <ExternalLink size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {displayCount < certifications.length && (
          <div className="mt-12 text-center">
            <Button 
              onClick={handleLoadMore}
              className="bg-primary hover:bg-primary/90 text-white"
            >
              Load More Certifications
            </Button>
          </div>
        )}
        
        {selectedCert !== null && (
          <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedCert(null)}>
            <div className="relative max-w-4xl max-h-[90vh] w-full" onClick={e => e.stopPropagation()}>
              <Button 
                variant="ghost" 
                className="absolute top-2 right-2 rounded-full bg-black/40 text-white hover:bg-black/60 z-10"
                onClick={() => setSelectedCert(null)}
              >
                <X size={20} />
              </Button>
              <img 
                src={certifications[selectedCert].image} 
                alt={certifications[selectedCert].title} 
                className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

import { X } from "lucide-react";

export default CertificationsSection;
