[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityType

# Class: EntityType

Represents information about a type of entity.

## Source

```ts
export class EntityType {
    private constructor();
    readonly id: string;
    readonly localizationKey: string;
}
```

## Constructors

### Constructor

> `private` **new EntityType**(): `EntityType`

#### Returns

`EntityType`

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

Identifier of this entity type - for example,
'minecraft:skeleton'.

#### World Ready

This property can't be read in early-execution mode.

***

### localizationKey

> `readonly` **localizationKey**: `string`

#### Remarks

Key for the localization of this EntityType's name used in
.lang files.

#### World Ready

This property can't be read in early-execution mode.
