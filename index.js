#!/usr/bin/env node

const files = []

for (let i = 2; i < process.argv.length; i++) {
  files.push(process.argv[i])
}

files.length === 0 && process.exit(1)

require('del').sync(files, { force: true })
