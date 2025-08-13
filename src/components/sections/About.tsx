export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">About</h2>
          </div>
          <div className="md:col-span-2 space-y-5 text-foreground/80">
            <p>
              I’m a builder and problem solver who enjoys turning ideas into reliable, elegant software. I care about high signal communication, crisp interfaces, and systems that scale.
            </p>
            <p>
              My background spans product engineering, developer experience, and design. I love shipping quickly without sacrificing quality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}


