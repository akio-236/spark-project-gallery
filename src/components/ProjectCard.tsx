
import { Project } from "@/data/projects";
import { Badge } from "./ui/badge";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card group">
      {/* Project Image */}
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-64 object-cover object-center"
      />
      
      {/* Overlay with details */}
      <div className="project-card-overlay">
        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
          {project.category === "app" && "App Development"}
          {project.category === "game" && "Game Development"}
          {project.category === "ai" && "AI/ML"}
        </Badge>
        
        <div className="mt-auto space-y-2">
          <h3 className="font-bold text-xl text-white">{project.title}</h3>
          <p className="text-white/90 text-sm line-clamp-2">{project.description}</p>
          
          <div className="flex flex-wrap gap-1 mt-2">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="outline" className="bg-white/10 text-white/90 border-white/20">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="bg-white/10 text-white/90 border-white/20">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
          
          <Link 
            to={`/project/${project.id}`} 
            className="inline-flex items-center text-sm text-white font-medium mt-4 group-hover:underline"
          >
            View Case Study <ArrowRightIcon className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
