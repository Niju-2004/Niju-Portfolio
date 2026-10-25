import { PrismaClient } from '@prisma/client';
import {
  PROJECTS_DATA,
  SKILLS_DATA,
  EXPERIENCE_DATA,
  CERTIFICATIONS_DATA,
  INITIAL_GUESTBOOK_DATA
} from '../src/data/fallbackData';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding for Niju M Portfolio...');

  // 1. Seed Projects
  for (const project of PROJECTS_DATA) {
    await prisma.project.upsert({
      where: { slug: project.slug },
      update: {
        title: project.title,
        subtitle: project.subtitle,
        description: project.description,
        category: project.category,
        tags: project.tags,
        githubUrl: project.githubUrl,
        liveUrl: project.liveUrl,
        featured: project.featured,
        displayOrder: project.displayOrder
      },
      create: {
        title: project.title,
        slug: project.slug,
        subtitle: project.subtitle,
        description: project.description,
        category: project.category,
        tags: project.tags,
        githubUrl: project.githubUrl,
        liveUrl: project.liveUrl,
        featured: project.featured,
        displayOrder: project.displayOrder
      }
    });
  }
  console.log(`✅ Seeded ${PROJECTS_DATA.length} projects`);

  // 2. Seed Skills (clear existing to prevent duplication)
  await prisma.skill.deleteMany({});
  for (const skill of SKILLS_DATA) {
    await prisma.skill.create({
      data: {
        category: skill.category,
        name: skill.name,
        level: skill.level,
        featured: skill.featured,
        displayOrder: skill.displayOrder
      }
    });
  }
  console.log(`✅ Seeded ${SKILLS_DATA.length} skills`);

  // 3. Seed Experience (clear existing to prevent duplication)
  await prisma.experience.deleteMany({});
  for (const exp of EXPERIENCE_DATA) {
    await prisma.experience.create({
      data: {
        role: exp.role,
        company: exp.company,
        location: exp.location,
        duration: exp.duration,
        current: exp.current,
        responsibilities: exp.responsibilities,
        techStack: exp.techStack,
        displayOrder: exp.displayOrder
      }
    });
  }
  console.log(`✅ Seeded ${EXPERIENCE_DATA.length} experiences`);

  // 4. Seed Certifications (clear existing to prevent duplication)
  await prisma.certification.deleteMany({});
  for (const cert of CERTIFICATIONS_DATA) {
    await prisma.certification.create({
      data: {
        name: cert.name,
        issuer: cert.issuer,
        issueDate: cert.issueDate,
        credentialUrl: cert.credentialUrl,
        displayOrder: cert.displayOrder
      }
    });
  }
  console.log(`✅ Seeded ${CERTIFICATIONS_DATA.length} certifications`);

  // 5. Seed Initial Guestbook (only if empty)
  const existingGb = await prisma.guestbookEntry.count();
  if (existingGb === 0) {
    for (const gb of INITIAL_GUESTBOOK_DATA) {
      await prisma.guestbookEntry.create({
        data: {
          name: gb.name,
          message: gb.message,
          badge: gb.badge
        }
      });
    }
    console.log(`✅ Seeded guestbook entries`);
  } else {
    console.log(`ℹ️ Skipped guestbook seeding (already has ${existingGb} entries)`);
  }

  console.log('🎉 Seeding completed successfully!');
}

main()
  .catch((e) => {
    console.error('❌ Error during seeding:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

