[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / ObservableOptions

# Interface: ObservableOptions

**`Beta`**

An interface passed into `Observable.create`.

## Source

```ts
export interface ObservableOptions {
    clientWritable?: boolean;
}
```

## Properties

### clientWritable?

> `optional` **clientWritable?**: `boolean`

#### Remarks

If set to true, the client can update this value. This
should be used for things like dropdown values, toggles,
textfields, etc. If unset or false, the client cannot write
to this observable.
