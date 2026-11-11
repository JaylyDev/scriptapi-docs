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
