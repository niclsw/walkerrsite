import Link from "next/link";
import MagneticButton from "@/components/MagneticButton";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Contact</h2>
          </div>
          <div className="md:col-span-2 space-y-6">
            <p className="text-foreground/80">
              Interested in collaborating or have a question? I’m always open to thoughtful conversations.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <MagneticButton as="div">
                <Link
                  href="mailto:hello@walkerr.net"
                  className="inline-flex items-center rounded-full bg-foreground text-background px-5 py-3 text-sm font-medium hover:opacity-90"
                >
                  Email me
                </Link>
              </MagneticButton>
              <MagneticButton as="div">
                <Link
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-black/15 dark:border-white/20 px-5 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
                >
                  GitHub
                </Link>
              </MagneticButton>
              <MagneticButton as="div">
                <Link
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-full border border-black/15 dark:border-white/20 px-5 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10"
                >
                  LinkedIn
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


