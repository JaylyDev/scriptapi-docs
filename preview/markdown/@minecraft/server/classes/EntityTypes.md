[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityTypes

# Class: EntityTypes

Used for accessing all entity types currently available for
use within the world.

## Source

```ts
export class EntityTypes {
    private constructor();
    static get(identifier: string): EntityType | undefined;
    static getAll(): EntityType[];
}
```

## Constructors

### Constructor

> `private` **new EntityTypes**(): `EntityTypes`

#### Returns

`EntityTypes`

## Methods

### get()

> `static` **get**(`identifier`): [`EntityType`](EntityType.md) \| `undefined`

#### Parameters

##### identifier

`string`

#### Returns

[`EntityType`](EntityType.md) \| `undefined`

#### Remarks

Retrieves an entity type using a string-based identifier.

#### World Ready

This function can't be called in early-execution mode.

***

### getAll()

> `static` **getAll**(): [`EntityType`](EntityType.md)[]

#### Returns

[`EntityType`](EntityType.md)[]

#### Remarks

Retrieves a set of all entity types within this world.

#### World Ready

This function can't be called in early-execution mode.
