"use client";

import {
  ArrowDown,
  ArrowUpLeft,
  ChevronLeft,
  ChevronRight,
  Braces,
  Code2,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MessageCircle,
  Server,
  Sparkles,
  Workflow,
} from "lucide-react";
import Image from "next/image";
import type { FormEvent } from "react";
import { useState } from "react";
import Navbar from "@/components/Navbar";

const stack = [
  "Express.js",
  "TypeScript",
  "JavaScript (ES6+)",
  "React.js",
  "MongoDB",
  "RESTful APIs",
  "Low-Code / No-Code",
  "PostgreSQL",
];

const specialties = [
  { title: "Backend Developer", value: "Node.js · Express.js" },
  { title: "Frontend Developer", value: "React · TypeScript" },
  { title: "Database", value: "MongoDB · SQL" },
];

const skillGroups = [
  {
    icon: Server,
    title: "Software Develop",
    tools: ["Node.js", "Express.js", "RESTful APIs"],
    description: "بناء خدمات وواجهات برمجية منظمة وقابلة للتوسع.",
  },
  {
    icon: Layers3,
    title: "WebSites",
    tools: ["React.js", "TypeScript", "JavaScript ES6+"],
    description: "تطوير واجهات تفاعلية واضحة وسريعة الاستجابة.",
  },
  {
    icon: Workflow,
    title: "Database Tools",
    tools: ["MongoDB", "PostgreSQL", "Low-Code"],
    description: "اختيار الأدوات المناسبة وربطها بتدفق عمل عملي.",
  },
];

const workAreas = [
  { number: "01", title: "APIs", detail: "تصميم endpoints واضحة وسهلة الدمج." },
  { number: "02", title: "DataBase", detail: "تنظيم البيانات وربطها باحتياجات التطبيق." },
  { number: "03", title: "Full-Stack WebSites", detail: "توصيل الواجهة بالخدمات وتجهيز تجربة متماسكة." },
];

const projects = [
  {
    number: "01",
    name: "MALEEK",
    title: "MALEEK",
    description: "",
    tags: ["Next.js", "Web Design"],
    theme: "maleek",
    href: "https://maleek1.vercel.app",
  },
  {
    number: "03",
    name: "LoveYou",
    title: "Love WebSite",
    description: "تطبيق حب",
    tags: ["Backend", "APIs", "Social"],
    theme: "bavly",
    href:"https://bavly1.vercel,app",
  },
  {
    number: "04",
    name: "test",
    title: "test",
    description: "test.",
    tags: ["Web Design", "Responsive"],
    theme: "test",
  },
];

