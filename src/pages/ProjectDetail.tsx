
import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import { ArrowLeftIcon, ExternalLinkIcon, GithubIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!project) {
    return (
      <>
        <Navbar />
        <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-6">The project you're looking for doesn't exist or has been removed.</p>
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors mb-8">
          <ArrowLeftIcon className="h-4 w-4 mr-2" /> Back to Projects
        </Link>
        
        {/* Project Header */}
        <div className="relative w-full h-[40vh] md:h-[50vh] rounded-lg overflow-hidden mb-12">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6 md:p-12">
            <Badge className="mb-4 bg-accent text-accent-foreground self-start">
              {project.category === "app" && "App Development"}
              {project.category === "game" && "Game Development"}
              {project.category === "ai" && "AI/ML"}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">{project.title}</h1>
            <p className="text-white/80 max-w-2xl">{project.description}</p>
          </div>
        </div>
        
        {/* Project Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Overview</h2>
              <p className="text-muted-foreground">
                This is a detailed case study of the {project.title} project. In this project, I aimed to solve specific challenges related to {project.category === "app" ? "user experience and interface design" : project.category === "game" ? "game mechanics and player engagement" : "data processing and machine learning models"}.
              </p>
              <p className="text-muted-foreground mt-4">
                The development process involved extensive planning, prototyping, and iterative development to ensure the final product met all requirements and provided an exceptional user experience.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Challenge</h2>
              <p className="text-muted-foreground">
                The main challenges for this project included:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                <li>
                  {project.category === "app" 
                    ? "Creating an intuitive interface that works across multiple devices and screen sizes" 
                    : project.category === "game"
                    ? "Balancing game difficulty and ensuring engaging gameplay mechanics"
                    : "Processing large datasets efficiently while maintaining model accuracy"}
                </li>
                <li>
                  {project.category === "app" 
                    ? "Implementing offline capabilities while ensuring data synchronization" 
                    : project.category === "game"
                    ? "Optimizing performance for target platforms without sacrificing visual quality"
                    : "Creating understandable visualizations of complex data relationships"}
                </li>
                <li>
                  {project.category === "app" 
                    ? "Ensuring consistent user experience across iOS and Android platforms" 
                    : project.category === "game"
                    ? "Designing intuitive controls and responsive character movement"
                    : "Balancing model complexity with processing speed requirements"}
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Solution</h2>
              <p className="text-muted-foreground">
                To address these challenges, I implemented:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mt-2 space-y-2">
                <li>
                  {project.category === "app" 
                    ? "Responsive design principles with platform-specific optimizations" 
                    : project.category === "game"
                    ? "Custom game mechanics with extensive playtesting and iteration"
                    : "Optimized machine learning pipeline with feature selection and model tuning"}
                </li>
                <li>
                  {project.category === "app" 
                    ? "Local storage solution with conflict resolution strategies" 
                    : project.category === "game"
                    ? "Dynamic difficulty adjustment based on player performance"
                    : "Data preprocessing techniques to handle outliers and missing values"}
                </li>
                <li>
                  {project.category === "app" 
                    ? "Comprehensive testing across multiple devices and OS versions" 
                    : project.category === "game"
                    ? "Performance optimizations including asset compression and LOD systems"
                    : "Interactive visualization components for enhanced data understanding"}
                </li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold mb-4">Result</h2>
              <p className="text-muted-foreground">
                {project.category === "app" 
                  ? "The final application provides users with a seamless experience across all supported platforms, with fast performance and reliable offline capabilities. User feedback has been overwhelmingly positive, with particular praise for the intuitive interface and responsive design."
                  : project.category === "game"
                  ? "The completed game delivers an engaging experience with smooth gameplay and visually appealing environments. Player retention metrics have exceeded initial targets, and community feedback has led to several well-received updates."
                  : "The implemented AI solution has significantly improved data processing efficiency while maintaining high accuracy. Stakeholders have reported improved decision-making capabilities thanks to the intuitive visualization components."}
              </p>
            </section>
          </div>
          
          <div className="space-y-8">
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Category</h4>
                  <p className="font-medium">
                    {project.category === "app" && "App Development"}
                    {project.category === "game" && "Game Development"}
                    {project.category === "ai" && "AI/ML Project"}
                  </p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Timeline</h4>
                  <p className="font-medium">3 months</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground">Role</h4>
                  <p className="font-medium">Lead Developer</p>
                </div>
              </div>
              
              <div className="flex flex-col space-y-3 mt-6">
                <Button className="flex items-center justify-center">
                  <ExternalLinkIcon className="h-4 w-4 mr-2" /> Live Demo
                </Button>
                <Button variant="outline" className="flex items-center justify-center">
                  <GithubIcon className="h-4 w-4 mr-2" /> View Code
                </Button>
              </div>
            </section>
            
            <section className="bg-card rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-bold mb-4">Related Projects</h3>
              <div className="space-y-4">
                {projects
                  .filter(p => p.category === project.category && p.id !== project.id)
                  .slice(0, 2)
                  .map(relatedProject => (
                    <Link 
                      key={relatedProject.id}
                      to={`/project/${relatedProject.id}`}
                      className="block group"
                    >
                      <div className="relative h-24 rounded-md overflow-hidden">
                        <img 
                          src={relatedProject.image} 
                          alt={relatedProject.title} 
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <span className="text-white font-medium">View Project</span>
                        </div>
                      </div>
                      <h4 className="font-medium mt-2 group-hover:text-primary transition-colors">
                        {relatedProject.title}
                      </h4>
                    </Link>
                  ))}
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProjectDetail;
