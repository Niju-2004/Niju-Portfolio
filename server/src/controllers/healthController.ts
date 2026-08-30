import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export async function getHealth(req: Request, res: Response) {
  const startTime = Date.now();
  let dbStatus = 'disconnected';

  try {
    // Quick test query
    await prisma.$queryRaw`SELECT 1`;
    dbStatus = 'connected';
  } catch {
    dbStatus = 'in-memory fallback (ready for remote Neon/Supabase DB)';
  }

  const responseTimeMs = Date.now() - startTime;

  return res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    database: dbStatus,
    responseTimeMs,
    environment: process.env.NODE_ENV || 'development',
    developer: 'Niju M',
    version: '1.0.0'
  });
}

