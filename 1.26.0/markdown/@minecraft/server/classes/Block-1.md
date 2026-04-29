[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / Block

# Class: Block

Represents a block in a dimension. A block represents a
unique X, Y, and Z within a dimension and get/sets the state
of the block at that location. This type was significantly
updated in version 1.17.10.21.

## Example

```ts
import { Vector3Utils, VECTOR3_NORTH, VECTOR3_WEST, VECTOR3_EAST, VECTOR3_SOUTH } from "@minecraft/math";
import { Entity } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

const VECTOR3_NORTHWEST = Vector3Utils.add(VECTOR3_NORTH, VECTOR3_WEST);
const VECTOR3_NORTHEAST = Vector3Utils.add(VECTOR3_NORTH, VECTOR3_EAST);
const VECTOR3_SOUTHWEST = Vector3Utils.add(VECTOR3_SOUTH, VECTOR3_WEST);
const VECTOR3_SOUTHEAST = Vector3Utils.add(VECTOR3_SOUTH, VECTOR3_EAST);

/**
Get the blocks from player surroundings and set to obsidian
/
export function createWallAroundEntity(entity: Entity) {
   const location = entity.location;
   const block = entity.dimension.getBlock(location);
   if (!block) return;
   const blockNorth = block.north();
   const blockSouth = block.south();
   const blockEast = block.east();
   const blockWest = block.west();
   const blockNorthWest = block.offset(VECTOR3_NORTHWEST);
   const blockNorthEast = block.offset(VECTOR3_NORTHEAST);
   const blockSouthWest = block.offset(VECTOR3_SOUTHWEST);
   const blockSouthEast = block.offset(VECTOR3_SOUTHEAST);
   const blocks = [
       blockNorth,
       blockSouth,
       blockEast,
       blockWest,
       blockNorthWest,
       blockNorthEast,
       blockSouthWest,
       blockSouthEast,
   ];
   // Check if the player have contact with cactus or sweet berry bush
   for (const block of blocks) {
       if (!block) continue;
       block.setType(MinecraftBlockTypes.Obsidian);
   }
}
```

## Constructors

### Constructor

> `private` **new Block**(): `Block`

#### Returns

`Block`

## Properties

### dimension

> `readonly` **dimension**: [`Dimension`](Dimension-1.md)

#### Remarks

Returns the dimension that the block is within.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

// Block explodes when player break block
world.afterEvents.playerBreakBlock.subscribe((event) => {
event.block.dimension.createExplosion(event.block.location, 1);
});
```

***

### isAir

> `readonly` **isAir**: `boolean`

#### Remarks

Returns true if this block is an air block (i.e., empty
space).

#### Throws

This property can throw when used.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { world, system, BlockPermutation } from "@minecraft/server";

// bridge egg
world.afterEvents.entitySpawn.subscribe(({ entity }) => {
if (entity.typeId === "minecraft:egg") {
   const id = system.runInterval(() => {
       const block = entity.dimension.getBlock(entity.location).below();
       if (block.isAir) block.setPermutation(BlockPermutation.resolve("minecraft:wool"));
       else system.clearRun(id);
   });
}
});
```

***

### isLiquid

> `readonly` **isLiquid**: `boolean`

#### Remarks

Returns true if this block is a liquid block - (e.g., a
water block and a lava block are liquid, while an air block
and a stone block are not. Water logged blocks are not
liquid blocks).

#### Throws

This property can throw when used.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This property can't be read in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

// Block at (0, 0, 0)
const block = world.getDimension("overworld").getBlock({ x: 0, y: 0, z: 0 });
if (block.isLiquid) {
console.warn("block is liquid");
}
```

***

### isSolid

> `readonly` **isSolid**: `boolean`

**`Beta`**

#### Remarks

Returns true if this block is solid and impassible - (e.g.,
a cobblestone block and a diamond block are solid, while a
ladder block and a fence block are not).

#### Throws

This property can throw when used.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

// Subscribe to the event that triggers when a player places a block
world.afterEvents.playerPlaceBlock.subscribe((eventData) => {
// Destructure the block object from the event data
const { block } = eventData;

// Check if the placed block is solid
if (block.isSolid) {
   // Get the coordinates of the block's location
   let { x, y, z } = block.location;

   // Create a string of the coordinates in the format "x, y, z"
   let coordinates = [x, y, z].join(", ");

   // Send a message to the world indicating the location of the placed solid block
   world.sendMessage("You placed a solid block at location: " + coordinates);
}
});
```

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns true if this reference to a block is still valid
(for example, if the block is unloaded, references to that
block will no longer be valid.)

#### World Ready

This property can't be read in early-execution mode.

***

### isWaterlogged

> `readonly` **isWaterlogged**: `boolean`

#### Remarks

Returns or sets whether this block has water on it.

#### Throws

This property can throw when used.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This property can't be read in early-execution mode.

***

### localizationKey

> `readonly` **localizationKey**: `string`

#### Remarks

Key for the localization of this block's name used in .lang
files.

#### Throws

This property can throw when used.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This property can't be read in early-execution mode.

***

### location

> `readonly` **location**: [`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Coordinates of the specified block.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

// Block at (0, 0, 0)
const block = world.getDimension("overworld").getBlock({ x: 0, y: 0, z: 0 });
block.dimension.createExplosion(block.location, 10);
```

***

### permutation

> `readonly` **permutation**: [`BlockPermutation`](BlockPermutation-1.md)

#### Remarks

Additional block configuration data that describes the
block.

#### Throws

This property can throw when used.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

// Block at (0, 0, 0)
const block = world.getDimension("overworld").getBlock({ x: 0, y: 0, z: 0 });

// List all block states
const blockStates = block.permutation.getAllStates();
console.log(JSON.stringify(blockStates, null, 4));
```

***

### type

> `readonly` **type**: [`BlockType`](BlockType-1.md)

#### Remarks

Gets the type of block.

#### Throws

This property can throw when used.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This property can't be read in early-execution mode.

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the type of block for this block. Warning:
Vanilla block names can be changed in future releases, try
using 'Block.matches' instead for block comparison.

#### Throws

This property can throw when used.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This property can't be read in early-execution mode.

***

### x

> `readonly` **x**: `number`

#### Remarks

X coordinate of the block.

#### World Ready

This property can't be read in early-execution mode.

***

### y

> `readonly` **y**: `number`

#### Remarks

Y coordinate of the block.

#### World Ready

This property can't be read in early-execution mode.

***

### z

> `readonly` **z**: `number`

#### Remarks

Z coordinate of the block.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### above()

> **above**(`steps?`): `Block` \| `undefined`

#### Parameters

##### steps?

`number`

Number of steps above to step before returning.
Defaults to: 1

#### Returns

`Block` \| `undefined`

#### Remarks

Returns the Block above this block (positive in the
Y direction).

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### below()

> **below**(`steps?`): `Block` \| `undefined`

#### Parameters

##### steps?

`number`

Number of steps below to step before returning.
Defaults to: 1

#### Returns

`Block` \| `undefined`

#### Remarks

Returns the Block below this block (negative in the
Y direction).

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

// Subscribe to player place block event
world.afterEvents.playerPlaceBlock.subscribe((eventData) => {
const { player, block } = eventData;

// Get the block below the placed block
const blockBelow = block.below(1);

// Copy the type of the block below to the placed block
block.setType(blockBelow.type);
});
```

***

### bottomCenter()

> **bottomCenter**(): [`Vector3`](../interfaces/Vector3-1.md)

#### Returns

[`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Returns the [Vector3](../interfaces/Vector3-1.md) of the center of this block on
the X and Z axis.

#### World Ready

This function can't be called in early-execution mode.

***

### canBeDestroyedByLiquidSpread()

> **canBeDestroyedByLiquidSpread**(`liquidType`): `boolean`

#### Parameters

##### liquidType

[`Water`](../enumerations/LiquidType-1.md#water)

The type of liquid this function should be called for.

#### Returns

`boolean`

Whether this block is removed when touched by liquid.

#### Remarks

Returns whether this block is removed when touched by
liquid.

#### Throws

This function can throw errors.

Error

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### canContainLiquid()

> **canContainLiquid**(`liquidType`): `boolean`

#### Parameters

##### liquidType

[`Water`](../enumerations/LiquidType-1.md#water)

The type of liquid this function should be called for.

#### Returns

`boolean`

Whether this block can have a liquid placed over it.

#### Remarks

Returns whether this block can have a liquid placed over it,
i.e. be waterlogged.

#### Throws

This function can throw errors.

Error

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### canPlace()

> **canPlace**(`blockToPlace`, `faceToPlaceOn?`): `boolean`

**`Beta`**

#### Parameters

##### blockToPlace

`string` \| [`BlockPermutation`](BlockPermutation-1.md) \| [`BlockType`](BlockType-1.md)

Block type or block permutation to check placement for.

##### faceToPlaceOn?

[`Direction`](../enumerations/Direction-1.md)

Optional specific face of this block to check placement
against.

#### Returns

`boolean`

Returns `true` if the block type or permutation can be
placed on this block, else `false`.

#### Remarks

Checks to see whether it is valid to place the specified
block type or block permutation, on a specified face on this
block.

#### Throws

This function can throw errors.

Error

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### center()

> **center**(): [`Vector3`](../interfaces/Vector3-1.md)

#### Returns

[`Vector3`](../interfaces/Vector3-1.md)

#### Remarks

Returns the [Vector3](../interfaces/Vector3-1.md) of the center of this block on
the X, Y, and Z axis.

#### World Ready

This function can't be called in early-execution mode.

***

### east()

> **east**(`steps?`): `Block` \| `undefined`

#### Parameters

##### steps?

`number`

Number of steps to the east to step before returning.
Defaults to: 1

#### Returns

`Block` \| `undefined`

#### Remarks

Returns the Block to the east of this block
(positive in the X direction).

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getComponent()

> **getComponent**\<`T`\>(`componentId`): [`BlockComponentReturnType`](../type-aliases/BlockComponentReturnType-1.md)\<`T`\> \| `undefined`

#### Type Parameters

##### T

`T` *extends* `string`

#### Parameters

##### componentId

`T`

The identifier of the component (e.g.,
'minecraft:inventory'). If no namespace prefix is specified,
'minecraft:' is assumed. Available component IDs are those
in the [BlockComponentTypes](../enumerations/BlockComponentTypes-1.md) enum and custom component
IDs registered with the [BlockComponentRegistry](BlockComponentRegistry-1.md).

#### Returns

[`BlockComponentReturnType`](../type-aliases/BlockComponentReturnType-1.md)\<`T`\> \| `undefined`

Returns the component if it exists on the block, otherwise
undefined.

#### Remarks

Gets a component (that represents additional capabilities)
for a block - for example, an inventory component of a chest
block.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { BlockPermutation, ItemStack, world } from "@minecraft/server";

// Chest Block at (0, 0, 0)
const block = world.getDimension("overworld").getBlock({ x: 0, y: 0, z: 0 });
block.setPermutation(BlockPermutation.resolve("minecraft:chest"));

const inventory = block.getComponent("inventory").container;
inventory.addItem(new ItemStack("minecraft:cobblestone", 64));
```

```js
import { BlockPermutation, ItemStack, SignSide, world } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

// Chest Block at (0, 0, 0)
const block = world.getDimension("overworld").getBlock({ x: 0, y: 0, z: 0 });
block.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.BirchHangingSign));

const sign = block.getComponent("minecraft:sign");
sign.setText("back", SignSide.Back);
sign.setText("front", SignSide.Front);
```

```js
import { BlockPermutation, ItemStack, world } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

// Chest Block at (0, 0, 0)
const block = world.getDimension("overworld").getBlock({ x: 0, y: 0, z: 0 });
block.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.DarkoakStandingSign));

const sign = block.getComponent("minecraft:sign");
sign.setText("");
```

```js
import { BlockPermutation, world } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

// This example demonstrates how to work with pistons and their attached blocks
// We'll create a simple piston setup and check what blocks are attached to it

const overworld = world.getDimension("overworld");

// Step 1: Create a piston at position (0, 64, 0)
const pistonLocation = { x: 0, y: 64, z: 0 };
const pistonBlock = overworld.getBlock(pistonLocation);
pistonBlock.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Piston));

// Step 2: Place some blocks in front of the piston that it can push
// Let's place a few dirt blocks in front of the piston
const blockPositions = [
{ x: 0, y: 64, z: 1 }, // Directly in front
{ x: 0, y: 64, z: 2 }, // One block further
{ x: 0, y: 64, z: 3 }, // Two blocks further
];

blockPositions.forEach((pos) => {
const block = overworld.getBlock(pos);
block.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.Dirt));
});

// Step 3: Get the piston component and check its properties
const pistonComponent = pistonBlock.getComponent("piston");

if (pistonComponent) {
console.log("Piston component found!");

// Get the blocks that would be affected if this piston extends
const attachedBlocks = pistonComponent.getAttachedBlocks();

console.log("Number of attached blocks:", attachedBlocks.length);

// Display information about each attached block
attachedBlocks.forEach((block, index) => {
   console.log(`Attached block ${index + 1}:`);
   console.log(`  - Location: (${block.location.x}, ${block.location.y}, ${block.location.z})`);
   console.log(`  - Type: ${block.typeId}`);
});

// You can also check if the piston can be activated
// Note: This would require redstone power in an actual game scenario
console.log("Piston state information logged to console.");
} else {
console.log("Failed to get piston component - make sure the block is actually a piston!");
}

// Bonus: Listen for piston activation events in the world
// This is more useful for real gameplay scenarios
world.afterEvents.pistonActivate.subscribe((eventData) => {
const { dimension, piston, isExpanding } = eventData;

console.log(`Piston ${isExpanding ? "extending" : "retracting"} detected!`);

// The 'piston' here is already the BlockPistonComponent
// We can directly use its methods
const attachedBlocks = piston.getAttachedBlocks();
console.log(`This piston is moving ${attachedBlocks.length} blocks`);

// Log details about each block being moved
attachedBlocks.forEach((block, index) => {
   console.log(
       `  Block ${index + 1}: ${block.typeId} at (${block.location.x}, ${block.location.y}, ${block.location.z})`
   );
});
});
```

***

### getComponents()

> **getComponents**(): [`BlockComponent`](BlockComponent-1.md)[]

**`Beta`**

#### Returns

[`BlockComponent`](BlockComponent-1.md)[]

#### Remarks

Returns all scripting components that are present on this
block.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getItemStack()

> **getItemStack**(`amount?`, `withData?`): [`ItemStack`](ItemStack-1.md) \| `undefined`

#### Parameters

##### amount?

`number`

Number of instances of this block to place in the item
stack.
Defaults to: 1

##### withData?

`boolean`

Whether additional data facets of the item stack are
included.
Defaults to: false

#### Returns

[`ItemStack`](ItemStack-1.md) \| `undefined`

An itemStack with the specified amount of items and data.
Returns undefined if block type is incompatible.

#### Remarks

Creates a prototype item stack based on this block that can
be used with Container/ContainerSlot APIs.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getLightLevel()

> **getLightLevel**(): `number`

#### Returns

`number`

The brightness level on the block.

#### Remarks

Returns the total brightness level of light shining on a
certain block.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getMapColor()

> **getMapColor**(): [`RGBA`](../interfaces/RGBA-1.md)

**`Beta`**

#### Returns

[`RGBA`](../interfaces/RGBA-1.md)

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getRedstonePower()

> **getRedstonePower**(): `number` \| `undefined`

#### Returns

`number` \| `undefined`

Returns undefined if redstone power is not applicable to
this block.

#### Remarks

Returns the net redstone power of this block.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

/**
Function to check if a given block is powered by redstone
@param {import('@minecraft/server').Block} block
@returns true if a given block is powered by redstone
/
function isBlockPowered(block) {
// Get the redstone power level of the block
// The 'getRedstonePower' method returns a number representing the power level
// If the power level is greater than 0, it means the block is powered
return block.getRedstonePower() > 0;
}
```

***

### getSkyLightLevel()

> **getSkyLightLevel**(): `number`

#### Returns

`number`

The brightness level on the block.

#### Remarks

Returns the brightness level of light shining from the sky
on a certain block.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getTags()

> **getTags**(): `string`[]

#### Returns

`string`[]

The list of tags that the block has.

#### Remarks

Returns a set of tags for a block.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### hasComponent()

> **hasComponent**(`componentId`): `boolean`

**`Beta`**

#### Parameters

##### componentId

`string`

The identifier of the component (e.g.,
'minecraft:inventory') to retrieve. If no namespace prefix
is specified, 'minecraft:' is assumed.

#### Returns

`boolean`

#### Remarks

Returns true if the specified component is present on this
block.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### hasTag()

> **hasTag**(`tag`): `boolean`

#### Parameters

##### tag

`string`

Tag to check for.

#### Returns

`boolean`

Returns `true` if the permutation of this block has the tag,
else `false`.

#### Remarks

Checks to see if the permutation of this block has a
specific tag.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### Example

```typescript
import { DimensionLocation } from "@minecraft/server";

function checkBlockTags(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // Fetch the block
  const block = targetLocation.dimension.getBlock(targetLocation);

  // check that the block is loaded
  if (block) {
    log(`Block is dirt: ${block.hasTag("dirt")}`);
    log(`Block is wood: ${block.hasTag("wood")}`);
    log(`Block is stone: ${block.hasTag("stone")}`);
  }
}
```

#### World Ready

This function can't be called in early-execution mode.

***

### isLiquidBlocking()

> **isLiquidBlocking**(`liquidType`): `boolean`

#### Parameters

##### liquidType

[`Water`](../enumerations/LiquidType-1.md#water)

The type of liquid this function should be called for.

#### Returns

`boolean`

Whether this block stops liquid from flowing.

#### Remarks

Returns whether this block stops liquid from flowing.

#### Throws

This function can throw errors.

Error

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### liquidCanFlowFromDirection()

> **liquidCanFlowFromDirection**(`liquidType`, `flowDirection`): `boolean`

#### Parameters

##### liquidType

[`Water`](../enumerations/LiquidType-1.md#water)

The type of liquid this function should be called for.

##### flowDirection

[`Direction`](../enumerations/Direction-1.md)

#### Returns

`boolean`

Whether liquid can flow into the block from the provided
direction, or flow out from the provided direction when
liquid is placed into it with a bucket

#### Remarks

Returns whether liquid can flow into the block from the
provided direction, or flow out from the provided direction
when liquid is placed into it with a bucket.

#### Throws

This function can throw errors.

Error

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### liquidSpreadCausesSpawn()

> **liquidSpreadCausesSpawn**(`liquidType`): `boolean`

#### Parameters

##### liquidType

[`Water`](../enumerations/LiquidType-1.md#water)

The type of liquid this function should be called for.

#### Returns

`boolean`

Whether this block is removed and spawns its item when
touched by liquid.

#### Remarks

Returns whether this block is removed and spawns its item
when touched by liquid.

#### Throws

This function can throw errors.

Error

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### matches()

> **matches**(`blockName`, `states?`): `boolean`

#### Parameters

##### blockName

`string`

Block type identifier to match this API against.

##### states?

`Record`\<`string`, `string` \| `number` \| `boolean`\>

Optional set of block states to test this block against.

#### Returns

`boolean`

Returns true if the block matches the specified criteria.

#### Remarks

Tests whether this block matches a specific criteria.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

/**
Function to check if a given block is red wool
@param {import('@minecraft/server').Block} block
@returns true if a given block is red wool
/
function isRedWool(block) {
// Define the type id of block we are checking for
let typeId = "wool";

// Define the block state we are looking for
// In this case, we want the color to be red
let states = { color: "red" };

// Check if the block matches the specified type and states
// The 'matches' method returns true if the block is of the specified type and has the specified states
return block.matches(typeId, states);
}
```

***

### north()

> **north**(`steps?`): `Block` \| `undefined`

#### Parameters

##### steps?

`number`

Number of steps to the north to step before returning.
Defaults to: 1

#### Returns

`Block` \| `undefined`

#### Remarks

Returns the Block to the north of this block
(negative in the Z direction).

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

// Block at (0, 0, 0)
const block = world.getDimension("overworld").getBlock({ x: 0, y: 0, z: 0 });
const blockAtNorth = block.north();
```

***

### offset()

> **offset**(`offset`): `Block` \| `undefined`

#### Parameters

##### offset

[`Vector3`](../interfaces/Vector3-1.md)

The offset vector. For example, an offset of 0, 1, 0 will
return the block above the current block.

#### Returns

`Block` \| `undefined`

Block at the specified offset, or undefined if that block
could not be retrieved (for example, the block and its
relative chunk is not loaded yet.)

#### Remarks

Returns a block at an offset relative vector to this block.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setPermutation()

> **setPermutation**(`permutation`): `void`

#### Parameters

##### permutation

[`BlockPermutation`](BlockPermutation-1.md)

Permutation that contains a set of property states for the
Block.

#### Returns

`void`

#### Remarks

Sets the block in the dimension to the state of the
permutation.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { BlockPermutation, world } from "@minecraft/server";
// Block at (0, 0, 0)
const block = world.getDimension("overworld").getBlock({ x: 0, y: 0, z: 0 });
if (block.typeId === "minecraft:bedrock") {
block.setPermutation(BlockPermutation.resolve("minecraft:air"));
}
```

***

### setType()

> **setType**(`blockType`): `void`

#### Parameters

##### blockType

`string` \| [`BlockType`](BlockType-1.md)

Identifier of the type of block to apply - for example,
minecraft:powered_repeater.

#### Returns

`void`

#### Remarks

Sets the type of block.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

Error

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world, BlockTypes } from "@minecraft/server";

// Get all available block types
const blockTypes = BlockTypes.getAll();

// Function to get a random block type
const getRandomBlockType = () => blockTypes[Math.floor(blockTypes.length * Math.random())];

// Subscribe to player place block event
world.afterEvents.playerPlaceBlock.subscribe((eventData) => {
const { player, block } = eventData;
const randomBlockType = getRandomBlockType();

player.sendMessage(`You placed a ${randomBlockType.id} block!`);
block.setType(randomBlockType);
});
```

***

### setWaterlogged()

> **setWaterlogged**(`isWaterlogged`): `void`

#### Parameters

##### isWaterlogged

`boolean`

true if the block should have water within it.

#### Returns

`void`

#### Remarks

Sets whether this block has a water logged state - for
example, whether stairs are submerged within water.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

Error

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### south()

> **south**(`steps?`): `Block` \| `undefined`

#### Parameters

##### steps?

`number`

Number of steps to the south to step before returning.
Defaults to: 1

#### Returns

`Block` \| `undefined`

#### Remarks

Returns the Block to the south of this block
(positive in the Z direction).

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

// Block at (0, 0, 0)
const block = world.getDimension("overworld").getBlock({ x: 0, y: 0, z: 0 });
const nearbyBlock = block.south();
```

***

### trySetPermutation()

> **trySetPermutation**(`permutation`): `boolean`

**`Beta`**

#### Parameters

##### permutation

[`BlockPermutation`](BlockPermutation-1.md)

Permutation that contains a set of property states for the
Block.

#### Returns

`boolean`

Returns `true` if the block permutation data was
successfully set, else `false`.

#### Remarks

Tries to set the block in the dimension to the state of the
permutation by first checking if the placement is valid.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### west()

> **west**(`steps?`): `Block` \| `undefined`

#### Parameters

##### steps?

`number`

Number of steps to the west to step before returning.
Defaults to: 1

#### Returns

`Block` \| `undefined`

#### Remarks

Returns the Block to the west of this block
(negative in the X direction).

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

// Block at (0, 0, 0)
const block = world.getDimension("overworld").getBlock({ x: 0, y: 0, z: 0 });
const blockAtWest = block.west(10);
```
