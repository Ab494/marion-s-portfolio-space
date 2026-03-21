import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Linkedin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder submit
    alert("Thanks for reaching out! (This is a placeholder — form backend not yet connected.)");
    setForm({ name: "", email: "", message: "" });
  };

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
          <p className="text-slate-text mb-8">
            I'm always open to new opportunities and collaborations. Whether you have a question
            or just want to say hi, feel free to reach out!
          </p>

          <form onSubmit={handleSubmit} className="text-left space-y-4 mb-8">
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
              className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground font-mono text-sm font-medium hover:bg-primary/90 transition-colors w-full justify-center"
            >
              <Send size={16} />
              Send Message
            </button>
          </form>

          <a
            href="https://linkedin.com/in/marion-kipruto-a58a602a4"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm"
          >
            <Linkedin size={18} />
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
