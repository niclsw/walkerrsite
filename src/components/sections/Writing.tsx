import Link from "next/link";

type Post = {
  title: string;
  href: string;
  date: string;
};

const posts: Post[] = [
  { title: "Designing for signal", href: "#", date: "2025-06-12" },
  { title: "TypeScript as a design tool", href: "#", date: "2025-03-27" },
  { title: "Interfaces that scale", href: "#", date: "2024-11-09" },
];

export default function Writing() {
  return (
    <section id="writing" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Writing</h2>
        <div className="mt-8 divide-y divide-black/10 dark:divide-white/10 rounded-2xl border border-black/10 dark:border-white/10 overflow-hidden">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.href}
              className="flex items-center justify-between gap-4 px-6 py-5 hover:bg-black/5 dark:hover:bg-white/10 transition"
            >
              <span className="text-sm sm:text-base">{post.title}</span>
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
    </section>
  );
}


