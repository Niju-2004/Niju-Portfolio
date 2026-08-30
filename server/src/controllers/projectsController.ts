import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { PROJECTS_DATA } from '../data/fallbackData';

export async function getProjects(req: Request, res: Response) {
  try {
    const { category, featured } = req.query;
    
    // Attempt database query via Prisma (like EF Core DbSet.Where)
    let projects = null;
    try {
      projects = await prisma.project.findMany({
        where: {
          ...(category ? { category: String(category) } : {}),
          ...(featured ? { featured: featured === 'true' } : {})
        },
        orderBy: { displayOrder: 'asc' }
      });
    } catch {
      // Fallback if DB not yet connected
    }

    if (!projects || projects.length === 0) {
      let filtered = [...PROJECTS_DATA];
      if (category) {
        filtered = filtered.filter(p => p.category.toLowerCase() === String(category).toLowerCase());
      }
      if (featured) {
        filtered = filtered.filter(p => p.featured === (featured === 'true'));
      }
      return res.json({ success: true, data: filtered, source: 'fallback' });
    }

    return res.json({ success: true, data: projects, source: 'database' });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

export async function getProjectBySlug(req: Request, res: Response) {
  try {
    const slug = String(req.params.slug);
    let project = null;
    try {
      project = await prisma.project.findUnique({ where: { slug } });
    } catch {
      // Fallback
    }

    if (!project) {
      project = PROJECTS_DATA.find(p => p.slug === slug);
    }

    if (!project) {
      return res.status(404).json({ success: false, error: 'Project not found' });
    }

    return res.json({ success: true, data: project });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

