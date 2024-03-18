
const runtimes = {
  deno   : 'deno',
  node   : 'node',
  io     : 'io',
  bun    : 'bun',
  browser: 'browser'
}

function detectRuntime() {
  if (process?.release?.name?.match(/node/i)) {
    return runtimes.node;
  }
  if (process?.release?.name?.match(/io.js/i)) {
    return runtimes.io;
  }
  if (typeof Deno !== 'undefined'){
    return runtimes.deno;
  }
  if (typeof Bun !== 'undefined'){
    return runtimes.bun;
  }
  return runtimes.browser;
}

export {detectRuntime, runtimes};