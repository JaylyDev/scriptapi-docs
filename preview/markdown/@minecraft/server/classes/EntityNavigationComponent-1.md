[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityNavigationComponent

# Class: EntityNavigationComponent

Allows this entity to generate paths that include vertical
walls (for example, like Minecraft spiders do.)

## Source

```ts
export class EntityNavigationComponent extends EntityComponent {
    private constructor();
    readonly avoidDamageBlocks: boolean;
    readonly avoidPortals: boolean;
    readonly avoidSun: boolean;
    readonly avoidWater: boolean;
    readonly canBreach: boolean;
    readonly canBreakDoors: boolean;
    readonly canFloat: boolean;
    readonly canJump: boolean;
    readonly canOpenDoors: boolean;
    readonly canOpenIronDoors: boolean;
    readonly canPassDoors: boolean;
    readonly canPathFromAir: boolean;
    readonly canPathOverLava: boolean;
    readonly canPathOverWater: boolean;
    readonly canSink: boolean;
    readonly canSwim: boolean;
    readonly canWalk: boolean;
    readonly canWalkInLava: boolean;
    readonly isAmphibious: boolean;
}
```

## Extends

- [`EntityComponent`](EntityComponent-1.md)

## Extended by

- [`EntityNavigationClimbComponent`](EntityNavigationClimbComponent-1.md)
- [`EntityNavigationFloatComponent`](EntityNavigationFloatComponent-1.md)
- [`EntityNavigationFlyComponent`](EntityNavigationFlyComponent-1.md)
- [`EntityNavigationGenericComponent`](EntityNavigationGenericComponent-1.md)
- [`EntityNavigationHoverComponent`](EntityNavigationHoverComponent-1.md)
- [`EntityNavigationWalkComponent`](EntityNavigationWalkComponent-1.md)

## Constructors

### Constructor

> `private` **new EntityNavigationComponent**(): `EntityNavigationComponent`

#### Returns

`EntityNavigationComponent`

#### Overrides

[`EntityComponent`](EntityComponent-1.md).[`constructor`](EntityComponent-1.md#constructor)

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

***

### avoidWater

> `readonly` **avoidWater**: `boolean`

#### Remarks

Tells the pathfinder to avoid water when creating a path.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

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

***

### canFloat

> `readonly` **canFloat**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can float.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### canJump

> `readonly` **canJump**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can jump up blocks.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

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

***

### canPassDoors

> `readonly` **canPassDoors**: `boolean`

#### Remarks

Whether a path can be created through a door.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

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

### isAmphibious

> `readonly` **isAmphibious**: `boolean`

#### Remarks

Tells the pathfinder whether or not it can walk on the
ground or go underwater.

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

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityComponent`](EntityComponent-1.md).[`typeId`](EntityComponent-1.md#typeid)
