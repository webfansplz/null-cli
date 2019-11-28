const inquirer = require('inquirer');
const { clearConsole } = require('../../utils/logger');
const { list } = require('./list');

async function regex() {
  await clearConsole();
  const { action } = await inquirer.prompt([list]);
  console.log(`/${action}/`);
  return action;
}

module.exports = regex;
