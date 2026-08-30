import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { EXPERIENCE_DATA, PORTFOLIO_INFO } from '../data/fallbackData';

export async function getExperience(req: Request, res: Response) {
  try {
    let experience = null;
    try {
      experience = await prisma.experience.findMany({ orderBy: { displayOrder: 'asc' } });
    } catch {
      // Fallback
    }

    if (!experience || experience.length === 0) {
      return res.json({ success: true, data: EXPERIENCE_DATA, source: 'fallback' });
    }

    return res.json({ success: true, data: experience, source: 'database' });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

export function getProfile(req: Request, res: Response) {
  return res.json({ success: true, data: PORTFOLIO_INFO });
}

