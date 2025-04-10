
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-foreground transition-colors duration-300">
              Portfolio<span className="text-primary">.</span>
            </Link>
          </div>
          
          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">
              Home
            </Link>
            <a href="#projects" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">
              Projects
            </a>
            <a href="#about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:scale-105">
              About
            </a>
            <Button variant="default" size="sm" asChild className="hover:scale-105 transition-transform">
              <Link to="/contact">Contact</Link>
            </Button>
            <ThemeToggle />
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} className="transition-colors">
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fade-in transition-colors duration-300">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <a 
              href="#projects" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a 
              href="#about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <div className="px-3 py-2">
              <Button variant="default" className="w-full transition-transform hover:scale-105" asChild>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Contact</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
