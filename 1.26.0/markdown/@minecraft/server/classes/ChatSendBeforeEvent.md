[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / ChatSendBeforeEvent

# Class: ChatSendBeforeEvent

**`Beta`**

An event that fires as players enter chat messages.

## Constructors

### Constructor

> `private` **new ChatSendBeforeEvent**(): `ChatSendBeforeEvent`

#### Returns

`ChatSendBeforeEvent`

## Properties

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true in a beforeChat event handler, this message
is not broadcast out.

#### World Ready

This property can't be read in early-execution mode.

***

### message

> `readonly` **message**: `string`

#### Remarks

Message that is being broadcast.

#### World Ready

This property can't be read in early-execution mode.

***

### sender

> `readonly` **sender**: [`Player`](Player-1.md)

#### Remarks

Player that sent the chat message.

#### World Ready

This property can't be read in early-execution mode.

***

### targets?

> `readonly` `optional` **targets?**: [`Player`](Player-1.md)[]

#### Remarks

Optional list of players that will receive this message. If
defined, this message is directly targeted to one or more
players (i.e., is not broadcast.)

#### World Ready

This property can't be read in early-execution mode.
