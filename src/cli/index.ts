import { program } from 'commander';
import { showHeader, log } from '../core/utils/logger';
import { NoteManager } from '../core/notes/manager';

program
  .name('meow-notes')
  .description('Rugged terminal note-taking app')
  .version('1.0.0');

program.command('new')
  .description('Create a new battle note')
  .action(async () => {
    showHeader();
    // Add your note creation logic here
    log('Note created successfully!', 'success');
  });

program.parse(process.argv);
