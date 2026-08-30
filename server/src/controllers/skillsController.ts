import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { SKILLS_DATA, CERTIFICATIONS_DATA } from '../data/fallbackData';

export async function getSkills(req: Request, res: Response) {
  try {
    let skills = null;
    try {
      skills = await prisma.skill.findMany({ orderBy: { displayOrder: 'asc' } });
    } catch {
      // Fallback
    }

    if (!skills || skills.length === 0) {
      return res.json({ success: true, data: SKILLS_DATA, source: 'fallback' });
    }

    return res.json({ success: true, data: skills, source: 'database' });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

export async function getCertifications(req: Request, res: Response) {
  try {
    let certs = null;
    try {
      certs = await prisma.certification.findMany({ orderBy: { displayOrder: 'asc' } });
    } catch {
      // Fallback
    }

    if (!certs || certs.length === 0) {
      return res.json({ success: true, data: CERTIFICATIONS_DATA, source: 'fallback' });
    }

    return res.json({ success: true, data: certs, source: 'database' });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