export default function Home() {
  const [activeProject, setActiveProject] = useState(1);

  function handleContactSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = String(formData.get("subject") || "تواصل مع Peter Medhat");
    const body = [
      `الاسم: ${formData.get("name")}`,
      `البريد: ${formData.get("email")}`,
      "",
      String(formData.get("message") || ""),
    ].join("\n");

    window.location.href = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <main className="portfolio-page" dir="rtl">
      <div className="space-backdrop" aria-hidden="true">
        <span className="space-glow space-glow-violet" />
        <span className="space-glow space-glow-cyan" />
        <span className="space-stars" />
      </div>

      <Navbar />

      <div className="portfolio-content">
        <section className="hero-reference" id="home">
          <div className="hero-overline">
            <span className="online-indicator" />
            <span>متاح لفرص ومشاريع جديدة</span>
            <span className="hero-overline-index">01 / 05</span>
          </div>

          <div className="hero-content-grid">
            <div className="hero-visual-stage">
              <div className="hero-photo-orbit">
                <span className="photo-tech-tag photo-tech-top">Node.js</span>
                <span className="photo-tech-tag photo-tech-left">REST APIs</span>
                <span className="photo-tech-tag photo-tech-right">React.js</span>
                <div className="hero-photo-placeholder">
                  <Image
                    src="/peter-medhat.jpg"
                    alt="Peter Medhat"
                    fill
                    priority
                    sizes="(max-width: 640px) 164px, 118px"
                    className="profile-photo"
                  />
                </div>
              </div>
              <div className="code-window hero-code-window" dir="ltr" aria-label="Developer profile code">
                <div className="window-bar">
                  <span className="window-dots"><i /><i /><i /></span>
                  <span>developer.ts</span>
                  <Braces size={14} />
                </div>
                <div className="code-lines">
                  <div><span className="code-purple">const</span> developer = {'{'}</div>
                  <div className="code-indent"><span className="code-cyan">name</span>: <span className="code-green">&quot;Peter Medhat&quot;</span>,</div>
                  <div className="code-indent"><span className="code-cyan">role</span>: <span className="code-green">&quot;Software Developer&quot;</span>,</div>
                  <div className="code-indent"><span className="code-cyan">focus</span>: <span className="code-green">&quot;Backend&quot;</span>,</div>
                  <div>{'}'};</div>
                </div>
              </div>
            </div>

            <div className="hero-copy">
              <p className="hero-kicker"><Sparkles size={14} /> مرحباً، أنا</p>
              <h1><span>Peter</span> <strong>Medhat</strong></h1>
              <h2 className="hero-role">Software Developer</h2>
              <p className="hero-description">
                مطور برمجيات أعمل على بناء تطبيقات ويب وحلول عملية تجمع بين الأداء
                وتجربة الاستخدام.
              </p>
              <div className="hero-actions">
                <a className="button-gradient" href="#projects">
                  اكتشف مشاريعي <ArrowUpLeft size={16} />
                </a>
                <a className="button-quiet" href="#contact">تواصل معي</a>
              </div>
            </div>
          </div>
          <a className="scroll-cue" href="#about" aria-label="انتقل إلى نبذة عني">
            <ArrowDown size={15} />
          </a>
        </section>

        <section className="about-reference section-block" id="about">
          <div className="section-heading">
            <span className="section-eyebrow">نبذة عني</span>
            <h2>أبني حلولاً <span>تُحدث فرقاً.</span></h2>
          </div>

          <div className="about-grid">
            <div className="about-copy-panel glass-panel">
              <p>
                أنا Peter Medhat، مطور برمجيات أركز على بناء تطبيقات الويب وتطوير
                الواجهات الخلفية. أعمل على تصميم APIs منظمة، وربطها بواجهات سهلة
                الاستخدام، مع اهتمام بالأداء وجودة التفاصيل.
              </p>
              <p>
                أستمتع بتحويل المتطلبات المعقدة إلى تجارب بسيطة، وأواصل تطوير مهاراتي
                في هندسة البرمجيات وقواعد البيانات.
              </p>
              <div className="specialty-list">
                {specialties.map((item, index) => (
                  <div className="specialty-row" key={item.title}>
                    <span className="specialty-number">0{index + 1}</span>
                    <div><strong>{item.title}</strong><small>{item.value}</small></div>
                    <ArrowUpLeft size={15} />
                  </div>
                ))}
              </div>
            </div>

            <div className="portrait-panel">
              <Image
                src="/peter-medhat-secondary.jpg"
                alt="Peter Medhat"
                fill
                sizes="(max-width: 800px) 100vw, 45vw"
                className="portrait-photo"
              />
              <div className="portrait-caption">
                <span>SOFTWARE DEVELOPER</span>
                <span>CAIRO, EGYPT <i className="online-indicator" /></span>
              </div>
              <div className="portrait-code">&lt;build /&gt;</div>
            </div>
          </div>
        </section>

        <section className="skills-reference section-block" id="skills">
          <div className="section-heading section-heading-row">
            <div>
              <span className="section-eyebrow">المهارات التقنية</span>
              <h2>الأدوات التي <span>أبني بها.</span></h2>
            </div>
            <span className="section-counter">CORE STACK / 08</span>
          </div>
          <div className="skills-card-grid">
            {skillGroups.map(({ icon: Icon, title, tools, description }, index) => (
              <article className="skill-card glass-panel" key={title}>
                <div className="skill-card-top">
                  <span className="skill-card-index">0{index + 1}</span>
                  <span className="skill-card-icon"><Icon size={19} /></span>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="skill-card-tools">
                  {tools.map((tool) => <span key={tool}>{tool}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="work-areas-reference section-block" id="experience">
          <div className="section-heading section-heading-row">
            <div>
              <span className="section-eyebrow">مجالات الخبرة</span>
              <h2>من الفكرة <span>إلى التنفيذ.</span></h2>
            </div>
            <span className="section-counter">HOW I BUILD</span>
          </div>
          <div className="work-area-list glass-panel">
            {workAreas.map((item) => (
              <article className="work-area-row" key={item.number}>
                <span className="work-area-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <ArrowUpLeft size={17} />
              </article>
            ))}
          </div>
        </section>

        <section className="projects-reference section-block" id="projects">
          <div className="projects-heading">
            <h2>أبرز المشاريع</h2>
            <p>مشاريع حقيقية تم بناؤها بمعايير برمجية عالية، معمارية قابلة للتوسع، وتصميم متكامل</p>
          </div>
          <div className="project-carousel">
            <div className="project-carousel-stage" aria-live="polite">
              {projects.map((project, index) => {
                const offset = (index - activeProject + projects.length) % projects.length;
                const position = offset === 0 ? "center" : offset === 1 ? "right" : "left";

                return (
                  <article
                    className={`project-slide project-slide-${position}`}
                    key={project.number}
                    onClick={() => position !== "center" && setActiveProject(index)}
                    aria-hidden={position !== "center"}
                  >
                      <div className={`project-slide-cover cover-${project.theme}`}>
                        {project.theme === "maleek" ? (
                          <iframe
                            className="project-live-site"
                            src={project.href}
                            title="MALEEK website preview"
                            loading="lazy"
                            referrerPolicy="strict-origin-when-cross-origin"
                            sandbox="allow-scripts allow-same-origin"
                            tabIndex={-1}
                          />
                        ) : null}
                      <div className="project-browser-bar"><i /><i /><i /><span>{project.name}</span></div>
                      <div className="project-cover-scene">
                        <span className="project-cover-kicker">PROJECT / {project.number}</span>
                        <strong>{project.name}</strong>
                        {project.theme === "social" ? (
                          <div className="social-dashboard" aria-hidden="true">
                            <div className="dashboard-sidebar"><i /><i /><i /><i /><i /></div>
                            <div className="dashboard-content">
                              <span className="dashboard-title" />
                              <div className="dashboard-stats"><i /><i /><i /></div>
                              <div className="dashboard-chart"><i /><i /><i /><i /><i /><i /><i /></div>
                              <div className="dashboard-feed"><i /><i /><i /></div>
                            </div>
                          </div>
                        ) : null}
                      </div>
                    </div>
                    <div className="project-slide-copy">
                      <span className="project-slide-number">{project.number}</span>
                      <h3>{project.title}</h3>
                      {project.description ? <p>{project.description}</p> : null}
                      <div className="project-slide-tags">
                        {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                      </div>
                      {project.href ? (
                        <a href={project.href} target="_blank" rel="noreferrer" className="project-open">
                          افتح الموقع <ArrowUpLeft size={15} />
                        </a>
                      ) : (
                        <span className="project-link-pending">رابط المعاينة غير مضاف</span>
                      )}
                    </div>
                  </article>
                );
              })}
            </div>
            <button className="project-carousel-arrow project-carousel-previous" type="button" onClick={() => setActiveProject((activeProject + projects.length - 1) % projects.length)} aria-label="المشروع السابق">
              <ChevronRight size={20} />
            </button>
            <button className="project-carousel-arrow project-carousel-next" type="button" onClick={() => setActiveProject((activeProject + 1) % projects.length)} aria-label="المشروع التالي">
              <ChevronLeft size={20} />
            </button>
            <div className="project-carousel-pagination" aria-label="اختيار المشروع">
              {projects.map((project, index) => (
                <button
                  key={project.number}
                  type="button"
                  className={index === activeProject ? "active" : ""}
                  onClick={() => setActiveProject(index)}
                  aria-label={`عرض ${project.title}`}
                  aria-pressed={index === activeProject}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="education-reference section-block" id="education">
          <div className="education-icon"><GraduationCap size={21} /></div>
          <div className="education-copy">
            <span className="section-eyebrow">المسار الأكاديمي</span>
            <h2>ثانيه بكالوريا</h2>
            <p>اهتمام بقواعد البيانات، تحليل الأنظمة، وهندسة البرمجيات.</p>
          </div>
          <span className="education-year">2026</span>
        </section>

        <section className="contact-reference section-block" id="contact">
          <div className="contact-intro">
            <span className="section-eyebrow">لديك فكرة؟</span>
            <h2>خلّينا نبني<br /><span>شيئاً رائعاً.</span></h2>
            <p>يسعدني الحديث عن مشروعك أو فرصة عمل مناسبة.</p>
            <span className="contact-prompt"><Mail size={15} /> أو اكتب رسالتك هنا</span>
          </div>
          <div className="contact-side">
            <form className="contact-form glass-panel" onSubmit={handleContactSubmit}>
              <label>الاسم<input name="name" autoComplete="name" required placeholder="اسمك" /></label>
              <label>البريد الإلكتروني<input name="email" type="email" autoComplete="email" required placeholder="name@example.com" dir="ltr" /></label>
              <label>عنوان الرسالة<input name="subject" required placeholder="كيف يمكنني مساعدتك؟" /></label>
              <label>رسالتك<textarea name="message" rows={4} required placeholder="اكتب تفاصيل مشروعك أو استفسارك..." /></label>
              <button className="button-gradient" type="submit">إرسال الرسالة <ArrowUpLeft size={16} /></button>
            </form>
            <div className="contact-status glass-panel">
              <span className="online-indicator" />
              <div><strong>متاح للتواصل</strong><small>عادةً أرد خلال يوم عمل</small></div>
            </div>
            <a className="contact-social glass-panel" href="https://github.com" target="_blank" rel="noreferrer">
              <Github size={18} /><span><strong>GitHub</strong><small>استكشف المشاريع</small></span><ArrowUpLeft size={15} />
            </a>
            <a className="contact-social glass-panel" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              <MessageCircle size={18} /><span><strong>LinkedIn</strong><small>للتواصل المهني</small></span><ArrowUpLeft size={15} />
            </a>
          </div>
        </section>

        <footer className="portfolio-footer">
          <span>PETER MEDHAT</span><span>مطور برمجيات في بني سويف</span><span>© 2026</span>
        </footer>
      </div>
        <a className="floating-contact" href="#contact" aria-label="انتقل إلى التواصل">
          <MessageCircle size={19} />
        </a>
    </main>
  );
}
