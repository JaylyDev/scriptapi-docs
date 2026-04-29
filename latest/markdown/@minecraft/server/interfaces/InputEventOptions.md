[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / InputEventOptions

# Interface: InputEventOptions

An interface that is passed into @minecraft/Server.PlayerButtonInputAfterEventSignal.subscribe
that filters out which events are passed to the provided
callback.

## Source

```ts
export interface InputEventOptions {
    buttons?: InputButton[];
    state?: ButtonState;
}
```

## Properties

### buttons?

> `optional` **buttons?**: [`InputButton`](../enumerations/InputButton.md)[]

#### Remarks

The buttons the callback should be called for. If undefined,
the callback will be called for all buttons.

***

### state?

> `optional` **state?**: [`ButtonState`](../enumerations/ButtonState.md)

#### Remarks

The state the callback should be called for. If undefined,
the callback will be called for all button states.
