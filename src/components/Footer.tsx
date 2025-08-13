import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground/70">
        <p>© {year} Walkerr.net</p>
        <div className="flex items-center gap-5">
          <Link className="hover:text-foreground" href={{ pathname: "/", hash: "#about" }}>About</Link>
          <Link className="hover:text-foreground" href={{ pathname: "/", hash: "#projects" }}>Projects</Link>
          <Link className="hover:text-foreground" href={{ pathname: "/writing" }}>Writing</Link>
          <Link className="hover:text-foreground" href={{ pathname: "/", hash: "#contact" }}>Contact</Link>
        </div>
      </div>
    </footer>
  );
}


