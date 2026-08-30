import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import apiRouter from './routes/api';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for Vite local dev and production frontend
app.use(
  cors({
    origin: '*', // Allows local dev and any free hosting frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
  })
);

app.use(express.json());

// Simple request logger
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// Root route
app.get('/', (req, res) => {
  res.json({
    message: "Welcome to Niju M's Full-Stack Portfolio REST API",
    documentation: "/api/health",
    endpoints: [
      "/api/profile",
      "/api/projects",
      "/api/skills",
      "/api/certifications",
      "/api/experience",
      "/api/guestbook",
      "/api/contact",
      "/api/health"
    ]
  });
});

// Mount API routes
app.use('/api', apiRouter);

// Global 404 handler
app.use((req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

app.listen(PORT, () => {
  console.log(`=============================================`);
  console.log(`🚀 Niju M Portfolio API running at:`);
  console.log(`👉 http://localhost:${PORT}`);
  console.log(`👉 Health check: http://localhost:${PORT}/api/health`);
  console.log(`=============================================`);
});

export default app;

