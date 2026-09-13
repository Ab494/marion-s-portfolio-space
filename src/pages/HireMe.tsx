import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  Check,
  Clock,
  Code2,
  Database,
  Globe,
  Layers,
  Mail,
  MessageCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import SocialStrip from "@/components/SocialStrip";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const packages = [
  {
    name: "Starter",
    range: "$500 – $1,500",
    timeline: "1 – 2 weeks",
    icon: Zap,
    description: "Perfect for a polished landing page, marketing site, or focused feature upgrade.",
    features: [
      "Single-page or small multi-page site",
      "Responsive, mobile-first design",
      "Basic SEO & performance tuning",
      "1 round of revisions",
      "Source code handover",
    ],
    tech: ["React", "HTML/CSS", "JavaScript", "Tailwind"],
    cta: "Start a Starter Project",
  },
  {
    name: "Professional",
    range: "$2,000 – $5,000",
    timeline: "3 – 6 weeks",
    icon: Layers,
    description: "Full-stack web apps, dashboards, and MVPs with real data and user flows.",
    features: [
      "Custom frontend + backend architecture",
      "REST/GraphQL API design",
      "Database schema & integration",
      "Authentication & user roles",
      "2 rounds of revisions",
      "Deployment & launch support",
    ],
    tech: ["MERN", "Next.js", "Django", "PostgreSQL", "MongoDB"],
    cta: "Build a Professional App",
    featured: true,
  },
  {
    name: "Enterprise",
    range: "$5,000+",
    timeline: "6+ weeks",
    icon: Rocket,
    description: "Complex systems, ML-integrated products, or long-term engineering partnerships.",
    features: [
      "End-to-end system design",
      "Python data/ML pipelines",
      "Third-party integrations (M-Pesa, APIs)",
      "Scalable cloud deployment",
      "Priority support & maintenance",
      "Dedicated project updates",
    ],
    tech: ["Python", "TensorFlow", "AWS/Vercel", "Docker", "Redis"],
    cta: "Plan an Enterprise Build",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    duration: "1 – 3 days",
    icon: MessageCircle,
    description:
      "We clarify goals, target users, features, and constraints so the scope is tight and realistic.",
  },
  {
    step: "02",
    title: "Design & Planning",
    duration: "3 – 7 days",
    icon: Sparkles,
    description:
      "Wireframes, tech-stack decisions, database architecture, and a milestone plan you can track.",
  },
  {
    step: "03",
    title: "Development",
    duration: "Project dependent",
    icon: Code2,
    description:
      "Iterative builds with weekly demos. You see working software early, not just at the end.",
  },
  {
    step: "04",
    title: "Testing & QA",
    duration: "1 – 2 weeks",
    icon: ShieldCheck,
    description:
      "Cross-device testing, performance checks, security basics, and bug fixes before launch.",
  },
  {
    step: "05",
    title: "Deployment & Handover",
    duration: "3 – 5 days",
    icon: Globe,
    description:
      "Live deployment, documentation, and a walkthrough so your team can own the product.",
  },
];

const valueCards = [
  {
    icon: Clock,
    title: "Predictable Delivery",
    body: "Fixed milestones, weekly updates, and clear communication so there are no surprises.",
  },
  {
    icon: Database,
    title: "Full-Stack Ownership",
    body: "One engineer for frontend, backend, database, and deployment. Less overhead, faster shipping.",
  },
  {
    icon: Check,
    title: "Quality-First Code",
    body: "Clean, documented code built with scalability, performance, and maintainability in mind.",
  },
];

const faqs = [
  {
    question: "How do we communicate during the project?",
    answer:
      "I use Slack, email, or Google Meet for regular check-ins. Expect weekly progress demos and async updates between calls.",
  },
  {
    question: "What is your payment structure?",
    answer:
      "Typically 50% upfront to kick off, 25% at midpoint, and 25% on delivery. For larger engagements, we can split into monthly milestones.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes. I'm based in Nairobi but work with teams across time zones. I schedule overlap hours and keep everything async-friendly.",
  },
  {
    question: "Can you maintain the project after launch?",
    answer:
      "Absolutely. I offer monthly retainer packages for updates, monitoring, and feature additions after the initial build goes live.",
  },
  {
    question: "What if I only need a small fix or feature?",
    answer:
      "Small tasks are billed hourly or as a mini-sprint. Reach out with the details and I'll give you a quick estimate.",
  },
];

