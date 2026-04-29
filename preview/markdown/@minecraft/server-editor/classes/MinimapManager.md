[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / MinimapManager

# Class: MinimapManager

Manage minimap instances within the editor, providing
functionality to create, destroy, and retrieve minimap
displays.

## Source

```ts
export class MinimapManager {
    private constructor();
    createMinimap(viewType: MinimapViewType, mapWidth: number, mapHeight: number, dataId?: string): MinimapItem;
    destroyMinimap(minimapId: string): void;
    getAllMinimapIds(): string[];
    getMinimap(minimapId: string): MinimapItem;
    setVanillaBiomeColorMap(colorMap: Record<string, minecraftserver.RGB>): void;
    updateVanillaColorMap(biomeType: minecraftserver.BiomeType, color: minecraftserver.RGB): void;
}
```

## Constructors

### Constructor

> `private` **new MinimapManager**(): `MinimapManager`

#### Returns

`MinimapManager`

## Methods

### createMinimap()

> **createMinimap**(`viewType`, `mapWidth`, `mapHeight`, `dataId?`): [`MinimapItem`](MinimapItem.md)

#### Parameters

##### viewType

[`MinimapViewType`](../enumerations/MinimapViewType.md)

##### mapWidth

`number`

##### mapHeight

`number`

##### dataId?

`string`

#### Returns

[`MinimapItem`](MinimapItem.md)

#### Remarks

Create a new minimap instance with the specified view type
and dimensions.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### destroyMinimap()

> **destroyMinimap**(`minimapId`): `void`

#### Parameters

##### minimapId

`string`

#### Returns

`void`

#### Remarks

Remove an existing minimap instance from the manager using
its unique identifier.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getAllMinimapIds()

> **getAllMinimapIds**(): `string`[]

#### Returns

`string`[]

#### Remarks

Retrieve a list of all active minimap identifiers currently
managed by the system.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getMinimap()

> **getMinimap**(`minimapId`): [`MinimapItem`](MinimapItem.md)

#### Parameters

##### minimapId

`string`

#### Returns

[`MinimapItem`](MinimapItem.md)

#### Remarks

Retrieve a specific minimap instance using its unique
identifier.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setVanillaBiomeColorMap()

> **setVanillaBiomeColorMap**(`colorMap`): `void`

#### Parameters

##### colorMap

`Record`\<`string`, [`RGB`](../../server/interfaces/RGB.md)\>

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### updateVanillaColorMap()

> **updateVanillaColorMap**(`biomeType`, `color`): `void`

#### Parameters

##### biomeType

[`BiomeType`](../../server/classes/BiomeType.md)

##### color

[`RGB`](../../server/interfaces/RGB.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
