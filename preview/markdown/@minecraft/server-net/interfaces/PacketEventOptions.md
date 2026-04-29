[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-net](../README.md) / PacketEventOptions

# Interface: PacketEventOptions

Options for events triggered by network packets.

## Source

```ts
export interface PacketEventOptions {
    ignoredPacketIds?: PacketId[];
    monitoredPacketIds?: PacketId[];
}
```

## Properties

### ignoredPacketIds?

> `optional` **ignoredPacketIds?**: [`PacketId`](../enumerations/PacketId.md)[]

#### Remarks

If provided, packet IDs in this list will not trigger the
event subscriptions.

***

### monitoredPacketIds?

> `optional` **monitoredPacketIds?**: [`PacketId`](../enumerations/PacketId.md)[]

#### Remarks

If provided only packet IDs in this list will trigger the
event subscriptions.
