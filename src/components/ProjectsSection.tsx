import { motion } from "framer-motion";
import { ExternalLink, Github, Folder } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Dashboard",
    description:
      "A full-stack dashboard for managing products, orders, and analytics with real-time data visualization and secure authentication.",
    tech: ["React", "Node.js", "MongoDB", "Chart.js"],
  },
  {
    title: "ML Sentiment Analyzer",
    description:
      "A machine learning web app that analyzes sentiment from social media feeds and displays trends through an interactive dashboard.",
    tech: ["Python", "Flask", "React", "TensorFlow"],
  },
  {
    title: "Student Records System",
    description:
      "A university records management system with statistical analysis tools, report generation, and role-based access control.",
    tech: ["Express.js", "MySQL", "React", "D3.js"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-navy-deep">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">04.</span>
            Projects
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-gradient rounded-lg p-6 glow-border flex flex-col hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <Folder className="text-primary" size={28} />
                  <div className="flex gap-3">
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                      <Github size={18} />
                    </a>
                    <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
