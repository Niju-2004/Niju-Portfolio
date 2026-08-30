import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';
import { INITIAL_GUESTBOOK_DATA } from '../data/fallbackData';

// In-memory array for live development before remote PostgreSQL is attached
let inMemoryGuestbook = [...INITIAL_GUESTBOOK_DATA];

export async function getGuestbook(req: Request, res: Response) {
  try {
    let entries = null;
    try {
      entries = await prisma.guestbookEntry.findMany({
        orderBy: { createdAt: 'desc' },
        take: 50
      });
    } catch {
      // Fallback
    }

    if (!entries || entries.length === 0) {
      return res.json({ success: true, data: inMemoryGuestbook, source: 'in-memory' });
    }

    return res.json({ success: true, data: entries, source: 'database' });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
}

export async function createGuestbookEntry(req: Request, res: Response) {
  try {
    const { name, message, badge } = req.body;

    if (!name || !name.trim() || !message || !message.trim()) {
      return res.status(400).json({ success: false, error: 'Name and message are required.' });
    }

    const cleanName = name.trim().slice(0, 50);
    const cleanMessage = message.trim().slice(0, 300);
    const cleanBadge = badge ? badge.trim().slice(0, 30) : 'Visitor';

    try {
      const entry = await prisma.guestbookEntry.create({
        data: {
          name: cleanName,
          message: cleanMessage,
          badge: cleanBadge
        }
      });
      return res.status(201).json({ success: true, data: entry });
    } catch {
      // Fallback in-memory
      const newEntry = {
        id: Date.now(),
        name: cleanName,
        message: cleanMessage,
        badge: cleanBadge,
        createdAt: new Date()
      };
      inMemoryGuestbook.unshift(newEntry);
      return res.status(201).json({ success: true, data: newEntry });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Failed to create guestbook entry' });
  }
}

