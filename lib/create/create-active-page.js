const path = require('path');
const chalk = require('chalk');
const fileServer = require('./fileServer');
const { clearConsole } = require('../../utils/logger');

async function createActivePage(name, context) {
  await clearConsole();
  console.log('✨', `Creating project in ${chalk.yellow(context)}.`);
  const templatePath = path.join(__dirname, './template/active-page');
  console.log('🚀  Invoking generators...');
  const files = await fileServer.read(templatePath, {
    list: ['index.html'],
    options: {
      projectName: name,
    },
  });
  fileServer.write(context, files);
  console.log(`🎉  Successfully created project ${chalk.yellow(name)}.`);
  console.log(
    `👉  Get started with the following commands:\n\n${
      context === process.cwd()
        ? ''
        : chalk.cyan(` ${chalk.gray('$')} cd ${name}\n`)
    }${chalk.cyan(` ${chalk.gray('$')} ${'open index.html'}`)}`,
  );
}
module.exports = createActivePage;
