import { motion } from "framer-motion";
import { Code2, Server, Database, Brain, Shield } from "lucide-react";

type Tier = "Expert" | "Proficient" | "Familiar";
type Skill = { name: string; tier?: Tier; learning?: boolean; note?: string };

const tierStyles: Record<Tier, string> = {
  Expert: "bg-primary/20 text-primary border-primary/40",
  Proficient: "bg-primary/10 text-primary border-primary/25",
  Familiar: "bg-secondary text-secondary-foreground border-border",
};

const categories: { title: string; icon: JSX.Element; skills: Skill[]; learning?: boolean }[] = [
  {
    title: "Frontend",
    icon: <Code2 size={20} />,
    skills: [
      { name: "React.js", tier: "Expert" },
      { name: "HTML5", tier: "Expert" },
      { name: "CSS3 / Tailwind", tier: "Expert" },
      { name: "JavaScript / TypeScript", tier: "Proficient" },
    ],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    skills: [
      { name: "Node.js", tier: "Proficient" },
      { name: "Express.js", tier: "Proficient" },
      { name: "REST APIs", tier: "Proficient" },
    ],
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    skills: [
      { name: "MongoDB", tier: "Proficient" },
      { name: "MySQL", tier: "Familiar" },
    ],
  },
  {
    title: "AI/ML & Data",
    icon: <Brain size={20} />,
    skills: [
      { name: "Python", tier: "Proficient" },
      { name: "Machine Learning", tier: "Familiar" },
      { name: "Data Science", tier: "Proficient" },
      { name: "Statistics", tier: "Proficient" },
    ],
  },
  {
    title: "In Progress",
    icon: <Shield size={20} />,
    skills: [{ name: "Cybersecurity", learning: true, note: "via CompTIA / TCM Security" }],
    learning: true,
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 bg-navy-deep">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-4">
            <span className="text-primary font-mono text-lg">02.</span>
            Skills & Technologies
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>
          <p className="text-xs font-mono text-muted-foreground mb-10">
            Proficiency: <span className="text-primary">Expert</span> · <span className="text-primary">Proficient</span> · <span className="text-primary">Familiar</span>
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-gradient rounded-lg p-6 glow-border hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-primary">{cat.icon}</span>
                  <h3 className="font-semibold text-foreground">{cat.title}</h3>
                  {cat.learning && (
                    <span className="ml-auto px-2 py-0.5 text-xs rounded-full bg-primary/15 text-primary font-mono border border-primary/30 animate-pulse">
                      learning
                    </span>
                  )}
                </div>
                <div className="space-y-3">
                  {cat.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="text-sm font-mono text-secondary-foreground truncate">
                          {skill.name}
                        </div>
                        {skill.note && (
                          <div className="text-[11px] text-muted-foreground font-mono mt-0.5">
                            {skill.note}
                          </div>
                        )}
                      </div>
                      {skill.learning ? (
                        <span className="px-2 py-0.5 text-[10px] rounded-full bg-primary/15 text-primary font-mono border border-primary/30 shrink-0">
                          Learning
                        </span>
                      ) : (
                        <span
                          className={`px-2 py-0.5 text-[10px] rounded-full font-mono border shrink-0 ${tierStyles[skill.tier!]}`}
                        >
                          {skill.tier}
                        </span>
                      )}
                    </div>
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

export default SkillsSection;
