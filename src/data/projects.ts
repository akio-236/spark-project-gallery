
export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'app' | 'game' | 'ai';
  image: string;
  technologies: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "app-1",
    title: "Cross-Platform Mobile App",
    description: "A React Native app with seamless experience across iOS and Android platforms, featuring offline-first data synchronization.",
    category: "app",
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3",
    technologies: ["React Native", "TypeScript", "Firebase", "Redux"],
    featured: true
  },
  {
    id: "app-2",
    title: "Productivity Dashboard",
    description: "Web-based dashboard for tracking team productivity with real-time analytics and customizable widgets.",
    category: "app",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    featured: true
  },
  {
    id: "app-3",
    title: "Health & Fitness Tracker",
    description: "Mobile application for tracking fitness goals, nutrition, and overall wellness with personalized insights.",
    category: "app",
    image: "https://images.unsplash.com/photo-1574144113084-b6f450cc5e0b",
    technologies: ["Flutter", "Dart", "Firebase", "TensorFlow Lite"],
    featured: false
  },
  {
    id: "game-1",
    title: "3D Adventure Game",
    description: "Immersive 3D adventure game with procedurally generated environments and dynamic storylines.",
    category: "game",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420",
    technologies: ["Unity", "C#", "Blender", "FMOD"],
    featured: true
  },
  {
    id: "game-2",
    title: "Mobile Strategy Game",
    description: "Turn-based strategy game optimized for mobile with multiplayer functionality and custom AI opponents.",
    category: "game",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f",
    technologies: ["Godot Engine", "GDScript", "Firebase", "Photoshop"],
    featured: false
  },
  {
    id: "game-3",
    title: "VR Experience",
    description: "Virtual reality experience showcasing interactive storytelling and immersive environment design.",
    category: "game",
    image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620",
    technologies: ["Unreal Engine", "C++", "Oculus SDK", "Maya"],
    featured: true
  },
  {
    id: "ai-1",
    title: "Sentiment Analysis Tool",
    description: "AI-powered tool for analyzing customer feedback and extracting actionable insights from textual data.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    technologies: ["Python", "TensorFlow", "BERT", "Flask"],
    featured: true
  },
  {
    id: "ai-2",
    title: "Computer Vision System",
    description: "Computer vision system for real-time object detection and classification in video streams.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    technologies: ["Python", "PyTorch", "OpenCV", "FastAPI"],
    featured: true
  },
  {
    id: "ai-3",
    title: "Recommendation Engine",
    description: "Machine learning-based recommendation engine for personalized content delivery with continuous learning capabilities.",
    category: "ai",
    image: "https://images.unsplash.com/photo-1544986581-efac024faf62",
    technologies: ["Python", "Scikit-learn", "Django", "PostgreSQL"],
    featured: false
  }
];

export const categories = [
  { id: "all", label: "All Projects" },
  { id: "app", label: "App Development" },
  { id: "game", label: "Game Development" },
  { id: "ai", label: "AI & ML Projects" }
];
