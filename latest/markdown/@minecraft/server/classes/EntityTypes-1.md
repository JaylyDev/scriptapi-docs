[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityTypes

# Class: EntityTypes

Used for accessing all entity types currently available for
use within the world.

## Source

```ts
export class EntityTypes {
    private constructor();
    static get<T = never>(identifier: EntityIdentifierType<NoInfer<T>>): EntityType | undefined;
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

> `static` **get**\<`T`\>(`identifier`): [`EntityType`](EntityType-1.md) \| `undefined`

#### Type Parameters

##### T

`T` = `never`

#### Parameters

##### identifier

[`EntityIdentifierType`](../type-aliases/EntityIdentifierType.md)\<`NoInfer`\<`T`\>\>

#### Returns

[`EntityType`](EntityType-1.md) \| `undefined`

#### Remarks

Retrieves an entity type using a string-based identifier.

#### World Ready

This function can't be called in early-execution mode.

***

### getAll()

> `static` **getAll**(): [`EntityType`](EntityType-1.md)[]

#### Returns

[`EntityType`](EntityType-1.md)[]

#### Remarks

Retrieves a set of all entity types within this world.

#### World Ready

This function can't be called in early-execution mode.
