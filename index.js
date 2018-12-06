#!/usr/bin/env node

const globby = require('globby')
const del = require('del')
const path = require('path')

const root = process.cwd()

let files = []

for (let i = 2; i < process.argv.length; i++) {
  files.push(process.argv[i])
}

files.length === 0 && process.exit(1)

files = globby.sync(files)

del.sync(files, { force: true })

files.forEach(file => {
  const folder = path.dirname(path.resolve(root, file))

  const folderInsideFiles = globby.sync(path.resolve(folder, '**/*'))

  folderInsideFiles.length === 0 && root !== folder && del.sync(folder, { force: true })
})
