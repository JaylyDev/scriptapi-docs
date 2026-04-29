[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / RawText

# Interface: RawText

A `RawMessage` with only the `rawtext` property. When a
`RawMessage` is serialized the contents are put into a
rawtext property, so this is useful when reading saved
RawMessages. See `BlockSignComponent.setText` and
`BlockSignComponent.getRawText` for examples.

## Source

```ts
export interface RawText {
    rawtext?: RawMessage[];
}
```

## Properties

### rawtext?

> `optional` **rawtext?**: [`RawMessage`](RawMessage-1.md)[]

#### Remarks

A serialization of the current value of an associated sign.
