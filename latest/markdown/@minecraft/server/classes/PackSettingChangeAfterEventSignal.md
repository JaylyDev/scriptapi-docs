[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PackSettingChangeAfterEventSignal

# Class: PackSettingChangeAfterEventSignal

**`Beta`**

## Source

```ts
export class PackSettingChangeAfterEventSignal {
    private constructor();
    subscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): (arg0: PackSettingChangeAfterEvent) => void;
    unsubscribe(callback: (arg0: PackSettingChangeAfterEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new PackSettingChangeAfterEventSignal**(): `PackSettingChangeAfterEventSignal`

#### Returns

`PackSettingChangeAfterEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

#### Returns

(`arg0`) => `void`

#### Remarks

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

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
