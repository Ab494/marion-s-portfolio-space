import { motion } from "framer-motion";
import { Layers, Brain, Globe2 } from "lucide-react";

const cards = [
  {
    icon: <Layers size={24} />,
    title: "End-to-End Ownership",
    body: "I take projects from idea to deployed product, handling frontend, backend, database, and hosting. You get one accountable engineer instead of a fragmented team.",
  },
  {
    icon: <Brain size={24} />,
    title: "Data + Web in One",
    body: "Rare combination of full-stack MERN development AND Python data/ML skills. I can ship the app and the analytics or model that makes it smarter.",
  },
  {
    icon: <Globe2 size={24} />,
    title: "Kenya-Context Expertise",
    body: "Comfortable integrating M-Pesa, Africa's Talking, and other tooling that East African markets rely on. Local context, production-quality delivery.",
  },
];

const WhyHireMeSection = () => {
  return (
    <section id="why" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">★</span>
            What I Bring
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="card-gradient rounded-lg p-6 glow-border hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 text-primary flex items-center justify-center mb-4">
                  {c.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{c.title}</h3>
                <p className="text-sm text-slate-text leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMeSection;
