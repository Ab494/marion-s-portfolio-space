import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/coder4-c", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/marion-kipruto-a58a602a4", label: "LinkedIn" },
  { icon: Mail, href: "mailto:marionkipruto21@gmail.com", label: "Email" }
];

const SocialStrip = () => (
  <div className="hidden lg:flex fixed left-6 bottom-0 z-40 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-border after:mt-2">
    {socials.map(({ icon: Icon, href, label }) => (
      <a
        key={label}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-200"
      >
        <Icon size={18} />
      </a>
    ))}
  </div>
);

export default SocialStrip;
