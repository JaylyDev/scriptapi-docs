[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ChatSendAfterEvent

# Class: ChatSendAfterEvent

**`Beta`**

An event that fires as players enter chat messages.

## Source

```ts
export class ChatSendAfterEvent {
    private constructor();
    readonly message: string;
    readonly sender: Player;
    readonly targets?: Player[];
}
```

## Constructors

### Constructor

> `private` **new ChatSendAfterEvent**(): `ChatSendAfterEvent`

#### Returns

`ChatSendAfterEvent`

## Properties

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
