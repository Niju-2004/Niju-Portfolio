import { Router } from 'express';
import { getProjects, getProjectBySlug } from '../controllers/projectsController';
import { getSkills, getCertifications } from '../controllers/skillsController';
import { getExperience, getProfile } from '../controllers/experienceController';
import { getGuestbook, createGuestbookEntry } from '../controllers/guestbookController';
import { submitContact } from '../controllers/contactController';
import { getHealth } from '../controllers/healthController';

const router = Router();

// Profile & General Info
router.get('/profile', getProfile);

// Projects
router.get('/projects', getProjects);
router.get('/projects/:slug', getProjectBySlug);

// Skills & Certifications
router.get('/skills', getSkills);
router.get('/certifications', getCertifications);

// Experience
router.get('/experience', getExperience);

// Guestbook (CRUD)
router.get('/guestbook', getGuestbook);
router.post('/guestbook', createGuestbookEntry);

// Contact Messages
router.post('/contact', submitContact);

// Health & Telemetry
router.get('/health', getHealth);

export default router;

