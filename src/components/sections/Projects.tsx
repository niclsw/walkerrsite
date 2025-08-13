import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

type Project = {
  title: string;
  description: string;
  href: string;
  tags: string[];
};

const projects: Project[] = [
  {
    title: "Signal Notes",
    description:
      "A minimal knowledge system focused on signal over noise. Fast, keyboard-friendly, and beautifully simple.",
    href: "#",
    tags: ["Next.js", "TypeScript", "Tailwind"],
  },
  {
    title: "Realtime Presence",
    description:
      "Lightweight presence and collaboration primitives for web apps using websockets and CRDT ideas.",
    href: "#",
    tags: ["WebSockets", "Edge", "Vercel"],
  },
  {
    title: "Design System",
    description:
      "A cohesive, accessible component library with a crisp aesthetic and pragmatic APIs.",
    href: "#",
    tags: ["UI", "Accessibility", "Design"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Selected projects</h2>
          <Link
            href="#contact"
            className="hidden sm:inline-flex text-sm text-foreground/70 hover:text-foreground"
          >
            Work with me →
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <MagneticButton key={project.title} as="div" strength={0.1}>
              <Link
                href={project.href}
                className="group block rounded-2xl border border-black/10 dark:border-white/10 p-6 hover:shadow-sm hover:border-black/20 dark:hover:border-white/20 transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-medium group-hover:underline underline-offset-4">
                    {project.title}
                  </h3>
                  <span className="inline-flex items-center rounded-full bg-black/5 dark:bg-white/10 px-2 py-1 text-[10px] uppercase tracking-wider text-foreground/60">
                    {project.tags[0]}
                  </span>
                </div>
                <p className="mt-3 text-sm text-foreground/70">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full border border-black/10 dark:border-white/10 px-2.5 py-1 text-xs text-foreground/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </MagneticButton>
          ))}
        </div>
      </div>
    </section>
  );
}


