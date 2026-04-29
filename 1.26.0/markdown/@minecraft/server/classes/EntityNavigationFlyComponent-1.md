[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityNavigationFlyComponent

# Class: EntityNavigationFlyComponent

Allows this entity to generate paths in the air (for
example, like Minecraft parrots do.)

## Example

```js
import { world } from "@minecraft/server";

for (const entity of world.getDimension("overworld").getEntities()) {
   const navigationFly = entity.getComponent("minecraft:navigation.fly");
   if (!navigationFly) continue;

   navigationFly.avoidDamageBlocks;
   navigationFly.avoidPortals;
   navigationFly.avoidSun;
   navigationFly.avoidWater;
   navigationFly.canBreach;
   navigationFly.canBreakDoors;
   navigationFly.canFloat;
   navigationFly.canJump;
   navigationFly.canOpenDoors;
   navigationFly.canOpenIronDoors;
   navigationFly.canPassDoors;
   navigationFly.canPathFromAir;
   navigationFly.canPathOverLava;
   navigationFly.canPathOverWater;
   navigationFly.canSink;
   navigationFly.canSwim;
   navigationFly.canWalk;
   navigationFly.canWalkInLava;
   navigationFly.isAmphibious;
   navigationFly.isValid;
}
```

## Extends

- [`EntityNavigationComponent`](EntityNavigationComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityNavigationFlyComponent**(): `EntityNavigationFlyComponent`

#### Returns

`EntityNavigationFlyComponent`

#### Overrides

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`constructor`](EntityNavigationComponent-1.md#constructor)

## Properties

### avoidDamageBlocks

> `readonly` **avoidDamageBlocks**: `boolean`

#### Remarks

Tells the pathfinder to avoid blocks that cause damage when
finding a path.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`avoidDamageBlocks`](EntityNavigationComponent-1.md#avoiddamageblocks)

***

### avoidPortals

> `readonly` **avoidPortals**: `boolean`

#### Remarks

Tells the pathfinder to avoid portals (like nether portals)
when finding a path.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`avoidPortals`](EntityNavigationComponent-1.md#avoidportals)

***

### avoidSun

> `readonly` **avoidSun**: `boolean`

#### Remarks

Whether or not the pathfinder should avoid tiles that are
exposed to the sun when creating paths.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`avoidSun`](EntityNavigationComponent-1.md#avoidsun)

***

### avoidWater

> `readonly` **avoidWater**: `boolean`

#### Remarks

Tells the pathfinder to avoid water when creating a path.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`avoidWater`](EntityNavigationComponent-1.md#avoidwater)

***

### canBreach

> `readonly` **canBreach**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can jump out of water
(like a dolphin).

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canBreach`](EntityNavigationComponent-1.md#canbreach)

***

### canBreakDoors

> `readonly` **canBreakDoors**: `boolean`

#### Remarks

Tells the pathfinder that it can path through a closed door
and break it.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canBreakDoors`](EntityNavigationComponent-1.md#canbreakdoors)

***

### canFloat

> `readonly` **canFloat**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can float.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canFloat`](EntityNavigationComponent-1.md#canfloat)

***

### canJump

> `readonly` **canJump**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can jump up blocks.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canJump`](EntityNavigationComponent-1.md#canjump)

***

### canOpenDoors

> `readonly` **canOpenDoors**: `boolean`

#### Remarks

Tells the pathfinder that it can path through a closed door
assuming the AI will open the door.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canOpenDoors`](EntityNavigationComponent-1.md#canopendoors)

***

### canOpenIronDoors

> `readonly` **canOpenIronDoors**: `boolean`

#### Remarks

Tells the pathfinder that it can path through a closed iron
door assuming the AI will open the door.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canOpenIronDoors`](EntityNavigationComponent-1.md#canopenirondoors)

***

### canPassDoors

> `readonly` **canPassDoors**: `boolean`

#### Remarks

Whether a path can be created through a door.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canPassDoors`](EntityNavigationComponent-1.md#canpassdoors)

***

### canPathFromAir

> `readonly` **canPathFromAir**: `boolean`

#### Remarks

Tells the pathfinder that it can start pathing when in the
air.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canPathFromAir`](EntityNavigationComponent-1.md#canpathfromair)

***

### canPathOverLava

> `readonly` **canPathOverLava**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can travel on the
surface of the lava.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canPathOverLava`](EntityNavigationComponent-1.md#canpathoverlava)

***

### canPathOverWater

> `readonly` **canPathOverWater**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can travel on the
surface of the water.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canPathOverWater`](EntityNavigationComponent-1.md#canpathoverwater)

***

### canSink

> `readonly` **canSink**: `boolean`

#### Remarks

Tells the pathfinder whether or not it will be pulled down
by gravity while in water.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canSink`](EntityNavigationComponent-1.md#cansink)

***

### canSwim

> `readonly` **canSwim**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can path anywhere
through water and plays swimming animation along that path.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canSwim`](EntityNavigationComponent-1.md#canswim)

***

### canWalk

> `readonly` **canWalk**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can walk on the
ground outside water.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canWalk`](EntityNavigationComponent-1.md#canwalk)

***

### canWalkInLava

> `readonly` **canWalkInLava**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can travel in lava
like walking on ground.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`canWalkInLava`](EntityNavigationComponent-1.md#canwalkinlava)

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

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`entity`](EntityNavigationComponent-1.md#entity)

***

### isAmphibious

> `readonly` **isAmphibious**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can walk on the
ground or go underwater.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`isAmphibious`](EntityNavigationComponent-1.md#isamphibious)

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

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`isValid`](EntityNavigationComponent-1.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent-1.md).[`typeId`](EntityNavigationComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:navigation.fly"` = `'minecraft:navigation.fly'`
