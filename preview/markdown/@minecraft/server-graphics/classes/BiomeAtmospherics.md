[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-graphics](../README.md) / BiomeAtmospherics

# Class: BiomeAtmospherics

Used to affect atmospheric scattering per biome for Vibrant
Visuals

## Example: Rainbow Skies

A video showcases rainbow skies in overworld biomes using the `@minecraft/server-graphics` module. Posted by oSylfrost on the Bedrock Add-Ons Discord.

<video preload="none" poster="https://jaylydev.github.io/scriptapi-docs/assets/minecraft/ServerGraphicsRainbowSkies_videoframe_0.png" src="https://jaylydev.github.io/scriptapi-docs/assets/minecraft/ServerGraphicsRainbowSkies.mp4" controls style="max-width: 100%;"></video>

Full example code:

```typescript
import { system, BiomeTypes, BiomeType } from "@minecraft/server";
import { atmosphere } from "@minecraft/server-graphics";

let biomes: BiomeType[];

system.run(() => {
  biomes = BiomeTypes.getAll().filter((b) => {
    const id = (b as any)?.id ?? "";

    return !(
      id.includes("nether") ||
      id.includes("end") ||
      id.includes("void")
    );
  });
});

let hue = 0;

function rgb(h: number, s = 1, l = 0.5) {
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;

  let [r, g, b] =
    h < 60
      ? [c, x, 0]
      : h < 120
      ? [x, c, 0]
      : h < 180
      ? [0, c, x]
      : h < 240
      ? [0, x, c]
      : h < 300
      ? [x, 0, c]
      : [c, 0, x];

  return { red: r + m, green: g + m, blue: b + m };
}

system.runInterval(() => {
  hue = (hue + 1.2) % 360;

  const frame = {
    0.0: rgb(hue),
    0.25: rgb(hue + 60),
    0.5: rgb(hue + 120),
    0.75: rgb(hue + 180),
    1.0: rgb(hue + 240),
  };

  for (const biome of biomes) {
    try {
      atmosphere.setSkyHorizonColor(frame, biome);
      atmosphere.setSkyZenithColor(frame, biome);
    } catch {}
  }
});
```

## Source

```ts
export class BiomeAtmospherics {    private constructor();    resetHorizonBlendMax(): void;    resetHorizonBlendMieStart(): void;    resetHorizonBlendMin(): void;    resetHorizonBlendStart(): void;    resetMoonMieStrength(): void;    resetRayleighStrength(): void;    resetSkyHorizonColor(): void;    resetSkyZenithColor(): void;    resetSunGlareShape(): void;    resetSunMieStrength(): void;    setHorizonBlendMax(blendMax: number | Record<number, number>): void;    setHorizonBlendMieStart(blendMieStart: number | Record<number, number>): void;    setHorizonBlendMin(blendMin: number | Record<number, number>): void;    setHorizonBlendStart(blendStart: number | Record<number, number>): void;    setMoonMieStrength(moonMieStrength: number | Record<number, number>): void;    setRayleighStrength(rayleighStrength: number | Record<number, number>): void;    setSkyHorizonColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;    setSkyZenithColor(color: Record<number, minecraftserver.RGB> | minecraftserver.RGB): void;    setSunGlareShape(sunGlareShape: number | Record<number, number>): void;    setSunMieStrength(sunMieStrength: number | Record<number, number>): void;}
```

## Constructors

### Constructor

> `private` **new BiomeAtmospherics**(): `BiomeAtmospherics`

#### Returns

`BiomeAtmospherics`

## Methods

### resetHorizonBlendMax()

> **resetHorizonBlendMax**(): `void`

#### Returns

`void`

#### Remarks

Resets the horizon blend max to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetHorizonBlendMieStart()

> **resetHorizonBlendMieStart**(): `void`

#### Returns

`void`

#### Remarks

Resets the horizon blend mie start to the value set by
resource packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetHorizonBlendMin()

> **resetHorizonBlendMin**(): `void`

#### Returns

`void`

#### Remarks

Resets the horizon blend min to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetHorizonBlendStart()

> **resetHorizonBlendStart**(): `void`

#### Returns

`void`

#### Remarks

Resets the horizon blend start to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetMoonMieStrength()

> **resetMoonMieStrength**(): `void`

