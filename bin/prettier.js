#!/usr/bin/env node

"use strict";

const result = require("../src/cli").run(process.argv.slice(2));
if (result instanceof Promise) {
  Promise.resolve(result);
}
