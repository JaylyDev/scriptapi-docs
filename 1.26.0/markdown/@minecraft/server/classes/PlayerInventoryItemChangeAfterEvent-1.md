[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerInventoryItemChangeAfterEvent

# Class: PlayerInventoryItemChangeAfterEvent

Contains information regarding an event after a player's
inventory item changes.

## Example

```ts
import {
   world,
   PlayerInventoryItemChangeAfterEvent,
   InventoryItemEventOptions,
   PlayerInventoryType,
} from "@minecraft/server";

// Example of handling player inventory item change events
function setupInventoryChangeListener() {
   // Basic event subscription - monitor all inventory changes
   world.afterEvents.playerInventoryItemChange.subscribe((event: PlayerInventoryItemChangeAfterEvent) => {
       console.log(`${event.player.name} inventory changed:`);
       console.log(`Slot: ${event.slot} in ${event.inventoryType}`);

       if (event.beforeItemStack) {
           console.log(`Previous item: ${event.beforeItemStack.typeId} (${event.beforeItemStack.amount})`);
       } else {
           console.log("Previous: empty slot");
       }

       if (event.itemStack) {
           console.log(`New item: ${event.itemStack.typeId} (${event.itemStack.amount})`);
       } else {
           console.log("New: empty slot");
       }
   });

   // Subscription with filtering options - monitor specific inventory types and items
   const inventoryOptions: InventoryItemEventOptions = {
       inventoryType: PlayerInventoryType.Hotbar,
       includeItems: ["minecraft:diamond_sword", "minecraft:bow", "minecraft:shield"],
       excludeItems: ["minecraft:dirt", "minecraft:cobblestone"],
       includeTags: ["minecraft:weapons", "minecraft:tools"],
       excludeTags: ["minecraft:building_blocks"],
       ignoreQuantityChange: false, // Track quantity changes
       allowedSlots: [0, 1, 2, 3, 4], // Only monitor first 5 hotbar slots
   };

   world.afterEvents.playerInventoryItemChange.subscribe((event: PlayerInventoryItemChangeAfterEvent) => {
       console.log(`Important inventory change detected!`);
       console.log(`Player: ${event.player.name}`);
       console.log(`Slot ${event.slot} in ${event.inventoryType}`);

       // Check for specific item types
       if (event.itemStack?.typeId === "minecraft:diamond_sword") {
           console.log("Player equipped a diamond sword!");
       } else if (event.itemStack?.typeId === "minecraft:bow") {
           console.log("Player equipped a bow!");
       }

       // Check for item removal
       if (event.beforeItemStack && !event.itemStack) {
           console.log(`Player removed ${event.beforeItemStack.typeId} from slot ${event.slot}`);
       }

       // Check for quantity changes
       if (event.beforeItemStack && event.itemStack && event.beforeItemStack.typeId === event.itemStack.typeId) {
           const quantityChange = event.itemStack.amount - event.beforeItemStack.amount;
           if (quantityChange > 0) {
               console.log(`Player gained ${quantityChange} of ${event.itemStack.typeId}`);
           } else if (quantityChange < 0) {
               console.log(`Player lost ${Math.abs(quantityChange)} of ${event.itemStack.typeId}`);
           }
       }
   }, inventoryOptions);

   // Example: Monitor only hotbar changes
   const hotbarOnlyOptions: InventoryItemEventOptions = {
       inventoryType: PlayerInventoryType.Hotbar,
   };

   world.afterEvents.playerInventoryItemChange.subscribe((event: PlayerInventoryItemChangeAfterEvent) => {
       console.log(`Hotbar change: Player ${event.player.name} slot ${event.slot}`);
   }, hotbarOnlyOptions);
}

// Call this function to set up the event listeners
setupInventoryChangeListener();
```

## Constructors

### Constructor

> `private` **new PlayerInventoryItemChangeAfterEvent**(): `PlayerInventoryItemChangeAfterEvent`

#### Returns

`PlayerInventoryItemChangeAfterEvent`

## Properties

### beforeItemStack?

> `readonly` `optional` **beforeItemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The previous item stack.

#### World Ready

This property can't be read in early-execution mode.

***

### inventoryType

> `readonly` **inventoryType**: [`PlayerInventoryType`](../enumerations/PlayerInventoryType-1.md)

#### Remarks

Inventory type.

#### World Ready

This property can't be read in early-execution mode.

***

### itemStack?

> `readonly` `optional` **itemStack?**: [`ItemStack`](ItemStack-1.md)

#### Remarks

The new item stack.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

Source Player for this event.

#### World Ready

This property can't be read in early-execution mode.

***

### slot

> `readonly` **slot**: `number`

#### Remarks

The slot index with the change.

#### World Ready

This property can't be read in early-execution mode.
