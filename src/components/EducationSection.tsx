import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

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

          <div className="max-w-2xl">
            <div className="card-gradient rounded-lg p-6 glow-border flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                <GraduationCap size={24} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  The Technical University of Kenya
                </h3>
                <p className="text-primary font-mono text-sm mb-2">2020 – 2023</p>
                <p className="text-slate-text text-sm leading-relaxed">
                  Studied statistics and data science, building a strong foundation in
                  analytical thinking, software development, and applied mathematics.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
