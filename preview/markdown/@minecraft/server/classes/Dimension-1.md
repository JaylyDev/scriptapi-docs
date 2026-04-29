[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / Dimension

# Class: Dimension

A class that represents a particular dimension (e.g., The
End) within a world.

## Source

```ts
export class Dimension {
    private constructor();
    readonly heightRange: minecraftcommon.NumberRange;
    readonly id: string;
    readonly localizationKey: string;
    containsBiomes(volume: BlockVolumeBase, biomeFilter: BiomeFilter, isSuperset: boolean): boolean;
    containsBlock(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): boolean;
    createExplosion(location: Vector3, radius: number, explosionOptions?: ExplosionOptions): boolean;
    fillBlocks(
        volume: BlockVolumeBase,
        block: BlockPermutation | BlockType | string,
        options?: BlockFillOptions,
    ): ListBlockVolume;
    findClosestBiome(pos: Vector3, biomeToFind: BiomeType | string, options?: BiomeSearchOptions): Vector3 | undefined;
    getBiome(location: Vector3): BiomeType;
    getBlock(location: Vector3): Block | undefined;
    getBlockAbove(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    getBlockBelow(location: Vector3, options?: BlockRaycastOptions): Block | undefined;
    getBlockFromRay(location: Vector3, direction: Vector3, options?: BlockRaycastOptions): BlockRaycastHit | undefined;
    getBlocks(volume: BlockVolumeBase, filter: BlockFilter, allowUnloadedChunks?: boolean): ListBlockVolume;
    getEntities(options?: EntityQueryOptions): Entity[];
    getEntitiesAtBlockLocation(location: Vector3): Entity[];
    getEntitiesFromRay(location: Vector3, direction: Vector3, options?: EntityRaycastOptions): EntityRaycastHit[];
    getGeneratedStructures(location: Vector3): (minecraftvanilladata.MinecraftFeatureTypes | string)[];
    getLightLevel(location: Vector3): number;
    getPlayers(options?: EntityQueryOptions): Player[];
    getSkyLightLevel(location: Vector3): number;
    getTopmostBlock(locationXZ: VectorXZ, minHeight?: number): Block | undefined;
    getWeather(): WeatherType;
    isChunkLoaded(location: Vector3): boolean;
    placeFeature(featureName: string, location: Vector3, shouldThrow?: boolean): boolean;
    placeFeatureRule(featureRuleName: string, location: Vector3): boolean;
    playSound(soundId: string, location: Vector3, soundOptions?: WorldSoundOptions): void;
    runCommand(commandString: string): CommandResult;
    setBlockPermutation(location: Vector3, permutation: BlockPermutation): void;
    setBlockType(location: Vector3, blockType: BlockType | string): void;
    setWeather(weatherType: WeatherType, duration?: number): void;
    spawnEntity<T = never>(
        identifier: EntityIdentifierType<NoInfer<T>>,
        location: Vector3,
        options?: SpawnEntityOptions,
    ): Entity;
    spawnItem(itemStack: ItemStack, location: Vector3): Entity;
    spawnParticle(effectName: string, location: Vector3, molangVariables?: MolangVariableMap): void;
    spawnXp(location: Vector3, amount: number): void;
    stopAllSounds(): void;
    stopSound(soundId: string): void;
}
```

## Constructors

### Constructor

> `private` **new Dimension**(): `Dimension`

#### Returns

`Dimension`

## Properties

### heightRange

> `readonly` **heightRange**: [`NumberRange`](../../common/interfaces/NumberRange.md)

#### Remarks

Height range of the dimension.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
import { Player, system, world } from "@minecraft/server";

// Get all dimensions
const overworld = world.getDimension("overworld");
const nether = world.getDimension("nether");
const end = world.getDimension("the end");

// If user sends a scriptevent command with id test:height_range, it prints the height of each dimension in a world.
system.afterEvents.scriptEventReceive.subscribe((event) => {
if (event.id === "test:height_range") {
   // Gets the height range of every dimension
   const overworldHeight = overworld.heightRange;
   const netherHeight = nether.heightRange;
   const endHeight = end.heightRange;

   // Sends the message to player who sent the command
   if (event.sourceEntity instanceof Player) {
       event.sourceEntity.sendMessage(
           `Overworld height: ${overworldHeight.min} to ${overworldHeight.max} (Height: ${
               overworldHeight.max - overworldHeight.min
           } blocks)`
       );
       event.sourceEntity.sendMessage(
           `Nether height: ${netherHeight.min} to ${netherHeight.max} (Height: ${
               netherHeight.max - netherHeight.min
           } blocks)`
       );
       event.sourceEntity.sendMessage(
           `End height: ${endHeight.min} to ${endHeight.max} (Height: ${endHeight.max - endHeight.min} blocks)`
       );
   }
}
});
```

***

### id

> `readonly` **id**: `string`

#### Remarks

Identifier of the dimension.

#### World Ready

This property can't be read in early-execution mode.

***

### localizationKey

> `readonly` **localizationKey**: `string`

#### Remarks

Key for the localization of a dimension's name used by
language files.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### containsBiomes()

> **containsBiomes**(`volume`, `biomeFilter`, `isSuperset`): `boolean`

#### Parameters

##### volume

[`BlockVolumeBase`](BlockVolumeBase-1.md)

Area to check biomes in.

##### biomeFilter

[`BiomeFilter`](../interfaces/BiomeFilter-1.md)

A list of biomes to include and exclude. A list of tags to
include and exclude. Will return false if a biome is found
in the area that is in the excluded list or contains any of
the excluded tags.

##### isSuperset

`boolean`

Superset is used to determine the strictness of the filter.
If superset is set to true then the area must contain one or
more biomes in the included list or that contains all of the
included tags. If superset is set to false then the area
must contain only biomes in the included list and that
contain all of the included tags

#### Returns

`boolean`

Returns true if the biomes in the area match the filter
settings passed in. Otherwise, returns false.

#### Remarks

Checks if an area contains the specified biomes. If the area
is partially inside world boundaries, only the area that is
in bounds will be searched. This operation takes longer
proportional to both the area of the volume and the number
of biomes to check.

#### Throws

An error will be thrown if the area provided includes
unloaded chunks.
An error will be thrown if the area provided is completely
outside the world boundaries.
An error will be thrown if an unknown biome name is
provided.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

[UnloadedChunksError](UnloadedChunksError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### containsBlock()

> **containsBlock**(`volume`, `filter`, `allowUnloadedChunks?`): `boolean`

#### Parameters

##### volume

[`BlockVolumeBase`](BlockVolumeBase-1.md)

Volume of blocks that will be checked.

##### filter

[`BlockFilter`](../interfaces/BlockFilter-1.md)

Block filter that will be checked against each block in the
volume.

##### allowUnloadedChunks?

`boolean`

If set to true will suppress the UnloadedChunksError if some
or all of the block volume is outside of the loaded chunks.
Will only check the block locations that are within the
loaded chunks in the volume.
Defaults to: false

#### Returns

`boolean`

Returns true if at least one block in the volume satisfies
the filter, false otherwise.

#### Remarks

Searches the block volume for a block that satisfies the
block filter.

#### Throws

This function can throw errors.

Error

[UnloadedChunksError](UnloadedChunksError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### createExplosion()

> **createExplosion**(`location`, `radius`, `explosionOptions?`): `boolean`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

The location of the explosion.

##### radius

`number`

Radius, in blocks, of the explosion to create.
Bounds: [0, 1000]

##### explosionOptions?

[`ExplosionOptions`](../interfaces/ExplosionOptions-1.md)

Additional configurable options for the explosion.

#### Returns

`boolean`

#### Remarks

Creates an explosion at the specified location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### Examples

```typescript
import { DimensionLocation } from '@minecraft/server';

function createExplosion(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  log('Creating an explosion of radius 10.');
  targetLocation.dimension.createExplosion(targetLocation, 10);
}
```

```typescript
import { DimensionLocation } from '@minecraft/server';
import { Vector3Utils } from '@minecraft/math';

function createNoBlockExplosion(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const explodeNoBlocksLoc = Vector3Utils.floor(Vector3Utils.add(targetLocation, { x: 1, y: 2, z: 1 }));

  log('Creating an explosion of radius 15 that does not break blocks.');
  targetLocation.dimension.createExplosion(explodeNoBlocksLoc, 15, { breaksBlocks: false });
}
```

```typescript
import { DimensionLocation } from '@minecraft/server';
import { Vector3Utils } from '@minecraft/math';

function createExplosions(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const explosionLoc = Vector3Utils.add(targetLocation, { x: 0.5, y: 0.5, z: 0.5 });

  log('Creating an explosion of radius 15 that causes fire.');
  targetLocation.dimension.createExplosion(explosionLoc, 15, { causesFire: true });

  const belowWaterLoc = Vector3Utils.add(targetLocation, { x: 3, y: 1, z: 3 });

  log('Creating an explosion of radius 10 that can go underwater.');
  targetLocation.dimension.createExplosion(belowWaterLoc, 10, { allowUnderwater: true });
}
```

#### World Ready

This function can't be called in early-execution mode.

***

### fillBlocks()

> **fillBlocks**(`volume`, `block`, `options?`): [`ListBlockVolume`](ListBlockVolume-1.md)

#### Parameters

##### volume

[`BlockVolumeBase`](BlockVolumeBase-1.md)

Volume of blocks to be filled.

##### block

`string` \| [`BlockPermutation`](BlockPermutation-1.md) \| [`BlockType`](BlockType-1.md)

Type of block to fill the volume with.

##### options?

[`BlockFillOptions`](../interfaces/BlockFillOptions-1.md)

A set of additional options, such as a block filter which
can be used to include / exclude specific blocks in the
fill.

#### Returns

[`ListBlockVolume`](ListBlockVolume-1.md)

Returns a ListBlockVolume which contains all the blocks that
were placed.

#### Remarks

Fills an area of blocks with a specific block type.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

Error

[UnloadedChunksError](UnloadedChunksError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { BlockPermutation, BlockVolume, world } from "@minecraft/server";

// Command: /fill 0 10 0 20 30 40 underwater_tnt replace air
const overworld = world.getDimension("overworld");
const volume = new BlockVolume({ x: 0, y: 10, z: 0 }, { x: 20, y: 30, z: 40 });
const tnt = BlockPermutation.resolve("minecraft:underwater_tnt");
overworld.fillBlocks(volume, tnt, { blockFilter: { excludeTypes: ["minecraft:air"] } });
```

```ts
import { BlockPermutation, BlockVolume, Dimension, Vector3, world } from "@minecraft/server";

function fillBlockType(dimension: Dimension, from: Vector3, to: Vector3, block: string): void {
const volume = new BlockVolume(from, to);
dimension.fillBlocks(volume, block);
}

// Command: /fill 0 10 0 20 30 40 diamond_block
const overworld = world.getDimension("overworld");
fillBlockType(overworld, { x: 0, y: 10, z: 0 }, { x: 20, y: 30, z: 40 }, "minecraft:diamond_block");
```

***

### findClosestBiome()

> **findClosestBiome**(`pos`, `biomeToFind`, `options?`): [`Vector3`](../interfaces/Vector3-1.md) \| `undefined`

**`Beta`**

#### Parameters

##### pos

[`Vector3`](../interfaces/Vector3-1.md)

Starting location to look for a biome to find.

##### biomeToFind

`string` \| [`BiomeType`](BiomeType-1.md)

Identifier of the biome to look for.

##### options?

[`BiomeSearchOptions`](../interfaces/BiomeSearchOptions.md)

Additional selection criteria for a biome search.

#### Returns

[`Vector3`](../interfaces/Vector3-1.md) \| `undefined`

Returns a location of the biome, or undefined if a biome
could not be found.

#### Remarks

Finds the location of the closest biome of a particular
type. Note that the findClosestBiome operation can take some
time to complete, so avoid using many of these calls within
a particular tick.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

Error

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
// Script by JaylyMC
import { BiomeTypes, system, world } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";
/**
Returns the biome that this location in this dimension resides in
@param location The location to search for a biome
@param dimension The dimension to search for a biome
@returns The biome that this location in this dimension resides in
/
function getBiome(location, dimension) {
// Retrieve a list of all available biome types in the dimension.
const biomeTypes = BiomeTypes.getAll();
// Define the search options, specifying a bounding search area of 64 blocks in all directions.
const searchOptions = {
   boundingSize: { x: 64, y: 64, z: 64 },
};
// Variable to track the closest biome found during the search.
let closestBiome;
// Iterate through all available biome types.
for (const biome of biomeTypes) {
   // Attempt to locate the closest instance of the current biome type.
   const biomeLocation = dimension.findClosestBiome(location, biome, searchOptions);
   // If a biome location is found, calculate its distance from the input location.
   if (biomeLocation) {
       const distance = Vector3Utils.distance(biomeLocation, location);
       // Update `closestBiome` if this biome is closer than the previously found one.
       if (!closestBiome || distance < closestBiome.distance) {
           closestBiome = { biome, distance };
       }
   }
}
// If no biome was found within the search area, throw an error.
if (!closestBiome) {
   throw new Error(`Could not find any biome within given location`);
}
// Return the closest biome type found.
return closestBiome.biome;
}
// Example: Gets the biome that this player resides in to action bar
const player = world.getPlayers()[0];
system.runInterval(() => {
const start = Date.now();
const result = getBiome(player.location, player.dimension);
const end = Date.now();
player.onScreenDisplay.setActionBar(`Biome: ${result.id} (${end - start}ms)`);
});
```

```ts
// Script by JaylyMC

import { BiomeSearchOptions, BiomeType, BiomeTypes, Dimension, system, Vector3, world } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";

/**
Biome result
/
interface GetBiomeResult {
biome: BiomeType;
distance: number;
}

/**
Returns the biome that this location in this dimension resides in
@param location The location to search for a biome
@param dimension The dimension to search for a biome
@returns The biome that this location in this dimension resides in
/
function getBiome(location: Vector3, dimension: Dimension): BiomeType {
// Retrieve a list of all available biome types in the dimension.
const biomeTypes: BiomeType[] = BiomeTypes.getAll();

// Define the search options, specifying a bounding search area of 64 blocks in all directions.
const searchOptions: BiomeSearchOptions = {
   boundingSize: { x: 64, y: 64, z: 64 },
};

// Variable to track the closest biome found during the search.
let closestBiome: GetBiomeResult | undefined;

// Iterate through all available biome types.
for (const biome of biomeTypes) {
   // Attempt to locate the closest instance of the current biome type.
   const biomeLocation = dimension.findClosestBiome(location, biome, searchOptions);

   // If a biome location is found, calculate its distance from the input location.
   if (biomeLocation) {
       const distance = Vector3Utils.distance(biomeLocation, location);

       // Update `closestBiome` if this biome is closer than the previously found one.
       if (!closestBiome || distance < closestBiome.distance) {
           closestBiome = { biome, distance };
       }
   }
}

// If no biome was found within the search area, throw an error.
if (!closestBiome) {
   throw new Error(`Could not find any biome within given location`);
}

// Return the closest biome type found.
return closestBiome.biome;
}

// Example: Gets the biome that this player resides in to action bar
const player = world.getPlayers()[0];
system.runInterval(() => {
const start = Date.now();
const result = getBiome(player.location, player.dimension);
const end = Date.now();
player.onScreenDisplay.setActionBar(`Biome: ${result.id} (${end - start}ms)`);
});
```

```js
// Script by JaylyMC
import { BiomeTypes, system, world } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";
/**
Returns the biomes that this location in this dimension resides in
@param location The location to search for a biome
@param dimension The dimension to search for a biome
@returns All biomes that this location in this dimension resides in,
with closest distance attribute provided.
/
function getBiomes(location, dimension) {
// Retrieve a list of all available biome types in the dimension.
const biomeTypes = BiomeTypes.getAll();
// Define the search options, specifying a bounding search area of 64 blocks in all directions.
const searchOptions = {
   boundingSize: { x: 64, y: 64, z: 64 },
};
// Initialize an array to store the closest biomes and their respective distances.
const closestBiomes = [];
// Iterate through each biome type and attempt to find the closest instance of each.
for (const biome of biomeTypes) {
   // Find the closest location of the current biome within the search bounds.
   const biomeLocation = dimension.findClosestBiome(location, biome, searchOptions);
   // If a location is found, calculate the distance from the given location.
   if (biomeLocation) {
       const distance = Vector3Utils.distance(biomeLocation, location);
       // Store the biome and its calculated distance in the results array.
       closestBiomes.push({ biome, distance });
   }
}
// Return the array containing all found biomes and their distances.
return closestBiomes;
}
// Example: Gets all biomes that this player resides in to action bar
const player = world.getPlayers()[0];
system.runInterval(() => {
const start = Date.now();
const result = getBiomes(player.location, player.dimension);
const end = Date.now();
for (const { biome, distance } of result) {
   player.onScreenDisplay.setActionBar(`Biome: ${biome.id}, Distance: ${distance}`);
}
// console.log removed for example clarity
});
```

```ts
// Script by JaylyMC

import { BiomeSearchOptions, BiomeType, BiomeTypes, Dimension, system, Vector3, world } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";

/**
Biome result
/
interface GetBiomeResult {
biome: BiomeType;
distance: number;
}

/**
Returns the biomes that this location in this dimension resides in
@param location The location to search for a biome
@param dimension The dimension to search for a biome
@returns All biomes that this location in this dimension resides in,
with closest distance attribute provided.
/
function getBiomes(location: Vector3, dimension: Dimension) {
// Retrieve a list of all available biome types in the dimension.
const biomeTypes: BiomeType[] = BiomeTypes.getAll();

// Define the search options, specifying a bounding search area of 64 blocks in all directions.
const searchOptions: BiomeSearchOptions = {
   boundingSize: { x: 64, y: 64, z: 64 },
};

// Initialize an array to store the closest biomes and their respective distances.
const closestBiomes: GetBiomeResult[] = [];

// Iterate through each biome type and attempt to find the closest instance of each.
for (const biome of biomeTypes) {
   // Find the closest location of the current biome within the search bounds.
   const biomeLocation = dimension.findClosestBiome(location, biome, searchOptions);

   // If a location is found, calculate the distance from the given location.
   if (biomeLocation) {
       const distance = Vector3Utils.distance(biomeLocation, location);

       // Store the biome and its calculated distance in the results array.
       closestBiomes.push({ biome, distance });
   }
}

// Return the array containing all found biomes and their distances.
return closestBiomes;
}

// Example: Gets all biomes that this player resides in to action bar
const player = world.getPlayers()[0];
system.runInterval(() => {
const start = Date.now();
const result = getBiomes(player.location, player.dimension);
const end = Date.now();
for (const { biome, distance } of result) {
   player.onScreenDisplay.setActionBar(`Biome: ${biome.id}, Distance: ${distance}`);
}
console.log(`Took ${end - start}ms to find all biomes`);
});
```

```ts
import { BiomeTypes, Player } from "@minecraft/server";

const biomeTypes = BiomeTypes.getAll();

/**
@description
Finds which biome player is in currently
@deprecated Check out getBiome.ts or getBiomes.ts examples instead
/
function getBiome(player: Player): string {
for (const currentBiome of biomeTypes) {
   const biome = player.dimension.findClosestBiome(player.location, currentBiome, {
       boundingSize: { x: 64, y: 64, z: 64 },
   });
   if (biome !== undefined) {
       return currentBiome.id;
   }
}
throw new Error("Player is not in any biome");
}
```

***

### getBiome()

> **getBiome**(`location`): [`BiomeType`](BiomeType-1.md)

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

Location at which to check the biome.

#### Returns

[`BiomeType`](BiomeType-1.md)

#### Remarks

Returns the biome type at the specified location.

#### Throws

An error will be thrown if the location is out of world
bounds.
An error will be thrown if the location is in an unloaded
chunk.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getBlock()

> **getBlock**(`location`): [`Block`](Block-1.md) \| `undefined`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

The location at which to return a block.

#### Returns

[`Block`](Block-1.md) \| `undefined`

Block at the specified location, or 'undefined' if asking
for a block at an unloaded chunk.

#### Remarks

Returns a block instance at the given location.

#### Throws

PositionInUnloadedChunkError: Exception thrown when trying
to interact with a Block object that isn't in a loaded and
ticking chunk anymore

PositionOutOfWorldBoundariesError: Exception thrown when
trying to interact with a position outside of dimension
height range

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getBlockAbove()

> **getBlockAbove**(`location`, `options?`): [`Block`](Block-1.md) \| `undefined`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

Location to retrieve the block above from.

##### options?

[`BlockRaycastOptions`](../interfaces/BlockRaycastOptions-1.md)

The options to decide if a block is a valid result.

#### Returns

[`Block`](Block-1.md) \| `undefined`

#### Remarks

Gets the first block found above a given block location
based on the given options (by default will find the first
solid block above).

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlockBelow()

> **getBlockBelow**(`location`, `options?`): [`Block`](Block-1.md) \| `undefined`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

Location to retrieve the block below from.

##### options?

[`BlockRaycastOptions`](../interfaces/BlockRaycastOptions-1.md)

The options to decide if a block is a valid result.

#### Returns

[`Block`](Block-1.md) \| `undefined`

#### Remarks

Gets the first block found below a given block location
based on the given options (by default will find the first
solid block below).

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlockFromRay()

> **getBlockFromRay**(`location`, `direction`, `options?`): [`BlockRaycastHit`](../interfaces/BlockRaycastHit-1.md) \| `undefined`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

Location from where to initiate the ray check.

##### direction

[`Vector3`](../interfaces/Vector3-1.md)

Vector direction to cast the ray.

##### options?

[`BlockRaycastOptions`](../interfaces/BlockRaycastOptions-1.md)

Additional options for processing this raycast query.

#### Returns

[`BlockRaycastHit`](../interfaces/BlockRaycastHit-1.md) \| `undefined`

#### Remarks

Gets the first block that intersects with a vector emanating
from a location.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlocks()

> **getBlocks**(`volume`, `filter`, `allowUnloadedChunks?`): [`ListBlockVolume`](ListBlockVolume-1.md)

#### Parameters

##### volume

[`BlockVolumeBase`](BlockVolumeBase-1.md)

Volume of blocks that will be checked.

##### filter

[`BlockFilter`](../interfaces/BlockFilter-1.md)

Block filter that will be checked against each block in the
volume.

##### allowUnloadedChunks?

`boolean`

If set to true will suppress the UnloadedChunksError if some
or all of the block volume is outside of the loaded chunks.
Will only check the block locations that are within the
loaded chunks in the volume.
Defaults to: false

#### Returns

[`ListBlockVolume`](ListBlockVolume-1.md)

Returns the ListBlockVolume that contains all the block
locations that satisfied the block filter.

#### Remarks

Gets all the blocks in a volume that satisfy the filter.

#### Throws

This function can throw errors.

Error

[UnloadedChunksError](UnloadedChunksError-1.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { BlockPermutation, BlockVolume, system, world } from "@minecraft/server";

// Get every non-air block location at chunk (0, 0)
const overworld = world.getDimension("overworld");
const volume = new BlockVolume(
{ x: 0, y: overworld.heightRange.min, z: 0 },
{ x: 15, y: overworld.heightRange.max, z: 15 }
);
const locations = overworld.getBlocks(volume, { excludeTypes: ["minecraft:air"] }, false);

/**
A simple generator that replace non-air blocks to cobblestone at chunk (0, 0),
yielding after each block placement.
@returns {Generator<void, void, void>} A generator that yields after each block placement.
/
function* blockPlacingGenerator() {
for (const location of locations.getBlockLocationIterator()) {
   const block = overworld.getBlock(location);
   block.setPermutation(BlockPermutation.resolve("minecraft:cobblestone"));
   yield;
}
}

system.runJob(blockPlacingGenerator());
```

***

### getEntities()

> **getEntities**(`options?`): [`Entity`](Entity-1.md)[]

#### Parameters

##### options?

[`EntityQueryOptions`](../interfaces/EntityQueryOptions-1.md)

Additional options that can be used to filter the set of
entities returned.

#### Returns

[`Entity`](Entity-1.md)[]

An entity array.

#### Remarks

Returns a set of entities based on a set of conditions
defined via the EntityQueryOptions set of filter criteria.

#### Throws

This function can throw errors.

[CommandError](CommandError-1.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

#### Examples

```typescript
import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';

function bounceSkeletons(targetLocation: DimensionLocation) {
  const mobs = ['creeper', 'skeleton', 'sheep'];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
  }

  const eqo: EntityQueryOptions = {
    type: 'skeleton',
  };

  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.applyKnockback(0, 0, 0, 1);
  }
}
```

```typescript
import { EntityQueryOptions, DimensionLocation } from '@minecraft/server';

function tagsQuery(targetLocation: DimensionLocation) {
  const mobs = ['creeper', 'skeleton', 'sheep'];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    const mobTypeId = mobs[i % mobs.length];
    const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
    entity.addTag('mobparty.' + mobTypeId);
  }

  const eqo: EntityQueryOptions = {
    tags: ['mobparty.skeleton'],
  };

  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.kill();
  }
}
```

```typescript
import { EntityItemComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';

function testThatEntityIsFeatherItem(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const items = targetLocation.dimension.getEntities({
    location: targetLocation,
    maxDistance: 20,
  });

  for (const item of items) {
    const itemComp = item.getComponent(EntityComponentTypes.Item) as EntityItemComponent;

    if (itemComp) {
      if (itemComp.itemStack.typeId.endsWith('feather')) {
        log('Success! Found a feather', 1);
      }
    }
  }
}
```

```ts
import { EntityQueryOptions, GameMode, world } from "@minecraft/server";

const options: EntityQueryOptions = {
families: ["mob", "animal"],
excludeTypes: ["cow"],
maxDistance: 50,
excludeGameModes: [GameMode.Creative, GameMode.Spectator],
};

const filteredEntities = world.getDimension("overworld").getEntities(options);
console.log(
"Filtered Entities:",
filteredEntities.map((entity) => entity.typeId)
);
```

#### World Ready

This function can't be called in early-execution mode.

***

### getEntitiesAtBlockLocation()

> **getEntitiesAtBlockLocation**(`location`): [`Entity`](Entity-1.md)[]

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

The location at which to return entities.

#### Returns

[`Entity`](Entity-1.md)[]

Zero or more entities at the specified location.

#### Remarks

Returns a set of entities at a particular location.

#### World Ready

This function can't be called in early-execution mode.

***

### getEntitiesFromRay()

> **getEntitiesFromRay**(`location`, `direction`, `options?`): [`EntityRaycastHit`](../interfaces/EntityRaycastHit-1.md)[]

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

##### direction

[`Vector3`](../interfaces/Vector3-1.md)

##### options?

[`EntityRaycastOptions`](../interfaces/EntityRaycastOptions-1.md)

Additional options for processing this raycast query.

#### Returns

[`EntityRaycastHit`](../interfaces/EntityRaycastHit-1.md)[]

#### Remarks

Gets entities that intersect with a specified vector
emanating from a location.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidEntityError](InvalidEntityError-1.md)

[minecraftcommon.UnsupportedFunctionalityError](../../common/classes/UnsupportedFunctionalityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getGeneratedStructures()

> **getGeneratedStructures**(`location`): `any`[]

**`Beta`**

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

Location at which to check for structures.

#### Returns

`any`[]

#### Remarks

Returns a vector of generated structures that contain the
specified location (ex: Pillager Outpost, Mineshaft, etc.).
The vector will be empty if no structures are found.

#### Throws

An error will be thrown if the location is out of world
bounds.
An error will be thrown if the location is in an unloaded
chunk.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getLightLevel()

> **getLightLevel**(`location`): `number`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

Location of the block we want to check the brightness of.

#### Returns

`number`

The brightness level on the block.

#### Remarks

Returns the total brightness level of light shining on a
certain block position.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getPlayers()

> **getPlayers**(`options?`): [`Player`](Player-1.md)[]

#### Parameters

##### options?

[`EntityQueryOptions`](../interfaces/EntityQueryOptions-1.md)

Additional options that can be used to filter the set of
players returned.

#### Returns

[`Player`](Player-1.md)[]

A player array.

#### Remarks

Returns a set of players based on a set of conditions
defined via the EntityQueryOptions set of filter criteria.

#### Throws

This function can throw errors.

[CommandError](CommandError-1.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { EntityQueryOptions, world } from "@minecraft/server";

const entityQueryOptions: EntityQueryOptions = {
maxDistance: 100,
scoreOptions: [
   { objective: "kills", minScore: 10 },
   { objective: "deaths", maxScore: 5 },
],
};

const filteredPlayers = world.getDimension("overworld").getPlayers(entityQueryOptions);
console.log(
"Filtered Players in Overworld:",
filteredPlayers.map((player) => player.name)
);
```

***

### getSkyLightLevel()

> **getSkyLightLevel**(`location`): `number`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

Position of the block we want to check the brightness of.

#### Returns

`number`

The brightness level on the block.

#### Remarks

Returns the brightness level of light shining from the sky
on a certain block position.

#### Throws

This function can throw errors.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getTopmostBlock()

> **getTopmostBlock**(`locationXZ`, `minHeight?`): [`Block`](Block-1.md) \| `undefined`

#### Parameters

##### locationXZ

[`VectorXZ`](../interfaces/VectorXZ-1.md)

Location to retrieve the topmost block for.

##### minHeight?

`number`

The Y height to begin the search from. Defaults to the
maximum dimension height.

#### Returns

[`Block`](Block-1.md) \| `undefined`

#### Remarks

Returns the highest block at the given XZ location.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getWeather()

> **getWeather**(): [`WeatherType`](../enumerations/WeatherType-1.md)

**`Beta`**

#### Returns

[`WeatherType`](../enumerations/WeatherType-1.md)

Returns a WeatherType that explains the broad category of
weather that is currently going on.

#### Remarks

Returns the current weather.

#### World Ready

This function can't be called in early-execution mode.

***

### isChunkLoaded()

> **isChunkLoaded**(`location`): `boolean`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

Location to check if the chunk is loaded.

#### Returns

`boolean`

#### Remarks

Returns true if the chunk at the given location is loaded
(and valid for use with scripting).

#### World Ready

This function can't be called in early-execution mode.

***

### placeFeature()

> **placeFeature**(`featureName`, `location`, `shouldThrow?`): `boolean`

#### Parameters

##### featureName

`string`

The string identifier for the feature.

##### location

[`Vector3`](../interfaces/Vector3-1.md)

Location to place the feature.

##### shouldThrow?

`boolean`

Specifies if the function call will throw an error if the
feature could not be placed.
Note: The function call will always throw an error if using
an unknown feature name or trying to place in a unloaded
chunk.
Defaults to: false

#### Returns

`boolean`

#### Remarks

Places the given feature into the dimension at the specified
location.

This function can't be called in restricted-execution mode.

#### Throws

An error will be thrown if the feature name is invalid.
An error will be thrown if the location is in an unloaded
chunk.

Error

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### placeFeatureRule()

> **placeFeatureRule**(`featureRuleName`, `location`): `boolean`

#### Parameters

##### featureRuleName

`string`

The string identifier for the feature rule.

##### location

[`Vector3`](../interfaces/Vector3-1.md)

Location to place the feature rule.

#### Returns

`boolean`

#### Remarks

Places the given feature rule into the dimension at the
specified location.

This function can't be called in restricted-execution mode.

#### Throws

An error will be thrown if the feature rule name is invalid.
An error will be thrown if the location is in an unloaded
chunk.

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### playSound()

> **playSound**(`soundId`, `location`, `soundOptions?`): `void`

#### Parameters

##### soundId

`string`

Identifier of the sound.

##### location

[`Vector3`](../interfaces/Vector3-1.md)

Location of the sound.

##### soundOptions?

[`WorldSoundOptions`](../interfaces/WorldSoundOptions-1.md)

Additional options for configuring additional effects for
the sound.

#### Returns

`void`

#### Remarks

Plays a sound for all players.

This function can't be called in restricted-execution mode.

#### Throws

An error will be thrown if volume is less than 0.0.
An error will be thrown if fade is less than 0.0.
An error will be thrown if pitch is less than 0.01.
An error will be thrown if volume is less than 0.0.

[minecraftcommon.PropertyOutOfBoundsError](../../common/classes/PropertyOutOfBoundsError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### runCommand()

> **runCommand**(`commandString`): [`CommandResult`](CommandResult-1.md)

#### Parameters

##### commandString

`string`

Command to run. Note that command strings should not start
with slash.

#### Returns

[`CommandResult`](CommandResult-1.md)

Returns a command result with a count of successful values
from the command.

#### Remarks

Runs a command synchronously using the context of the
broader dimenion.

This function can't be called in restricted-execution mode.

#### Throws

Throws an exception if the command fails due to incorrect
parameters or command syntax, or in erroneous cases for the
command. Note that in many cases, if the command does not
operate (e.g., a target selector found no matches), this
method will not throw an exception.

[CommandError](CommandError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setBlockPermutation()

> **setBlockPermutation**(`location`, `permutation`): `void`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

The location within the dimension to set the block.

##### permutation

[`BlockPermutation`](BlockPermutation-1.md)

The block permutation to set.

#### Returns

`void`

#### Remarks

Sets a block in the world using a BlockPermutation.
BlockPermutations are blocks with a particular state.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the location is within an unloaded chunk or
outside of the world bounds.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setBlockType()

> **setBlockType**(`location`, `blockType`): `void`

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

The location within the dimension to set the block.

##### blockType

`string` \| [`BlockType`](BlockType-1.md)

The type of block to set. This can be either a string
identifier or a BlockType. The default block permutation is
used.

#### Returns

`void`

#### Remarks

Sets a block at a given location within the dimension.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the location is within an unloaded chunk or
outside of the world bounds.

Error

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setWeather()

> **setWeather**(`weatherType`, `duration?`): `void`

#### Parameters

##### weatherType

[`WeatherType`](../enumerations/WeatherType-1.md)

Set the type of weather to apply.

##### duration?

`number`

Sets the duration of the weather (in ticks). If no duration
is provided, the duration will be set to a random duration
between 300 and 900 seconds.
Bounds: [1, 1000000]

#### Returns

`void`

#### Remarks

Sets the current weather within the dimension

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### spawnEntity()

> **spawnEntity**\<`T`\>(`identifier`, `location`, `options?`): [`Entity`](Entity-1.md)

#### Type Parameters

##### T

`T` = `never`

#### Parameters

##### identifier

[`EntityIdentifierType`](../type-aliases/EntityIdentifierType.md)\<`NoInfer`\<`T`\>\>

Identifier of the type of entity to spawn. If no namespace
is specified, 'minecraft:' is assumed.

##### location

[`Vector3`](../interfaces/Vector3-1.md)

The location at which to create the entity.

##### options?

[`SpawnEntityOptions`](../interfaces/SpawnEntityOptions-1.md)

#### Returns

[`Entity`](Entity-1.md)

Newly created entity at the specified location.

#### Remarks

Creates a new entity (e.g., a mob) at the specified
location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[EntitySpawnError](EntitySpawnError-1.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidEntityError](InvalidEntityError-1.md)

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### Examples

```typescript
import { DimensionLocation } from '@minecraft/server';
import { Vector3Utils } from '@minecraft/math';

function spawnAdultHorse(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  log('Create a horse and triggering the ageable_grow_up event, ensuring the horse is created as an adult');
  targetLocation.dimension.spawnEntity(
    'minecraft:horse<minecraft:ageable_grow_up>',
    Vector3Utils.add(targetLocation, { x: 0, y: 1, z: 0 })
  );
}
```

```typescript
import { DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes, MinecraftEffectTypes } from '@minecraft/vanilla-data';

function quickFoxLazyDog(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const fox = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Fox, {
    x: targetLocation.x + 1,
    y: targetLocation.y + 2,
    z: targetLocation.z + 3,
  });

  fox.addEffect(MinecraftEffectTypes.Speed, 10, {
    amplifier: 2,
  });
  log('Created a fox.');

  const wolf = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Wolf, {
    x: targetLocation.x + 4,
    y: targetLocation.y + 2,
    z: targetLocation.z + 3,
  });
  wolf.addEffect(MinecraftEffectTypes.Slowness, 10, {
    amplifier: 2,
  });
  wolf.isSneaking = true;
  log('Created a sneaking wolf.', 1);
}
```

```typescript
import { DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function triggerEvent(targetLocation: DimensionLocation) {
  const creeper = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.Creeper, targetLocation);

  creeper.triggerEvent('minecraft:start_exploding_forced');
}
```

#### World Ready

This function can't be called in early-execution mode.

***

### spawnItem()

> **spawnItem**(`itemStack`, `location`): [`Entity`](Entity-1.md)

#### Parameters

##### itemStack

[`ItemStack`](ItemStack-1.md)

##### location

[`Vector3`](../interfaces/Vector3-1.md)

The location at which to create the item stack.

#### Returns

[`Entity`](Entity-1.md)

Newly created item stack entity at the specified location.

#### Remarks

Creates a new item stack as an entity at the specified
location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### Examples

```typescript
import { ItemStack, DimensionLocation } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function itemStacks(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const oneItemLoc = { x: targetLocation.x + targetLocation.y + 3, y: 2, z: targetLocation.z + 1 };
  const fiveItemsLoc = { x: targetLocation.x + 1, y: targetLocation.y + 2, z: targetLocation.z + 1 };
  const diamondPickaxeLoc = { x: targetLocation.x + 2, y: targetLocation.y + 2, z: targetLocation.z + 4 };

  const oneEmerald = new ItemStack(MinecraftItemTypes.Emerald, 1);
  const onePickaxe = new ItemStack(MinecraftItemTypes.DiamondPickaxe, 1);
  const fiveEmeralds = new ItemStack(MinecraftItemTypes.Emerald, 5);

  log(`Spawning an emerald at (${oneItemLoc.x}, ${oneItemLoc.y}, ${oneItemLoc.z})`);
  targetLocation.dimension.spawnItem(oneEmerald, oneItemLoc);

  log(`Spawning five emeralds at (${fiveItemsLoc.x}, ${fiveItemsLoc.y}, ${fiveItemsLoc.z})`);
  targetLocation.dimension.spawnItem(fiveEmeralds, fiveItemsLoc);

  log(`Spawning a diamond pickaxe at (${diamondPickaxeLoc.x}, ${diamondPickaxeLoc.y}, ${diamondPickaxeLoc.z})`);
  targetLocation.dimension.spawnItem(onePickaxe, diamondPickaxeLoc);
}
```

```typescript
import { ItemStack, DimensionLocation } from '@minecraft/server';
import { MinecraftItemTypes } from '@minecraft/vanilla-data';

function spawnFeatherItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const featherItem = new ItemStack(MinecraftItemTypes.Feather, 1);

  targetLocation.dimension.spawnItem(featherItem, targetLocation);
  log(`New feather created at ${targetLocation.x}, ${targetLocation.y}, ${targetLocation.z}!`);
}
```

#### World Ready

This function can't be called in early-execution mode.

***

### spawnParticle()

> **spawnParticle**(`effectName`, `location`, `molangVariables?`): `void`

#### Parameters

##### effectName

`string`

Identifier of the particle to create.

##### location

[`Vector3`](../interfaces/Vector3-1.md)

The location at which to create the particle emitter.

##### molangVariables?

[`MolangVariableMap`](MolangVariableMap-1.md)

A set of optional, customizable variables that can be
adjusted for this particle.

#### Returns

`void`

#### Remarks

Creates a new particle emitter at a specified location in
the world.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### Example

```typescript
import { MolangVariableMap, DimensionLocation } from '@minecraft/server';

function spawnParticle(targetLocation: DimensionLocation) {
  for (let i = 0; i < 100; i++) {
    const molang = new MolangVariableMap();

    molang.setColorRGB('variable.color', { red: Math.random(), green: Math.random(), blue: Math.random() });

    const newLocation = {
      x: targetLocation.x + Math.floor(Math.random() * 8) - 4,
      y: targetLocation.y + Math.floor(Math.random() * 8) - 4,
      z: targetLocation.z + Math.floor(Math.random() * 8) - 4,
    };
    targetLocation.dimension.spawnParticle('minecraft:colored_flame_particle', newLocation, molang);
  }
}
```

#### World Ready

This function can't be called in early-execution mode.

***

### spawnXp()

> **spawnXp**(`location`, `amount`): `void`

**`Beta`**

#### Parameters

##### location

[`Vector3`](../interfaces/Vector3-1.md)

The location at which to spawn the experience orb.

##### amount

`number`

The amount of experience to give the experience orb.
Bounds: [1, 12000]

#### Returns

`void`

#### Remarks

Spawns an experience orb at a specified location in the
dimension.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### stopAllSounds()

> **stopAllSounds**(): `void`

**`Beta`**

#### Returns

`void`

#### Remarks

Stops all sounds from playing for all players.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### stopSound()

> **stopSound**(`soundId`): `void`

**`Beta`**

#### Parameters

##### soundId

`string`

Identifier of the sound.

#### Returns

`void`

#### Remarks

Stops a sound from playing for all players.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.
