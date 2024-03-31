#!/usr/bin/env node

const {run} = require('./compiler');

const filename = process.argv[2];
if (!filename) {
  console.error('Usage: sts <filename>');
  process.exit(1);
}

run(filename);