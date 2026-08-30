# Niju M — Full-Stack Portfolio

A high-performance, full-stack developer portfolio built with **React, Vite, TypeScript, Tailwind CSS** on the frontend, and a **Node.js, Express, TypeScript, Prisma ORM** REST API on the backend with **PostgreSQL** database persistence.

---

## 🏗️ Architecture Overview

```
NijuM-Portfolio/
├── client/                     # Frontend (React 18 + Vite + TypeScript + Tailwind CSS + Lucide)
│   ├── src/
│   │   ├── components/         # Navbar, Hero, About, Experience, Skills, Projects, Certifications, CLI, Guestbook, Contact
│   │   ├── services/           # api.ts (REST API client)
│   │   ├── types/              # TypeScript interfaces
│   │   └── data/               # Static fallback data
│   └── package.json
│
└── server/                     # Backend (Node.js + Express + TypeScript + Prisma ORM + PostgreSQL)
    ├── src/
    │   ├── controllers/        # Projects, Skills, Experience, Guestbook, Contact, Health
    │   ├── routes/             # /api REST routes
    │   └── server.ts           # Express entry point
    ├── prisma/
    │   ├── schema.prisma       # Database models
    │   └── seed.ts             # Database seed script
    └── package.json
```

---

## 🚀 Quick Start Guide

### 1. Install & Run Backend Server

```bash
cd server
npm install
npm run dev
```
The REST API will start at: `http://localhost:5000`
* Health check: `http://localhost:5000/api/health`
* Projects endpoint: `http://localhost:5000/api/projects`

### 2. Install & Run Frontend Client

Open a second terminal window:

```bash
cd client
npm install
npm run dev
```
The frontend web app will start at: `http://localhost:5173`

---

## ⚡ Standout Features

1. **Interactive In-Browser CLI Terminal Sandbox**: Press the \` (backtick) key or click "CLI Terminal" to interact with the backend API from a terminal.
2. **Live Visitor Guestbook**: Real-time CRUD operations stored in PostgreSQL with celebratory confetti.
3. **Contact Dispatcher Pipeline**: Validates incoming messages and persists them in the database.
4. **Live Telemetry Badge**: Shows real-time API latency, server uptime, and database connection status.
5. **Authentic Profile & Enterprise Roles**: Features Niju's Software Engineer career at Infosys, Google ADK certifications, and enterprise projects.

---

## ☁️ 100% Free-Tier Deployment Guide

* **Database**: Create a free PostgreSQL instance on [Neon.tech](https://neon.tech) or [Supabase](https://supabase.com). Paste the connection string in `server/.env` as `DATABASE_URL`.
* **Backend API**: Push to GitHub and deploy the `/server` folder to [Render.com](https://render.com) (Free Web Service) or [Koyeb](https://koyeb.com).
* **Frontend UI**: Push to GitHub and deploy the `/client` folder to [Vercel](https://vercel.com) (Free Edge Hosting).

