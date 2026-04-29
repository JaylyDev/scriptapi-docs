[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityHealSource

# Class: EntityHealSource

Provides information about how healing has been applied to
an entity.

## Source

```ts
export class EntityHealSource {
    private constructor();
    readonly cause: EntityHealCause;
}
```

## Constructors

### Constructor

> `private` **new EntityHealSource**(): `EntityHealSource`

#### Returns

`EntityHealSource`

## Properties

### cause

> `readonly` **cause**: [`EntityHealCause`](../enumerations/EntityHealCause-1.md)

#### Remarks

Cause enumerator of the source of healing.

#### World Ready

This property can't be read in early-execution mode.
