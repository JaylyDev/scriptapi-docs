[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / BannerPattern

# Class: BannerPattern

**`Beta`**

Describes a single banner pattern, which includes a colour
and a pattern type.

## Source

```ts
export class BannerPattern {
    private constructor();
    readonly color: string;
    readonly pattern: string;
}
```

## Constructors

### Constructor

> `private` **new BannerPattern**(): `BannerPattern`

#### Returns

`BannerPattern`

## Properties

### color

> `readonly` **color**: `string`

#### Remarks

The color to apply to this banner pattern.

#### World Ready

This property can't be read in early-execution mode.

***

### pattern

> `readonly` **pattern**: `string`

#### Remarks

The pattern type (e.g. gradient, chevron, cross, etc.) to
apply to the banner.

#### World Ready

This property can't be read in early-execution mode.
