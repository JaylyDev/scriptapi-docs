[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / CustomTexture

# Interface: CustomTexture

**`Beta`**

## Source

```ts
export interface CustomTexture {
    iconHeight: number;
    iconWidth: number;
    path: string;
}
```

## Properties

### iconHeight

> **iconHeight**: `number`

#### Remarks

The height of the icon, in relative units. Value must be
between 0.0 and 1.0, inclusive.

Bounds: [0, 1]

***

### iconWidth

> **iconWidth**: `number`

#### Remarks

The width of the icon, in relative units. Value must be
between 0.0 and 1.0, inclusive.

Bounds: [0, 1]

***

### path

> **path**: `string`

#### Remarks

The resource path to the custom texture. This should be a
valid string path to a texture asset.
