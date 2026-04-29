[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / PlayerCursorInventoryComponent

# Class: PlayerCursorInventoryComponent

Represents the players cursor inventory. Used when moving
items between between containers in the inventory UI. Not
used with touch controls.

## Example

```js
import { system, world } from "@minecraft/server";

system.runInterval(() => {
   for (const player of world.getPlayers()) {
       const cursorInventory = player.getComponent("minecraft:cursor_inventory");
       const item = cursorInventory.item;
       if (!item) continue;

       player.sendMessage("You selected " + item.typeId);
   }
}, 20);
```

## Extends

- [`EntityComponent`](EntityComponent.md)

## Constructors

### Constructor

> `private` **new PlayerCursorInventoryComponent**(): `PlayerCursorInventoryComponent`

#### Returns

`PlayerCursorInventoryComponent`

#### Overrides

[`EntityComponent`](EntityComponent.md).[`constructor`](EntityComponent.md#constructor)

## Properties

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

### item?

> `readonly` `optional` **item?**: [`ItemStack`](ItemStack.md)

#### Remarks

The ItemStack currently in the players cursor inventory.

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

> `readonly` `static` **componentId**: `"minecraft:cursor_inventory"` = `'minecraft:cursor_inventory'`

## Methods

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Remarks

Clears the players cursor inventory.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
