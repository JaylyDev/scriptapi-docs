[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockTypes

# Class: BlockTypes

Contains a catalog of Minecraft Block Types that are
available in this world.

## Source

```ts
export class BlockTypes {
    private constructor();
    static get(typeName: string): BlockType | undefined;
    static getAll(): BlockType[];
}
```

## Constructors

### Constructor

> `private` **new BlockTypes**(): `BlockTypes`

#### Returns

`BlockTypes`

## Methods

### get()

> `static` **get**(`typeName`): [`BlockType`](BlockType-1.md) \| `undefined`

#### Parameters

##### typeName

`string`

Identifier of the block type. Should follow a namespace:id
pattern, such as minecraft:dirt.

#### Returns

[`BlockType`](BlockType-1.md) \| `undefined`

BlockType object, or undefined if the block type is not
available within this world.

#### Remarks

Returns a BlockType object for the specified identifier.

#### World Ready

This function can't be called in early-execution mode.

***

### getAll()

> `static` **getAll**(): [`BlockType`](BlockType-1.md)[]

#### Returns

[`BlockType`](BlockType-1.md)[]

#### Remarks

Returns a collection of all available block types.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
// Script by WavePlayz

import { world, BlockTypes } from "@minecraft/server";

// Get all available block types in the game
const blockTypes = BlockTypes.getAll();

// Function to get a random block type from the list of block types
const getRandomBlockType = () => blockTypes[Math.floor(blockTypes.length * Math.random())];

// Subscribe to the event that triggers when a player places a block
world.afterEvents.playerPlaceBlock.subscribe((eventData) => {
// Destructure the player and block objects from the event data
const { player, block } = eventData;

// Get a random block type
const randomBlockType = getRandomBlockType();

// Send a message to the player indicating the type of block they placed
player.sendMessage("You placed the " + randomBlockType.id + " block, xD");

// Change the type of the placed block to the random block type
block.setType(randomBlockType);
});
```
