[**Script API - v1.26.10**](../../README.md)

***

[Script API - v1.26.10](../../packages.md) / @minecraft/math

## Minecraft Math

A set of utilities and functions for common math operations. Major pieces are covered below.

## Vector3

A set of utility functions and a wrapper class for common vector3 operations. Two distinct patterns are supported, a more pure computational approach operating on the Vector3 interface with no mutation, and a separate wrapper object oriented approach following a "builder" pattern. It is mostly preference whether you prefer the more "mutation" heavy pattern or the functional pattern, it depends on the structure of your code. Under the covers, the same helpers are used.

### Pure Functional Style

```ts
import { Vector3, world } from '@minecraft/server';
import { MinecraftDimensionTypes } from '@minecraft/vanilla-data';
import { Vector3Utils } from '@minecraft/math';

const vectorA: Vector3 = {x: 1, y: 2, z:3};
const vectorB: Vector3 = {x: 4, y: 5, z:6};

const resultAdd = Vector3Utils.add(vectorA, vectorB); // {x:5, y:7, z:9}
const resultSubtract = Vector3Utils.subtract(vectorA, vectorB); // {x:-3, y:-3, z:-3}
const resultAdd = Vector3Utils.cross(vectorA, vectorB); // {x:-3, y:6, z:-3}

console.log(toString(vectorA)); // Prints out "1, 2, 3"

// Use your vectors with any @minecraft/server API
const = dimension = world.getDimension(MinecraftDimensionTypes.Overworld);
dimension.spawnParticle("minecraft:colored_flame_particle", resultAdd);
```

### Builder Style

```ts
import { Vector3, world } from '@minecraft/server';
import { Vector3Builder } from '@minecraft/math';
import { MinecraftDimensionTypes } from '@minecraft/vanilla-data';

const vectorA: Vector3Builder = new Vector3Builder({x: 1, y: 2, z:3});
const vectorB: Vector3 = {x: 4, y: 5, z:6};
const vectorC: Vector3 = {x: 1, y: 3, z:5};

// Mutates vectorA directly each time
vectorA.add(vectorB).subtract(vectorC).cross(vectorB); // Final result {x:4, y:-8, z:4}

console.log(vectorA.toString()); // Prints out "4, -8, 4"

// Vector3Builder type can directly be used in APIs that accept Vector3
const dimension = world.getDimension(MinecraftDimensionTypes.Overworld);
dimension.spawnParticle("minecraft:colored_flame_particle", vectorA);
```

## How to use @minecraft/math in your project

@minecraft/math is published to NPM and follows standard semver semantics. To use it in your project,

- Download `@minecraft/math` from NPM by doing `npm install @minecraft/math` within your scripts pack. By using `@minecraft/math`, you will need to do some sort of bundling to merge the library into your packs code. We recommend using [esbuild](https://esbuild.github.io/getting-started/#your-first-bundle) for simplicity.

## External Minecraft Library

**This is an external Minecraft library published to NPM. It is not part of Minecraft's native modules.**

There are two ways to use this library:

### Standalone file

Download a standalone file available to download from https://jaylydev.github.io/scriptapi-docs/meta/cdn-links.html for quick, small-scale projects.

### Bundling

Installing it through npm, with advanced build configurations and bundling with esbuild.

Installation:

```bash
npm i @minecraft/math@2.4.0
```

- Package link: https://npmjs.com/package/@minecraft/math
- Package version: v2.4.0
- Guide on bundle Minecraft Scripts with [ESBuild](https://jaylydev.github.io/posts/bundle-minecraft-scripts-esbuild/) or [Webpack](https://jaylydev.github.io/posts/scripts-bundle-minecraft/)

## Classes

- [AABBInvalidExtentError](classes/AABBInvalidExtentError.md)
- [AABBUtils](classes/AABBUtils.md)
- [Vector2Builder](classes/Vector2Builder.md)
- [Vector2Utils](classes/Vector2Utils.md)
- [Vector3Builder](classes/Vector3Builder.md)
- [Vector3Utils](classes/Vector3Utils.md)
- [VectorXZBuilder](classes/VectorXZBuilder.md)
- [VectorXZUtils](classes/VectorXZUtils.md)

## Variables

- [Colors](variables/Colors.md)
- [VECTOR2\_ZERO](variables/VECTOR2_ZERO.md)
- [VECTOR3\_BACK](variables/VECTOR3_BACK.md)
- [VECTOR3\_DOWN](variables/VECTOR3_DOWN.md)
- [VECTOR3\_EAST](variables/VECTOR3_EAST.md)
- [VECTOR3\_FORWARD](variables/VECTOR3_FORWARD.md)
- [VECTOR3\_HALF](variables/VECTOR3_HALF.md)
- [VECTOR3\_LEFT](variables/VECTOR3_LEFT.md)
- [VECTOR3\_NEGATIVE\_ONE](variables/VECTOR3_NEGATIVE_ONE.md)
- [VECTOR3\_NORTH](variables/VECTOR3_NORTH.md)
- [VECTOR3\_ONE](variables/VECTOR3_ONE.md)
- [VECTOR3\_RIGHT](variables/VECTOR3_RIGHT.md)
- [VECTOR3\_SOUTH](variables/VECTOR3_SOUTH.md)
- [VECTOR3\_UP](variables/VECTOR3_UP.md)
- [VECTOR3\_WEST](variables/VECTOR3_WEST.md)
- [VECTOR3\_ZERO](variables/VECTOR3_ZERO.md)
- [VECTORXZ\_ZERO](variables/VECTORXZ_ZERO.md)

## Functions

- [clampNumber](functions/clampNumber.md)
