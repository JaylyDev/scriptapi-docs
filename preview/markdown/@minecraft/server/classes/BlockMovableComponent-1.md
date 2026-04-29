[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockMovableComponent

# Class: BlockMovableComponent

Represents a block that can move (such as a piston).

## Source

```ts
export class BlockMovableComponent extends BlockComponent {
    private constructor();
    readonly movementType: MovementType;
    readonly stickyType: StickyType;
    static readonly componentId = 'minecraft:movable';
}
```

## Extends

- [`BlockComponent`](BlockComponent-1.md)

## Constructors

### Constructor

> `private` **new BlockMovableComponent**(): `BlockMovableComponent`

#### Returns

`BlockMovableComponent`

#### Overrides

[`BlockComponent`](BlockComponent-1.md).[`constructor`](BlockComponent-1.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block-1.md)

#### Remarks

Block instance that this component pertains to.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent-1.md).[`block`](BlockComponent-1.md#block)

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

[`BlockComponent`](BlockComponent-1.md).[`isValid`](BlockComponent-1.md#isvalid)

***

### movementType

> `readonly` **movementType**: [`MovementType`](../enumerations/MovementType-1.md)

#### Throws

This property can throw when used.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This property can't be read in early-execution mode.

#### Example

```ts
import { world, BlockMovableComponent, MovementType, StickyType, Vector3 } from "@minecraft/server";

// Example of working with BlockMovableComponent
function demonstrateBlockMovableComponent() {
const player = world.getAllPlayers()[0];
if (!player) return;

const blockLocation: Vector3 = {
   x: Math.floor(player.location.x),
   y: Math.floor(player.location.y),
   z: Math.floor(player.location.z),
};

// Get a block and check if it has the movable component
const block = player.dimension.getBlock(blockLocation);
if (!block) return;

// Try to get the movable component
const movableComponent = block.getComponent("minecraft:movable") as BlockMovableComponent;

if (movableComponent) {
   console.log("Block has movable component!");

   // Check the movement type
   console.log(`Movement type: ${movableComponent.movementType}`);
   switch (movableComponent.movementType) {
       case MovementType.Push:
           console.log("This block can be pushed by pistons");
           break;
       case MovementType.PushPull:
           console.log("This block can be pushed and pulled by pistons");
           break;
       case MovementType.Immovable:
           console.log("This block cannot be moved by pistons");
           break;
       case MovementType.Popped:
           console.log("This block will break when pushed by pistons");
           break;
   }
} else {
   console.log("Block does not have movable component");
}
}

// Run the demonstration
demonstrateBlockMovableComponent();
```

***

### stickyType

> `readonly` **stickyType**: [`StickyType`](../enumerations/StickyType-1.md)

#### Throws

This property can throw when used.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

#### World Ready

This property can't be read in early-execution mode.

#### Example

```ts
import { world, BlockMovableComponent, MovementType, StickyType, Vector3 } from "@minecraft/server";

// Example of working with BlockMovableComponent
function demonstrateBlockMovableComponent() {
const player = world.getAllPlayers()[0];
if (!player) return;

const blockLocation: Vector3 = {
   x: Math.floor(player.location.x),
   y: Math.floor(player.location.y),
   z: Math.floor(player.location.z),
};

// Get a block and check if it has the movable component
const block = player.dimension.getBlock(blockLocation);
if (!block) return;

// Try to get the movable component
const movableComponent = block.getComponent("minecraft:movable") as BlockMovableComponent;

if (movableComponent) {
   // Check the sticky type
   console.log(`Sticky type: ${movableComponent.stickyType}`);
   switch (movableComponent.stickyType) {
       case StickyType.None:
           console.log("This block is not sticky");
           break;
       case StickyType.Same:
           console.log("This block sticks to blocks of the same type");
           break;
   }
} else {
   console.log("Block does not have movable component");
}
}

// Example: Check various block types for their movable properties
function checkCommonBlockMovability() {
const player = world.getAllPlayers()[0];
if (!player) return;

// Common block types to check
const blockTypesToCheck = [
   "minecraft:stone",
   "minecraft:obsidian",
   "minecraft:bedrock",
   "minecraft:slime_block",
   "minecraft:honey_block",
];

blockTypesToCheck.forEach((blockType) => {
   // This is a demonstration of how you would check block movability
   // In practice, you'd place these blocks and then check them
   console.log(`Checking movability for ${blockType}:`);
   // The actual implementation would depend on having these blocks placed in the world
});
}

// Run the demonstration
demonstrateBlockMovableComponent();
checkCommonBlockMovability();
```

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent-1.md).[`typeId`](BlockComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:movable"` = `'minecraft:movable'`
