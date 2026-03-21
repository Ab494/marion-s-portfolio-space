import { motion } from "framer-motion";
import { Code2, Server, Database, Brain, Shield, MessageSquare } from "lucide-react";

const categories = [
  {
    title: "Frontend",
    icon: <Code2 size={20} />,
    skills: ["React.js", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Backend",
    icon: <Server size={20} />,
    skills: ["Node.js", "Express.js"],
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "AI/ML & Data",
    icon: <Brain size={20} />,
    skills: ["Python", "Machine Learning", "Data Science", "Statistics"],
  },
  {
    title: "Currently Learning",
    icon: <Shield size={20} />,
    skills: ["Cybersecurity"],
    learning: true,
  },
  {
    title: "Soft Skills",
    icon: <MessageSquare size={20} />,
    skills: ["Communication", "Creative Problem Solving", "Time Management"],
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
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 text-xs rounded-full bg-secondary text-secondary-foreground font-mono"
                    >
                      {skill}
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

export default SkillsSection;
