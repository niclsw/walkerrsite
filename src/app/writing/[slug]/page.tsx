import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPostSlugs, getPostBySlug } from "@/lib/mdx";
import type { Metadata } from "next";
import remarkGfm from "remark-gfm";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Walkerr.net`,
    description: post.summary ?? undefined,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post || post.published === false) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose prose-neutral dark:prose-invert">
      <header>
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">{post.title}</h1>
        <p className="mt-2 text-sm text-foreground/60">
          {new Date(post.date).toLocaleDateString(undefined, {
            year: "numeric",
            month: "long",
            day: "2-digit",
          })}
        </p>
      </header>
      <div className="mt-8">
        {/* MDX content rendered on the server */}
        <MDXRemote
          source={post.content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>
    </article>
  );
}


