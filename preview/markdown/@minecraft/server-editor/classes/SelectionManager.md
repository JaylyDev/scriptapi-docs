[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / SelectionManager

# Class: SelectionManager

The SelectionManager (accessible from the [ExtensionContext](ExtensionContext.md)) is responsible for the management of all
@minecraft/server-editor.Selection objects, and
provides the user the ability to create new @minecraft/server-editor.Selection objects for use within
an extension.

## Source

```ts
export class SelectionManager {
    private constructor();
    readonly entity: SelectionContainerEntity;
    readonly volume: SelectionContainerVolume;
    deselectBlocks(blockIdentifier: string): Promise<number>;
    generateManifest(): Promise<SelectionManifestData>;
    getCurrentManifest(): SelectionManifestData | undefined;
    replaceBlocks(fromBlockIdentifier: string, toBlockIdentifier: string): Promise<number>;
}
```

## Constructors

### Constructor

> `private` **new SelectionManager**(): `SelectionManager`

#### Returns

`SelectionManager`

## Properties

### entity

> `readonly` **entity**: [`SelectionContainerEntity`](SelectionContainerEntity.md)

***

### volume

> `readonly` **volume**: [`SelectionContainerVolume`](SelectionContainerVolume.md)

## Methods

### deselectBlocks()

> **deselectBlocks**(`blockIdentifier`): `Promise`\<`number`\>

#### Parameters

##### blockIdentifier

`string`

#### Returns

`Promise`\<`number`\>

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### generateManifest()

> **generateManifest**(): `Promise`\<[`SelectionManifestData`](../interfaces/SelectionManifestData.md)\>

#### Returns

`Promise`\<[`SelectionManifestData`](../interfaces/SelectionManifestData.md)\>

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getCurrentManifest()

> **getCurrentManifest**(): [`SelectionManifestData`](../interfaces/SelectionManifestData.md) \| `undefined`

#### Returns

[`SelectionManifestData`](../interfaces/SelectionManifestData.md) \| `undefined`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### replaceBlocks()

> **replaceBlocks**(`fromBlockIdentifier`, `toBlockIdentifier`): `Promise`\<`number`\>

#### Parameters

##### fromBlockIdentifier

`string`

##### toBlockIdentifier

`string`

#### Returns

`Promise`\<`number`\>

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.
