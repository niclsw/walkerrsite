import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type PostFrontmatter = {
  title: string;
  summary?: string;
  date: string; // ISO string
  slug: string;
  tags?: string[];
  published?: boolean;
};

export type Post = PostFrontmatter & {
  content: string;
};

export const CONTENT_DIR = path.join(process.cwd(), "content", "writing");

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export function getPostBySlug(slug: string): Post | null {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const fm = data as Partial<PostFrontmatter>;
  const frontmatter: PostFrontmatter = {
    title: fm.title ?? slug,
    summary: fm.summary ?? "",
    date: fm.date ?? new Date().toISOString(),
    slug: fm.slug ?? slug,
    tags: fm.tags ?? [],
    published: fm.published ?? true,
  };
  return { ...frontmatter, content };
}

export function getAllPosts(includeDrafts = false): Post[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => !!p);

  const filtered = includeDrafts
    ? posts
    : posts.filter((p) => p.published !== false);

  return filtered.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}


