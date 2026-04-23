import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/marion", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/marion-kipruto-a58a602a4", label: "LinkedIn" },
  { icon: Mail, href: "mailto:marionkipruto@email.com", label: "Email" },
];

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 bg-background border-t border-border">
      <div className="container mx-auto px-4 flex flex-col items-center gap-4">
        <div className="flex items-center gap-5">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
        <p className="text-muted-foreground text-sm font-mono text-center">
          Designed & Built by Marion Kipruto
        </p>
        <p className="text-muted-foreground/70 text-xs font-mono">© {year} Marion Kipruto</p>
        <a
          href="#hero"
          className="inline-flex items-center gap-1 text-xs font-mono text-muted-foreground hover:text-primary transition-colors"
        >
          Back to top <ArrowUp size={12} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
