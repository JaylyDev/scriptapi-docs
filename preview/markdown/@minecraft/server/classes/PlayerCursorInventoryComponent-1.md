[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerCursorInventoryComponent

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

## Source

```ts
export class PlayerCursorInventoryComponent extends EntityComponent {
    private constructor();
    readonly item?: ItemStack;
    static readonly componentId = 'minecraft:cursor_inventory';
    clear(): void;
}
```

## Extends

- [`EntityComponent`](EntityComponent-1.md)

## Constructors

### Constructor

> `private` **new PlayerCursorInventoryComponent**(): `PlayerCursorInventoryComponent`

#### Returns

`PlayerCursorInventoryComponent`

#### Overrides

[`EntityComponent`](EntityComponent-1.md).[`constructor`](EntityComponent-1.md#constructor)

## Properties

### entity

> `readonly` **entity**: [`Entity`](Entity-1.md)

#### Remarks

The entity that owns this component. The entity will be
undefined if it has been removed.

#### Throws

This property can throw when used.

[InvalidEntityError](InvalidEntityError-1.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent-1.md).[`entity`](EntityComponent-1.md#entity)

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

[`EntityComponent`](EntityComponent-1.md).[`isValid`](EntityComponent-1.md#isvalid)

***

### item?

> `readonly` `optional` **item?**: [`ItemStack`](ItemStack-1.md)

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

[`EntityComponent`](EntityComponent-1.md).[`typeId`](EntityComponent-1.md#typeid)

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
