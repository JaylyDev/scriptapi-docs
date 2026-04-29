[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / BlockInventoryComponent

# Class: BlockInventoryComponent

Represents the inventory of a block in the world. Used with
blocks like chests.

## Example

```typescript
import { ItemStack, BlockInventoryComponent, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes, MinecraftItemTypes } from "@minecraft/vanilla-data";

function placeItemsInChest(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // Fetch block
  const block = targetLocation.dimension.getBlock(targetLocation);

  if (!block) {
    log("Could not find block. Maybe it is not loaded?", -1);
    return;
  }

  // Make it a chest
  block.setType(MinecraftBlockTypes.Chest);

  // Get the inventory
  const inventoryComponent = block.getComponent("inventory") as BlockInventoryComponent;

  if (!inventoryComponent || !inventoryComponent.container) {
    log("Could not find inventory component.", -1);
    return;
  }

  const inventoryContainer = inventoryComponent.container;

  // Set slot 0 to a stack of 10 apples
  inventoryContainer.setItem(0, new ItemStack(MinecraftItemTypes.Apple, 10));
}
```

## Source

```ts
export class BlockInventoryComponent extends BlockComponent {
    private constructor();
    readonly container?: Container;
    static readonly componentId = 'minecraft:inventory';
}
```

## Extends

- [`BlockComponent`](BlockComponent.md)

## Constructors

### Constructor

> `private` **new BlockInventoryComponent**(): `BlockInventoryComponent`

#### Returns

`BlockInventoryComponent`

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

### container?

> `readonly` `optional` **container?**: [`Container`](Container.md)

#### Remarks

The container which holds an [ItemStack](ItemStack.md).

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```js
// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the event that triggers when a player interacts with a block
world.afterEvents.playerInteractWithBlock.subscribe((eventData) => {
// Extract the player and block objects from the event data
const { player, block } = eventData;

// Get the inventory component of the block
let inventoryComponent = block.getComponent("inventory");

// Check if the block has an inventory component
if (inventoryComponent == null) {
   // Send a message to the player if the block does not have an inventory
   player.sendMessage(`The block does not have an inventory component.`);
   return; // Exit the function early
}

// Get the inventory container from the inventory component
const inventoryContainer = inventoryComponent.container;

// Destructure the empty slots count and total size from the inventory container
let { emptySlotsCount, size } = inventoryContainer;

// Send a message to the player with the number of free slots in the inventory
player.sendMessage(`${emptySlotsCount} out of ${size} slots are free.`);
});
```

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

> `readonly` `static` **componentId**: `"minecraft:inventory"` = `'minecraft:inventory'`
