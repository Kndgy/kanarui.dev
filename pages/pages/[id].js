import Head from "next/head";
import Link from "next/link";
import { data } from "../../data/data";
import ArchiveShell from "../../components/ArchiveShell";
import ProjectPreview from "../../components/ProjectPreview";

export default function Item({ item }) {
  return (
    <ArchiveShell>
      <Head>
        <title>{`${item.title} — Rafli Ghani`}</title>
        <meta name="description" content={item.description} />
      </Head>
      <main id="main" className="document">
        <Link href="/#projects" className="back-link">
          ← Back to projects
        </Link>
        <p className="eyebrow">PROJECT DETAILS · {item.status}</p>
        <h1>{item.title}</h1>
        <p>{item.description}</p>
        <div className="tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <ProjectPreview project={item} />
        <h2>Project notes</h2>
        <ul>
          {item.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
        <div className="project-actions">
          {item.credits && (
            <a
              className="action-button"
              href={item.credits}
              target="_blank"
              rel="noreferrer"
            >
              View credits on MobyGames ↗
            </a>
          )}
          {item.repo && (
            <a
              className="action-button"
              href={item.repo}
              target="_blank"
              rel="noreferrer"
            >
              View repository ↗
            </a>
          )}
          {item.site && (
            <a
              className="action-button"
              href={item.site}
              target="_blank"
              rel="noreferrer"
            >
              Explore YoRHa Archive ↗
            </a>
          )}
          {item.storybook && (
            <a
              className="text-link"
              href={item.storybook}
              target="_blank"
              rel="noreferrer"
            >
              Component library ↗
            </a>
          )}
        </div>
      </main>
    </ArchiveShell>
  );
}
export async function getStaticPaths() {
  return {
    paths: data.map((item) => ({ params: { id: String(item.id) } })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  return {
    props: { item: data.find((item) => String(item.id) === params.id) },
  };
}
