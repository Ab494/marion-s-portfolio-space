import { useState } from "react";
import { ExternalLink, Github, Folder, Star, Lock } from "lucide-react";
import FadeIn from "./FadeIn";
import meridianImg from "@/assets/project-meridian.png";
import kazifyImg from "@/assets/project-kazify.png";
import survivorImg from "@/assets/project-survivor.png";
import zenImg from "@/assets/project-zen.png";

type Project = {
  title: string;
  description: string;
  tech: string[];
  techKeys: string[];
  live: string | null;
  github: string | null;
  image: string;
  featured?: boolean;
};

const projects: Project[] = [
  {
    title: "Meridian Consulting Group",
    description:
      "A professional consulting firm website showcasing services and client solutions — built for a Germany-based consultancy, using React, TypeScript and Tailwind. Delivered a fast, mobile-first site that doubled inbound leads versus their old WordPress build.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    techKeys: ["react", "typescript"],
    live: "https://meridianconsultinggroup.de",
    github: null,
    image: meridianImg,
    featured: true,
  },
  {
    title: "Kazify",
    description:
      "A modern jobs/services platform — built for connecting young professionals with gigs, using Next.js, React and Vercel. Implemented SSR pages and a responsive UI that loads under 2s on mid-range mobile devices.",
    tech: ["Next.js", "React", "Vercel"],
    techKeys: ["nextjs", "react"],
    live: "https://kazify12.vercel.app",
    github: "https://github.com/marionkipruto",
    image: kazifyImg,
    featured: true,
  },
  {
    title: "Survivor Support",
    description:
      "A resource and support web app for survivors of gender-based violence — built for a community NGO, using Node.js, Express and MongoDB. Focused on accessibility, anonymous access, and a calm, trauma-informed UI.",
    tech: ["Node.js", "Express", "MongoDB"],
    techKeys: ["nodejs"],
    live: "https://survivor-support-1.onrender.com/",
    github: "https://github.com/marionkipruto",
    image: survivorImg,
  },
  {
    title: "Zen Zone",
    description:
      "A meditation and mindfulness web app offering breathing exercises and ambient sounds — built as a self-care tool for busy knowledge workers, using React, TypeScript and Tailwind. Designed reusable timer and audio components to keep state predictable.",
    tech: ["React", "TypeScript", "Tailwind CSS"],
    techKeys: ["react", "typescript"],
    live: "https://zen-zone-scape.vercel.app/",
    github: "https://github.com/marionkipruto",
    image: zenImg,
  },
];

const filters = [
  { label: "All", key: "all" },
  { label: "React", key: "react" },
  { label: "Next.js", key: "nextjs" },
  { label: "Node.js", key: "nodejs" },
  { label: "Python", key: "python" },
  { label: "TypeScript", key: "typescript" },
];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("all");

  return (
    <section id="projects" className="py-24 bg-navy-deep">
      <div className="container mx-auto px-4 lg:px-8">
        <FadeIn>
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-8">
            <span className="text-primary font-mono text-lg">04.</span>
            Projects
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => {
              const active = filter === f.key;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  className={`px-4 py-1.5 rounded-full text-xs font-mono border transition-all duration-200 ${
                    active
                      ? "bg-primary text-primary-foreground border-primary"
                      : "bg-transparent text-primary border-primary/50 hover:border-primary"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => {
              const visible = filter === "all" || project.techKeys.includes(filter);
              return (
                <FadeIn
                  key={project.title}
                  y={20}
                  duration={0.4}
                  delay={i * 0.1}
                  className={`relative card-gradient rounded-lg overflow-hidden flex flex-col transition-all duration-300 ${
                    project.featured
                      ? "ring-1 ring-primary/50 shadow-[0_0_24px_-8px_hsl(var(--primary)/0.5)]"
                      : "glow-border"
                  } ${
                    visible
                      ? "opacity-100 scale-100 hover:-translate-y-1.5 hover:shadow-[0_0_0_1px_hsl(var(--primary)/0.4)]"
                      : "opacity-0 scale-95 pointer-events-none absolute -z-10"
                  }`}
                  data-tech={project.techKeys.join(" ")}
                >
                  {project.featured && (
                    <span className="absolute top-3 left-3 z-20 inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-mono bg-primary text-primary-foreground">
                      <Star size={10} className="fill-current" />
                      Featured
                    </span>
                  )}
                  <a
                    href={project.live ?? "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative overflow-hidden aspect-video bg-navy-deep group"
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <Folder className="text-primary" size={28} />
                      <div className="flex items-center gap-3">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} GitHub repository`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <Github size={18} />
                          </a>
                        ) : (
                          <span
                            title="Private client repository"
                            className="inline-flex items-center gap-1 text-[10px] font-mono text-muted-foreground"
                          >
                            <Lock size={12} />
                            Private Client
                          </span>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${project.title} live demo`}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-slate-text text-sm leading-relaxed flex-1 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3 mb-4">
                      {project.live ? (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline"
                        >
                          <ExternalLink size={12} />
                          Live Demo
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground">
                          <Lock size={12} />
                          Private Client
                        </span>
                      )}
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-primary hover:underline"
                        >
                          <Github size={12} />
                          GitHub
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground">
                          <Lock size={12} />
                          Code Private
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span key={t} className="text-xs font-mono text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ProjectsSection;
