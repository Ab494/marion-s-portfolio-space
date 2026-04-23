import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Commission Sales Associate",
    company: "Pyypl",
    location: "Nairobi County, Kenya",
    period: "Apr 2022 – Present",
    badge: "Present",
    description:
      "Driving sales initiatives and client acquisition in the fintech space. Building relationships, onboarding clients, and leveraging technology to streamline sales processes and deliver results.",
  },
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Jan 2023 – Present",
    badge: "Freelance",
    description:
      "Built and deployed multiple client projects using MERN stack and Next.js, focusing on responsive design and performance.",
  },
  {
    title: "Statistics & Data Analysis",
    company: "Academic Projects",
    location: "TU Kenya",
    period: "2020 – 2023",
    badge: "Academic",
    description:
      "Applied machine learning and statistical modelling to real-world datasets as part of university coursework at TU Kenya.",
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
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">03.</span>
            Experience
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="max-w-2xl">
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-8">
              {experiences.map((exp, i) => (
                <motion.div
                  key={exp.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="relative"
                >
                  <div className="absolute -left-[41px] top-2 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />
                  <div className="card-gradient rounded-lg p-6 glow-border">
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{exp.title}</h3>
                      <span className="px-3 py-1 text-xs rounded-full bg-primary/15 text-primary font-mono">
                        {exp.badge}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-primary font-medium text-sm mb-1">
                      <Briefcase size={14} />
                      {exp.company}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                      <MapPin size={14} />
                      {exp.location} · {exp.period}
                    </div>
                    <p className="text-slate-text text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
