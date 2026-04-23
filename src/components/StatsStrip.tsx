import { motion } from "framer-motion";

const stats = [
  { value: "4+", label: "Projects Shipped" },
  { value: "3+", label: "Years Experience" },
  { value: "6+", label: "Technologies" },
  { value: "2", label: "Specializations" },
];

const StatsStrip = () => (
  <section className="py-12 bg-navy-deep border-y border-border">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="text-3xl md:text-4xl font-bold text-primary font-mono mb-1">
              {s.value}
            </div>
            <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsStrip;
