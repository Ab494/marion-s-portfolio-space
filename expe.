import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

const experiences = [
  {
    title: "Freelance Full Stack Developer",
    company: "Self-Employed",
    location: "Remote",
    period: "Jan 2023 – Present",
    badge: "Freelance",
    bullets: [
      "Built and deployed 5+ client web apps using the MERN stack and Next.js, focusing on responsive UX and performance.",
      "Delivered end-to-end solutions covering UI, REST APIs, MongoDB schemas, and Vercel/Render deployments.",
      "Integrated third-party services (auth, payments, email) and optimized Lighthouse scores above 90.",
    ],
    stack: ["React", "Next.js", "Node.js", "Express", "MongoDB", "TypeScript", "Tailwind"],
  },
  {
    title: "Commission Sales Associate",
    company: "Pyypl",
    location: "Nairobi County, Kenya",
    period: "Apr 2022 – Present",
    badge: "Present",
    bullets: [
      "Drove client acquisition and onboarding for a leading African fintech mobile wallet.",
      "Leveraged digital tools and CRM workflows to streamline the sales pipeline and increase conversion.",
      "Built lasting client relationships through consultative selling and product education.",
    ],
    stack: ["Fintech", "CRM", "Mobile Wallet"],
  },
  {
    title: "Statistics & Data Analysis",
    company: "Academic Projects",
    location: "TU Kenya",
    period: "2020 – 2023",
    badge: "Academic",
    bullets: [
      "Applied machine learning and statistical modelling to real-world datasets as part of university coursework.",
      "Built reproducible analyses in Python (pandas, scikit-learn) with clear visualizations and reports.",
      "Collaborated on team projects covering hypothesis testing, regression, and classification problems.",
    ],
    stack: ["Python", "pandas", "scikit-learn", "Statistics"],
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
                    <ul className="space-y-2 mb-4">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex gap-2 text-slate-text text-sm leading-relaxed">
                          <span className="text-primary mt-1.5 shrink-0">▹</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t border-border/50">
                      <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono mb-2">
                        Key Technologies
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.stack.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 text-[11px] rounded-full bg-primary/10 text-primary font-mono border border-primary/20"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
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
