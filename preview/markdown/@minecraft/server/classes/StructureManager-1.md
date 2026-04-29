[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / StructureManager

# Class: StructureManager

Manager for Structure related APIs. Includes APIs for
creating, getting, placing and deleting Structures.

## Source

```ts
export class StructureManager {
    private constructor();
    createEmpty(identifier: string, size: Vector3, saveMode?: StructureSaveMode): Structure;
    createFromWorld(
        identifier: string,
        dimension: Dimension,
        from: Vector3,
        to: Vector3,
        options?: StructureCreateOptions,
    ): Structure;
    delete(structure: string | Structure): boolean;
    get(identifier: string): Structure | undefined;
    getPackStructureIds(): string[];
    getWorldStructureIds(): string[];
    place(
        structure: string | Structure,
        dimension: Dimension,
        location: Vector3,
        options?: StructurePlaceOptions,
    ): void;
    placeJigsaw(
        pool: string,
        targetJigsaw: string,
        maxDepth: number,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawPlaceOptions,
    ): BlockBoundingBox;
    placeJigsawStructure(
        identifier: string,
        dimension: Dimension,
        location: Vector3,
        options?: JigsawStructurePlaceOptions,
    ): BlockBoundingBox;
}
```

## Constructors

### Constructor

> `private` **new StructureManager**(): `StructureManager`

#### Returns

`StructureManager`

## Methods

### createEmpty()

> **createEmpty**(`identifier`, `size`, `saveMode?`): [`Structure`](Structure-1.md)

#### Parameters

##### identifier

`string`

The name of the structure. A valid identifier must include a
namespace and must be unique.

##### size

[`Vector3`](../interfaces/Vector3-1.md)

The size of the structure. For example, to create a single
block structure the size should be {x:1, y:1, z:1}.

##### saveMode?

[`StructureSaveMode`](../enumerations/StructureSaveMode-1.md)

How the Structure should be saved upon creation. Defaults to
StructureSaveMode.Memory.
Defaults to: 0

#### Returns

[`Structure`](Structure-1.md)

Returns the newly created Structure.

#### Remarks

Creates an empty Structure in memory. Use [Structure.setBlockPermutation](Structure-1.md#setblockpermutation) to populate the structure
with blocks and save changes with [Structure.saveAs](Structure-1.md#saveas).

This function can't be called in restricted-execution mode.

#### Throws

Throws if the identifier is invalid. A valid identifier must
include a namespace and must be unique.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { BlockPermutation, StructureSaveMode, world } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";
const structure = world.structureManager.createEmpty(
"mystructure:random",
{ x: 10, y: 10, z: 10 },
StructureSaveMode.World
);
const concretes = [
MinecraftBlockTypes.RedConcrete,
MinecraftBlockTypes.YellowConcrete,
MinecraftBlockTypes.BlueConcrete,
];

for (let x = 0; x < 10; x++) {
for (let y = 0; y < 10; y++) {
   for (let z = 0; z < 10; z++) {
       const permutation = BlockPermutation.resolve(concretes[Math.floor(Math.random() * concretes.length)]);
       structure.setBlockPermutation({ x, y, z }, permutation);
   }
}
}
// Run this command: /structure load mystructure:empty ~ ~ ~
```

***

### createFromWorld()

> **createFromWorld**(`identifier`, `dimension`, `from`, `to`, `options?`): [`Structure`](Structure-1.md)

#### Parameters

##### identifier

`string`

The name of the structure. A valid identifier must include a
namespace and must be unique.

##### dimension

[`Dimension`](Dimension-1.md)

The dimension where the blocks should be read from.

##### from

[`Vector3`](../interfaces/Vector3-1.md)

##### to

[`Vector3`](../interfaces/Vector3-1.md)

##### options?

[`StructureCreateOptions`](../interfaces/StructureCreateOptions-1.md)

Additional options for creating a structure from the world.

#### Returns

[`Structure`](Structure-1.md)

Returns the newly created Structure.

#### Remarks

Creates a new Structure from blocks in the world. This is
functionally equivalent to the /structure save command.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the identifier is invalid. A valid identifier must
include a namespace and must be unique.
Throws if the structure bounds exceed the maximum size.
Throws if the structure bounds contains blocks outside the
world bounds.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { StructureSaveMode, world } from "@minecraft/server";
import { Vector3Builder, Vector3Utils } from "@minecraft/math";
const player = world.getAllPlayers()[0];
const from = player.location;
const to = Vector3Utils.add(from, new Vector3Builder(15, 15, 15));
world.structureManager.createFromWorld("mystructure:test", player.dimension, from, to, {
saveMode: StructureSaveMode.World,
});
```

***

### delete()

> **delete**(`structure`): `boolean`

#### Parameters

##### structure

`string` \| [`Structure`](Structure-1.md)

The structure identifier or Structure object that should be
deleted. Note, a Structure object will become invalid after
it is deleted.

#### Returns

`boolean`

Returns whether the structure was removed.

#### Remarks

Deletes a structure from memory and from the world if it
exists.

This function can't be called in restricted-execution mode.

#### Throws

Throws if a structure cannot be removed. For example, a
structure loaded from a Behavior Pack.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

world.structureManager.delete("mystructure:test");
```

***

### get()

> **get**(`identifier`): [`Structure`](Structure-1.md) \| `undefined`

#### Parameters

##### identifier

`string`

The name of the structure to get.

#### Returns

[`Structure`](Structure-1.md) \| `undefined`

Returns a Structure if it exists, otherwise undefined.

#### Remarks

Gets a Structure that is saved to memory or the world.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

world.structureManager.get("mystructure:test");
```

***

### getPackStructureIds()

> **getPackStructureIds**(): `string`[]

**`Beta`**

#### Returns

`string`[]

The list of structure identifiers.

#### Remarks

Returns a list of all structures contained in behavior
packs. Does not include structures saved to the world or in
memory.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getWorldStructureIds()

> **getWorldStructureIds**(): `string`[]

#### Returns

`string`[]

The list of structure identifiers.

#### Remarks

Returns a list of all structures saved to the world and to
memory. Does not include structures contained in behavior
packs.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

world.structureManager.getWorldStructureIds().forEach((id) => {
const structure = world.structureManager.get(id);
structure.isValid;
});
```

***

### place()

> **place**(`structure`, `dimension`, `location`, `options?`): `void`

#### Parameters

##### structure

`string` \| [`Structure`](Structure-1.md)

The structure's identifier or a Structure object.

##### dimension

[`Dimension`](Dimension-1.md)

The dimension where the Structure should be placed.

##### location

[`Vector3`](../interfaces/Vector3-1.md)

The location within the dimension where the Structure should
be placed.

##### options?

[`StructurePlaceOptions`](../interfaces/StructurePlaceOptions-1.md)

Additional options for Structure placement.

#### Returns

`void`

#### Remarks

Places a structure in the world. Structures placed in
unloaded chunks will be queued for loading.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the integrity value is outside of the range [0,1]
Throws if the integrity seed is invalid.
Throws if the placement location contains blocks that are
outside the world bounds.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidStructureError](InvalidStructureError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { world, StructureAnimationMode, StructureSaveMode, BlockPermutation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function getRandomStructure() {
// Return existing mystructure:random structure
if (world.structureManager.getWorldStructureIds().includes("mystructure:random")) {
   return world.structureManager.get("mystructure:random");
}

// Create a new mystructure:random structure otherwise
const structure = world.structureManager.createEmpty(
   "mystructure:random",
   { x: 10, y: 10, z: 10 },
   StructureSaveMode.World
);
const concretes = [
   MinecraftBlockTypes.RedConcrete,
   MinecraftBlockTypes.YellowConcrete,
   MinecraftBlockTypes.BlueConcrete,
];

for (let x = 0; x < 10; x++) {
   for (let y = 0; y < 10; y++) {
       for (let z = 0; z < 10; z++) {
           const permutation = BlockPermutation.resolve(concretes[Math.floor(Math.random() * concretes.length)]);
           structure.setBlockPermutation({ x, y, z }, permutation);
       }
   }
}

return structure;
}

const structure = getRandomStructure();
const player = world.getPlayers()[0];
// Place structure on player's location
world.structureManager.place(structure, player.dimension, player.location, {
animationMode: StructureAnimationMode.Blocks,
animationSeconds: 15,
});
```

```js
import { world } from "@minecraft/server";
const player = world.getPlayers()[0];
world.structureManager.place("mystructure:test", player.dimension, player.location);
```

***

### placeJigsaw()

> **placeJigsaw**(`pool`, `targetJigsaw`, `maxDepth`, `dimension`, `location`, `options?`): [`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Parameters

##### pool

`string`

The identifier of the template pool to start from.

##### targetJigsaw

`string`

The name of the jigsaw block to start from. This block must
be included in at least one of the starting pool structure
templates.

##### maxDepth

`number`

The maximum recursion depth for the jigsaw structure.
Bounds: [1, 20]

##### dimension

[`Dimension`](Dimension-1.md)

The dimension to place the jigsaw structure in.

##### location

[`Vector3`](../interfaces/Vector3-1.md)

The location where the jigsaw structure will begin
generating relative to the targetJigsaw block.

##### options?

[`JigsawPlaceOptions`](../interfaces/JigsawPlaceOptions-1.md)

Optional settings to use when generating the jigsaw
structure.

#### Returns

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

Returns a [BlockBoundingBox](../interfaces/BlockBoundingBox-1.md) object which represents
the maximum bounds of the jigsaw structure.

#### Remarks

Places a partial jigsaw structure in the world. This is
useful for debugging connections between jigsaw blocks.

This function can't be called in restricted-execution mode.

#### Throws

Throws if maxDepth is outside of the range [1,20]
Throws if generation fails due to invalid parameters or
jigsaw configuration.
Throws if the placement location contains blocks that are
outside the world bounds.

[PlaceJigsawError](PlaceJigsawError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### placeJigsawStructure()

> **placeJigsawStructure**(`identifier`, `dimension`, `location`, `options?`): [`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

#### Parameters

##### identifier

`string`

The identifier of the jigsaw structure.

##### dimension

[`Dimension`](Dimension-1.md)

The dimension to place the jigsaw structure in.

##### location

[`Vector3`](../interfaces/Vector3-1.md)

The location where the jigsaw structure will begin
generating. Note that the y value will be overridden by the
structure's start height unless the
ignoreStarJigsawStructurePlaceOptions ignoreStartHeight
option is set.

##### options?

[`JigsawStructurePlaceOptions`](../interfaces/JigsawStructurePlaceOptions-1.md)

Optional settings to use when generating the jigsaw
structure.

#### Returns

[`BlockBoundingBox`](../interfaces/BlockBoundingBox-1.md)

Returns a [BlockBoundingBox](../interfaces/BlockBoundingBox-1.md) object which represents
the maximum bounds of the jigsaw structure.

#### Remarks

Places a jigsaw structure in the world.

This function can't be called in restricted-execution mode.

#### Throws

Throws if generation fails due to invalid parameters or
jigsaw configuration.
Throws if the placement location contains blocks that are
outside the world bounds.

[PlaceJigsawError](PlaceJigsawError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { world } from "@minecraft/server";

// Command for /place structure minecraft:trail_ruins 10 20 30
function placeTrailRuins() {
const overworld = world.getDimension("overworld");
// Spawn trail ruins structure in overworld
world.structureManager.placeJigsawStructure("minecraft:trail_ruins", overworld, { x: 10, y: 20, z: 30 });
}
```

```js
import { world } from "@minecraft/server";

// Command for /place structure minecraft:trial_chambers 10 20 30 true true
function placeTrialChambers() {
const overworld = world.getDimension("overworld");
// Spawn trial chambers structure in overworld
world.structureManager.placeJigsawStructure(
   "minecraft:trial_chambers",
   overworld,
   { x: 10, y: 20, z: 30 },
   { ignoreStartHeight: true, keepJigsaws: true }
);
}
```
