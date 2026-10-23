import fs from "fs";
import matter from "gray-matter";
import md from "markdown-it";
import Link from "next/link";
import Head from "next/head";
import ArchiveShell from "../../components/ArchiveShell";

export default function Post({ frontmatter, content }) {
  return (
    <ArchiveShell active="">
      <Head>
        <title>{`${frontmatter.title} — Rafli Ghani`}</title>
      </Head>
      <main id="main" className="document post-document">
        <Link className="back-link" href="/">
          ← Back to portfolio
        </Link>
        <p className="eyebrow">ARCHIVE / JOURNAL</p>
        <h1>{frontmatter.title}</h1>
        <p className="post-meta">{frontmatter.date}</p>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </main>
    </ArchiveShell>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync("posts");

  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug}.md`, "utf-8");
  const { data: frontmatter, content } = matter(fileName);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}
