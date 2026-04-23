import { ExternalLink, Github, Folder } from "lucide-react";
import FadeIn from "./FadeIn";
import meridianImg from "@/assets/project-meridian.png";
import kazifyImg from "@/assets/project-kazify.png";
import survivorImg from "@/assets/project-survivor.png";
import zenImg from "@/assets/project-zen.png";

const projects = [
  {
    title: "Meridian Consulting Group",
    description: "A professional consulting firm website showcasing services, expertise, and client solutions with a clean, corporate design.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://meridianconsultinggroup.de",
    github: "#",
    image: meridianImg,
  },
  {
    title: "Kazify",
    description: "A modern web platform built with Next.js, deployed on Vercel — featuring responsive design and seamless user experience.",
    tech: ["Next.js", "React", "Vercel"],
    live: "https://kazify12.vercel.app",
    github: "#",
    image: kazifyImg,
  },
  {
    title: "Survivor Support",
    description: "A supportive web application designed to provide resources and assistance to survivors, with a focus on accessibility and care.",
    tech: ["Node.js", "Express", "MongoDB"],
    live: "https://survivor-support-1.onrender.com/",
    github: "#",
    image: survivorImg,
  },
  {
    title: "Zen Zone",
    description: "A calming meditation and mindfulness web app offering breathing exercises, ambient sounds, and quick mental resets for busy minds.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    live: "https://zen-zone-scape.vercel.app/",
    github: "#",
    image: zenImg,
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-navy-deep">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">04.</span>
            Projects
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <FadeIn
                key={project.title}
                y={20}
                duration={0.4}
                delay={i * 0.1}
                className="card-gradient rounded-lg overflow-hidden glow-border flex flex-col hover:-translate-y-1 transition-transform duration-300"
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative overflow-hidden aspect-video bg-navy-deep group"
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <Folder className="text-primary" size={28} />
                    <div className="flex gap-3">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <Github size={18} />
                      </a>
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                        <ExternalLink size={18} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                  <p className="text-slate-text text-sm leading-relaxed flex-1 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="text-xs font-mono text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProjectsSection;
