[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / WatchdogTerminateBeforeEvent

# Class: WatchdogTerminateBeforeEvent

**`Beta`**

Contains information related to a script watchdog
termination.

## Source

```ts
export class WatchdogTerminateBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly terminateReason: WatchdogTerminateReason;
}
```

## Constructors

### Constructor

> `private` **new WatchdogTerminateBeforeEvent**(): `WatchdogTerminateBeforeEvent`

#### Returns

`WatchdogTerminateBeforeEvent`

## Properties

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true, cancels the termination of the script
runtime. Note that depending on server configuration
settings, cancellation of the termination may not be
allowed.

#### World Ready

This property can't be read in early-execution mode.

***

### terminateReason

> `readonly` **terminateReason**: [`WatchdogTerminateReason`](../enumerations/WatchdogTerminateReason.md)

#### Remarks

Contains the reason why a script runtime is to be
terminated.

#### World Ready

This property can't be read in early-execution mode.
