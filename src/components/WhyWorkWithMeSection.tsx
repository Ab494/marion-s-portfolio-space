import { motion } from "framer-motion";
import { Zap, MessageCircle, Code } from "lucide-react";

const reasons = [
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "I prioritize efficient workflows and realistic timelines to deliver high-quality work on schedule. My experience with agile methodologies ensures projects move forward quickly without compromising on thorough testing and polish.",
  },
  {
    icon: MessageCircle,
    title: "Clear Communication",
    description: "I believe in transparent, regular updates throughout the development process. You'll always know the progress, challenges, and next steps, with weekly check-ins and immediate responses to your questions.",
  },
  {
    icon: Code,
    title: "Clean Scalable Code",
    description: "Every project I build is structured for growth and maintainability. I write readable, well-documented code that follows industry best practices, making it easy for your team to modify and extend in the future.",
  },
];

const WhyWorkWithMeSection = () => {
  return (
    <section id="why-work-with-me" className="py-24 bg-navy-deep">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">03.</span>
            Why Work With Me
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card-gradient rounded-lg p-6 glow-border hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Icon size={20} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground">{reason.title}</h3>
                  </div>
                  <p className="text-slate-text text-sm leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyWorkWithMeSection;