[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EntityHealSource

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

> `readonly` **cause**: [`EntityHealCause`](../enumerations/EntityHealCause.md)

#### Remarks

Cause enumerator of the source of healing.

#### World Ready

This property can't be read in early-execution mode.
