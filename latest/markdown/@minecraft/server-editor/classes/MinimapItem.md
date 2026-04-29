[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / MinimapItem

# Class: MinimapItem

A MinimapItem represents an individual minimap instance that
manages map data, controls display state, and provides
configuration for markers and visual properties.

## Source

```ts
export class MinimapItem {
    private constructor();
    readonly id: string;
    readonly isActive: boolean;
    addMarker(markerType: MinimapMarkerType): void;
    getPlayerColor(playerId: string): minecraftserver.RGBA;
    removeMarker(markerType: MinimapMarkerType): void;
    setActive(active: boolean): void;
    setSize(mapWidth: number, mapHeight: number): void;
    setViewType(viewType: MinimapViewType): void;
}
```

## Constructors

### Constructor

> `private` **new MinimapItem**(): `MinimapItem`

#### Returns

`MinimapItem`

## Properties

### id

> `readonly` **id**: `string`

***

### isActive

> `readonly` **isActive**: `boolean`

#### Remarks

Indicate whether this minimap instance is currently active
and being displayed to the player.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### addMarker()

> **addMarker**(`markerType`): `void`

#### Parameters

##### markerType

[`Multiplayer`](../enumerations/MinimapMarkerType.md#multiplayer)

#### Returns

`void`

#### Remarks

Add a visual marker of the specified type to the minimap
display.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getPlayerColor()

> **getPlayerColor**(`playerId`): [`RGBA`](../../server/interfaces/RGBA.md)

#### Parameters

##### playerId

`string`

#### Returns

[`RGBA`](../../server/interfaces/RGBA.md)

#### Remarks

Retrieve the color assigned to a specific player on the
minimap.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### removeMarker()

> **removeMarker**(`markerType`): `void`

#### Parameters

##### markerType

[`Multiplayer`](../enumerations/MinimapMarkerType.md#multiplayer)

#### Returns

`void`

#### Remarks

Remove a previously added marker of the specified type from
the minimap.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setActive()

> **setActive**(`active`): `void`

#### Parameters

##### active

`boolean`

#### Returns

`void`

#### Remarks

Control whether the minimap is currently active and visible
to the player.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setSize()

> **setSize**(`mapWidth`, `mapHeight`): `void`

#### Parameters

##### mapWidth

`number`

##### mapHeight

`number`

#### Returns

`void`

#### Remarks

Adjust the width and height dimensions of the minimap
display.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setViewType()

> **setViewType**(`viewType`): `void`

#### Parameters

##### viewType

[`MinimapViewType`](../enumerations/MinimapViewType.md)

#### Returns

`void`

#### Remarks

Change the visual perspective or style of the minimap view.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
