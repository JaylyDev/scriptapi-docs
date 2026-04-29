[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / Container

# Class: Container

Represents a container that can hold sets of items. Used
with entities such as Players, Chest Minecarts, Llamas, and
more.

## Examples

```typescript
import { ItemStack, EntityInventoryComponent, BlockInventoryComponent, DimensionLocation } from '@minecraft/server';
import { MinecraftBlockTypes, MinecraftItemTypes, MinecraftEntityTypes } from '@minecraft/vanilla-data';

function containers(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const xLocation = targetLocation; // left chest location
  const xPlusTwoLocation = { x: targetLocation.x + 2, y: targetLocation.y, z: targetLocation.z }; // right chest

  const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
    x: targetLocation.x + 4,
    y: targetLocation.y,
    z: targetLocation.z,
  });

  const xChestBlock = targetLocation.dimension.getBlock(xLocation);
  const xPlusTwoChestBlock = targetLocation.dimension.getBlock(xPlusTwoLocation);

  if (!xChestBlock || !xPlusTwoChestBlock) {
    log('Could not retrieve chest blocks.');
    return;
  }

  xChestBlock.setType(MinecraftBlockTypes.Chest);
  xPlusTwoChestBlock.setType(MinecraftBlockTypes.Chest);

  const xPlusTwoChestInventoryComp = xPlusTwoChestBlock.getComponent('inventory') as BlockInventoryComponent;
  const xChestInventoryComponent = xChestBlock.getComponent('inventory') as BlockInventoryComponent;
  const chestCartInventoryComp = chestCart.getComponent('inventory') as EntityInventoryComponent;

  const xPlusTwoChestContainer = xPlusTwoChestInventoryComp.container;
  const xChestContainer = xChestInventoryComponent.container;
  const chestCartContainer = chestCartInventoryComp.container;

  if (!xPlusTwoChestContainer || !xChestContainer || !chestCartContainer) {
    log('Could not retrieve chest containers.');
    return;
  }

  xPlusTwoChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.Apple, 10));
  if (xPlusTwoChestContainer.getItem(0)?.typeId !== MinecraftItemTypes.Apple) {
    log('Expected apple in x+2 container slot index 0', -1);
  }

  xPlusTwoChestContainer.setItem(1, new ItemStack(MinecraftItemTypes.Emerald, 10));
  if (xPlusTwoChestContainer.getItem(1)?.typeId !== MinecraftItemTypes.Emerald) {
    log('Expected emerald in x+2 container slot index 1', -1);
  }

  if (xPlusTwoChestContainer.size !== 27) {
    log('Unexpected size: ' + xPlusTwoChestContainer.size, -1);
  }

  if (xPlusTwoChestContainer.emptySlotsCount !== 25) {
    log('Unexpected emptySlotsCount: ' + xPlusTwoChestContainer.emptySlotsCount, -1);
  }

  xChestContainer.setItem(0, new ItemStack(MinecraftItemTypes.Cake, 10));

  xPlusTwoChestContainer.transferItem(0, chestCartContainer); // transfer the apple from the xPlusTwo chest to a chest cart
  xPlusTwoChestContainer.swapItems(1, 0, xChestContainer); // swap the cake from x and the emerald from xPlusTwo

  if (chestCartContainer.getItem(0)?.typeId !== MinecraftItemTypes.Apple) {
    log('Expected apple in minecraft chest container slot index 0', -1);
  }

  if (xChestContainer.getItem(0)?.typeId === MinecraftItemTypes.Emerald) {
    log('Expected emerald in x container slot index 0', -1);
  }

  if (xPlusTwoChestContainer.getItem(1)?.typeId === MinecraftItemTypes.Cake) {
    log('Expected cake in x+2 container slot index 1', -1);
  }
}
```

```ts
import { world, Container, ItemStack, Player } from "@minecraft/server";

// Example of using the new Container methods added in v2
function demonstrateNewContainerMethods() {
   const player = world.getAllPlayers()[0];
   if (!player) return;

   const inventory = player.getComponent("minecraft:inventory");
   if (!inventory?.container) return;

   const container = inventory.container;

   console.log(`=== Container Methods Demo for ${player.name} ===`);

   // Check if container is valid
   if (!container.isValid) {
       console.log("Container is not valid");
       return;
   }

   console.log(`Container size: ${container.size}`);
   console.log(`Empty slots: ${container.emptySlotsCount}`);

   // Example 1: contains() - Check if container has specific items
   const diamondStack = new ItemStack("minecraft:diamond", 1);
   const ironStack = new ItemStack("minecraft:iron_ingot", 5);
   const stoneStack = new ItemStack("minecraft:stone", 64);

   console.log(`Contains diamonds: ${container.contains(diamondStack)}`);
   console.log(`Contains iron ingots: ${container.contains(ironStack)}`);
   console.log(`Contains stone: ${container.contains(stoneStack)}`);

   // Example 2: find() - Find the slot index of specific items
   const diamondSlot = container.find(diamondStack);
   const ironSlot = container.find(ironStack);

   console.log(`Diamond found at slot: ${diamondSlot ?? "not found"}`);
   console.log(`Iron found at slot: ${ironSlot ?? "not found"}`);

   // Example 3: findLast() - Find the last occurrence of specific items
   const lastDiamondSlot = container.findLast(diamondStack);
   const lastIronSlot = container.findLast(ironStack);

   console.log(`Last diamond found at slot: ${lastDiamondSlot ?? "not found"}`);
   console.log(`Last iron found at slot: ${lastIronSlot ?? "not found"}`);

   // Example 4: firstEmptySlot() - Find the first empty slot
   const firstEmpty = container.firstEmptySlot();
   console.log(`First empty slot: ${firstEmpty ?? "no empty slots"}`);

   // Example 5: firstItem() - Find the first non-empty slot
   const firstItem = container.firstItem();
   console.log(`First item slot: ${firstItem ?? "no items"}`);

   if (firstItem !== undefined) {
       const item = container.getItem(firstItem);
       if (item) {
           console.log(`First item: ${item.typeId} (amount: ${item.amount})`);
       }
   }
}

// Example: Organize inventory using new container methods
function organizeInventory(player: Player) {
   const inventory = player.getComponent("minecraft:inventory");
   if (!inventory?.container) return;

   const container = inventory.container;
   console.log(`Organizing inventory for ${player.name}...`);

   // Find all empty slots
   const emptySlots: number[] = [];
   for (let i = 0; i < container.size; i++) {
       if (!container.getItem(i)) {
           emptySlots.push(i);
       }
   }

   console.log(`Found ${emptySlots.length} empty slots`);

   // Group similar items together
   const itemGroups = new Map<string, number[]>();

   for (let i = 0; i < container.size; i++) {
       const item = container.getItem(i);
       if (item) {
           if (!itemGroups.has(item.typeId)) {
               itemGroups.set(item.typeId, []);
           }
           itemGroups.get(item.typeId)!.push(i);
       }
   }

   console.log(`Found ${itemGroups.size} different item types`);

   itemGroups.forEach((slots, itemType) => {
       if (slots.length > 1) {
           console.log(`${itemType} found in ${slots.length} slots: ${slots.join(", ")}`);
       }
   });
}

// Example: Auto-collect specific items to inventory
function autoCollectItems(player: Player, targetItems: string[]) {
   const inventory = player.getComponent("minecraft:inventory");
   if (!inventory?.container) return;

   const container = inventory.container;

   targetItems.forEach((itemType) => {
       const searchStack = new ItemStack(itemType, 1);

       // Check if we already have this item
       if (container.contains(searchStack)) {
           const slot = container.find(searchStack);
           if (slot !== undefined) {
               const existingItem = container.getItem(slot);
               console.log(`Already have ${existingItem?.amount} ${itemType} in slot ${slot}`);
           }
       } else {
           console.log(`Need to collect: ${itemType}`);

           // Find first empty slot to place the item when collected
           const emptySlot = container.firstEmptySlot();
           if (emptySlot !== undefined) {
               console.log(`Reserved slot ${emptySlot} for ${itemType}`);
           } else {
               console.log(`No space available for ${itemType}`);
           }
       }
   });
}

// Example: Smart stacking function
function smartStackItems(player: Player) {
   const inventory = player.getComponent("minecraft:inventory");
   if (!inventory?.container) return;

   const container = inventory.container;
   console.log("Performing smart item stacking...");

   // Track stackable items
   const stackableItems = new Map<string, { slots: number[]; maxStack: number }>();

   for (let i = 0; i < container.size; i++) {
       const item = container.getItem(i);
       if (item && item.maxAmount > 1) {
           // Stackable item
           if (!stackableItems.has(item.typeId)) {
               stackableItems.set(item.typeId, { slots: [], maxStack: item.maxAmount });
           }
           stackableItems.get(item.typeId)!.slots.push(i);
       }
   }

   stackableItems.forEach((info, itemType) => {
       if (info.slots.length > 1) {
           console.log(
               `${itemType} can be stacked (found in ${info.slots.length} slots, max stack: ${info.maxStack})`
           );

           // Here you would implement the actual stacking logic
           // by moving items between slots to optimize space
       }
   });
}

// Run the demonstrations
demonstrateNewContainerMethods();

// Additional examples with the first player
const firstPlayer = world.getAllPlayers()[0];
if (firstPlayer) {
   organizeInventory(firstPlayer);
   autoCollectItems(firstPlayer, ["minecraft:diamond", "minecraft:iron_ingot", "minecraft:gold_ingot"]);
   smartStackItems(firstPlayer);
}
```

## Source

```ts
export class Container {
    private constructor();
    readonly containerRules?: ContainerRules;
    readonly emptySlotsCount: number;
    readonly isValid: boolean;
    readonly size: number;
    readonly weight: number;
    addItem(itemStack: ItemStack): ItemStack | undefined;
    clearAll(): void;
    contains(itemStack: ItemStack): boolean;
    find(itemStack: ItemStack): number | undefined;
    findLast(itemStack: ItemStack): number | undefined;
    firstEmptySlot(): number | undefined;
    firstItem(): number | undefined;
    getItem(slot: number): ItemStack | undefined;
    getSlot(slot: number): ContainerSlot;
    moveItem(fromSlot: number, toSlot: number, toContainer: Container): void;
    setItem(slot: number, itemStack?: ItemStack): void;
    swapItems(slot: number, otherSlot: number, otherContainer: Container): void;
    transferItem(fromSlot: number, toContainer: Container): ItemStack | undefined;
}
```

## Constructors

### Constructor

> `private` **new Container**(): `Container`

#### Returns

`Container`

## Properties

### containerRules?

> `readonly` `optional` **containerRules?**: [`ContainerRules`](../interfaces/ContainerRules.md)

#### Remarks

If these rules are defined other container operations will
throw if they cause these rules to be invalidated. For
example, adding a shulker box to a vanilla bundle.

#### World Ready

This property can't be read in early-execution mode.

***

### emptySlotsCount

> `readonly` **emptySlotsCount**: `number`

#### Remarks

Count of the slots in the container that are empty.

#### Throws

Throws if the container is invalid.

#### World Ready

This property can't be read in early-execution mode.

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether a container object (or the entity or block
that this container is associated with) is still available
for use in this context.

#### World Ready

This property can't be read in early-execution mode.

***

### size

> `readonly` **size**: `number`

#### Remarks

The number of slots in this container. For example, a
standard single-block chest has a size of 27. Note, a
player's inventory container contains a total of 36 slots, 9
hotbar slots plus 27 inventory slots.

#### Throws

Throws if the container is invalid.

#### World Ready

This property can't be read in early-execution mode.

***

### weight

> `readonly` **weight**: `number`

#### Remarks

The combined weight of all items in the container.

#### Throws

This property can throw when used.

[InvalidContainerError](InvalidContainerError.md)

#### World Ready

This property can't be read in early-execution mode.

## Methods

### addItem()

> **addItem**(`itemStack`): [`ItemStack`](ItemStack.md) \| `undefined`

#### Parameters

##### itemStack

[`ItemStack`](ItemStack.md)

The stack of items to add.

#### Returns

[`ItemStack`](ItemStack.md) \| `undefined`

#### Remarks

Adds an item to the container. The item is placed in the
first available slot(s) and can be stacked with existing
items of the same type. Note, use [Container.setItem](#setitem)
if you wish to set the item in a particular slot.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[ContainerRulesError](ContainerRulesError.md)

Error

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { EntityInventoryComponent, ItemStack, world } from "@minecraft/server";
for (const player of world.getAllPlayers()) {
const inventory = player.getComponent("inventory") as EntityInventoryComponent;
const item = new ItemStack("minecraft:diamond_sword", 10);
inventory.container.addItem(item);
}
```

***

### clearAll()

> **clearAll**(): `void`

#### Returns

`void`

#### Remarks

Clears all inventory items in the container.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the container is invalid.

#### World Ready

This function can't be called in early-execution mode.

***

### contains()

> **contains**(`itemStack`): `boolean`

#### Parameters

##### itemStack

[`ItemStack`](ItemStack.md)

The item to find.

#### Returns

`boolean`

#### Remarks

Attempts to find an item inside the container

#### Throws

This function can throw errors.

[InvalidContainerError](InvalidContainerError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### find()

> **find**(`itemStack`): `number` \| `undefined`

#### Parameters

##### itemStack

[`ItemStack`](ItemStack.md)

The item to find.

#### Returns

`number` \| `undefined`

#### Remarks

Find the index of the first instance of an item inside the
container

#### Throws

This function can throw errors.

[InvalidContainerError](InvalidContainerError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### findLast()

> **findLast**(`itemStack`): `number` \| `undefined`

#### Parameters

##### itemStack

[`ItemStack`](ItemStack.md)

The item to find.

#### Returns

`number` \| `undefined`

#### Remarks

Find the index of the last instance of an item inside the
container

#### Throws

This function can throw errors.

[InvalidContainerError](InvalidContainerError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### firstEmptySlot()

> **firstEmptySlot**(): `number` \| `undefined`

#### Returns

`number` \| `undefined`

#### Remarks

Finds the index of the first empty slot inside the container

#### Throws

This function can throw errors.

[InvalidContainerError](InvalidContainerError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### firstItem()

> **firstItem**(): `number` \| `undefined`

#### Returns

`number` \| `undefined`

#### Remarks

Finds the index of the first item inside the container

#### Throws

This function can throw errors.

[InvalidContainerError](InvalidContainerError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getItem()

> **getItem**(`slot`): [`ItemStack`](ItemStack.md) \| `undefined`

#### Parameters

##### slot

`number`

Zero-based index of the slot to retrieve items from.
Minimum value: 0

#### Returns

[`ItemStack`](ItemStack.md) \| `undefined`

#### Remarks

Gets an [ItemStack](ItemStack.md) of the item at the specified slot.
If the slot is empty, returns `undefined`. This method does
not change or clear the contents of the specified slot. To
get a reference to a particular slot, see [Container.getSlot](#getslot).

#### Throws

Throws if the container is invalid or if the `slot` index is
out of bounds.

#### Example

```typescript
import { world, EntityInventoryComponent, DimensionLocation } from '@minecraft/server';

function getFirstHotbarItem(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  for (const player of world.getAllPlayers()) {
    const inventory = player.getComponent(EntityInventoryComponent.componentId) as EntityInventoryComponent;
    if (inventory && inventory.container) {
      const firstItem = inventory.container.getItem(0);

      if (firstItem) {
        log('First item in hotbar is: ' + firstItem.typeId);
      }

      return inventory.container.getItem(0);
    }
    return undefined;
  }
}
```

#### World Ready

This function can't be called in early-execution mode.

***

### getSlot()

> **getSlot**(`slot`): [`ContainerSlot`](ContainerSlot.md)

#### Parameters

##### slot

`number`

The index of the slot to return. This index must be within
the bounds of the container.
Minimum value: 0

#### Returns

[`ContainerSlot`](ContainerSlot.md)

#### Remarks

Returns a container slot. This acts as a reference to a slot
at the given index for this container.

#### Throws

Throws if the container is invalid or if the `slot` index is
out of bounds.

#### World Ready

This function can't be called in early-execution mode.

***

### moveItem()

> **moveItem**(`fromSlot`, `toSlot`, `toContainer`): `void`

#### Parameters

##### fromSlot

`number`

Zero-based index of the slot to transfer an item from, on
this container.
Minimum value: 0

##### toSlot

`number`

Zero-based index of the slot to transfer an item to, on
`toContainer`.
Minimum value: 0

##### toContainer

`Container`

Target container to transfer to. Note this can be the same
container as the source.

#### Returns

`void`

#### Remarks

Moves an item from one slot to another, potentially across
containers.

This function can't be called in restricted-execution mode.

#### Throws

Throws if either this container or `toContainer` are invalid
or if the `fromSlot` or `toSlot` indices out of bounds.

[ContainerRulesError](ContainerRulesError.md)

Error

#### Example

```typescript
import { world, EntityInventoryComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function moveBetweenContainers(targetLocation: DimensionLocation) {
  const players = world.getAllPlayers();

  const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
    x: targetLocation.x + 1,
    y: targetLocation.y,
    z: targetLocation.z,
  });

  if (players.length > 0) {
    const fromPlayer = players[0];

    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
    const toInventory = chestCart.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;

    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
      fromInventory.container.moveItem(0, 0, toInventory.container);
    }
  }
}
```

#### World Ready

This function can't be called in early-execution mode.

***

### setItem()

> **setItem**(`slot`, `itemStack?`): `void`

#### Parameters

##### slot

`number`

Zero-based index of the slot to set an item at.
Minimum value: 0

##### itemStack?

[`ItemStack`](ItemStack.md)

Stack of items to place within the specified slot. Setting
`itemStack` to undefined will clear the slot.

#### Returns

`void`

#### Remarks

Sets an item stack within a particular slot.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the container is invalid or if the `slot` index is
out of bounds.

[ContainerRulesError](ContainerRulesError.md)

Error

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { EntityInventoryComponent, ItemStack, world } from "@minecraft/server";
for (const player of world.getAllPlayers()) {
const inventory = player.getComponent("inventory") as EntityInventoryComponent;
const item = new ItemStack("minecraft:diamond_sword", 10);
inventory.container.setItem(0, item);
}
```

