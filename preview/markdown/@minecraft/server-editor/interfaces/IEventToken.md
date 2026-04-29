[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IEventToken

# Interface: IEventToken

Returned from an event subscription. Provides functionality
for cleaning up listeners

## Source

```ts
export declare interface IEventToken {
    unsubscribe(): void;
}
```

## Methods

### unsubscribe()

> **unsubscribe**(): `void`

#### Returns

`void`

#### Remarks

Removes registered listener from an event
