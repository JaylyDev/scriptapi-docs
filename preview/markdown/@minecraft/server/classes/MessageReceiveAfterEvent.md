[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / MessageReceiveAfterEvent

# Class: MessageReceiveAfterEvent

**`Beta`**

A specific currently-internal event used for passing
messages from client to server.

## Source

```ts
export class MessageReceiveAfterEvent {
    private constructor();
    readonly id: string;
    readonly message: string;
    readonly player: Player;
}
```

## Constructors

### Constructor

> `private` **new MessageReceiveAfterEvent**(): `MessageReceiveAfterEvent`

#### Returns

`MessageReceiveAfterEvent`

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

The message identifier.

#### World Ready

This property can't be read in early-execution mode.

***

### message

> `readonly` **message**: `string`

#### Remarks

The message.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](Player-1.md)

#### Remarks

The player who sent the message.

#### World Ready

This property can't be read in early-execution mode.
