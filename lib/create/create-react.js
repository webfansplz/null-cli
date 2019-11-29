const path = require('path');
const chalk = require('chalk');
const install = require('./install');
const fileServer = require('./fileServer');

const { clearConsole } = require('../../utils/logger');

async function createVue(name, context) {
  await clearConsole();
  console.log('✨', `Creating project in ${chalk.yellow(context)}.`);
  const templatePath = path.join(__dirname, './template/react');
  console.log('🚀  Invoking generators...');
  const files = await fileServer.read(templatePath, {
    list: ['package.json', 'public/index.html'],
    options: {
      projectName: name,
    },
  });
  fileServer.write(context, files);
  console.log('📦  Installing additional dependencies...');
  await install(context);
  console.log(`🎉  Successfully created project ${chalk.yellow(name)}.`);
  console.log(
    `👉  Get started with the following commands:\n\n${
      context === process.cwd()
        ? ''
        : chalk.cyan(` ${chalk.gray('$')} cd ${name}\n`)
    }${chalk.cyan(` ${chalk.gray('$')} ${'npm run start'}`)}`,
  );
}
module.exports = createVue;
