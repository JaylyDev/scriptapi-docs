[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerWaypoint

# Class: PlayerWaypoint

**`Beta`**

Waypoint that tracks a player's position. Extends [EntityWaypoint](EntityWaypoint.md) with additional player-specific visibility
rules such as hidden state and spectator mode.

## Source

```ts
export class PlayerWaypoint extends EntityWaypoint {
    readonly playerRules: PlayerVisibilityRules;
    constructor(
        player: Player,
        textureSelector: WaypointTextureSelector,
        playerRules: PlayerVisibilityRules,
        color?: RGB,
    );
}
```

## Extends

- [`EntityWaypoint`](EntityWaypoint.md)

## Constructors

### Constructor

> **new PlayerWaypoint**(`player`, `textureSelector`, `playerRules`, `color?`): `PlayerWaypoint`

#### Parameters

##### player

[`Player`](Player-1.md)

##### textureSelector

[`WaypointTextureSelector`](../interfaces/WaypointTextureSelector.md)

##### playerRules

[`PlayerVisibilityRules`](../interfaces/PlayerVisibilityRules.md)

##### color?

[`RGB`](../interfaces/RGB-1.md)

#### Returns

`PlayerWaypoint`

#### Throws

This function can throw errors.

[InvalidWaypointTextureSelectorError](InvalidWaypointTextureSelectorError.md)

#### Overrides

[`EntityWaypoint`](EntityWaypoint.md).[`constructor`](EntityWaypoint.md#constructor)

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

[`EntityWaypoint`](EntityWaypoint.md).[`color`](EntityWaypoint.md#color)

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

#### Inherited from

[`EntityWaypoint`](EntityWaypoint.md).[`entity`](EntityWaypoint.md#entity)

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

#### Inherited from

[`EntityWaypoint`](EntityWaypoint.md).[`entityRules`](EntityWaypoint.md#entityrules)

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

[`EntityWaypoint`](EntityWaypoint.md).[`isEnabled`](EntityWaypoint.md#isenabled)

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the waypoint is currently valid. A waypoint
becomes invalid when its tracked entity is no longer valid.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`EntityWaypoint`](EntityWaypoint.md).[`isValid`](EntityWaypoint.md#isvalid)

***

### playerRules

> `readonly` **playerRules**: [`PlayerVisibilityRules`](../interfaces/PlayerVisibilityRules.md)

#### Remarks

The [PlayerVisibilityRules](../interfaces/PlayerVisibilityRules.md) that control when the
waypoint is shown based on the player's state (e.g., hidden,
spectator mode, spectator viewing another spectator).

#### Throws

This property can throw when used.

[InvalidWaypointError](InvalidWaypointError.md)

[InvalidWaypointTextureSelectorError](InvalidWaypointTextureSelectorError.md)

#### World Ready

This property can't be read in early-execution mode.

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

[`EntityWaypoint`](EntityWaypoint.md).[`textureSelector`](EntityWaypoint.md#textureselector)

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

[`EntityWaypoint`](EntityWaypoint.md).[`getDimensionLocation`](EntityWaypoint.md#getdimensionlocation)

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

[`EntityWaypoint`](EntityWaypoint.md).[`remove`](EntityWaypoint.md#remove)
