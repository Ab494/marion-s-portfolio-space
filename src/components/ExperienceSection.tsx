import { motion } from "framer-motion";
import { BriefcaseBusiness, GraduationCap } from "lucide-react";

const experience = [
  {
    title: "Full Stack Developer",
    company: "Independent / Client Projects",
    period: "2023 — Present",
    description:
      "Build responsive web apps, dashboards, and product experiences for startups and service businesses using React, TypeScript, Node.js, and Python.",
  },
  {
    title: "Software Engineer",
    company: "Freelance / Contract Work",
    period: "2021 — 2023",
    description:
      "Delivered customer-facing products with a focus on performance, accessibility, and clean UI systems across multiple business domains.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">05.</span>
            Experience
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="space-y-8">
            {experience.map((job) => (
              <div
                key={`${job.company}-${job.period}`}
                className="rounded-xl border border-border bg-card/60 p-6 shadow-[var(--shadow-card)]"
              >
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2 text-primary">
                      {job.title.toLowerCase().includes("developer") ? (
                        <BriefcaseBusiness size={18} />
                      ) : (
                        <GraduationCap size={18} />
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">{job.title}</h3>
                      <p className="text-primary text-sm font-mono">{job.company}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">{job.period}</span>
                </div>
                <p className="text-slate-text leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
