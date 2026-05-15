import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import Typewriter from "./Typewriter";
import HeroParticles from "./HeroParticles";
import profileImg from "@/assets/marion-profile.jpeg";

const techStack = [
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "MongoDB", icon: "🍃" },
];

// Toggle to show/hide the "Open to Work" badge
const isOpenToWork = true;

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <HeroParticles />
      <div className="absolute inset-0 overflow-hidden z-0">
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
          className="max-w-4xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-10 text-center md:text-left">
            {/* Avatar */}
            <div className="shrink-0 mx-auto md:mx-0">
              <div className="relative w-32 h-32 md:w-36 md:h-36 rounded-full overflow-hidden glow-border ring-2 ring-primary/40">
                <img
                  src={profileImg}
                  alt="Marion Kipruto headshot"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              {isOpenToWork && (
                <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-mono border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                  </span>
                  Open to Work
                </span>
              )}
              <span className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full text-xs font-mono border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
                Open to Opportunities
              </span>
              <p className="text-primary font-mono text-sm mb-2">Hi, my name is</p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-2">
                Marion Kipruto.
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-muted-foreground mb-5">
                Full Stack Developer specializing in scalable web apps and data-driven solutions.
              </h2>
              <div className="text-slate-text text-lg mb-2 leading-relaxed min-h-[1.75rem]">
                <Typewriter
                  words={["Full Stack Developer", "Data Scientist", "AI/ML Expert"]}
                  className="text-primary font-mono"
                />
              </div>
              <p className="text-slate-text text-sm mb-3">
                3+ years building production-ready apps with MERN, Next.js and Python.
              </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground text-sm mb-8">
                <MapPin size={16} className="text-primary" />
                Eldoret, Kenya
              </div>

              <div className="flex flex-wrap gap-4 mb-10 justify-center md:justify-start">
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
                {/* TODO: Replace /marion-kipruto-cv.pdf with actual hosted PDF in /public */}
                <a
                  href="/marion-kipruto-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border text-muted-foreground font-mono text-sm hover:border-primary hover:text-primary transition-colors duration-200"
                >
                  <Download size={16} />
                  Download CV
                </a>
              </div>

              {/* Tech stack row */}
              <div className="flex flex-wrap gap-6 justify-center md:justify-start">
                {techStack.map((t) => (
                  <div key={t.name} className="flex flex-col items-center gap-1">
                    <div className="w-12 h-12 rounded-lg card-gradient glow-border flex items-center justify-center text-2xl hover:-translate-y-1 transition-transform">
                      {t.icon}
                    </div>
                    <span className="text-xs text-muted-foreground font-mono">{t.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
