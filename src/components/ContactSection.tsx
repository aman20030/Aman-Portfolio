
import { Mail, Phone, Globe, MapPin, Linkedin, Github, Twitter, Instagram } from "lucide-react";
import portfolioData from "@/data/portfolioData";
import { Button } from "@/components/ui/button";

export const ContactSection = () => {
  const { contactInfo } = portfolioData.basics;
  const { location } = portfolioData.basics;
  const { profiles } = portfolioData.basics;

  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/10 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title text-center">Get In Touch</h2>
        
        <div className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-8 opacity-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Email</p>
                  <a 
                    href={`mailto:${contactInfo.email}`} 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Phone</p>
                  <a 
                    href={`tel:${contactInfo.phone}`} 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {contactInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <Globe size={18} />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Website</p>
                  <a 
                    href={contactInfo.website} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-foreground hover:text-primary transition-colors"
                  >
                    {new URL(contactInfo.website).hostname}
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-sm text-foreground/70">Location</p>
                  <p className="text-foreground">
                    {location.city}, {location.state}, {location.country}
                  </p>
                </div>
              </div>
            </div>
            
            <div className="pt-6">
              <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
              <div className="flex gap-3">
                {profiles.linkedin && (
                  <a 
                    href={profiles.linkedin} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin size={18} />
                  </a>
                )}
                
                {profiles.github && (
                  <a 
                    href={profiles.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github size={18} />
                  </a>
                )}
                
                {profiles.twitter && (
                  <a 
                    href={profiles.twitter} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                    aria-label="Twitter Profile"
                  >
                    <Twitter size={18} />
                  </a>
                )}
                
                {profiles.instagram && (
                  <a 
                    href={profiles.instagram} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-secondary/30 flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors"
                    aria-label="Instagram Profile"
                  >
                    <Instagram size={18} />
                  </a>
                )}
              </div>
            </div>
          </div>
          
          <div className="opacity-0 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="bg-secondary/5 rounded-xl p-6 border border-border h-full">
              <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
              
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground/70 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground/70 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground/70 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground/70 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 bg-background border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  ></textarea>
                </div>
                
                <div>
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
