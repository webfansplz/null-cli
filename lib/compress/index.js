const fs = require('fs');
const path = require('path');
const globby = require('globby');
const CleanCSS = require('clean-css');
const UglifyJS = require('uglify-js');
const { minify } = require('html-minifier');
const chalk = require('chalk');

const methods = {
  html(data) {
    const result = minify(data, {
      removeComments: true,
      collapseWhitespace: true,
      minifyJS: true,
      minifyCSS: true,
    });
    return result;
  },
  js(data) {
    const { code } = UglifyJS.minify(data);
    return code;
  },

  css(data) {
    const { styles } = new CleanCSS().minify(data);
    return styles;
  },
};
function rewrite(filename, type) {
  const data = fs.readFileSync(filename, 'utf8');
  const result = methods[type](data);
  if (result) {
    fs.writeFileSync(filename, result);
    return result;
  }
  console.log();
  console.log(chalk.red.dim(` Warning: ${filename} can't be compress`));
  console.log();
}
async function compress(target) {
  console.log('🚀  Start Compress');
  const inCurrent = target === '.';
  const name = inCurrent ? process.cwd() : target;
  const cwd = path.isAbsolute(name) ? name : path.join(process.cwd(), name);
  const isDirectory = fs.statSync(cwd).isDirectory();
  const files = isDirectory
    ? await globby(['**'], {
        cwd,
        onlyFiles: true,
        gitignore: true,
        dot: false,
        ignore: ['**/node_modules/**', '**/.git/**'],
      })
    : [cwd];
  let result;
  files.forEach(file => {
    const postfix = /\w+$/g.exec(file)[0];
    const compressType = ['js', 'css', 'html'];
    if (compressType.includes(postfix)) {
      result = rewrite(isDirectory ? path.join(cwd, file) : cwd, postfix);
    }
  });
  console.log('🎉  Finish Compress');
  return result;
}

module.exports = compress;
