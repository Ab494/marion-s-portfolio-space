import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin, Mail, Github } from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xykoqrdg";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  useEffect(() => {
    if (status === "success" || status === "error") {
      const t = setTimeout(() => setStatus("idle"), 3000);
      return () => clearTimeout(t);
    }
  }, [status]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message, _replyto: form.email }),
      });
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const buttonLabel =
    status === "sending" ? "Sending..." : status === "success" ? "Sent!" : "Send Message";

  return (
    <section id="contact" className="py-24 bg-navy-deep">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="max-w-xl mx-auto text-center"
        >
          <p className="text-primary font-mono text-sm mb-2">06. What's Next?</p>
          <h2 className="text-3xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-slate-text mb-4">
            I'm always open to new opportunities and collaborations. Whether you have a question
            or just want to say hi, feel free to reach out!
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-mono">
              Available for:
            </span>
            {[
              "Full-time",
              "Freelance",
              "Contract",
            ].map((t) => (
              <span
                key={t}
                className="px-2.5 py-0.5 text-[11px] rounded-full bg-primary/10 text-primary font-mono border border-primary/30"
              >
                {t}
              </span>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="text-left space-y-4 mb-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <textarea
              placeholder="Your Message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground font-mono text-sm font-medium hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed transition-colors w-full justify-center"
            >
              <Send size={16} />
              {buttonLabel}
            </button>
            {status === "success" && (
              <p className="text-sm text-primary text-center font-mono">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive text-center font-mono">
                Something went wrong. Please try again.
              </p>
            )}
          </form>

          <div className="flex justify-center gap-4 mt-4">
            <a href="mailto:marionrutto21@gmail.com" aria-label="Email" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail size={18} />
            </a>
            <a href="https://github.com/coder4-c" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
            <a href="https://linkedin.com/in/marion-kipruto-a58a602a4" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

