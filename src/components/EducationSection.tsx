import { motion } from "framer-motion";
import { GraduationCap, Shield, ExternalLink } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Full-Stack Development — MERN Stack Specialization",
    period: "2025",
    badge: "2025 · Certified",
    description:
      "16-week intensive software development program covering Python, Web Technologies, Database Management, Software Engineering Essentials, and Startup Building — with a specialization in Full-Stack MERN Stack development.",
    certificateUrl: "/MARION FULL STACK PLP.pdf",
    institution: "Power Learn Project (PLP) · in partnership with EMURGO Africa",
    duration: "16 weeks",
  },
  {
    icon: GraduationCap,
    title: "The Technical University of Kenya",
    period: "2020 – 2023",
    description:
      "Studied statistics and data science, building a strong foundation in analytical thinking, software development, and applied mathematics.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Fundamentals",
    period: "2024 – Present · Currently Learning",
    description:
      "Expanding into ethical hacking, network security, and secure software development practices.",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">05.</span>
            Education
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="max-w-2xl space-y-4">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card-gradient rounded-lg p-6 glow-border flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    {item.institution && (
                      <p className="text-muted-foreground text-sm mb-1">{item.institution}</p>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-primary font-mono text-sm">{item.period}</p>
                      {item.badge && (
                        <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs font-mono border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-text text-sm leading-relaxed mb-3">{item.description}</p>
                    {item.certificateUrl && (
                      <a
                        href={item.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary text-primary font-mono text-sm hover:bg-primary/10 transition-colors duration-200"
                      >
                        <ExternalLink size={14} />
                        View Certificate
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
