[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / BlockPistonComponent

# Class: BlockPistonComponent

When present, this block has piston-like behavior. Contains
additional properties for discovering block piston state.

## Source

```ts
export class BlockPistonComponent extends BlockComponent {
    private constructor();
    readonly isMoving: boolean;
    readonly state: BlockPistonState;
    static readonly componentId = 'minecraft:piston';
    getAttachedBlocks(): Block[];
    getAttachedBlocksLocations(): Vector3[];
}
```

## Extends

- [`BlockComponent`](BlockComponent.md)

## Constructors

### Constructor

> `private` **new BlockPistonComponent**(): `BlockPistonComponent`

#### Returns

`BlockPistonComponent`

#### Overrides

[`BlockComponent`](BlockComponent.md).[`constructor`](BlockComponent.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block.md)

#### Remarks

Block instance that this component pertains to.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent.md).[`block`](BlockComponent.md#block)

***

### isMoving

> `readonly` **isMoving**: `boolean`

#### Remarks

Whether the piston is in the process of expanding or
retracting.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the component is valid. A component is
considered valid if its owner is valid, in addition to any
addition to any additional validation required by the
component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent.md).[`isValid`](BlockComponent.md#isvalid)

***

### state

> `readonly` **state**: [`BlockPistonState`](../enumerations/BlockPistonState.md)

#### Remarks

The current state of the piston.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent.md).[`typeId`](BlockComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:piston"` = `'minecraft:piston'`

## Methods

### getAttachedBlocks()

> **getAttachedBlocks**(): [`Block`](Block.md)[]

#### Returns

[`Block`](Block.md)[]

#### Remarks

Retrieves a set of blocks that this piston is connected
with.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
// Script by WavePlayz

import { world, system, BlockTypes } from "@minecraft/server";

// Get all available block types in the game
const blockTypes = BlockTypes.getAll();

// Function to get a random block type from the list of block types
const getRandomBlockType = () => blockTypes[Math.floor(blockTypes.length * Math.random())];

// Subscribe to the event that triggers when a piston is activated
world.afterEvents.pistonActivate.subscribe((eventData) => {
// Destructure the dimension and piston objects from the event data
const { dimension, piston } = eventData;

// Get the blocks attached to the piston
const attachedBlocks = piston.getAttachedBlocks();

// Get the locations of the blocks attached to the piston
const attachedBlocksLocations = piston.getAttachedBlocksLocations();

// Loop through each attached block location
attachedBlocksLocations.forEach((location, index) => {
   // Set the type of each attached block to a random block type
   attachedBlocks[index].setType(getRandomBlockType());
});
});
```

***

### getAttachedBlocksLocations()

> **getAttachedBlocksLocations**(): [`Vector3`](../interfaces/Vector3.md)[]

#### Returns

[`Vector3`](../interfaces/Vector3.md)[]

#### Remarks

Retrieves a set of block locations that this piston is
connected with.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
// Script by WavePlayz

import { world, system, BlockTypes } from "@minecraft/server";

// Get all available block types in the game
const blockTypes = BlockTypes.getAll();

// Function to get a random block type from the list of block types
const getRandomBlockType = () => blockTypes[Math.floor(blockTypes.length * Math.random())];

// Subscribe to the event that triggers when a piston is activated
world.afterEvents.pistonActivate.subscribe((eventData) => {
// Destructure the dimension and piston objects from the event data
const { dimension, piston } = eventData;

// Get the blocks attached to the piston
const attachedBlocks = piston.getAttachedBlocks();

// Get the locations of the blocks attached to the piston
const attachedBlocksLocations = piston.getAttachedBlocksLocations();

// Loop through each attached block location
attachedBlocksLocations.forEach((location, index) => {
   // Set the type of each attached block to a random block type
   attachedBlocks[index].setType(getRandomBlockType());
});
});
```
