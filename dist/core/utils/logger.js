"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = log;
exports.showHeader = showHeader;
// src/core/utils/logger.ts
const chalk_1 = __importDefault(require("chalk"));
const styles = {
    title: (text) => chalk_1.default.bold.redBright(text),
    info: (text) => chalk_1.default.bold.blue(text),
    success: (text) => chalk_1.default.bold.green(text),
    warning: (text) => chalk_1.default.bold.yellow(text),
    error: (text) => chalk_1.default.bold.red(text),
    default: (text) => text
};
function log(message, style = 'default') {
    console.log(styles[style](`[MEOW] ${message}`));
}
function showHeader() {
    console.log(styles.title(`
    ███╗   ███╗███████╗ ██████╗ ██╗    ██╗
    ████╗ ████║██╔════╝██╔═══██╗██║    ██║
    ██╔████╔██║█████╗  ██║   ██║██║ █╗ ██║
    ██║╚██╔╝██║██╔══╝  ██║   ██║██║███╗██║
    ██║ ╚═╝ ██║███████╗╚██████╔╝╚███╔███╔╝
    ╚═╝     ╚═╝╚══════╝ ╚═════╝  ╚══╝╚══╝ 
  `));
}
//# sourceMappingURL=logger.js.map