const HireMe = () => {
  return (
    <>
      <Navbar />
      <SocialStrip />
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-3xl" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono border border-emerald-400/40 bg-emerald-400/10 text-emerald-300 mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                </span>
                Available for new projects
              </span>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
                Hire <span className="text-gradient">Martha</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-text leading-relaxed mb-8">
                Need a reliable full-stack engineer who can own the frontend, backend, and data layer? Let's turn your idea into a shipped product.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#packages"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground font-mono text-sm font-medium hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  View Packages
                  <ArrowRight size={16} />
                </a>
                <a
                  href="mailto:marionrutto21@gmail.com"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border text-muted-foreground font-mono text-sm hover:border-primary hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Mail size={16} />
                  Send an Email
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Packages */}
        <section id="packages" className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-primary font-mono text-sm mb-2">01. Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Transparent Pricing & Timelines</h2>
              <p className="text-slate-text max-w-2xl mx-auto">
                Every project is scoped to your needs. Below are typical ranges to help you budget before we talk details.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {packages.map((pkg, i) => {
                const Icon = pkg.icon;
                return (
                  <motion.div
                    key={pkg.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className={`relative rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 ${
                      pkg.featured
                        ? "card-gradient glow-border shadow-[0_0_30px_hsl(var(--primary)/0.15)]"
                        : "card-gradient border border-border hover:border-primary/40"
                    }`}
                  >
                    {pkg.featured && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-[10px] font-mono uppercase tracking-wider rounded-full bg-primary text-primary-foreground">
                        Most Popular
                      </span>
                    )}
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2.5 rounded-lg bg-primary/10 text-primary">
                        <Icon size={22} />
                      </div>
                      <h3 className="text-xl font-bold text-foreground">{pkg.name}</h3>
                    </div>
                    <div className="mb-4">
                      <span className="text-3xl font-bold text-gradient">{pkg.range}</span>
                    </div>
                    <p className="text-sm text-slate-text mb-6 leading-relaxed">{pkg.description}</p>
                    <div className="flex items-center gap-2 text-xs font-mono text-primary mb-6">
                      <Calendar size={14} />
                      {pkg.timeline}
                    </div>
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check size={16} className="text-primary shrink-0 mt-0.5" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {pkg.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-1 text-[10px] rounded-full bg-secondary text-secondary-foreground font-mono border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <a
                      href="mailto:marionrutto21@gmail.com?subject=Project%20Inquiry%20-%20Martha%20Jerop"
                      className={`block text-center w-full py-2.5 rounded font-mono text-sm transition-colors ${
                        pkg.featured
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "border border-primary text-primary hover:bg-primary/10"
                      }`}
                    >
                      {pkg.cta}
                    </a>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-24 bg-navy-deep">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <p className="text-primary font-mono text-sm mb-2">02. Process</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Work Together</h2>
              <p className="text-slate-text max-w-2xl mx-auto">
                A simple, repeatable process that keeps projects on track and gives you visibility at every stage.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="flex flex-col md:flex-row gap-6 p-6 rounded-xl card-gradient border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="shrink-0 flex items-start gap-4 md:w-64">
                      <span className="text-3xl font-bold text-primary/30 font-mono">{step.step}</span>
                      <div>
                        <div className="p-2 rounded-lg bg-primary/10 text-primary w-fit mb-2">
                          <Icon size={18} />
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 text-xs font-mono text-primary mb-2">
                        <Clock size={14} />
                        {step.duration}
                      </div>
                      <p className="text-slate-text leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Value cards */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {valueCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                    className="card-gradient rounded-lg p-6 glow-border hover:-translate-y-1 transition-transform duration-300"
                  >
                    <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/30 text-primary flex items-center justify-center mb-4">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
                    <p className="text-sm text-slate-text leading-relaxed">{card.body}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 bg-navy-deep">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto"
            >
              <div className="text-center mb-12">
                <p className="text-primary font-mono text-sm mb-2">03. FAQ</p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Common Questions</h2>
              </div>
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="rounded-lg border border-border bg-card/60 px-6 data-[state=open]:border-primary/40"
                  >
                    <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-4">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-slate-text pb-4 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center card-gradient rounded-2xl p-10 md:p-14 glow-border"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to start?</h2>
              <p className="text-slate-text mb-8 leading-relaxed">
                Tell me about your project, timeline, and budget. I'll reply within 24 hours with a clear plan and next steps.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:marionrutto21@gmail.com?subject=Project%20Inquiry%20-%20Martha%20Jerop"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-primary-foreground font-mono text-sm font-medium hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
                >
                  <Mail size={16} />
                  Get a Free Estimate
                </a>
                <a
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded border border-border text-muted-foreground font-mono text-sm hover:border-primary hover:text-primary transition-all duration-200 hover:-translate-y-0.5"
                >
                  Back to Portfolio
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default HireMe;
