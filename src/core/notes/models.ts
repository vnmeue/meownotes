// src/core/notes/models.ts
export interface NoteContent {
  title: string;
  content: string;
  createdAt: string;
  id: string;
}

export interface Note {
  filename: string;
  content: string;
}
