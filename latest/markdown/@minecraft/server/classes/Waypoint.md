[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / Waypoint

# Class: Waypoint

**`Beta`**

Base class for waypoints displayed on the player's locator
bar. Waypoints can track locations or entities and are
rendered with customizable textures and colors.

Waypoints act as shared handles that can be added to
multiple players' locator bars. When you modify a waypoint's
properties (such as color, texture, or enabled state), the
changes are reflected for all players who have that waypoint
in their locator bar. This allows you to efficiently manage
waypoints across multiple players without creating separate
instances for each player.

## Source

```ts
export class Waypoint {
    private constructor();
    color?: RGB;
    isEnabled: boolean;
    readonly isValid: boolean;
    textureSelector: WaypointTextureSelector;
    getDimensionLocation(): DimensionLocation;
    remove(): void;
}
```

## Extended by

- [`EntityWaypoint`](EntityWaypoint.md)
- [`LocationWaypoint`](LocationWaypoint.md)

## Constructors

### Constructor

> `private` **new Waypoint**(): `Waypoint`

#### Returns

`Waypoint`

## Properties

### color?

> `optional` **color?**: [`RGB`](../interfaces/RGB-1.md)

#### Remarks

Optional [RGB](../interfaces/RGB-1.md) color tint applied to the waypoint
icon. If not specified, the waypoint uses its default color.

This property can't be edited in restricted-execution mode.

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

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the waypoint is currently valid. A waypoint
becomes invalid when its tracked entity is no longer valid.

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
