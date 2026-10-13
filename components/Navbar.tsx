import { ArrowUpLeft } from "lucide-react";

const navItems = [
  { label: "الرئيسية", href: "#home" },
  { label: "من أنا", href: "#about" },
  { label: "مشاريعي", href: "#projects" },
  { label: "التعليم", href: "#education" },
  { label: "تواصل", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="reference-nav-wrap">
      <nav className="reference-navbar" aria-label="التنقل الرئيسي">
        <a className="reference-brand" href="#home" aria-label="Peter Medhat الرئيسية">
          <span className="brand-mark">PM</span>
          <span className="brand-copy"><strong>Peter Medhat</strong><small>Software Developer</small></span>
        </a>
        <div className="reference-nav-links">
          {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </div>
        <a className="nav-contact" href="#contact">ابدأ تواصلاً <ArrowUpLeft size={13} /></a>
      </nav>
    </header>
  );
}
