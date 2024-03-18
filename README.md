# javascript-runtime-detector

Tells if the current JavaScript runtime is something other than a browser, such as Deno, Node.js, Bun or IO.js. By default the current runtime is assumed to be a browser.

## Usage example

```shell
$ deno
Deno 1.41.3
exit using ctrl+d, ctrl+c, or close()
REPL is running with all permissions allowed.
To specify permissions, run `deno repl` with allow flags.
> import {detectRuntime, runtimes} from 'https://esm.sh/gh/doga/javascript-runtime-detector@0.1.3/mod.mjs';
undefined
> detectRuntime()
"deno"
> detectRuntime() === runtimes.deno
true
> detectRuntime() === runtimes.node
false
> detectRuntime() === runtimes.io
false
> detectRuntime() === runtimes.browser
false
>
```

∎
