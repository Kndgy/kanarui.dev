import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import ArchiveShell from "../components/ArchiveShell";
import ProjectPreview from "../components/ProjectPreview";
import { data, addons, experience, skills } from "../data/data";

const sections = ["projects", "minecraft", "profile"];
const sectionCopy = {
  projects: { title: "Tools, interfaces, and game development." },
  minecraft: {
    title: "Minecraft Bedrock",
    subtitle: "Worlds I helped bring to life.",
  },
  profile: { title: "Behind the interface", subtitle: "Industry Experience" },
};

export default function Home() {
  const router = useRouter();
  const [section, setSection] = useState("projects");
  const [selected, setSelected] = useState(1);
  const [studio, setStudio] = useState("All studios");
  useEffect(() => {
    const syncHash = () => {
      const hash = window.location.hash.slice(1);
      setSection(sections.includes(hash) ? hash : "projects");
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    router.events.on("hashChangeComplete", syncHash);
    return () => {
      window.removeEventListener("hashchange", syncHash);
      router.events.off("hashChangeComplete", syncHash);
    };
  }, [router.events]);
  const project = data.find((item) => item.id === selected);
  const visibleAddons = addons.filter(
    (item) => studio === "All studios" || item.studio === studio,
  );
  return (
    <ArchiveShell active={section}>
      <Head>
        <title>Rafli Ghani — Software & Game Developer</title>
        <meta
          name="description"
          content="Rafli Ghani Prayoga. Software and game developer in Jakarta. Explore developer tools, NieR-inspired interfaces, and Minecraft Bedrock projects."
        />
        <meta
          property="og:title"
          content="Rafli Ghani — Software & Game Developer"
        />
        <meta
          property="og:description"
          content="Tools, interfaces, and worlds. A portfolio of software and game development."
        />
      </Head>
      <main id="main">
        <section className="intro" aria-labelledby="intro-title">
          <div>
            <p className="eyebrow">
              <span className="square" /> PERSONAL ARCHIVE / SOFTWARE & GAME
              DEVELOPMENT
            </p>
            <br />
            <p className="intro-description">
              I build tools, interfaces, and worlds.
              <br />
              <span>
                Software engineer. Game developer. Sometimes an artist.
              </span>
            </p>
          </div>
          <aside className="identity">
            <span className="eyebrow">DEVELOPER RECORD</span>
            <dl>
              <div>
                <dt>NAME</dt>
                <dd>Rafli Ghani Prayoga</dd>
              </div>
              <div>
                <dt>BASED IN</dt>
                <dd>Jakarta, Indonesia</dd>
              </div>
            </dl>
            <div className="identity-links">
              <a
                href="https://github.com/Kndgy"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://linkedin.com/in/rafli-ghani"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn ↗
              </a>
              <Link href="/resume">Résumé ↗</Link>
            </div>
          </aside>
        </section>
        <div className="ornament" aria-hidden="true">
          <span />
          <i />
          <i />
          <i />
          <span />
        </div>
        <section className="work-section" aria-labelledby="section-title">
          <header className="section-heading">
            <div>
              <h2 id="section-title">{sectionCopy[section].title}</h2>
              {sectionCopy[section].subtitle && (
                <span className="section-subtitle">
                  {sectionCopy[section].subtitle}
                </span>
              )}
            </div>
          </header>
          {section === "projects" && (
            <div className="project-layout">
              <aside className="project-sidebar">
                <div className="sidebar-label">
                  PROJECT DIRECTORY <span>↓</span>
                </div>
                <div className="project-list" aria-label="Select a project">
                  {data.map((item) => (
                    <button
                      key={item.id}
                      className={`project-selector ${selected === item.id ? "is-selected" : ""}`}
                      aria-pressed={selected === item.id}
                      aria-controls="project-detail"
                      onClick={() => setSelected(item.id)}
                    >
                      <span className="square" />
                      <span>
                        <small>{item.category}</small>
                        <strong>{item.title}</strong>
                      </span>
                      <span className="selector-arrow" aria-hidden="true">
                        ›
                      </span>
                    </button>
                  ))}
                </div>
                <div className="directory-note">
                  <span className="crosshair" aria-hidden="true">
                    +
                  </span>
                  <span className="eyebrow">PERSONAL & STUDIO WORK</span>
                </div>
              </aside>
              <article
                id="project-detail"
                className="project-detail"
                key={project.id}
                aria-label={project.title}
              >
                <div className="detail-heading">
                  <span className="eyebrow">PROJECT DETAILS</span>
                  <span className="status">
                    <span className="square" />
                    {project.status}
                  </span>
                </div>
                <ProjectPreview project={project} />
                <div className="project-summary">
                  <div>
                    <p className="eyebrow">{project.subtitle}</p>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-actions">
                    {project.credits && (
                      <>
                        <a
                          className="action-button"
                          href={project.credits}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View credits <span>↗</span>
                        </a>
                        <Link
                          className="text-link"
                          href={`/pages/${project.id}`}
                        >
                          Project details →
                        </Link>
                      </>
                    )}
                    {project.repo && (
                      <a
                        className="action-button"
                        href={project.repo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        View repository <span>↗</span>
                      </a>
                    )}
                    {project.site && (
                      <a
                        className="text-link"
                        href={project.site}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Explore YoRHa Archive ↗
                      </a>
                    )}
                    {project.storybook && (
                      <a
                        className="text-link"
                        href={project.storybook}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Component library ↗
                      </a>
                    )}
                    {project.images && (
                      <Link className="action-button" href="/pages/1">
                        Explore project <span>→</span>
                      </Link>
                    )}
                  </div>
                </div>
              </article>
            </div>
          )}
          {section === "minecraft" && (
            <div className="minecraft-section">
              <div className="collection-toolbar">
                <p>
                  Gameplay systems, entity behaviors, and developer
                  contributions.
                </p>
                <label>
                  Studio{" "}
                  <select
                    value={studio}
                    onChange={(event) => setStudio(event.target.value)}
                  >
                    {[
                      "All studios",
                      ...new Set(addons.map((item) => item.studio)),
                    ].map((name) => (
                      <option key={name}>{name}</option>
                    ))}
                  </select>
                </label>
              </div>
              <p className="result-count" aria-live="polite">
                {visibleAddons.length} contributions / {studio}
              </p>
              <div className="addon-grid">
                {visibleAddons.map((item) => (
                  <article className="addon-card" key={item.video}>
                    <a
                      className="addon-image"
                      href={`https://www.youtube.com/watch?v=${item.video}`}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Watch ${item.title} trailer`}
                    >
                      <Image
                        src={`/bedrock/${item.video}.jpg`}
                        alt={`${item.title} official trailer thumbnail`}
                        width="480"
                        height="270"
                        loading="lazy"
                      />
                      <span className="play-icon" aria-hidden="true"></span>
                      <span className="trailer-label">WATCH TRAILER ↗</span>
                    </a>
                    <div className="addon-copy">
                      <span className="eyebrow">{item.studio}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}
          {section === "profile" && (
            <div className="profile-layout">
              <aside className="profile-about">
                <div className="panel-title">■ &nbsp; About me</div>
                <div className="panel-body">
                  <h3>Engineering & arts.</h3>
                  <p>
                    I’m Rafli, a software engineer and game developer based in
                    Jakarta. I like to code, draw, and explore the space between
                    useful tools and expressive experiences.
                  </p>
                  <p>
                    My work spans UI/UX Development, Unreal Engine/UEFN, and
                    Minecraft Bedrock gameplay systems.
                  </p>
                  <Link href="/resume" className="action-button">
                    View résumé <span>↗</span>
                  </Link>
                  <h4>EDUCATION</h4>
                  <p>
                    <strong>Binus University</strong>
                    <br />
                    Bachelor’s degree in Computer Science
                    <br />
                    Jakarta, Indonesia
                  </p>
                  <h4>TOOLKIT</h4>
                  <div className="tags">
                    {skills.map((skill) => (
                      <span key={skill}>{skill}</span>
                    ))}
                  </div>
                </div>
              </aside>
              <div className="experience">
                <div className="sidebar-label">EXPERIENCE LOG</div>
                {experience.map((job) => (
                  <article className="experience-row" key={job.company}>
                    <span className="timeline-dot" />
                    <div className="experience-heading">
                      <h3>{job.company}</h3>
                      <span>{job.date}</span>
                    </div>
                    <h4>{job.role}</h4>
                    <p>{job.description}</p>
                  </article>
                ))}
              </div>
            </div>
          )}
        </section>
        <section className="contact-strip">
          <a href="mailto:ghanirafli8@gmail.com">
            ghanirafli8@gmail.com <span>↗</span>
          </a>
        </section>
      </main>
    </ArchiveShell>
  );
}
