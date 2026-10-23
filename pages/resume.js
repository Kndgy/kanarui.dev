import Head from "next/head";
import Link from "next/link";
import ArchiveShell from "../components/ArchiveShell";
import { experience, skills } from "../data/data";

export default function Resume() {
  return (
    <ArchiveShell active="profile">
      <Head>
        <title>Résumé — Rafli Ghani Prayoga</title>
        <meta
          name="description"
          content="Software and game development experience of Rafli Ghani Prayoga."
        />
      </Head>
      <main id="main" className="document resume">
        <Link href="/#profile" className="back-link">
          ← Back to profile
        </Link>
        <div className="resume-heading">
          <div>
            <p className="eyebrow">SOFTWARE ENGINEER / GAME DEVELOPER</p>
            <h1>Rafli Ghani Prayoga</h1>
          </div>
          <button
            className="action-button print-button"
            onClick={() => window.print()}
          >
            Print / Save PDF
          </button>
        </div>
        <div className="resume-contact">
          <span>Jakarta, Indonesia</span>
          <a href="mailto:ghanirafli8@gmail.com">ghanirafli8@gmail.com</a>
          <a href="https://github.com/Kndgy">github.com/Kndgy</a>
          <a href="https://linkedin.com/in/rafli-ghani">
            linkedin.com/in/rafli-ghani
          </a>
        </div>
        <p>
          Software engineer and game developer working across web interfaces,
          Unreal Engine, Fortnite UGC, and Minecraft Bedrock. Interested in
          engineering and the arts.
        </p>
        <div className="resume-body">
          <section>
            <h2>Experience</h2>
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
          </section>
          <aside className="resume-sidebar">
            <h2>Education</h2>
            <p>
              <strong>Binus University</strong>
              <br />
              Bachelor’s degree in Computer Science
              <br />
              Jakarta, Indonesia
            </p>
            <h2>Technical skills</h2>
            <div className="tags">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
            <h2>Personal projects</h2>
            <p>
              Crafting Blueprint
              <br />
              NieR:Automata Design System
              <br />
              JSX to Unreal UMG
            </p>
          </aside>
        </div>
        <p className="resume-source">
          Experience dates and details reflect the{" "}
          <a
            href="https://kan-temp-portoflio.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            source résumé
          </a>
          .
        </p>
      </main>
    </ArchiveShell>
  );
}
