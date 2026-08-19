export type EventItem = {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  tags: string[];
  image: string;
  url: string;
};

export const events: EventItem[] = [
  {
    id: "react-summit-2026",
    title: "React Summit 2026",
    date: "2026-06-19",
    time: "09:00 CEST",
    location: "Amsterdam, Netherlands",
    description:
      "The world's largest React conference, bringing together core team members, library authors, and thousands of developers for two days of talks and workshops.",
    tags: ["react", "frontend", "javascript"],
    image: "/images/event1.png",
    url: "https://reactsummit.com/",
  },
  {
    id: "jsnation-2026",
    title: "JSNation 2026",
    date: "2026-06-17",
    time: "09:00 CEST",
    location: "Amsterdam, Netherlands",
    description:
      "A JavaScript conference covering the entire ecosystem — from Node.js and Deno to browser APIs, tooling, and language proposals.",
    tags: ["javascript", "nodejs", "web"],
    image: "/images/event2.png",
    url: "https://jsnation.com/",
  },
  {
    id: "nextjs-conf-2026",
    title: "Next.js Conf 2026",
    date: "2026-10-15",
    time: "10:00 PDT",
    location: "San Francisco, CA & Online",
    description:
      "Vercel's flagship conference for the Next.js community, featuring product announcements, deep dives, and sessions from the Next.js team.",
    tags: ["nextjs", "react", "vercel"],
    image: "/images/event3.png",
    url: "https://nextjs.org/conf",
  },
  {
    id: "aws-reinvent-2026",
    title: "AWS re:Invent 2026",
    date: "2026-11-30",
    time: "08:00 PST",
    location: "Las Vegas, NV, USA",
    description:
      "Amazon Web Services' annual cloud computing conference with keynotes, 2,000+ technical sessions, hands-on labs, and hackathons.",
    tags: ["cloud", "aws", "infrastructure"],
    image: "/images/event4.png",
    url: "https://reinvent.awsevents.com/",
  },
  {
    id: "google-io-2026",
    title: "Google I/O 2026",
    date: "2026-05-12",
    time: "10:00 PDT",
    location: "Mountain View, CA & Online",
    description:
      "Google's annual developer conference featuring platform updates across Android, Web, AI, Cloud, and hardware.",
    tags: ["android", "ai", "web"],
    image: "/images/event5.png",
    url: "https://io.google/",
  },
  {
    id: "ethglobal-tokyo-2026",
    title: "ETHGlobal Tokyo 2026",
    date: "2026-09-04",
    time: "09:00 JST",
    location: "Tokyo, Japan",
    description:
      "A three-day Ethereum hackathon where developers build web3 projects across DeFi, infrastructure, and consumer apps for a prize pool of $500k+.",
    tags: ["web3", "ethereum", "hackathon"],
    image: "/images/event6.png",
    url: "https://ethglobal.com/",
  },
  {
    id: "kubecon-na-2026",
    title: "KubeCon + CloudNativeCon NA 2026",
    date: "2026-11-10",
    time: "09:00 EST",
    location: "Atlanta, GA, USA",
    description:
      "The CNCF's premier conference on Kubernetes and cloud-native technologies, gathering maintainers, adopters, and end users across the ecosystem.",
    tags: ["kubernetes", "cloud-native", "devops"],
    image: "/images/event1.png",
    url: "https://events.linuxfoundation.org/kubecon-cloudnativecon-north-america/",
  },
  {
    id: "github-universe-2026",
    title: "GitHub Universe 2026",
    date: "2026-10-28",
    time: "09:00 PDT",
    location: "San Francisco, CA & Online",
    description:
      "GitHub's global developer event featuring product launches, Copilot deep dives, and sessions on open source, security, and AI-assisted development.",
    tags: ["github", "ai", "devtools"],
    image: "/images/event2.png",
    url: "https://githubuniverse.com/",
  },
  {
    id: "devoxx-belgium-2026",
    title: "Devoxx Belgium 2026",
    date: "2026-10-05",
    time: "09:00 CEST",
    location: "Antwerp, Belgium",
    description:
      "Europe's largest vendor-independent Java conference, covering the JVM ecosystem, architecture, AI, and modern web development.",
    tags: ["java", "jvm", "backend"],
    image: "/images/event3.png",
    url: "https://devoxx.be/",
  },
  {
    id: "fosdem-2027",
    title: "FOSDEM 2027",
    date: "2027-01-30",
    time: "09:00 CET",
    location: "Brussels, Belgium",
    description:
      "The largest free and open-source software gathering in Europe, with hundreds of tracks, lightning talks, and community devrooms — free to attend.",
    tags: ["open-source", "linux", "community"],
    image: "/images/event4.png",
    url: "https://fosdem.org/",
  },
];
