[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / EffectType

# Class: EffectType

Represents a type of effect - like poison - that can be
applied to an entity.

## Source

```ts
export class EffectType {
    private constructor();
    getName(): string;
}
```

## Constructors

### Constructor

> `private` **new EffectType**(): `EffectType`

#### Returns

`EffectType`

## Methods

### getName()

> **getName**(): `string`

#### Returns

`string`

Identifier of the effect type.

#### Remarks

Identifier name of this effect type.

#### World Ready

This function can't be called in early-execution mode.
