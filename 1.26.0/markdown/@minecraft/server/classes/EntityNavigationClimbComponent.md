[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EntityNavigationClimbComponent

# Class: EntityNavigationClimbComponent

Allows this entity to generate paths that include vertical
walls (for example, like Minecraft spiders do.)

## Example

```js
import { system, world } from "@minecraft/server";

system.run(() => {
   const spider = world.getDimension("overworld").spawnEntity("minecraft:spider", { x: 0, y: 0, z: 0 });
   const navigationClimb = spider.getComponent("minecraft:navigation.climb");

   if (!navigationClimb) {
       world.sendMessage("Spider navigation climb component not found");
       return;
   }

   // Display navigation properties
   world.sendMessage(`Spider Navigation Properties:`);
   world.sendMessage(`- Can climb: ${navigationClimb.canPathFromAir}`);
   world.sendMessage(`- Avoid water: ${navigationClimb.avoidWater}`);
   world.sendMessage(`- Can jump: ${navigationClimb.canJump}`);
   world.sendMessage(`- Can swim: ${navigationClimb.canSwim}`);
});
```

## Extends

- [`EntityNavigationComponent`](EntityNavigationComponent.md)

## Constructors

### Constructor

> `private` **new EntityNavigationClimbComponent**(): `EntityNavigationClimbComponent`

#### Returns

`EntityNavigationClimbComponent`

#### Overrides

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`constructor`](EntityNavigationComponent.md#constructor)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`avoidDamageBlocks`](EntityNavigationComponent.md#avoiddamageblocks)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`avoidPortals`](EntityNavigationComponent.md#avoidportals)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`avoidSun`](EntityNavigationComponent.md#avoidsun)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`avoidWater`](EntityNavigationComponent.md#avoidwater)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canBreach`](EntityNavigationComponent.md#canbreach)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canBreakDoors`](EntityNavigationComponent.md#canbreakdoors)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canFloat`](EntityNavigationComponent.md#canfloat)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canJump`](EntityNavigationComponent.md#canjump)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canOpenDoors`](EntityNavigationComponent.md#canopendoors)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canOpenIronDoors`](EntityNavigationComponent.md#canopenirondoors)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canPassDoors`](EntityNavigationComponent.md#canpassdoors)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canPathFromAir`](EntityNavigationComponent.md#canpathfromair)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canPathOverLava`](EntityNavigationComponent.md#canpathoverlava)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canPathOverWater`](EntityNavigationComponent.md#canpathoverwater)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canSink`](EntityNavigationComponent.md#cansink)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canSwim`](EntityNavigationComponent.md#canswim)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canWalk`](EntityNavigationComponent.md#canwalk)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`canWalkInLava`](EntityNavigationComponent.md#canwalkinlava)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`entity`](EntityNavigationComponent.md#entity)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`isAmphibious`](EntityNavigationComponent.md#isamphibious)

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

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`isValid`](EntityNavigationComponent.md#isvalid)

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityNavigationComponent`](EntityNavigationComponent.md).[`typeId`](EntityNavigationComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:navigation.climb"` = `'minecraft:navigation.climb'`
