[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / InputEventOptions

# Interface: InputEventOptions

An interface that is passed into [PlayerButtonInputAfterEventSignal.subscribe](../classes/PlayerButtonInputAfterEventSignal-1.md#subscribe) that filters
out which events are passed to the provided callback.

## Source

```ts
export interface InputEventOptions {
    buttons?: InputButton[];
    state?: ButtonState;
}
```

## Properties

### buttons?

> `optional` **buttons?**: [`InputButton`](../enumerations/InputButton-1.md)[]

#### Remarks

The buttons the callback should be called for. If undefined,
the callback will be called for all buttons.

***

### state?

> `optional` **state?**: [`ButtonState`](../enumerations/ButtonState-1.md)

#### Remarks

The state the callback should be called for. If undefined,
the callback will be called for all button states.
