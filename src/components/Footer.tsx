
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-secondary py-12 px-4 md:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold text-foreground transition-colors duration-300">
              Portfolio<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-muted-foreground transition-colors duration-300">
              Crafting exceptional digital experiences through app development, game design, and AI solutions.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 transition-colors duration-300">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Home
                </Link>
              </li>
              <li>
                <a href="/#projects" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Projects
                </a>
              </li>
              <li>
                <a href="/#about" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4 transition-colors duration-300">Contact</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground transition-colors duration-300 hover:text-primary">
                info@yourportfolio.com
              </li>
              <li className="text-muted-foreground transition-colors duration-300 hover:text-primary">
                +1 (555) 123-4567
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground transition-colors duration-300">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
