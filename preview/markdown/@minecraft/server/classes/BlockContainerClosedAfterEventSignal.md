[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockContainerClosedAfterEventSignal

# Class: BlockContainerClosedAfterEventSignal

**`Beta`**

Manages callbacks that are connected to when a block
container is closed.

## Source

```ts
export class BlockContainerClosedAfterEventSignal {
    private constructor();
    subscribe(
        callback: (arg0: BlockContainerClosedAfterEvent) => void,
        options?: BlockContainerAccessEventOptions,
    ): (arg0: BlockContainerClosedAfterEvent) => void;
    unsubscribe(callback: (arg0: BlockContainerClosedAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new BlockContainerClosedAfterEventSignal**(): `BlockContainerClosedAfterEventSignal`

#### Returns

`BlockContainerClosedAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

##### options?

[`BlockContainerAccessEventOptions`](../interfaces/BlockContainerAccessEventOptions.md)

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when a block container
is closed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

`void`

#### Remarks

Removes a callback from being called when a block container
is closed.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
