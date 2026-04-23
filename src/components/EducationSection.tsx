import { motion } from "framer-motion";
import { GraduationCap, Shield } from "lucide-react";

const items = [
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
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-primary font-mono text-sm mb-2">{item.period}</p>
                    <p className="text-slate-text text-sm leading-relaxed">{item.description}</p>
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
