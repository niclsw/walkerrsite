"use client";

import Link from "next/link";
import { useState } from "react";

type NavItem = {
  label: string;
  pathname: string;
  hash: string;
};

 // Necessary to go to hash links. 
const navItems: NavItem[] = [
  { label: "About", pathname: "/", hash: "#about" },
  { label: "Projects", pathname: "/", hash: "#projects" },
  { label: "Writing", pathname: "/writing", hash: "" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 w-full border-b border-black/10 dark:border-white/10 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/70">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-3">
            <Link href="/" className="font-semibold tracking-tight text-lg">
              Walkerr.net
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={`${item.pathname}${item.hash}`}
                scroll={true} // scroll to the hash
                className="text-sm text-foreground/80 hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={{ pathname: "/", hash: "contact" }}
              className="inline-flex items-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              Get in touch
            </Link>
          </nav>

          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-foreground/80 hover:text-foreground hover:bg-black/5 dark:hover:bg-white/10 focus:outline-none"
            onClick={() => setIsOpen((v) => !v)}
          >
            <svg
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {isOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-black/10 dark:border-white/10 bg-background">
          <div className="space-y-1 px-4 py-4">
            {navItems.map((item) => (
              <Link
                // Hash update to hopefully work on mobile.
                key={item.label}
                href={`${item.pathname}${item.hash}`}
                scroll={true} // scroll to the hash
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base text-foreground/90 hover:bg-black/5 dark:hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={{ pathname: "/", hash: "contact" }}
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition"
            >
              Get in touch
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}


