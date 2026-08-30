export interface Project {
  id: number;
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  category: string;
  tags: string[];
  githubUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  displayOrder: number;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  location: string;
  duration: string;
  current: boolean;
  responsibilities: string[];
  techStack: string[];
  displayOrder: number;
}

export interface Skill {
  id: number;
  category: string;
  name: string;
  level: number;
  featured: boolean;
  displayOrder: number;
}

export interface Certification {
  id: number;
  name: string;
  issuer: string;
  issueDate?: string | null;
  credentialUrl?: string | null;
  displayOrder: number;
}

export interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
  badge: string;
  createdAt: string | Date;
}

export interface HealthStatus {
  status: string;
  timestamp: string;
  uptimeSeconds: number;
  database: string;
  responseTimeMs: number;
  environment: string;
  developer: string;
  version: string;
}

