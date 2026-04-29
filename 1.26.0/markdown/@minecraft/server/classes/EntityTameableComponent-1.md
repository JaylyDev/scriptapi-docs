[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityTameableComponent

# Class: EntityTameableComponent

Defines the rules for an entity to be tamed by the player.

## Example

```js
import { world } from "@minecraft/server";

const wolf = world.getDimension("overworld").spawnEntity("minecraft:wolf", { x: 0, y: 0, z: 0 });
const tameable = wolf.getComponent("tameable");
tameable.probability;
tameable.tame(world.getAllPlayers()[0]);
```

## Extends

- [`EntityComponent`](EntityComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityTameableComponent**(): `EntityTameableComponent`

#### Returns

`EntityTameableComponent`

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

### getTameItems

> `readonly` **getTameItems**: [`ItemStack`](ItemStack-1.md)[]

#### Remarks

Returns a set of items that can be used to tame this entity.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### isTamed

> `readonly` **isTamed**: `boolean`

#### Remarks

Returns true if the entity is tamed by player.

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

### probability

> `readonly` **probability**: `number`

#### Remarks

The chance of taming the entity with each item use between
0.0 and 1.0, where 1.0 is 100%

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### tamedToPlayer?

> `readonly` `optional` **tamedToPlayer?**: [`Player`](Player-1.md)

#### Remarks

Returns the player that has tamed the entity, or 'undefined'
if entity is not tamed.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### tamedToPlayerId?

> `readonly` `optional` **tamedToPlayerId?**: `string`

#### Remarks

Returns the id of player that has tamed the entity, or
'undefined' if entity is not tamed.

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

> `readonly` `static` **componentId**: `"minecraft:tameable"` = `'minecraft:tameable'`

## Methods

### tame()

> **tame**(`player`): `boolean`

#### Parameters

##### player

[`Player`](Player-1.md)

The player that this entity should be tamed by.

#### Returns

`boolean`

Returns true if the entity was tamed.

#### Remarks

Set this entity as tamed by the given player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
