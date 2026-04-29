[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IDisposable

# Interface: IDisposable

Simple abstraction for disposable objects.

## Source

```ts
export interface IDisposable {
    teardown(): void;
}
```

## Methods

### teardown()

> **teardown**(): `void`

#### Returns

`void`

#### Remarks

Initiates the teardown and cleanup of this disposable item.
