import { motion } from "framer-motion";
import { ArrowDown, Download, MapPin, Sparkles } from "lucide-react";
import Typewriter from "./Typewriter";
import HeroParticles from "./HeroParticles";
import profileImg from "@/assets/marion-profile.jpeg";

const techStack = [
  { name: "Django", icon: "🌐" },
  { name: "React", icon: "⚛️" },
  { name: "Node.js", icon: "🟢" },
  { name: "Python", icon: "🐍" },
  { name: "MongoDB", icon: "🍃" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "MySQL", icon: "🐬" },
];

const isOpenToWork = true;

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-16"
      style={{ background: "var(--gradient-hero)" }}
    >
      <HeroParticles />

      {/* Background blobs */}
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
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16 text-center md:text-left">

            {/* Avatar with ring animation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="shrink-0 mx-auto md:mx-0"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl animate-pulse-glow scale-110" />
                <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden ring-2 ring-primary/50 shadow-[0_0_40px_hsl(var(--primary)/0.2)]">
                  <img
                    src={profileImg}
                    alt="Marion Kipruto headshot"
                    loading="eager"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Online indicator */}
                <span className="absolute bottom-2 right-2 w-4 h-4 rounded-full bg-emerald-400 border-2 border-background shadow-lg">
                  <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-75" />
                </span>
              </div>
            </motion.div>

            {/* Text content */}
            <div className="flex-1 min-w-0">
              {/* Greeting */}
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-primary font-mono text-base sm:text-lg mb-2 flex items-center gap-2 justify-center md:justify-start"
              >
                <Sparkles size={16} className="text-primary" />
                Hi, my name is
              </motion.p>

              {/* Name */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-3 leading-tight"
              >
                Marion Kipruto.
              </motion.h1>

              {/* Role */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl font-semibold text-muted-foreground mb-4"
              >
                Full Stack Developer specializing in{" "}
                <span className="text-gradient">MERN, Django, and Python.</span>
              </motion.h2>

              {/* Typewriter */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-slate-text text-base mb-4 leading-relaxed min-h-[1.75rem]"
              >
                <Typewriter
                  words={["Full Stack Developer", "Django Developer", "Python Developer", "React Developer"]}
                  className="text-primary font-mono"
                />
              </motion.div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex items-center justify-center md:justify-start gap-2 text-muted-foreground text-sm mb-7"
              >
                <MapPin size={14} className="text-primary" />
                Eldoret, Kenya
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                className="flex flex-wrap gap-3 mb-4 justify-center md:justify-start"
              >
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-primary text-primary font-mono text-sm hover:bg-primary/10 transition-all duration-200 hover:-translate-y-0.5"
                >
                  View My Work
                  <ArrowDown size={15} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-primary text-primary-foreground font-mono text-sm font-medium hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  Contact Me
                </a>
                <a
                  href="/marion-kipruto-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded border border-border text-muted-foreground font-mono text-sm hover:border-primary hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Download size={15} />
                  Download CV
                </a>
              </motion.div>

              {/* Badges */}
              {isOpenToWork && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                  className="flex flex-wrap gap-2 justify-center md:justify-start mb-8"
                >
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    </span>
                    Open to Work
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-primary/40 bg-primary/10 text-primary">
                    Open to Opportunities
                  </span>
                </motion.div>
              )}

              {/* Tech stack */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                className="flex flex-wrap gap-4 justify-center md:justify-start"
              >
                {techStack.map((t, i) => (
                  <motion.div
                    key={t.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 1.1 + i * 0.07 }}
                    className="flex flex-col items-center gap-1 group"
                  >
                    <div className="w-11 h-11 rounded-lg card-gradient glow-border flex items-center justify-center text-xl group-hover:-translate-y-1.5 group-hover:shadow-[0_0_16px_hsl(var(--primary)/0.3)] transition-all duration-200">
                      {t.icon}
                    </div>
                    <span className="text-[10px] text-muted-foreground font-mono group-hover:text-primary transition-colors">{t.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;