import { NavItem, Project, TechStack, TimelineEntry } from "./types";

export const navItems: NavItem[] = [
  { id: "hero", label: "Home" },
  { id: "tech-stack", label: "Tech Stack" },
  { id: "projects", label: "Projects" },
  { id: "timeline", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export const techStack: TechStack[] = [
  { name: "React", icon: "🔵" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Tailwind CSS", icon: "💨" },
  { name: "Framer Motion", icon: "🎬" },
  { name: "Node.js", icon: "🟢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Git", icon: "🔀" },
  { name: "Docker", icon: "🐳" },
  { name: "AWS", icon: "☁️" },
  { name: "MongoDB", icon: "🍃" },
  { name: "GraphQL", icon: "◆" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with real-time inventory management and payment processing.",
    image: "/projects/project-1.jpg",
    tags: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Collaborative task management tool with real-time updates and team collaboration features.",
    image: "/projects/project-2.jpg",
    tags: ["React", "Firebase", "Tailwind CSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    description: "Real-time analytics dashboard with interactive charts and data visualization.",
    image: "/projects/project-3.jpg",
    tags: ["Next.js", "Chart.js", "PostgreSQL"],
    liveUrl: "https://example.com",
  },
];

export const timeline: TimelineEntry[] = [
  {
    id: "1",
    company: "Tech Corp",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description: [
      "Led development of microservices architecture serving 1M+ users",
      "Improved application performance by 60% through optimization",
      "Mentored junior developers and conducted code reviews",
    ],
  },
  {
    id: "2",
    company: "Startup Inc",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description: [
      "Built and launched MVP in 3 months using Next.js and AWS",
      "Implemented CI/CD pipelines reducing deployment time by 70%",
      "Collaborated with design team to create responsive UI components",
    ],
  },
  {
    id: "3",
    company: "Digital Agency",
    role: "Frontend Developer",
    period: "2018 - 2020",
    description: [
      "Developed responsive web applications for 20+ clients",
      "Specialized in React and modern JavaScript frameworks",
      "Optimized websites for SEO and accessibility standards",
    ],
  },
];
