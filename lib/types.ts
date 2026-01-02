export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface TimelineEntry {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string[];
  logo?: string;
}

export interface TechStack {
  name: string;
  icon: string;
  color?: string;
}

export interface NavItem {
  id: string;
  label: string;
}
