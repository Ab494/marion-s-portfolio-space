import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Shield, ExternalLink } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Full-Stack Development — MERN Stack Specialization",
    period: "2025",
    badge: "2025 · Certified",
    description:
      "16-week intensive software development program covering Python, Web Technologies, Database Management, Software Engineering Essentials, and Startup Building — with a specialization in Full-Stack MERN Stack development.",
    certificateUrl: "/MARION FULL STACK PLP_page-0001.jpg",
    institution: "Power Learn Project (PLP) · in partnership with EMURGO Africa",
    duration: "16 weeks",
  },
  {
    icon: GraduationCap,
    title: "The Technical University of Kenya",
    period: "2020 – 2023",
    description:
      "Studied statistics and data science, building a strong foundation in analytical thinking, software development, and applied mathematics.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Fundamentals",
    period: "2025 – Completed May 2026",
    description:
      "Completed comprehensive cybersecurity training at ALX Africa, gaining hands-on experience in network security, ethical hacking, and vulnerability assessment. This training has equipped me with a strong understanding of cybersecurity principles and best practices, which I apply to ensure the security and integrity of the applications I develop.",
  },
];

const EducationSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalSrc, setModalSrc] = useState("");

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowModal(false);
    };
    if (showModal) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [showModal]);
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

          <div className="max-w-2xl space-y-4">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="card-gradient rounded-lg p-6 glow-border flex items-start gap-4"
                >
                  <div className="p-3 rounded-lg bg-primary/10 text-primary shrink-0">
                    <Icon size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                    {item.institution && (
                      <p className="text-muted-foreground text-sm mb-1">{item.institution}</p>
                    )}
                    <div className="flex items-center gap-2 mb-2">
                      <p className="text-primary font-mono text-sm">{item.period}</p>
                      {item.badge && (
                        <span className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full text-xs font-mono border border-emerald-400/40 bg-emerald-400/10 text-emerald-300">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-slate-text text-sm leading-relaxed mb-3">{item.description}</p>
                    {item.certificateUrl && (
                      <button
                        onClick={() => {
                          setModalSrc(item.certificateUrl!);
                          setShowModal(true);
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded border border-primary text-primary font-mono text-sm hover:bg-primary/10 transition-colors duration-200"
                      >
                        <ExternalLink size={14} />
                        View Certificate
                      </button>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/85 z-50 flex items-center justify-center p-4"
            onClick={() => setShowModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative max-w-[900px] w-full bg-white rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 left-4 bg-teal-500 text-white px-4 py-2 rounded font-mono text-sm hover:bg-teal-600 transition-colors z-10"
                onClick={() => setShowModal(false)}
              >
                ← Back to Portfolio
              </button>
              <img
                src={modalSrc}
                alt="Certificate"
                className="w-full h-auto max-h-[80vh] object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EducationSection;
