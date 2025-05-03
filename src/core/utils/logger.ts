// src/core/utils/logger.ts
import chalk from 'chalk';

const styles = {
  title: (text: string) => chalk.bold.redBright(text),
  info: (text: string) => chalk.bold.blue(text),
  success: (text: string) => chalk.bold.green(text),
  warning: (text: string) => chalk.bold.yellow(text),
  error: (text: string) => chalk.bold.red(text),
  default: (text: string) => text
};

export function log(message: string, style: keyof typeof styles = 'default') {
  console.log(styles[style](`[MEOW] ${message}`));
}

export function showHeader() {
  console.log(styles.title(`
    ███╗   ███╗███████╗ ██████╗ ██╗    ██╗
    ████╗ ████║██╔════╝██╔═══██╗██║    ██║
    ██╔████╔██║█████╗  ██║   ██║██║ █╗ ██║
    ██║╚██╔╝██║██╔══╝  ██║   ██║██║███╗██║
    ██║ ╚═╝ ██║███████╗╚██████╔╝╚███╔███╔╝
    ╚═╝     ╚═╝╚══════╝ ╚═════╝  ╚══╝╚══╝ 
  `));
}
