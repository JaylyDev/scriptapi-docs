[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / EventSink

# Interface: EventSink\<T\>

An event that can be subscribed to. You can use the token,
returned from the subscribe method, to clean up handlers.

## Type Parameters

### T

`T`

## Methods

### subscribe()

> **subscribe**(`handler`): [`IEventToken`](IEventToken.md)

#### Parameters

##### handler

[`EventHandler`](../type-aliases/EventHandler.md)\<`T`\>

Handler function to subscribe with.

#### Returns

[`IEventToken`](IEventToken.md)

An event handler subscription token that can be used to
unsubscribe and clean-up handlers.

#### Remarks

Subscribes an event handler to a particular subscription.
