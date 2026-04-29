[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-net](../README.md) / PacketSendBeforeEvent

# Class: PacketSendBeforeEvent

Sent as the server sends a network packet to clients.  If
cancelled, the server will not send the network packet to
the receiving clients.

## Source

```ts
export class PacketSendBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly packetId: PacketId;
    readonly recipients: (minecraftserver.Player | undefined)[];
}
```

## Constructors

### Constructor

> `private` **new PacketSendBeforeEvent**(): `PacketSendBeforeEvent`

#### Returns

`PacketSendBeforeEvent`

## Properties

### cancel

> **cancel**: `boolean`

***

### packetId

> `readonly` **packetId**: [`PacketId`](../enumerations/PacketId.md)

#### Remarks

The type of network packet.

#### World Ready

This property can't be read in early-execution mode.

***

### recipients

> `readonly` **recipients**: ([`Player`](../../server/classes/Player.md) \| `undefined`)[]

#### Remarks

Which clients the network packet is being sent to.

#### World Ready

This property can't be read in early-execution mode.
