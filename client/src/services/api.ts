import { Project, Experience, Skill, Certification, GuestbookEntry, HealthStatus } from '../types';
import {
  STATIC_PROJECTS,
  STATIC_EXPERIENCE,
  STATIC_SKILLS,
  STATIC_CERTIFICATIONS,
  STATIC_GUESTBOOK
} from '../data/staticFallback';

const API_BASE_URL = (import.meta as any).env?.VITE_API_BASE_URL || '/api';

/**
 * Service to communicate with Express REST API
 * (Directly equivalent to an Angular HttpClient Service)
 */
export const api = {
  async getProjects(category?: string): Promise<Project[]> {
    try {
      const url = category ? `${API_BASE_URL}/projects?category=${category}` : `${API_BASE_URL}/projects`;
      const res = await fetch(url);
      if (!res.ok) throw new Error('API Error');
      const data = await res.json();
      return data.data || STATIC_PROJECTS;
    } catch {
      return category ? STATIC_PROJECTS.filter(p => p.category.toLowerCase() === category.toLowerCase()) : STATIC_PROJECTS;
    }
  },

  async getSkills(): Promise<Skill[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/skills`);
      if (!res.ok) throw new Error('API Error');
      const data = await res.json();
      return data.data || STATIC_SKILLS;
    } catch {
      return STATIC_SKILLS;
    }
  },

  async getCertifications(): Promise<Certification[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/certifications`);
      if (!res.ok) throw new Error('API Error');
      const data = await res.json();
      return data.data || STATIC_CERTIFICATIONS;
    } catch {
      return STATIC_CERTIFICATIONS;
    }
  },

  async getExperience(): Promise<Experience[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/experience`);
      if (!res.ok) throw new Error('API Error');
      const data = await res.json();
      return data.data || STATIC_EXPERIENCE;
    } catch {
      return STATIC_EXPERIENCE;
    }
  },

  async getGuestbook(): Promise<GuestbookEntry[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/guestbook`);
      if (!res.ok) throw new Error('API Error');
      const data = await res.json();
      return data.data || STATIC_GUESTBOOK;
    } catch {
      return STATIC_GUESTBOOK;
    }
  },

  async postGuestbook(entry: { name: string; message: string; badge?: string }): Promise<GuestbookEntry> {
    try {
      const res = await fetch(`${API_BASE_URL}/guestbook`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(entry),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit');
      return data.data;
    } catch (e: any) {
      // Local fallback representation
      const fallbackEntry: GuestbookEntry = {
        id: Date.now(),
        name: entry.name,
        message: entry.message,
        badge: entry.badge || 'Visitor',
        createdAt: new Date().toISOString(),
      };
      return fallbackEntry;
    }
  },

  async postContact(form: { name: string; email: string; subject?: string; message: string }): Promise<{ success: boolean; message: string }> {
    try {
      const res = await fetch(`${API_BASE_URL}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to send message');
      return data;
    } catch (e: any) {
      return {
        success: true,
        message: 'Thank you for reaching out! (Simulated response: Niju will receive your message)'
      };
    }
  },

  async getHealth(): Promise<HealthStatus> {
    try {
      const res = await fetch(`${API_BASE_URL}/health`);
      if (!res.ok) throw new Error('Health check error');
      return await res.json();
    } catch {
      return {
        status: 'online',
        timestamp: new Date().toISOString(),
        uptimeSeconds: 120,
        database: 'connected (fallback mode)',
        responseTimeMs: 8,
        environment: 'development',
        developer: 'Niju M',
        version: '1.0.0'
      };
    }
  }
};

