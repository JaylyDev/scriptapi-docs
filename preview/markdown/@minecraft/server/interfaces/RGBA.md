[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / RGBA

# Interface: RGBA

Represents a fully customizable color within Minecraft.

## Source

```ts
export interface RGBA extends RGB {
    alpha: number;
}
```

## Extends

- [`RGB`](RGB.md)

## Properties

### alpha

> **alpha**: `number`

#### Remarks

Determines a color's alpha (opacity) component. Valid values
are between 0 (transparent) and 1.0 (opaque).

***

### blue

> **blue**: `number`

#### Remarks

Determines a color's blue component. Valid values are
between 0 and 1.0.

#### Inherited from

[`RGB`](RGB.md).[`blue`](RGB.md#blue)

***

### green

> **green**: `number`

#### Remarks

Determines a color's green component. Valid values are
between 0 and 1.0.

#### Inherited from

[`RGB`](RGB.md).[`green`](RGB.md#green)

***

### red

> **red**: `number`

#### Remarks

Determines a color's red component. Valid values are between
0 and 1.0.

#### Inherited from

[`RGB`](RGB.md).[`red`](RGB.md#red)
