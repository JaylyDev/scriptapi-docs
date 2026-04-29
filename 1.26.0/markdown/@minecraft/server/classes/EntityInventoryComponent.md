[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EntityInventoryComponent

# Class: EntityInventoryComponent

Defines this entity's inventory properties.

## Example

```ts
import { Container, ItemStack, Player, world } from "@minecraft/server";

// Custom function to add an item to the inventory
function addItemToInventory(itemStack: ItemStack, container: Container) {
   return container.addItem(itemStack);
}

// Custom function to move an item within the inventory
function moveItemWithinInventory(fromSlot: number, toSlot: number, container: Container) {
   container.moveItem(fromSlot, toSlot, container);
}

// Custom function to transfer an item from inventory to another container
function transferItemToContainer(fromSlot: number, fromContainer: Container, toContainer: Container) {
   return fromContainer.transferItem(fromSlot, toContainer);
}

function moveItemBetweenPlayers(fromPlayer: Player, toPlayer: Player) {
   const inventory = fromPlayer.getComponent("inventory");
   const toInventory = toPlayer.getComponent("inventory");
   fromPlayer.sendMessage(`additionalSlotsPerStrength: ${inventory.additionalSlotsPerStrength}`);
   fromPlayer.sendMessage(`canBeSiphonedFrom: ${inventory.canBeSiphonedFrom}`);
   fromPlayer.sendMessage(`containerType: ${inventory.containerType}`);
   fromPlayer.sendMessage(`inventorySize: ${inventory.inventorySize}`);
   fromPlayer.sendMessage(`private: ${inventory.private}`);
   fromPlayer.sendMessage(`restrictToOwner: ${inventory.restrictToOwner}`);
   fromPlayer.sendMessage(`isValid: ${inventory.isValid}`);
   const container = inventory.container;

   // Example usage of the custom functions
   const newItemStack = new ItemStack("apple", 10); // Assuming "apple" is a valid item
   const addedItem = addItemToInventory(newItemStack, container);
   if (addedItem) {
       console.log("Item added to inventory:", addedItem);
   }

   const sourceSlot = 2;
   const destinationSlot = 5;
   moveItemWithinInventory(sourceSlot, destinationSlot, container);

   const toContainer = toInventory.container; // Assuming 'someOtherContainer' is an instance of another container
   const transferredItem = transferItemToContainer(0, container, toContainer);
   if (transferredItem) {
       console.log("Item transferred to another container:", transferredItem);
   }
}
```

## Extends

- [`EntityComponent`](EntityComponent.md)

## Constructors

### Constructor

> `private` **new EntityInventoryComponent**(): `EntityInventoryComponent`

#### Returns

`EntityInventoryComponent`

#### Overrides

[`EntityComponent`](EntityComponent.md).[`constructor`](EntityComponent.md#constructor)

## Properties

### additionalSlotsPerStrength

> `readonly` **additionalSlotsPerStrength**: `number`

#### Remarks

Number of slots that this entity can gain per extra
strength.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### canBeSiphonedFrom

> `readonly` **canBeSiphonedFrom**: `boolean`

#### Remarks

If true, the contents of this inventory can be removed by a
hopper.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### container

> `readonly` **container**: [`Container`](Container.md)

#### Remarks

Defines the container for this entity. The container will be
undefined if the entity has been removed.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### containerType

> `readonly` **containerType**: `string`

#### Remarks

Type of container this entity has.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### entity

> `readonly` **entity**: [`Entity`](Entity.md)

#### Remarks

The entity that owns this component. The entity will be
undefined if it has been removed.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent.md).[`entity`](EntityComponent.md#entity)

***

### inventorySize

> `readonly` **inventorySize**: `number`

#### Remarks

Number of slots the container has.

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

[`EntityComponent`](EntityComponent.md).[`isValid`](EntityComponent.md#isvalid)

***

### private

> `readonly` **private**: `boolean`

#### Remarks

If true, the entity will not drop it's inventory on death.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### restrictToOwner

> `readonly` **restrictToOwner**: `boolean`

#### Remarks

If true, the entity's inventory can only be accessed by its
owner or itself.

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

[`EntityComponent`](EntityComponent.md).[`typeId`](EntityComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:inventory"` = `'minecraft:inventory'`
