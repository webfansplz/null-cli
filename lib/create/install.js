const execa = require('execa');

function install(cwd) {
  const command = 'npm';
  const args = [
    'install',
    '--loglevel',
    'error',
    '--registry',
    'https://registry.npm.taobao.org',
  ];
  return new Promise((resolve, reject) => {
    const child = execa(command, args, {
      cwd,
      stdio: ['inherit', 'inherit', 'inherit'],
    });
    child.on('close', code => {
      if (code !== 0) {
        reject(`command failed: ${command} ${args.join(' ')}`);
        return;
      }
      resolve();
    });
  });
}

module.exports = install;
