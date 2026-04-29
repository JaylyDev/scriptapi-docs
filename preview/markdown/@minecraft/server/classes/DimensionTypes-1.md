[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / DimensionTypes

# Class: DimensionTypes

Used for accessing all available dimension types. Currently
only works with Vanilla dimensions.

## Source

```ts
export class DimensionTypes {
    private constructor();
    static get(dimensionTypeId: string): DimensionType | undefined;
    static getAll(): DimensionType[];
}
```

## Constructors

### Constructor

> `private` **new DimensionTypes**(): `DimensionTypes`

#### Returns

`DimensionTypes`

## Methods

### get()

> `static` **get**(`dimensionTypeId`): [`DimensionType`](DimensionType-1.md) \| `undefined`

#### Parameters

##### dimensionTypeId

`string`

#### Returns

[`DimensionType`](DimensionType-1.md) \| `undefined`

#### Remarks

Retrieves a dimension type using a string-based identifier.
Currently only works with Vanilla dimensions.

This function can be called in early-execution mode.

***

### getAll()

> `static` **getAll**(): [`DimensionType`](DimensionType-1.md)[]

#### Returns

[`DimensionType`](DimensionType-1.md)[]

#### Remarks

Retrieves an array of all dimension types. Currently only
works with Vanilla dimensions.

This function can be called in early-execution mode.

#### Example

```ts
import { DimensionTypes, world } from "@minecraft/server";

const dimensions = DimensionTypes.getAll();
for (const dimensionType of dimensions) {
world.sendMessage(dimensionType.typeId);
}

// minecraft:overworld
// minecraft:nether
// minecraft:the_end
```
