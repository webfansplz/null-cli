#!/usr/bin/env node
const program = require('commander');
const minimist = require('minimist');
const chalk = require('chalk');
const semver = require('semver');
const requiredVersion = require('../package.json').engines.node;

function checkNodeVersion(wanted, id) {
  if (!semver.satisfies(process.version, wanted)) {
    console.log(
      chalk.red(
        `You are using Node ${process.version}, but this version of ${id} requires Node ${wanted} '.\nPlease upgrade your Node version.'`,
      ),
    );
    process.exit(1);
  }
}

checkNodeVersion(requiredVersion, 'null-cli');

if (semver.satisfies(process.version, '9.x')) {
  console.log(
    chalk.red(
      `You are using Node ${process.version}.\n`
        + 'Node.js 9.x has already reached end-of-life and will not be supported in future major releases.\n'
        + "It's strongly recommended to use an active LTS version instead.",
    ),
  );
}

function camelize(str) {
  return str.replace(/-(\w)/g, (_, c) => (c ? c.toUpperCase() : ''));
}

function cleanArgs(cmd) {
  const args = {};
  cmd.options.forEach(o => {
    const key = camelize(o.long.replace(/^--/, ''));
    if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
      args[key] = cmd[key];
    }
  });
  return args;
}

program
  .version(`null-cli ${require('../package.json').version}`)
  .usage('<command> [options]');

function verifyArgs(name) {
  if (minimist(process.argv.slice(3))._.length > 1) {
    console.log(
      chalk.yellow(
        `\n Info: You provided more than one argument. The first one will be used as the ${name}, the rest are ignored.`,
      ),
    );
  }
}
program
  .command('compress <file>')
  .description('Compress file')
  .action(name => {
    verifyArgs('File');
    require('../lib/compress')(name);
  });
program
  .command('fetch <url>')
  .description('Send network request')
  .action((name, cmd) => {
    const options = cleanArgs(cmd);
    verifyArgs('Url');
    require('../lib/fetch')(name, options);
  });
program
  .command('youdao <word>')
  .description('Chinese-english translation')
  .action(name => {
    verifyArgs('Word');
    require('../lib/youdao')(name);
  });
program
  .command('open <url>')
  .description('Open brower')
  .action((name, cmd) => {
    const options = cleanArgs(cmd);
    verifyArgs('Url');
    require('../lib/open')(name, options);
  });
program
  .command('qrcode <url>')
  .description('Generate qrcode')
  .action(name => {
    verifyArgs('Url');
    require('../lib/qrcode')(name);
  });
program
  .command('regex')
  .description('List of regex expressions')
  .action(() => {
    require('../lib/regex')();
  });
program
  .command('random <length>')
  .description('Generate random number')
  .action(name => {
    verifyArgs('Length');
    require('../lib/random')(name);
  });
program
  .command('create <app-name>')
  .description('Create a new probject by null-cli')
  .option('-f, --force', 'Overwrite target directory if it exists')
  .action((name, cmd) => {
    const options = cleanArgs(cmd);
    verifyArgs('App Name');
    require('../lib/create')(name, options);
  });
program
  .command('day <date>')
  .description('Parsing the date')
  .option('-f, --format <format>', ' How to format ', 'YYYY-MM-DD HH:mm:ss')
  .option('-t, --type <type>', 'Format type', 'string')
  .action((name, cmd) => {
    const options = cleanArgs(cmd);
    verifyArgs('date');
    require('../lib/day')(name, options);
  });
program
  .command('serve <path>')
  .description('Start web serve')
  .option('-p, --port <port>', ' Which port to use  ', 8000)
  .option('-o, --open', 'Auto open browser')
  .action((name, cmd) => {
    const options = cleanArgs(cmd);
    verifyArgs('Path');
    require('../lib/serve')(name, options);
  });

program
  .command('enc <string>')
  .description('Enc string')
  .option('-m, --method <method>', ' Which method to use  ', 'base64')
  .option('-k, --key <key>', ' Aes encryption key ', '20201111nullbest')
  .option('-i, --iv <iv>', ' Aes encryption iv ', 'webbestlangworld')
  .action((name, cmd) => {
    const options = cleanArgs(cmd);
    verifyArgs('String');
    require('../lib/enc')(name, options);
  });

program
  .command('dec <string>')
  .description('Dec string')
  .option('-m, --method <method>', ' Which method to use ', 'base64')
  .option('-k, --key <key>', ' Aes decryption key ', '20201111nullbest')
  .option('-i, --iv <iv>', ' Aes decryption iv ', 'webbestlangworld')
  .action((name, cmd) => {
    const options = cleanArgs(cmd);
    verifyArgs('String');
    require('../lib/dec')(name, options);
  });

program
  .command('search <keyword>')
  .option('-n, --npm', 'search by npm')
  .option('-s, --stackoverflow', 'search by stackoverflow')
  .option('-w, --wiki', 'search by wiki')
  .option('-b, --baidu', 'search by baidu')
  .option('-g, --github', 'search by github')
  .description('quick search by google')
  .action((name, cmd) => {
    const options = cleanArgs(cmd);
    verifyArgs('Keyword');
    require('../lib/search')(name, options);
  });

// add some useful info on help
program.on('--help', () => {
  console.log();
  console.log(
    `  Run ${chalk.cyan(
      'null <command> --help',
    )} for detailed usage of given command.`,
  );
  console.log();
});

program.commands.forEach(c => c.on('--help', () => console.log()));

function enhanceErrorMessages(methodName, log) {
  program.Command.prototype[methodName] = function (...args) {
    if (methodName === 'unknownOption' && this._allowUnknownOption) {
      return;
    }
    this.outputHelp();
    console.log(`  ${chalk.red(log(...args))}`);
    console.log();
    process.exit(1);
  };
}

enhanceErrorMessages(
  'missingArgument',
  argName => `Missing required argument ${chalk.yellow(`<${argName}>`)}.`,
);

enhanceErrorMessages(
  'unknownOption',
  optionName => `Unknown option ${chalk.yellow(optionName)}.`,
);

enhanceErrorMessages(
  'optionMissingArgument',
  (option, flag) => `Missing required argument for option ${chalk.yellow(option.flags)}${
      flag ? `, got ${chalk.yellow(flag)}` : ''
    }`,
);

program.parse(process.argv);

if (!process.argv.slice(2).length) {
  program.outputHelp();
}
