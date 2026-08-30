import { Request, Response } from 'express';
import { prisma } from '../lib/prisma';

export async function submitContact(req: Request, res: Response) {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        error: 'Please provide your name, email, and message.'
      });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        error: 'Please enter a valid email address.'
      });
    }

    try {
      await prisma.contactMessage.create({
        data: {
          name: name.trim(),
          email: email.trim(),
          subject: subject ? subject.trim() : 'Portfolio Inquiry',
          message: message.trim()
        }
      });
    } catch {
      // In development fallback, log to console
      console.log(`[Contact Message Received] From: ${name} (${email}) - ${message}`);
    }

    return res.status(201).json({
      success: true,
      message: 'Thank you for reaching out! Niju will get back to you shortly.'
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Failed to process message' });
  }
}

