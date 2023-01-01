---
title: Franc and Langs
---
Error message:
`Error [ERR_REQUIRE_ESM]: require() of ...\index.js from ...\index.js not supported..`

If you are trying to import Franc and Lang, you might have this issue. This is because Franc uses *import* while Lang uses *require*. The newest version of Franc imposes this restriction which means you won't have an issue if you install the same version of Franc that Colt is using.

To fix this, uninstall franc and then reinstall it like this: `npm install franc@5`
<br>
However, there is a way to use the latest version of franc with no issues.

Make sure you have `"type": "module"` in package.json like this:
```json
{
  "name": "new-folder",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "franc": "^6.1.0",
    "langs": "^2.0.0"
  },
  "type": "module"
}
```
You will then get an error: `require is not defined in ES module scope, you can use import instead`

You need to change `const  franc  =  require('franc')` to `import {franc} from "franc"`

You will still get the same error because of Langs. To fix this, you need to add a couple of lines above your imports. It should look like this:
```js
// Lines to add:
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// You should already have this:
import {franc} from "franc";
const langs = require("langs");
```
`createRequire` is a utility function we are using to recreate a `require` function. This allows us to essentially use `require` in the same way as `commonjs` when we are using  `ES modules`.