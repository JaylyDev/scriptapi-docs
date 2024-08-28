---
title: Script Eval
description: A capability registry to enable the use of eval() and Function() from string in Minecraft scripting.
---

# Script Eval

A capability registry to enable the use of eval() and Function() from string in Minecraft scripting.

Enable it in `manifest.json` if neccessary.

manifest.json

```json
{
  "capabilities": ["script_eval"]
}
```

## Usage

You can execute JavaScript code through the `Function` object or `eval` function.

```js
new Function('console.log("Hello World")');
```

```js
eval('console.log("Hello World")');
```

Check out the following links for more infomation:

- [Detailed usage of `Function` object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- [Detailed usage of `eval` function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval)

## Errors

Following errors are thrown if script_eval is not enabled:

- 'eval is not supported' or ''eval' is not defined'
- Function from string is not supported
