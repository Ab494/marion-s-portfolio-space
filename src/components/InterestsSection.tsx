import { motion } from "framer-motion";
import { Cpu, Brain, Puzzle, Users } from "lucide-react";

const interests = [
  {
    icon: Cpu,
    title: "Technology & Innovation",
    description: "Staying ahead of web development trends and exploring cutting-edge tools and frameworks.",
  },
  {
    icon: Brain,
    title: "Data & AI",
    description: "Passionate about machine learning applications and turning data into actionable insights.",
  },
  {
    icon: Puzzle,
    title: "Problem Solving",
    description: "Enjoy tackling complex challenges and finding elegant solutions through code.",
  },
  {
    icon: Users,
    title: "Community & Mentorship",
    description: "Sharing knowledge through open-source contributions and helping others learn programming.",
  },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-24 bg-navy-deep">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">07.</span>
            Interests
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, i) => {
              const Icon = interest.icon;
              return (
                <motion.div
                  key={interest.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card-gradient rounded-lg p-6 glow-border hover:shadow-lg transition-shadow duration-300 text-center"
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{interest.title}</h3>
                  <p className="text-slate-text text-sm leading-relaxed">{interest.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InterestsSection;