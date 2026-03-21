import { motion } from "framer-motion";
import { Briefcase, MapPin } from "lucide-react";

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
            <div className="relative pl-8 border-l-2 border-primary/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <div className="card-gradient rounded-lg p-6 glow-border">
                <div className="flex items-start justify-between flex-wrap gap-2 mb-2">
                  <h3 className="text-lg font-semibold text-foreground">Commission Sales Associate</h3>
                  <span className="px-3 py-1 text-xs rounded-full bg-primary/15 text-primary font-mono">
                    Present
                  </span>
                </div>
                <div className="flex items-center gap-2 text-primary font-medium text-sm mb-1">
                  <Briefcase size={14} />
                  Pyypl
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm mb-4">
                  <MapPin size={14} />
                  Nairobi County, Kenya · Apr 2022 – Present
                </div>
                <p className="text-slate-text text-sm leading-relaxed">
                  Driving sales initiatives and client acquisition in the fintech space.
                  Building relationships, onboarding clients, and leveraging technology
                  to streamline sales processes and deliver results.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;
