[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerAimAssist

# Class: PlayerAimAssist

**`Beta`**

A container for APIs related to player aim-assist.

## Source

```ts
export class PlayerAimAssist {
    private constructor();
    readonly settings?: PlayerAimAssistSettings;
    set(settings?: PlayerAimAssistSettings): void;
}
```

## Constructors

### Constructor

> `private` **new PlayerAimAssist**(): `PlayerAimAssist`

#### Returns

`PlayerAimAssist`

## Properties

### settings?

> `readonly` `optional` **settings?**: [`PlayerAimAssistSettings`](../interfaces/PlayerAimAssistSettings.md)

#### Remarks

The player's currently active aim-assist settings, or
undefined if not active.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### set()

> **set**(`settings?`): `void`

#### Parameters

##### settings?

[`PlayerAimAssistSettings`](../interfaces/PlayerAimAssistSettings.md)

Aim-assist settings to activate for the player, if undefined
aim-assist will be disabled.

#### Returns

`void`

#### Remarks

Sets the player's aim-assist settings.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

Error

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[InvalidEntityError](InvalidEntityError-1.md)

[NamespaceNameError](NamespaceNameError-1.md)

#### World Ready

This function can't be called in early-execution mode.
