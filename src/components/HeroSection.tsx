
import { Button } from "./ui/button";
import { ArrowDownIcon, GithubIcon, LinkedinIcon, TwitterIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <div className="animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Crafting Digital <span className="text-primary">Experiences</span> & <span className="text-accent">Innovations</span>
              </h1>
              <p className="mt-4 text-xl text-muted-foreground">
                Developer specializing in app development, game creation, and AI solutions.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              
              <Button size="lg" variant="outline">
                Download Resume
              </Button>
            </div>
            
            <div className="flex gap-4 pt-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <GithubIcon className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <LinkedinIcon className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <TwitterIcon className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="relative w-full h-64 md:h-96 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-4xl">👋</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            <ArrowDownIcon className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
