import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";
import AICompleteText from "@/components/AICompleteText";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(0,0,0,0.06),transparent)] dark:bg-[radial-gradient(1200px_600px_at_50%_-100px,rgba(255,255,255,0.08),transparent)]" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-widest text-foreground/60 uppercase">Walkerr.net</p>
          <h1 className="mt-4 text-4xl sm:text-6xl font-semibold tracking-tight min-h-[4rem] sm:min-h-[6rem]">
            <AICompleteText 
              prefix="Nick Walker — I craft solutions with AI and  "
              suggestion="abuse my AI agents."
              speed={75}
              delay={800}
              suggestionDelay={800}
              autoCompleteDelay={2500}
            />
          </h1>
          <p className="mt-6 text-lg text-foreground/70">
            I build thoughtful products with a focus on clarity, performance, and delightful UX. This is my personal site for selected projects, notes, and ways to reach me.
          </p>
          <div className="mt-10 flex items-center gap-3">
            <MagneticButton as="div">
              <Link
                href="#projects"
                className="inline-flex items-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90"
              >
                View projects
              </Link>
            </MagneticButton>
            <MagneticButton as="div">
              <Link
                href="#contact"
                className="inline-flex items-center rounded-full border border-black/15 dark:border-white/20 px-5 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
              >
                Get in touch
              </Link>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}


