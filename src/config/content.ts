//import { getPostBySlug } from "@/lib/mdx";
// TODO: Put all static text content in this file
export const content = {
    site: {
        title: "Walkerr.net",
        description: "My personal site",
        url: "https://walkerr.net",

    },
    hero: {
        title: "Walkerr.net",
        description: "My personal site",
        url: "https://walkerr.net",

    },
    github: {
        username: "niclsw",
        apitoken: process.env.GITHUB_TOKEN,
    },
    projects: [
        {
            title: "Signal Notes Testtt",
            description: "A minimal knowledge system focused on signal over noise. Fast, keyboard-friendly, and beautifully simple.",
            href: "#",
            tags: ["Next.js", "TypeScript", "Tailwind"],
        },
        {
            title: "Realtime Presence",
            description: "Lightweight presence and collaboration primitives for web apps using websockets and CRDT ideas.",
            href: "#",
            tags: ["WebSockets", "Edge", "Vercel"],
        },
        {
            title: "Design System",
            description: "A cohesive, accessible component library with a crisp aesthetic and pragmatic APIs.",
            href: "#",
            tags: ["UI", "Accessibility", "Design"],
        },
    ]
} as const;