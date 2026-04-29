[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityBreathableComponent

# Class: EntityBreathableComponent

Defines what blocks this entity can breathe in and gives
them the ability to suffocate.

## Example

```js
import { world } from "@minecraft/server";

const pig = world.getDimension("overworld").getEntities({ type: "minecraft:pig" })[0];
const breathable = pig.getComponent("breathable");
if (breathable) {
   breathable.breathesAir;
   breathable.breathesLava;
   breathable.breathesSolids;
   breathable.breathesWater;
   breathable.generatesBubbles;
   breathable.inhaleTime;
   breathable.suffocateTime;
   breathable.totalSupply;
   breathable.getBreatheBlocks();
   breathable.getNonBreatheBlocks();
   breathable.airSupply = 100; // Assuming 100 as an example value
}
```

## Extends

- [`EntityComponent`](EntityComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityBreathableComponent**(): `EntityBreathableComponent`

#### Returns

`EntityBreathableComponent`

#### Overrides

[`EntityComponent`](EntityComponent-1.md).[`constructor`](EntityComponent-1.md#constructor)

## Properties

### airSupply

> **airSupply**: `number`

**`Beta`**

#### Remarks

The current air supply of the entity.

This property can't be edited in restricted-execution mode.

#### Throws

Will throw an error if the air supply is out of bounds
[suffocationTime, maxAirSupply].

#### World Ready

This property can't be read in early-execution mode.

***

### breathesAir

> `readonly` **breathesAir**: `boolean`

#### Remarks

If true, this entity can breathe in air.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### breathesLava

> `readonly` **breathesLava**: `boolean`

#### Remarks

If true, this entity can breathe in lava.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### breathesSolids

> `readonly` **breathesSolids**: `boolean`

#### Remarks

If true, this entity can breathe in solid blocks.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### breathesWater

> `readonly` **breathesWater**: `boolean`

#### Remarks

If true, this entity can breathe in water.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### canBreathe

> `readonly` **canBreathe**: `boolean`

**`Beta`**

#### Remarks

If true, the entity is able to breathe.

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

### generatesBubbles

> `readonly` **generatesBubbles**: `boolean`

#### Remarks

If true, this entity will have visible bubbles while in
water.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### inhaleTime

> `readonly` **inhaleTime**: `number`

#### Remarks

Time in seconds to recover breath to maximum.

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

### suffocateTime

> `readonly` **suffocateTime**: `number`

#### Remarks

Time in seconds between suffocation damage.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### totalSupply

> `readonly` **totalSupply**: `number`

#### Remarks

Time in seconds the entity can hold its breath.

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

> `readonly` `static` **componentId**: `"minecraft:breathable"` = `'minecraft:breathable'`

## Methods

### getBreatheBlocks()

> **getBreatheBlocks**(): [`BlockPermutation`](BlockPermutation-1.md)[]

#### Returns

[`BlockPermutation`](BlockPermutation-1.md)[]

#### Remarks

List of blocks this entity can breathe in, in addition to
the separate properties for classes of blocks.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getNonBreatheBlocks()

> **getNonBreatheBlocks**(): [`BlockPermutation`](BlockPermutation-1.md)[]

#### Returns

[`BlockPermutation`](BlockPermutation-1.md)[]

#### Remarks

List of blocks this entity can't breathe in.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
