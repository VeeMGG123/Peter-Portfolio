import { ArrowUpRight } from "lucide-react";

type Project = {
  id: string;
  name: string;
  category: string;
  year: string;
  role: string;
  tech: string;
  link: string;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const targetHref = project.link.startsWith("http://") || project.link.startsWith("https://")
    ? project.link
    : `https://${project.link}`;

  const openProject = () => {
    if (typeof window !== "undefined") {
      window.open(targetHref, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <article
      className="project-card"
      data-cursor="VIEW PROJECT"
      onClick={openProject}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProject();
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`Open ${project.name}`}
    >
      <div className="project-number">{project.id}</div>

      <div className="project-copy">
        <div className="project-name">{project.name}</div>
        <div className="project-description">{project.category}</div>
      </div>

      <div className="project-preview" aria-label={project.name}>
        <div className="preview-visual" />
        <div className="project-hover-surface">
          <div className="project-hover-bar">
            <span className="preview-dot red" />
            <span className="preview-dot amber" />
            <span className="preview-dot green" />
          </div>
          <iframe
            src={targetHref}
            title={`${project.name} preview`}
            className="project-iframe"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            allow="fullscreen"
            sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
          />
        </div>
      </div>

      <div className="project-meta">
        <div>
          <strong>YEAR</strong>
          <div>{project.year}</div>
        </div>
        <div>
          <strong>ROLE</strong>
          <div>{project.role}</div>
        </div>
        <div>
          <strong>TECH</strong>
          <div>{project.tech}</div>
        </div>
        <a href={targetHref} className="project-link" data-cursor="OPEN" target="_blank" rel="noreferrer">
          VIEW PROJECT <ArrowUpRight size={14} />
        </a>
      </div>
    </article>
  );
}
