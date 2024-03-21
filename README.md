# javascript-runtime-detector

Tells if the current JavaScript runtime is something other than a browser, such as Deno, Node.js, Bun or IO.js. By default the current runtime is assumed to be a browser.

## Usage example

_Tip (requires Deno): Run the following example by typing this in your terminal:_

```shell
deno run --allow-net --allow-run --allow-env --allow-read https://deno.land/x/mdrb/mod.ts https://raw.githubusercontent.com/doga/javascript-runtime-detector/main/README.md
```

<details data-mdrb>
<summary>Detect and print out the current JavaScript runtime info.</summary>

<pre>
description = '''
Running this example is safe, it will not read or write anything to your filesystem.
'''
</pre>
</details>

```javascript
import {detectRuntime, runtimes} from 'https://esm.sh/gh/doga/javascript-runtime-detector@0.1.3/mod.mjs';
const runtime = detectRuntime();
console.info(`JavaScript runtime identified as: ${runtime}`);
console.info(`Runtime is:`);
console.info(`  Deno:      ${runtime === runtimes.deno}`);
console.info(`  Bun:       ${runtime === runtimes.bun}`);
console.info(`  Node.js:   ${runtime === runtimes.node}`);
console.info(`  IO.js:     ${runtime === runtimes.io}`);
console.info(`  A browser: ${runtime === runtimes.browser}`);
```

Sample output for the code above:

```text
JavaScript runtime identified as: deno
Runtime is:
  Deno:      true
  Bun:       false
  Node.js:   false
  IO.js:     false
  A browser: false
```

∎
