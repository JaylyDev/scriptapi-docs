[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityWaypoint

# Class: EntityWaypoint

**`Beta`**

Waypoint that tracks an entity's position. The waypoint
automatically updates as the entity moves and becomes
invalid when the entity is removed.

## Source

```ts
export class EntityWaypoint extends Waypoint {
    readonly entity: Entity;
    readonly entityRules: EntityVisibilityRules;
    constructor(
        entity: Entity,
        textureSelector: WaypointTextureSelector,
        entityRules: EntityVisibilityRules,
        color?: RGB,
    );
}
```

## Extends

- [`Waypoint`](Waypoint.md)

## Extended by

- [`PlayerWaypoint`](PlayerWaypoint.md)

## Constructors

### Constructor

> **new EntityWaypoint**(`entity`, `textureSelector`, `entityRules`, `color?`): `EntityWaypoint`

#### Parameters

##### entity

[`Entity`](Entity-1.md)

##### textureSelector

[`WaypointTextureSelector`](../interfaces/WaypointTextureSelector.md)

##### entityRules

[`EntityVisibilityRules`](../interfaces/EntityVisibilityRules.md)

##### color?

[`RGB`](../interfaces/RGB-1.md)

#### Returns

`EntityWaypoint`

#### Throws

This function can throw errors.

[InvalidWaypointTextureSelectorError](InvalidWaypointTextureSelectorError.md)

#### Overrides

[`Waypoint`](Waypoint.md).[`constructor`](Waypoint.md#constructor)

## Properties

### color?

> `optional` **color?**: [`RGB`](../interfaces/RGB-1.md)

#### Remarks

Optional [RGB](../interfaces/RGB-1.md) color tint applied to the waypoint
icon. If not specified, the waypoint uses its default color.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Waypoint`](Waypoint.md).[`color`](Waypoint.md#color)

***

### entity

> `readonly` **entity**: [`Entity`](Entity-1.md)

#### Remarks

The entity being tracked by this waypoint.

#### Throws

This property can throw when used.

[InvalidWaypointError](InvalidWaypointError.md)

[InvalidWaypointTextureSelectorError](InvalidWaypointTextureSelectorError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### entityRules

> `readonly` **entityRules**: [`EntityVisibilityRules`](../interfaces/EntityVisibilityRules.md)

#### Remarks

The visibility rules that control when the waypoint is shown
based on the entity's state (e.g., sneaking, invisible,
dead).

#### Throws

This property can throw when used.

[InvalidWaypointError](InvalidWaypointError.md)

[InvalidWaypointTextureSelectorError](InvalidWaypointTextureSelectorError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### isEnabled

> **isEnabled**: `boolean`

#### Remarks

Controls whether the waypoint is currently displayed on the
player's screen. When disabled, the waypoint is hidden but
remains valid.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Waypoint`](Waypoint.md).[`isEnabled`](Waypoint.md#isenabled)

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the waypoint is currently valid. A waypoint
becomes invalid when its tracked entity is no longer valid.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Waypoint`](Waypoint.md).[`isValid`](Waypoint.md#isvalid)

***

### textureSelector

> **textureSelector**: [`WaypointTextureSelector`](../interfaces/WaypointTextureSelector.md)

#### Remarks

The [WaypointTextureSelector](../interfaces/WaypointTextureSelector.md) that determines which
icon texture is displayed for the waypoint based on distance
or other criteria.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`Waypoint`](Waypoint.md).[`textureSelector`](Waypoint.md#textureselector)

## Methods

### getDimensionLocation()

> **getDimensionLocation**(): [`DimensionLocation`](../interfaces/DimensionLocation-1.md)

#### Returns

[`DimensionLocation`](../interfaces/DimensionLocation-1.md)

#### Remarks

Gets the current [DimensionLocation](../interfaces/DimensionLocation-1.md) of the waypoint.
For entity waypoints, this returns the entity's current
position. For location waypoints, this returns the stored
location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidWaypointError](InvalidWaypointError.md)

[InvalidWaypointTextureSelectorError](InvalidWaypointTextureSelectorError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Waypoint`](Waypoint.md).[`getDimensionLocation`](Waypoint.md#getdimensionlocation)

***

### remove()

> **remove**(): `void`

#### Returns

`void`

#### Remarks

Removes the waypoint from all locator bars it has been added
to. This affects all players who have this waypoint in their
locator bar.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Inherited from

[`Waypoint`](Waypoint.md).[`remove`](Waypoint.md#remove)