#### Returns

`void`

#### Remarks

Resets the moon mie strength to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetRayleighStrength()

> **resetRayleighStrength**(): `void`

#### Returns

`void`

#### Remarks

Resets the rayleigh strength to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetSkyHorizonColor()

> **resetSkyHorizonColor**(): `void`

#### Returns

`void`

#### Remarks

Resets the sky horizon color to the color set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetSkyZenithColor()

> **resetSkyZenithColor**(): `void`

#### Returns

`void`

#### Remarks

Resets the sky zenith color to the color set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetSunGlareShape()

> **resetSunGlareShape**(): `void`

#### Returns

`void`

#### Remarks

Resets the sun glare shape to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### resetSunMieStrength()

> **resetSunMieStrength**(): `void`

#### Returns

`void`

#### Remarks

Resets the sun mie strength to the value set by resource
packs

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

***

### setHorizonBlendMax()

> **setHorizonBlendMax**(`blendMax`): `void`

#### Parameters

##### blendMax

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,1]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,1])

#### Returns

`void`

#### Remarks

Sets the horizon blend max for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setHorizonBlendMieStart()

> **setHorizonBlendMieStart**(`blendMieStart`): `void`

#### Parameters

##### blendMieStart

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,1.2]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,1.2])

#### Returns

`void`

#### Remarks

Sets the horizon blend mie start for atmospheric scattering
in Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setHorizonBlendMin()

> **setHorizonBlendMin**(`blendMin`): `void`

#### Parameters

##### blendMin

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,1]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,1])

#### Returns

`void`

#### Remarks

Sets the horizon blend min for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setHorizonBlendStart()

> **setHorizonBlendStart**(`blendStart`): `void`

#### Parameters

##### blendStart

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,1]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,1])

#### Returns

`void`

#### Remarks

Sets the horizon blend start for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setMoonMieStrength()

> **setMoonMieStrength**(`moonMieStrength`): `void`

#### Parameters

##### moonMieStrength

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,60]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,60])

#### Returns

`void`

#### Remarks

Sets the moon mie strength for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setRayleighStrength()

> **setRayleighStrength**(`rayleighStrength`): `void`

#### Parameters

##### rayleighStrength

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,11]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,11])

#### Returns

`void`

#### Remarks

Sets the rayleigh strength for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setSkyHorizonColor()

> **setSkyHorizonColor**(`color`): `void`

#### Parameters

##### color

[`RGB`](../../server/interfaces/RGB.md) \| `Record`\<`number`, [`RGB`](../../server/interfaces/RGB.md)\>

Either a RGB triplet or a set of keyframes. The keyframes
are composed of key value pairs. The key is a number (range
[0,1]) to signify a time of day (0.0 and 1.0 are noon, 0.25
is sunset, 0.5 is midnight, and 0.75 is sunrise). The value
is a RGB triplet

#### Returns

`void`

#### Remarks

Sets the sky horizon color for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setSkyZenithColor()

> **setSkyZenithColor**(`color`): `void`

#### Parameters

##### color

[`RGB`](../../server/interfaces/RGB.md) \| `Record`\<`number`, [`RGB`](../../server/interfaces/RGB.md)\>

Either a RGB triplet or a set of keyframes. The keyframes
are composed of key value pairs. The key is a float in the
range 0-1 to signify a time of day and the value is a RGB
triplet

#### Returns

`void`

#### Remarks

Sets the sky zenith color for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setSunGlareShape()

> **setSunGlareShape**(`sunGlareShape`): `void`

#### Parameters

##### sunGlareShape

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,50]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,50])

#### Returns

`void`

#### Remarks

Sets the sun glare shape for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### setSunMieStrength()

> **setSunMieStrength**(`sunMieStrength`): `void`

#### Parameters

##### sunMieStrength

`number` \| `Record`\<`number`, `number`\>

Either a number (range [0,60]) or a set of keyframes. The
keyframes are composed of key value pairs. The key is a
number (range [0,1]) to signify a time of day (0.0 and 1.0
are noon, 0.25 is sunset, 0.5 is midnight, and 0.75 is
sunrise). The value is also a number (range [0,60])

#### Returns

`void`

#### Remarks

Sets the sun mie strength for atmospheric scattering in
Vibrant Visuals

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)
