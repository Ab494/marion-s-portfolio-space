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
                Hello! I'm Martha Jerop, a passionate Full Stack Developer based in Sydney, Australia.
                I enjoy creating things that live on the internet whether that's websites, applications,
                data driven insights, or anything in between.
              </p>
              
              <p>
                I specialize in the <span className="text-primary">MERN Stack</span> (MongoDB, Express, React, Node.js)
                and love working with Python for data analysis and machine learning projects.
              </p>

              <p>
                I Completed Cybersecurity training at ALX Africa in 2026 May, where I gained hands-on experience with network security, ethical hacking, and vulnerability assessment.
                This training has equipped me with a strong understanding of cybersecurity principles and best practices, which I apply to ensure the security and integrity of the applications I develop.
              </p>
            </div>

            <div className="flex justify-center">
              <div className="relative w-56 rounded-lg overflow-hidden glow-border group" style={{ aspectRatio: "3 / 4" }}>
                <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300 z-10 pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
