[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityAgeableComponent

# Class: EntityAgeableComponent

Adds a timer for the entity to grow up. It can be
accelerated by giving the entity the items it likes as
defined by feedItems.

## Example

```js
import { world } from "@minecraft/server";

const pig = world.getDimension("nether").spawnEntity("minecraft:pig", { x: 0, y: 0, z: 0 });
const ageable = pig.getComponent("ageable");
const growUpEvent = ageable.growUp.eventName;
world.sendMessage(`Pig ageable duration: ${ageable.duration}`);
world.sendMessage(`Pig grow up event: ${growUpEvent}`);
world.sendMessage(`Pig drop items: ${ageable.getDropItems()}`);
world.sendMessage(`Pig feed items: ${ageable.getFeedItems()}`);
```

## Extends

- [`EntityComponent`](EntityComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityAgeableComponent**(): `EntityAgeableComponent`

#### Returns

`EntityAgeableComponent`

#### Overrides

[`EntityComponent`](EntityComponent-1.md).[`constructor`](EntityComponent-1.md#constructor)

## Properties

### duration

> `readonly` **duration**: `number`

#### Remarks

Amount of time before the entity grows up, -1 for always a
baby.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

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

### growUp

> `readonly` **growUp**: [`Trigger`](Trigger-1.md)

#### Remarks

Event that runs when this entity grows up.

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

[`EntityComponent`](EntityComponent-1.md).[`isValid`](EntityComponent-1.md#isvalid)

***

### transformToItem

> `readonly` **transformToItem**: `string`

#### Remarks

The feed item used will transform into this item upon
successful interaction.

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

> `readonly` `static` **componentId**: `"minecraft:ageable"` = `'minecraft:ageable'`

## Methods

### getDropItems()

> **getDropItems**(): `string`[]

#### Returns

`string`[]

#### Remarks

List of items that the entity drops when it grows up.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getFeedItems()

> **getFeedItems**(): [`EntityDefinitionFeedItem`](EntityDefinitionFeedItem-1.md)[]

#### Returns

[`EntityDefinitionFeedItem`](EntityDefinitionFeedItem-1.md)[]

#### Remarks

List of items that can be fed to the entity. Includes 'item'
for the item name and 'growth' to define how much time it
grows up by.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
