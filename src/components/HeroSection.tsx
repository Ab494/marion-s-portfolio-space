import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import Typewriter from "./Typewriter";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "MongoDB", icon: "🍃" },
];

const handleDownloadCV = () => {
  // Placeholder CV download — generates a simple text file
  const content = "Marion Kipruto — Full Stack Developer | Data Scientist | AI/ML Expert\nNairobi, Kenya\n\nReplace this placeholder with your actual CV file.";
  const blob = new Blob([content], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "Marion-Kipruto-CV.txt";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/5 animate-pulse-glow"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 4 + 2}s`,
            }}
          />
        ))}
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-teal-dim/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl"
        >
          <p className="text-primary font-mono text-sm mb-4">Hi, my name is</p>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-3">
            Marion Kipruto.
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-muted-foreground mb-6">
            I build things for the web & data.
          </h2>
          <div className="text-slate-text max-w-xl text-lg mb-3 leading-relaxed min-h-[1.75rem]">
            <Typewriter
              words={["Full Stack Developer", "Data Scientist", "AI/ML Expert"]}
              className="text-primary font-mono"
            />
          </div>
          <div className="flex items-center gap-2 text-muted-foreground text-sm mb-8">
            <MapPin size={16} className="text-primary" />
            Nairobi, Kenya
          </div>

          <div className="flex flex-wrap gap-4 mb-10">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-primary text-primary font-mono text-sm hover:bg-primary/10 transition-colors duration-200"
            >
              View My Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground font-mono text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Contact Me
            </a>
            <button
              type="button"
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border text-muted-foreground font-mono text-sm hover:border-primary hover:text-primary transition-colors duration-200"
            >
              <Download size={16} />
              Download CV
            </button>
          </div>

          {/* Tech stack row */}
          <div className="flex flex-wrap gap-6">
            {techStack.map((t) => (
              <div key={t.name} className="flex flex-col items-center gap-1">
                <div className="w-12 h-12 rounded-lg card-gradient glow-border flex items-center justify-center text-2xl hover:-translate-y-1 transition-transform">
                  {t.icon}
                </div>
                <span className="text-xs text-muted-foreground font-mono">{t.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
