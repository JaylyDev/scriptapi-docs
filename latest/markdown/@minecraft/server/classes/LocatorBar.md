[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / LocatorBar

# Class: LocatorBar

**`Beta`**

Manages the collection of waypoints displayed on a player's
locator bar. Allows adding, removing, and querying waypoints
with a maximum capacity limit.

Invalid waypoints in the locator bar will be automatically
removed in the next tick. This includes waypoints tied to
entities that have been removed from the world.

Note: You can control whether vanilla player waypoints are
automatically added to the locator bar using the
`locatorbar` [GameRule](../enumerations/GameRule-1.md). This game rule is currently
named `locatorbar` but will likely be renamed in a future
update to be more descriptive.

Note: You can only modify, remove, or query waypoints that
were added by this pack.

## Example

```typescript
/\*
import { world, LocationWaypoint, WaypointTextureSelector, WaypointTexture } from "@minecraft/server"

function sharedWaypoint() {
  const players = world.getAllPlayers();

  if (players.length < 2) {
    console.warn("Need at least 2 players for this example.");
    return;
  }

  const playerA = players[0];
  const playerB = players[1];

  // Create a single waypoint at a specific location
  const textureSelector: WaypointTextureSelector = {
    textureBoundsList: [
      { lowerBound: 0, texture: WaypointTexture.Circle }
    ]
  };

  const waypoint = new LocationWaypoint(
    { dimension: playerA.dimension, x: 100, y: 64, z: 100 },
    textureSelector,
    { red: 1, green: 0, blue: 0 } // Initially red
  );

  // Add the same waypoint to both players' locator bars
  playerA.locatorBar.addWaypoint(waypoint);
  playerB.locatorBar.addWaypoint(waypoint);

  // Change the color - this affects both players
  waypoint.color = { red: 0, green: 1, blue: 0 }; // Now green for both players
}
*/
```

## Source

```ts
export class LocatorBar {
    private constructor();
    readonly count: number;
    readonly maxCount: number;
    addWaypoint(waypoint: Waypoint): void;
    getAllWaypoints(): Waypoint[];
    hasWaypoint(waypoint: Waypoint): boolean;
    removeAllWaypoints(): void;
    removeWaypoint(waypoint: Waypoint): void;
}
```

## Constructors

### Constructor

> `private` **new LocatorBar**(): `LocatorBar`

#### Returns

`LocatorBar`

## Properties

### count

> `readonly` **count**: `number`

#### Remarks

The current number of waypoints in the locator bar.

#### World Ready

This property can't be read in early-execution mode.

***

### maxCount

> `readonly` **maxCount**: `number`

#### Remarks

The maximum number of waypoints that can be added to the
locator bar.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### addWaypoint()

> **addWaypoint**(`waypoint`): `void`

#### Parameters

##### waypoint

[`Waypoint`](Waypoint.md)

The [Waypoint](Waypoint.md) to add to the locator bar.

#### Returns

`void`

#### Remarks

Adds a waypoint to the locator bar. Throws an error if the
waypoint already exists, the maximum waypoint limit has been
reached, or the waypoint is invalid.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[InvalidWaypointError](InvalidWaypointError.md)

[LocatorBarError](LocatorBarError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getAllWaypoints()

> **getAllWaypoints**(): [`Waypoint`](Waypoint.md)[]

#### Returns

[`Waypoint`](Waypoint.md)[]

#### Remarks

Returns an array of all waypoints currently in the locator
bar.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### hasWaypoint()

> **hasWaypoint**(`waypoint`): `boolean`

#### Parameters

##### waypoint

[`Waypoint`](Waypoint.md)

The [Waypoint](Waypoint.md) to check for.

#### Returns

`boolean`

#### Remarks

Checks whether the specified waypoint exists in the locator
bar.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### removeAllWaypoints()

> **removeAllWaypoints**(): `void`

#### Returns

`void`

#### Remarks

Removes all waypoints from the locator bar, clearing it
completely.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### removeWaypoint()

> **removeWaypoint**(`waypoint`): `void`

#### Parameters

##### waypoint

[`Waypoint`](Waypoint.md)

The [Waypoint](Waypoint.md) to remove from the locator bar.

#### Returns

`void`

#### Remarks

Removes a specific waypoint from the locator bar. Returns an
error if the waypoint does not exist in the locator bar.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[LocatorBarError](LocatorBarError.md)

#### World Ready

This function can't be called in early-execution mode.
