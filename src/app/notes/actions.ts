'use server';
import prisma from '../../lib/db';

// Fetch all notes
export async function getNotes() {
  return await prisma.note.findMany({ orderBy: { createdAt: 'desc' } });
}

// Add a new note
export async function addNote(title: string, content: string, tags?: string, imagePath?: string, gcodePath?: string) {
  await prisma.note.create({
    data: { title, content, tags, imagePath, gcodePath },
  });
}
