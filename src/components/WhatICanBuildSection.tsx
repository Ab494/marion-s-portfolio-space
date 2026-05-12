import { motion } from "framer-motion";
import { Globe, Server, BarChart3, Database } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Full-Stack Web Applications",
    description: "End-to-end MERN apps with clean UI and scalable backend architecture",
  },
  {
    icon: Server,
    title: "REST API Development",
    description: "Secure, well-documented APIs using Node.js/Express or Python/Django",
  },
  {
    icon: BarChart3,
    title: "Data-Driven Web Apps",
    description: "Applications that combine web interfaces with Python data processing and ML models",
  },
  {
    icon: Database,
    title: "Database Design & Optimization",
    description: "Efficient MongoDB, MySQL, or PostgreSQL schemas built for performance",
  },
];

const WhatICanBuildSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="flex items-center gap-3 text-2xl font-bold text-foreground mb-12">
            What I Can Build For You
            <span className="h-px flex-1 max-w-xs bg-border" />
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
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
                  <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                  <p className="text-slate-text text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhatICanBuildSection;