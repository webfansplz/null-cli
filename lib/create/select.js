const inquirer = require('inquirer')
const { clearConsole } = require('../../utils/logger')

async function select() {
  await clearConsole()
  const { action } = await inquirer.prompt([
    {
      name: 'action',
      type: 'list',
      message: '📄  Please select a template you want to generate',
      choices: [
        { name: 'vue', value: 'vue' },
        { name: 'react', value: 'react' },
        { name: 'koa', value: 'koa' },
        { name: 'active-page', value: 'activePage' },
      ],
    },
  ])
  return action
}

module.exports = select
