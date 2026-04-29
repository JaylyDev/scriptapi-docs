[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EffectTypes

# Class: EffectTypes

Represents a type of effect - like poison - that can be
applied to an entity.

## Source

```ts
export class EffectTypes {
    private constructor();
    static get(identifier: string): EffectType | undefined;
    static getAll(): EffectType[];
}
```

## Constructors

### Constructor

> `private` **new EffectTypes**(): `EffectTypes`

#### Returns

`EffectTypes`

## Methods

### get()

> `static` **get**(`identifier`): [`EffectType`](EffectType-1.md) \| `undefined`

#### Parameters

##### identifier

`string`

The identifier for the effect.

#### Returns

[`EffectType`](EffectType-1.md) \| `undefined`

Effect type for the given identifier or undefined if the
effect does not exist.

#### Remarks

Effect type for the given identifier.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getAll()

> `static` **getAll**(): [`EffectType`](EffectType-1.md)[]

#### Returns

[`EffectType`](EffectType-1.md)[]

A list of all effects.

#### Remarks

Gets all effects.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.
