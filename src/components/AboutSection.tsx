
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
          <p className="text-muted-foreground">
            I'm a passionate developer with extensive experience in creating apps, games, and AI solutions. 
            My approach combines technical excellence with creative problem-solving to build engaging digital experiences.
          </p>
          
          <Tabs defaultValue="skills" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="skills" className="space-y-4 py-4">
              <div>
                <h4 className="font-medium mb-2">Development</h4>
                <div className="flex flex-wrap gap-2">
                  {["React", "React Native", "Node.js", "TypeScript", "Python", "Unity", "C#"].map((skill) => (
                    <span key={skill} className="bg-secondary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">AI/ML</h4>
                <div className="flex flex-wrap gap-2">
                  {["TensorFlow", "PyTorch", "Computer Vision", "NLP", "Data Analysis"].map((skill) => (
                    <span key={skill} className="bg-secondary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">Design</h4>
                <div className="flex flex-wrap gap-2">
                  {["UI/UX", "Figma", "Adobe XD", "3D Modeling", "Animation"].map((skill) => (
                    <span key={skill} className="bg-secondary px-3 py-1 rounded-full text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="experience" className="space-y-4 py-4">
              <div>
                <h4 className="font-medium">Senior Developer</h4>
                <p className="text-sm text-muted-foreground">Tech Innovations Inc. (2019-Present)</p>
                <p className="text-sm mt-1">
                  Led development of multiple app and AI projects, managing teams and architecting solutions.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Game Developer</h4>
                <p className="text-sm text-muted-foreground">Indie Studio XYZ (2017-2019)</p>
                <p className="text-sm mt-1">
                  Designed and implemented game mechanics, character controllers, and procedural environments.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Frontend Developer</h4>
                <p className="text-sm text-muted-foreground">Web Solutions LLC (2015-2017)</p>
                <p className="text-sm mt-1">
                  Built responsive web applications with modern JavaScript frameworks and REST APIs.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="education" className="space-y-4 py-4">
              <div>
                <h4 className="font-medium">Master of Computer Science</h4>
                <p className="text-sm text-muted-foreground">University of Technology (2013-2015)</p>
                <p className="text-sm mt-1">
                  Specialized in artificial intelligence and game development with honors.
                </p>
              </div>
              
              <div>
                <h4 className="font-medium">Bachelor of Software Engineering</h4>
                <p className="text-sm text-muted-foreground">State University (2009-2013)</p>
                <p className="text-sm mt-1">
                  Graduated with distinction, focused on software architecture and mobile development.
                </p>
              </div>
            </TabsContent>
          </Tabs>
          
          <Button size="lg">
            Contact Me
          </Button>
        </div>
        
        <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 rounded-lg">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-primary">25+</h3>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-primary">8+</h3>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-primary">12+</h3>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div className="bg-card p-6 rounded-lg text-center">
              <h3 className="text-4xl font-bold text-primary">3</h3>
              <p className="text-muted-foreground">Award Wins</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
