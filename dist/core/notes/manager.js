"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteManager = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const date_fns_1 = require("date-fns");
const logger_1 = require("../utils/logger");
class NoteManager {
    constructor(notesDir) {
        this.notesDir = notesDir;
        this.ensureNotesDir();
    }
    ensureNotesDir() {
        if (!fs_1.default.existsSync(this.notesDir)) {
            fs_1.default.mkdirSync(this.notesDir, { recursive: true });
        }
    }
    createNote(title, content) {
        const timestamp = (0, date_fns_1.format)(new Date(), 'yyyy-MM-dd_HH-mm-ss');
        const filename = `${timestamp}_${title.toLowerCase().replace(/\s+/g, '-')}.md`;
        const filePath = path_1.default.join(this.notesDir, filename);
        const noteContent = {
            title,
            content,
            createdAt: new Date().toISOString(),
            id: (0, uuid_1.v4)()
        };
        fs_1.default.writeFileSync(filePath, this.formatNoteContent(noteContent));
        return filename;
        (0, logger_1.log)('Note created successfully!', 'success');
        return `${title}.md`; // Return the filename
    }
    formatNoteContent(note) {
        return `# ${note.title}\n\n${note.content}\n\n---\nCreated: ${note.createdAt}\nID: ${note.id}`;
    }
    listNotes() {
        return fs_1.default.readdirSync(this.notesDir)
            .filter(file => file.endsWith('.md'))
            .map(file => {
            const content = fs_1.default.readFileSync(path_1.default.join(this.notesDir, file), 'utf-8');
            return { filename: file, content };
        });
    }
}
exports.NoteManager = NoteManager;
//# sourceMappingURL=manager.js.map