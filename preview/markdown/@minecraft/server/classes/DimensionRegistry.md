[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / DimensionRegistry

# Class: DimensionRegistry

**`Beta`**

Provides the functionality for registering custom
dimensions. Custom dimensions can only be registered during
the system startup event.

## Examples

```ts
// Adapted from Microsoft's Custom Dimension API tutorial:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/custom-dimension-api-tutorial
import { BlockPermutation, Dimension, Vector3, world } from "@minecraft/server";

const VOID_ARENA_ID = "custom_dim:void_arena";
const SKY_LOUNGE_ID = "custom_dim:sky_lounge";

interface PlatformConfig {
   dimensionId: string;
   blockId: string;
   radius: number;
   center: Vector3;
   decor?: boolean;
}

const PLATFORMS: PlatformConfig[] = [
   {
       dimensionId: VOID_ARENA_ID,
       blockId: "minecraft:crimson_nylium",
       radius: 8,
       center: { x: 0, y: 64, z: 0 },
   },
   {
       dimensionId: SKY_LOUNGE_ID,
       blockId: "minecraft:quartz_block",
       radius: 6,
       center: { x: 0, y: 100, z: 0 },
       decor: true,
   },
];

const builtDimensions = new Set<string>();

// Build landing platforms once the world is ready.
world.afterEvents.worldLoad.subscribe(() => {
   for (const platform of PLATFORMS) {
       void ensurePlatformBuilt(platform);
   }
});

async function ensurePlatformBuilt(config: PlatformConfig): Promise<void> {
   if (builtDimensions.has(config.dimensionId)) {
       return;
   }

   const dim = world.getDimension(config.dimensionId);
   const tickingAreaId = `${config.dimensionId}_platform`;
   const margin = 2;

   // Keep destination chunks active before placing blocks.
   await world.tickingAreaManager.createTickingArea(tickingAreaId, {
       dimension: dim,
       from: {
           x: config.center.x - config.radius - margin,
           y: config.center.y - 1,
           z: config.center.z - config.radius - margin,
       },
       to: {
           x: config.center.x + config.radius + margin,
           y: config.center.y + 4,
           z: config.center.z + config.radius + margin,
       },
   });

   buildPlatform(dim, config.blockId, config.radius, config.center);
   if (config.decor) {
       buildDecor(dim, config.center);
   }

   world.tickingAreaManager.removeTickingArea(tickingAreaId);
   builtDimensions.add(config.dimensionId);
}

function buildPlatform(dim: Dimension, blockId: string, radius: number, center: Vector3) {
   const floor = BlockPermutation.resolve(blockId);

   for (let x = -radius; x <= radius; x++) {
       for (let z = -radius; z <= radius; z++) {
           dim.getBlock({ x: center.x + x, y: center.y, z: center.z + z })?.setPermutation(floor);
       }
   }

   // Add simple 2-block-high glass rails around the edge.
   const glass = BlockPermutation.resolve("minecraft:glass");
   for (let i = -radius; i <= radius; i++) {
       for (let y = 1; y <= 2; y++) {
           dim.getBlock({ x: center.x + i, y: center.y + y, z: center.z - radius })?.setPermutation(glass);
           dim.getBlock({ x: center.x + i, y: center.y + y, z: center.z + radius })?.setPermutation(glass);
           dim.getBlock({ x: center.x - radius, y: center.y + y, z: center.z + i })?.setPermutation(glass);
           dim.getBlock({ x: center.x + radius, y: center.y + y, z: center.z + i })?.setPermutation(glass);
       }
   }
}

function buildDecor(dim: Dimension, center: Vector3) {
   const glowstone = BlockPermutation.resolve("minecraft:glowstone");
   const offsets = [-4, 4];

   for (const ox of offsets) {
       for (const oz of offsets) {
           dim.getBlock({ x: center.x + ox, y: center.y + 3, z: center.z + oz })?.setPermutation(glowstone);
       }
   }
}
```

```ts
// Adapted from Microsoft's Custom Dimension API tutorial and sample script:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/custom-dimension-api-tutorial
// https://github.com/microsoft/minecraft-samples/tree/main/custom_dimensions
import { CommandPermissionLevel, CustomCommandStatus, Player, StartupEvent, system, world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";

interface DimensionOption {
   label: string;
   id: string;
   spawn: { x: number; y: number; z: number };
}

const VOID_ARENA_ID = "custom_dim:void_arena";
const SKY_LOUNGE_ID = "custom_dim:sky_lounge";

const DIMENSIONS: DimensionOption[] = [
   { label: "Void Arena", id: VOID_ARENA_ID, spawn: { x: 0, y: 66, z: 0 } },
   { label: "Sky Lounge", id: SKY_LOUNGE_ID, spawn: { x: 0, y: 102, z: 0 } },
   { label: "Overworld", id: "minecraft:overworld", spawn: { x: 0, y: 64, z: 0 } },
   { label: "Nether", id: "minecraft:nether", spawn: { x: 0, y: 64, z: 0 } },
   { label: "The End", id: "minecraft:the_end", spawn: { x: 0, y: 64, z: 0 } },
];

const CUSTOM_DIM_IDS = new Set<string>([VOID_ARENA_ID, SKY_LOUNGE_ID]);

system.beforeEvents.startup.subscribe((event: StartupEvent) => {
   event.customCommandRegistry.registerCommand(
       {
           name: "custom_dim:dimensions",
           description: "Open the dimension travel menu",
           permissionLevel: CommandPermissionLevel.Any,
           cheatsRequired: false,
       },
       (origin) => {
           const player = origin.sourceEntity;
           if (!(player instanceof Player)) {
               return {
                   status: CustomCommandStatus.Failure,
                   message: "This command can only be used by a player.",
               };
           }

           system.run(() => showDimensionMenu(player));
           return { status: CustomCommandStatus.Success };
       }
   );
});

function showDimensionMenu(player: Player) {
   const form = new ActionFormData()
       .title("Dimension Traveler")
       .body(`You are currently in: ${player.dimension.id}\n\nChoose a destination:`);

   for (const destination of DIMENSIONS) {
       form.button(destination.label);
   }

   form.show(player as any)
       .then((response) => {
           if (response.canceled || response.selection === undefined) {
               return;
           }

           const selected = DIMENSIONS[response.selection];
           if (selected.id === player.dimension.id) {
               player.sendMessage("You are already in that dimension.");
               return;
           }

           if (CUSTOM_DIM_IDS.has(selected.id)) {
               void teleportToCustomDimension(player, selected);
           } else {
               player.teleport(selected.spawn, { dimension: world.getDimension(selected.id) });
           }
       })
       .catch((e) => {
           console.error(e);
       });
}

async function teleportToCustomDimension(player: Player, destination: DimensionOption) {
   const dim = world.getDimension(destination.id);
   const tickingAreaId = `${destination.id}_teleport`;

   await world.tickingAreaManager.createTickingArea(tickingAreaId, {
       dimension: dim,
       from: { x: destination.spawn.x - 4, y: destination.spawn.y - 4, z: destination.spawn.z - 4 },
       to: { x: destination.spawn.x + 4, y: destination.spawn.y + 4, z: destination.spawn.z + 4 },
   });

   player.teleport(destination.spawn, { dimension: dim });
   world.tickingAreaManager.removeTickingArea(tickingAreaId);
}
```

```ts
// Adapted from Microsoft's Custom Dimension API tutorial:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/custom-dimension-api-tutorial
import { CommandPermissionLevel, CustomCommandStatus, Player, StartupEvent, system } from "@minecraft/server";

const VOID_ARENA_ID = "custom_dim:void_arena";
const SKY_LOUNGE_ID = "custom_dim:sky_lounge";

// Register dimensions during startup and expose a simple test command.
system.beforeEvents.startup.subscribe((event: StartupEvent) => {
   event.dimensionRegistry.registerCustomDimension(VOID_ARENA_ID);
   event.dimensionRegistry.registerCustomDimension(SKY_LOUNGE_ID);

   event.customCommandRegistry.registerCommand(
       {
           name: "custom_dim:check",
           description: "Checks if custom dimensions are accessible",
           permissionLevel: CommandPermissionLevel.Any,
           cheatsRequired: false,
       },
       (origin) => {
           const player = origin.sourceEntity;
           if (!(player instanceof Player)) {
               return {
                   status: CustomCommandStatus.Failure,
                   message: "This command can only be used by a player.",
               };
           }

           // If registration succeeded, getDimension should resolve these IDs.
           player.sendMessage(`Registered dimensions: ${VOID_ARENA_ID}, ${SKY_LOUNGE_ID}`);
           return {
               status: CustomCommandStatus.Success,
               message: "Custom dimensions look registered.",
           };
       }
   );
});
```

```ts
// Adapted from Microsoft's Custom Dimension API tutorial:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/custom-dimension-api-tutorial
import { Player, Vector3, world } from "@minecraft/server";

interface DimensionOption {
   label: string;
   id: string;
   spawn: Vector3;
}

const VOID_ARENA_ID = "custom_dim:void_arena";
const SKY_LOUNGE_ID = "custom_dim:sky_lounge";

const DIMENSIONS: DimensionOption[] = [
   { label: "Void Arena", id: VOID_ARENA_ID, spawn: { x: 0, y: 66, z: 0 } },
   { label: "Sky Lounge", id: SKY_LOUNGE_ID, spawn: { x: 0, y: 102, z: 0 } },
   { label: "Overworld", id: "minecraft:overworld", spawn: { x: 0, y: 64, z: 0 } },
];

const CUSTOM_DIM_IDS = new Set<string>([VOID_ARENA_ID, SKY_LOUNGE_ID]);

// Use this helper from a command or menu callback.
export async function teleportPlayerToOption(player: Player, destinationId: string) {
   const destination = DIMENSIONS.find((d) => d.id === destinationId);
   if (!destination) {
       player.sendMessage("Unknown destination.");
       return;
   }

   if (!CUSTOM_DIM_IDS.has(destination.id)) {
       player.teleport(destination.spawn, { dimension: world.getDimension(destination.id) });
       return;
   }

   await teleportToCustomDimension(player, destination);
}

async function teleportToCustomDimension(player: Player, destination: DimensionOption) {
   const dim = world.getDimension(destination.id);
   const tickingAreaId = `${destination.id}_teleport`;

   // Keep destination chunks loaded while teleport happens.
   await world.tickingAreaManager.createTickingArea(tickingAreaId, {
       dimension: dim,
       from: { x: destination.spawn.x - 4, y: destination.spawn.y - 4, z: destination.spawn.z - 4 },
       to: { x: destination.spawn.x + 4, y: destination.spawn.y + 4, z: destination.spawn.z + 4 },
   });

   player.teleport(destination.spawn, { dimension: dim });
   world.tickingAreaManager.removeTickingArea(tickingAreaId);
}
```
Some notes that might be relevant:

> [!IMPORTANT]  
> Most infomation found in this section is based on Minecraft Preview 26.20.26, which is still in Beta APIs and may be subject to change.

- You can have a max of 58079 dimensions in one world.
- Custom dimensions should persist on world save and be able to rejoin when you reload the world
- For now, you can generate custom terrain with JavaScript with your own implementation. There are lots of noise generation libraries in npmjs that you can use to generate them.
- Like other registries, the id of the dimension should be in the format of `namespace:name`.
- Use ticking areas before building or teleporting into custom dimensions, so chunks are loaded.
- If your pack does not work, check Beta APIs and dependencies in manifest first.

Check out this video for a quick demo:

<video preload="none" poster="https://jaylydev.github.io/scriptapi-docs/assets/minecraft/CustomWorldGenSimplexNoise_first.jpg" src="https://jaylydev.github.io/scriptapi-docs/assets/minecraft/CustomWorldGenSimplexNoise.mp4" controls style="max-width: 100%;"></video>

> Video provided by [darknavi](https://github.com/JakeShirley)

Examples in this folder are adapted from:

- https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/custom-dimension-api-tutorial
- https://github.com/microsoft/minecraft-samples/tree/main/custom_dimensions

Files:

- registerDimensions.ts: smallest startup-only registration snippet.
- registerDimensionsWithCommand.ts: registration plus a command entry point.
- buildPlatformsOnWorldLoad.ts: build safe landing platforms after world load using ticking areas.
- teleportToCustomDimension.ts: reusable helper for safe teleport into custom dimensions.
- dimensionTravelMenu.ts: command + ActionForm travel menu for vanilla and custom dimensions.

## Source

```ts
export class DimensionRegistry {
    private constructor();
    registerCustomDimension(typeId: string): void;
}
```

## Constructors

### Constructor

> `private` **new DimensionRegistry**(): `DimensionRegistry`

#### Returns

`DimensionRegistry`

## Methods

### registerCustomDimension()

> **registerCustomDimension**(`typeId`): `void`

#### Parameters

##### typeId

`string`

The namespaced identifier for the custom dimension (e.g.,
'mypack:my_dimension'). Must include a namespace and use
only valid identifier characters.

#### Returns

`void`

#### Remarks

Registers a new custom dimension type. Must be called during
the system startup event. The dimension will be created
using the void generator.

This function can be called in early-execution mode.

#### Throws

This function can throw errors.

[CustomDimensionAlreadyRegisteredError](CustomDimensionAlreadyRegisteredError.md)

[CustomDimensionInvalidRegistryError](CustomDimensionInvalidRegistryError.md)

[CustomDimensionNameError](CustomDimensionNameError.md)

[CustomDimensionReloadNewDimensionError](CustomDimensionReloadNewDimensionError.md)

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[NamespaceNameError](NamespaceNameError-1.md)

#### Example

```ts
import { system } from "@minecraft/server";

const VOID_ARENA_ID = "custom_dim:void_arena";
const SKY_LOUNGE_ID = "custom_dim:sky_lounge";

// Register custom dimensions during startup.
// This is the only phase where DimensionRegistry is available.
system.beforeEvents.startup.subscribe((event) => {
event.dimensionRegistry.registerCustomDimension(VOID_ARENA_ID);
event.dimensionRegistry.registerCustomDimension(SKY_LOUNGE_ID);
});
```
