import Link from "next/link";

export function Mark({ className = "" }) {
  return (
    <svg
      className={className}
      width="34"
      height="34"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <path d="M20 2 38 20 20 38 2 20Z" stroke="currentColor" />
      <path d="M20 8 32 20 20 32 8 20Z" fill="currentColor" />
      <path d="M20 13v14M13 20h14" stroke="var(--paper)" />
      <path d="M0 0h8M0 0v8M40 40h-8M40 40v-8" stroke="currentColor" />
    </svg>
  );
}
export default function ArchiveShell({ children, active = "projects" }) {
  return (
    <div className="archive-shell">
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="wordmark" href="/#projects">
          {/* <Mark /> */}
          <span>
            kanarui<span className="wordmark-domain">.dev</span>
          </span>
        </Link>
        <nav aria-label="Main navigation">
          {[
            ["projects", "Projects"],
            ["minecraft", "Minecraft"],
            ["profile", "Profile"],
          ].map(([id, label]) => (
            <Link
              key={id}
              className={`nav-item ${active === id ? "is-active" : ""}`}
              href={`/#${id}`}
              aria-current={active === id ? "page" : undefined}
            >
              <span className="square" />
              <span>{label}</span>
            </Link>
          ))}
        </nav>
        <a className="header-contact" href="mailto:ghanirafli8@gmail.com">
          Get in touch
        </a>
      </header>
      {children}
      <footer className="site-footer">
        <a
          href="https://github.com/Kndgy/NieR-Automata-Design-System"
          target="_blank"
          rel="noreferrer"
        >
          Built with my NieR design system
        </a>
      </footer>
    </div>
  );
}
