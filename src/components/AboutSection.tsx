import { motion } from "framer-motion";
import { Shield } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-12">
            <span className="text-primary font-mono text-lg">01.</span>
            About Me
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            <div className="md:col-span-2 space-y-4 text-slate-text leading-relaxed">
              <p>
                Hello! I'm Marion, a passionate Full Stack Developer based in Nairobi, Kenya.
                I enjoy creating things that live on the internet whether that's websites, applications,
                data driven insights, or anything in between.
              </p>
              <p>
                I graduated from <span className="text-foreground">The Technical University of Kenya</span> (2020–2023),
                where I built a strong foundation in statistics.
                My passion lies in combining web development with AI/ML to build intelligent,
                user centric applications.
              </p>
              <p>
                I specialize in the <span className="text-primary">MERN Stack</span> (MongoDB, Express, React, Node.js)
                and love working with Python for data analysis and machine learning projects.
              </p>

              <div className="flex items-center gap-3 mt-6 p-4 rounded-lg glow-border card-gradient">
                <Shield className="text-primary shrink-0" size={20} />
                <p className="text-sm text-foreground">
                  Currently expanding into <span className="text-primary font-medium">Cybersecurity</span> 
                  because building great software means securing it too!
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative w-56 h-56 rounded-lg overflow-hidden glow-border group">
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10" />
                <div className="w-full h-full bg-secondary flex items-center justify-center text-muted-foreground text-sm font-mono">
                  Photo
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
