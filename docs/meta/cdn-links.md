---
title: CDN Links
description: A list of CDN links related to Minecraft Script API assets. I will do my best to keep this list up to date as I continue to find useful content.
---

# CDN Links

A list of links related to Minecraft Script API assets. I will do my best to keep this list up to date as I continue to find useful content.

## Minecraft Math Library Mirror

Minified versions of `@minecraft/math` module are available at:

- `dist/minecraft-math.js` <a href="/scriptapi-docs/assets/meta/math/latest/minecraft-math.js" download=""><button>Download File</button></a>

  ```:no-line-numbers
  https://jaylydev.github.io/scriptapi-docs/assets/meta/math/latest/minecraft-math.js
  ```

::: tip USAGE

```js
// file is saved as scripts/minecraft-math.js
import { Vector3Builder } from "minecraft-math.js";
const vec3 = new Vector3Builder(0, 1, 0);
```

:::

- `lib/types/math-public.d.ts` <a href="/scriptapi-docs/assets/meta/math/latest/minecraft-math.d.ts" download=""><button>Download File</button></a>

  ```:no-line-numbers
  https://jaylydev.github.io/scriptapi-docs/assets/meta/math/latest/minecraft-math.d.ts
  ```

  Save this file in the same directory as `minecraft-math.js` to get type definition for VSCode.

- `dist/minecraft-math.js.map` <a href="/scriptapi-docs/assets/meta/math/latest/minecraft-math.js.map" download=""><button>Download File</button></a>

  ```:no-line-numbers
  https://jaylydev.github.io/scriptapi-docs/assets/meta/math/latest/minecraft-math.js.map
  ```

## Minecraft Vanilla Data Mirror

Minified versions of `@minecraft/vanilla-data` module are available at:

- `lib/index.js` (latest) <a href="/scriptapi-docs/assets/meta/vanilla-data/latest/index.js" download="vanilla-data.js"><button>Download File</button></a>
  ```:no-line-numbers
  https://jaylydev.github.io/scriptapi-docs/assets/meta/vanilla-data/latest/index.js
  ```
- `lib/index.js` (preview) <a href="/scriptapi-docs/assets/meta/vanilla-data/preview/index.js" download="vanilla-data.js"><button>Download File</button></a>
  ```:no-line-numbers
  https://jaylydev.github.io/scriptapi-docs/assets/meta/vanilla-data/preview/index.js
  ```

::: tip USAGE

```js
// file is saved as scripts/vanilla-data.js
import { MinecraftBlockTypes } from "vanilla-data.js";
MinecraftBlockTypes.DiamondBlock;
```

:::
