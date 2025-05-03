import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { format } from 'date-fns';
import { Note, NoteContent } from './models';
import { log } from '../utils/logger';

export class NoteManager {
  private readonly notesDir: string;

  constructor(notesDir: string) {
    this.notesDir = notesDir;
    this.ensureNotesDir();
  }

  private ensureNotesDir(): void {
    if (!fs.existsSync(this.notesDir)) {
      fs.mkdirSync(this.notesDir, { recursive: true });
    }
  }

  public createNote(title: string, content: string): string {
    const timestamp = format(new Date(), 'yyyy-MM-dd_HH-mm-ss');
    const filename = `${timestamp}_${title.toLowerCase().replace(/\s+/g, '-')}.md`;
    const filePath = path.join(this.notesDir, filename);

    const noteContent: NoteContent = {
      title,
      content,
      createdAt: new Date().toISOString(),
      id: uuidv4()
    };

    fs.writeFileSync(filePath, this.formatNoteContent(noteContent));
    return filename;
    log('Note created successfully!', 'success');
    return `${title}.md`; // Return the filename
  }

  private formatNoteContent(note: NoteContent): string {
    return `# ${note.title}\n\n${note.content}\n\n---\nCreated: ${note.createdAt}\nID: ${note.id}`;
  }

  public listNotes(): Note[] {
    return fs.readdirSync(this.notesDir)
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const content = fs.readFileSync(path.join(this.notesDir, file), 'utf-8');
        return { filename: file, content };
      });
  }
}