***

### swapItems()

> **swapItems**(`slot`, `otherSlot`, `otherContainer`): `void`

#### Parameters

##### slot

`number`

Zero-based index of the slot to swap from this container.
Minimum value: 0

##### otherSlot

`number`

Zero-based index of the slot to swap with.
Minimum value: 0

##### otherContainer

`Container`

Target container to swap with. Note this can be the same
container as this source.

#### Returns

`void`

#### Remarks

Swaps items between two different slots within containers.

This function can't be called in restricted-execution mode.

#### Throws

Throws if either this container or `otherContainer` are
invalid or if the `slot` or `otherSlot` are out of bounds.

[ContainerRulesError](ContainerRulesError.md)

Error

#### World Ready

This function can't be called in early-execution mode.

***

### transferItem()

> **transferItem**(`fromSlot`, `toContainer`): [`ItemStack`](ItemStack.md) \| `undefined`

#### Parameters

##### fromSlot

`number`

Zero-based index of the slot to transfer an item from, on
this container.
Minimum value: 0

##### toContainer

`Container`

Target container to transfer to. Note this can be the same
container as the source.

#### Returns

[`ItemStack`](ItemStack.md) \| `undefined`

An itemStack with the items that couldn't be transferred.
Returns undefined if all items were transferred.

#### Remarks

Moves an item from one slot to another container, or to the
first available slot in the same container.

This function can't be called in restricted-execution mode.

#### Throws

Throws if either this container or `toContainer` are invalid
or if the `fromSlot` or `toSlot` indices out of bounds.

[ContainerRulesError](ContainerRulesError.md)

Error

#### Example

```typescript
import { world, EntityInventoryComponent, EntityComponentTypes, DimensionLocation } from '@minecraft/server';
import { MinecraftEntityTypes } from '@minecraft/vanilla-data';

function transferBetweenContainers(targetLocation: DimensionLocation) {
  const players = world.getAllPlayers();

  const chestCart = targetLocation.dimension.spawnEntity(MinecraftEntityTypes.ChestMinecart, {
    x: targetLocation.x + 1,
    y: targetLocation.y,
    z: targetLocation.z,
  });

  if (players.length > 0) {
    const fromPlayer = players[0];

    const fromInventory = fromPlayer.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;
    const toInventory = chestCart.getComponent(EntityComponentTypes.Inventory) as EntityInventoryComponent;

    if (fromInventory && toInventory && fromInventory.container && toInventory.container) {
      fromInventory.container.transferItem(0, toInventory.container);
    }
  }
}
```

#### World Ready

This function can't be called in early-execution mode.
