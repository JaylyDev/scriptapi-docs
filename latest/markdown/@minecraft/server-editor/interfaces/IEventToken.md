[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IEventToken

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
