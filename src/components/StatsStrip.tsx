import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 4, suffix: "+", label: "Projects Shipped" },
  { value: 3, suffix: "+", label: "Years Experience" },
  { value: 6, suffix: "+", label: "Technologies" },
  { value: 2, suffix: "", label: "Specializations" },
];

const useCountUp = (target: number, start: boolean, duration = 1500) => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      setVal(Math.round(target * (1 - Math.pow(1 - p, 3))));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, start, duration]);
  return val;
};

const StatItem = ({ value, suffix, label, delay, start }: { value: number; suffix: string; label: string; delay: number; start: boolean }) => {
  const count = useCountUp(value, start);
  const done = count === value;
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl font-bold text-primary font-mono mb-1">
        {count}
        {done && suffix}
      </div>
      <div className="text-xs md:text-sm text-muted-foreground uppercase tracking-wider">
        {label}
      </div>
    </motion.div>
  );
};

const StatsStrip = () => {
  const ref = useRef<HTMLElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-12 bg-navy-deep border-y border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <StatItem key={s.label} {...s} delay={i * 0.1} start={start} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsStrip;
