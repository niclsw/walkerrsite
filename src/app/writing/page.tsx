import Link from "next/link";
import { getAllPosts } from "@/lib/mdx";

export const dynamic = "error"; // ensure static prerender

export default function WritingIndex() {
  const posts = getAllPosts(process.env.NODE_ENV !== "production");
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
      <h1 className="text-3xl font-semibold tracking-tight">Writing</h1>
      <p className="mt-2 text-foreground/70 max-w-2xl">
        Notes and essays on engineering, product, and design.
      </p>
      <div className="mt-8 divide-y divide-black/10 dark:divide-white/10 rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/writing/${post.slug}`}
            className="flex items-center justify-between gap-4 px-6 py-5 hover:bg-black/5 dark:hover:bg-white/10 transition"
          >
            <div>
              <h2 className="text-base sm:text-lg font-medium">{post.title}</h2>
              {post.summary && (
                <p className="text-sm text-foreground/70 mt-1">{post.summary}</p>
              )}
            </div>
            <span className="text-xs text-foreground/60 tabular-nums">
              {new Date(post.date).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "2-digit",
              })}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}


