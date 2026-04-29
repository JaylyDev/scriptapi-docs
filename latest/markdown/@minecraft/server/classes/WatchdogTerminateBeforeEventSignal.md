[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / WatchdogTerminateBeforeEventSignal

# Class: WatchdogTerminateBeforeEventSignal

**`Beta`**

Manages callbacks that are connected to a callback that will
be called when a script runtime is being terminated due to a
violation of the performance watchdog system.

## Source

```ts
export class WatchdogTerminateBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): (arg0: WatchdogTerminateBeforeEvent) => void;
    unsubscribe(callback: (arg0: WatchdogTerminateBeforeEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new WatchdogTerminateBeforeEventSignal**(): `WatchdogTerminateBeforeEventSignal`

#### Returns

`WatchdogTerminateBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

#### Returns

Closure that is called with restricted-execution privilege.

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called when a script runtime is
being terminated due to a violation of the performance
watchdog system.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

#### Returns

`void`

#### Remarks

Removes a callback from being called when a script runtime
is being terminated due to a violation of the performance
watchdog system.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
