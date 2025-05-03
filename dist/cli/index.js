"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const logger_1 = require("../core/utils/logger");
commander_1.program
    .name('meow-notes')
    .description('Rugged terminal note-taking app')
    .version('1.0.0');
commander_1.program.command('new')
    .description('Create a new battle note')
    .action(async () => {
    (0, logger_1.showHeader)();
    // Add your note creation logic here
    (0, logger_1.log)('Note created successfully!', 'success');
});
commander_1.program.parse(process.argv);
//# sourceMappingURL=index.js.map