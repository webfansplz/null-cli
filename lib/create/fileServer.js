const ejs = require('ejs')
const path = require('path')
const slash = require('slash')
const fs = require('fs-extra')
const globby = require('globby')
const rimraf = require('rimraf')
const { isBinaryFileSync } = require('isbinaryfile')

const fileServer = {
  normalizeFilePaths(files) {
    Object.keys(files).forEach(file => {
      const normalized = slash(file)
      if (file !== normalized) {
        files[normalized] = files[file]
        delete files[file]
      }
    })
    return files
  },
  async delete(directory, files) {
    await rimraf.sync(`${directory}/*`)
    return Promise.all(
      files.map(async filename => {
        await rimraf.sync(`${directory}/${filename}`)
      }),
    )
  },
  async list(context) {
    const options = {
      cwd: context,
      onlyFiles: true,
      gitignore: true,
      dot: true,
      ignore: ['**/node_modules/**', '**/.git/**'],
    }
    const files = await globby(['**'], options)
    return files
  },
  async read(context, rewrite) {
    const res = {}
    const files = await this.list(context)
    for (const file of files) {
      const name = path.resolve(context, file)
      res[file] = isBinaryFileSync(name)
        ? fs.readFileSync(name)
        : fs.readFileSync(name, 'utf-8')
    }
    if (rewrite) {
      Object.keys(res).forEach(file => {
        if (rewrite.list.includes(file)) {
          res[file] = ejs.render(res[file], rewrite.options)
        }
      })
    }
    return this.normalizeFilePaths(res)
  },
  write(dir, files) {
    Object.keys(files).forEach(name => {
      const filePath = path.join(dir, name)
      fs.ensureDirSync(path.dirname(filePath))
      fs.writeFileSync(filePath, files[name])
    })
  },
}

module.exports = fileServer
