[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-net](../README.md) / PacketReceivedBeforeEvent

# Class: PacketReceivedBeforeEvent

Sent as the server receives a network packet from a client.
If cancelled, the server will not parse the network packet
and will silently ignore it.

## Source

```ts
export class PacketReceivedBeforeEvent {
    private constructor();
    cancel: boolean;
    readonly packetId: PacketId;
    readonly packetSize: number;
    readonly sender?: minecraftserver.Player;
}
```

## Constructors

### Constructor

> `private` **new PacketReceivedBeforeEvent**(): `PacketReceivedBeforeEvent`

#### Returns

`PacketReceivedBeforeEvent`

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

### packetSize

> `readonly` **packetSize**: `number`

#### Remarks

The size of the network packet in bytes.

#### World Ready

This property can't be read in early-execution mode.

***

### sender?

> `readonly` `optional` **sender?**: [`Player`](../../server/classes/Player.md)

#### Remarks

Which client sent the network packet to the game server.

#### World Ready

This property can't be read in early-execution mode.
