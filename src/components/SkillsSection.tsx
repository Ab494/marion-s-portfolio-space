import { motion } from "framer-motion";
import { Code2, Server, Database, Brain, Shield, MessageSquare } from "lucide-react";

type Skill = { name: string; level?: number; learning?: boolean };

const categories: { title: string; icon: JSX.Element; skills: Skill[]; learning?: boolean }[] = [
  {
    title: "Frontend",
    icon: <Code2 size={20} />,
    skills: [
      { name: "React.js", level: 85 },
      { name: "HTML5", level: 90 },
      { name: "CSS3", level: 88 },
      { name: "JavaScript", level: 85 },
    ],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
    ],
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    skills: [
      { name: "MongoDB", level: 75 },
      { name: "MySQL", level: 70 },
    ],
  },
  {
    title: "AI/ML & Data",
    icon: <Brain size={20} />,
    skills: [
      { name: "Python", level: 82 },
      { name: "Machine Learning", level: 70 },
      { name: "Data Science", level: 72 },
      { name: "Statistics", level: 75 },
    ],
  },
  {
    title: "Currently Learning",
    icon: <Shield size={20} />,
    skills: [{ name: "Cybersecurity", learning: true }],
    learning: true,
  },
  {
    title: "Soft Skills",
    icon: <MessageSquare size={20} />,
    skills: [
      { name: "Communication", level: 90 },
      { name: "Creative Problem Solving", level: 85 },
      { name: "Time Management", level: 80 },
    ],
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
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">02.</span>
            Skills & Technologies
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

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
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-mono text-secondary-foreground">
                          {skill.name}
                        </span>
                        {skill.learning ? (
                          <span className="px-2 py-0.5 text-[10px] rounded-full bg-primary/15 text-primary font-mono border border-primary/30">
                            Learning
                          </span>
                        ) : (
                          <span className="text-[10px] font-mono text-muted-foreground">
                            {skill.level}%
                          </span>
                        )}
                      </div>
                      {!skill.learning && (
                        <div className="h-1.5 w-full rounded-full bg-secondary overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="h-full rounded-full bg-primary"
                          />
                        </div>
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
