[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-admin](../README.md) / AsyncPlayerJoinBeforeEventSignal

# Class: AsyncPlayerJoinBeforeEventSignal

## Constructors

### Constructor

> `private` **new AsyncPlayerJoinBeforeEventSignal**(): `AsyncPlayerJoinBeforeEventSignal`

#### Returns

`AsyncPlayerJoinBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `Promise`\<`void`\>

#### Parameters

##### callback

(`arg0`) => `Promise`\<`void`\>

#### Returns

(`arg0`) => `Promise`\<`void`\>

#### Remarks

Add a callback that's ran before a player joins the world.
This callback returns a promise and the player won't join
until that promise is resolved. If the promise is not
resolved within a reasonable time, the player joining will
be rejected. If the player joining leaves/disconnects, then
the event data's isValid will return false.

#### World Ready

This function can't be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `boolean`

#### Parameters

##### callback

(`arg0`) => `Promise`\<`void`\>

#### Returns

`boolean`
