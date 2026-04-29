[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-admin](../README.md) / AdminBeforeEvents

# Class: AdminBeforeEvents

## Constructors

### Constructor

> `private` **new AdminBeforeEvents**(): `AdminBeforeEvents`

#### Returns

`AdminBeforeEvents`

## Properties

### asyncPlayerJoin

> `readonly` **asyncPlayerJoin**: [`AsyncPlayerJoinBeforeEventSignal`](AsyncPlayerJoinBeforeEventSignal.md)

#### Remarks

This event is fired before a player joins the world. Unlike
other before events, this event is a before event that you
can delay several ticks by not resolving the promise
returned in the subscribe function. If the promise is
rejected, the client is rejected.

#### World Ready

This property can't be read in early-execution mode.
