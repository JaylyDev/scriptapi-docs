[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-net](../README.md) / PacketSendBeforeEventSignal

# Class: PacketSendBeforeEventSignal

## Constructors

### Constructor

> `private` **new PacketSendBeforeEventSignal**(): `PacketSendBeforeEventSignal`

#### Returns

`PacketSendBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`, `options?`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

##### options?

[`PacketEventOptions`](../interfaces/PacketEventOptions.md)

#### Returns

Closure that is called with restricted-execution privilege.

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

This closure is called with restricted-execution privilege.

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
