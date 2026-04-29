[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / TickingAreaManager

# Class: TickingAreaManager

This manager is used to add, remove or query temporary
ticking areas to a dimension. These ticking areas are
limited by a fixed amount of ticking chunks per pack
independent of the command limits. Cannot modify or query
ticking areas added by other packs or commands.

## Source

```ts
export class TickingAreaManager {
    private constructor();
    readonly chunkCount: number;
    readonly maxChunkCount: number;
    createTickingArea(identifier: string, options: TickingAreaOptions): Promise<void>;
    getAllTickingAreas(): TickingArea[];
    getTickingArea(identifier: string | TickingArea): TickingArea | undefined;
    hasCapacity(options: TickingAreaOptions): boolean;
    hasTickingArea(identifier: string): boolean;
    removeAllTickingAreas(): void;
    removeTickingArea(identifier: string | TickingArea): void;
}
```

## Constructors

### Constructor

> `private` **new TickingAreaManager**(): `TickingAreaManager`

#### Returns

`TickingAreaManager`

## Properties

### chunkCount

> `readonly` **chunkCount**: `number`

#### Remarks

The number of currently ticking chunks in this manager.

#### World Ready

This property can't be read in early-execution mode.

***

### maxChunkCount

> `readonly` **maxChunkCount**: `number`

#### Remarks

The maximum number of allowed ticking chunks. Overlapping
ticking area chunks do count towards total.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### createTickingArea()

> **createTickingArea**(`identifier`, `options`): `Promise`\<`void`\>

#### Parameters

##### identifier

`string`

##### options

[`TickingAreaOptions`](../interfaces/TickingAreaOptions.md)

#### Returns

`Promise`\<`void`\>

#### Remarks

Creates a ticking area. Promise will return when all the
chunks in the area are loaded and ticking.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[TickingAreaError](TickingAreaError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getAllTickingAreas()

> **getAllTickingAreas**(): [`TickingArea`](../interfaces/TickingArea.md)[]

#### Returns

[`TickingArea`](../interfaces/TickingArea.md)[]

#### Remarks

Gets all ticking areas added by this manager.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getTickingArea()

> **getTickingArea**(`identifier`): [`TickingArea`](../interfaces/TickingArea.md) \| `undefined`

#### Parameters

##### identifier

`string` \| [`TickingArea`](../interfaces/TickingArea.md)

#### Returns

[`TickingArea`](../interfaces/TickingArea.md) \| `undefined`

#### Remarks

Tries to get specific ticking area by identifier.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### hasCapacity()

> **hasCapacity**(`options`): `boolean`

#### Parameters

##### options

[`TickingAreaOptions`](../interfaces/TickingAreaOptions.md)

#### Returns

`boolean`

#### Remarks

Returns true if the manager has enough chunk capacity for
the ticking area and false otherwise. Will also return false
if the length or width exceeds the 255 chunk limit.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### hasTickingArea()

> **hasTickingArea**(`identifier`): `boolean`

#### Parameters

##### identifier

`string`

#### Returns

`boolean`

#### Remarks

Returns true if the identifier is already in the manager and
false otherwise.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### removeAllTickingAreas()

> **removeAllTickingAreas**(): `void`

#### Returns

`void`

#### Remarks

Removes all ticking areas added by this manager.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### removeTickingArea()

> **removeTickingArea**(`identifier`): `void`

#### Parameters

##### identifier

`string` \| [`TickingArea`](../interfaces/TickingArea.md)

#### Returns

`void`

#### Remarks

Removes specific ticking area by unique identifier.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[TickingAreaError](TickingAreaError.md)

#### World Ready

This function can't be called in early-execution mode.
