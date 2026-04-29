[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / WeatherChangeAfterEventSignal

# Class: WeatherChangeAfterEventSignal

Manages callbacks that are connected to weather changing.

## Source

```ts
export class WeatherChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: WeatherChangeAfterEvent) => void): (arg0: WeatherChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: WeatherChangeAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new WeatherChangeAfterEventSignal**(): `WeatherChangeAfterEventSignal`

#### Returns

`WeatherChangeAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when weather changes.

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

Removes a callback from being called when weather changes.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
