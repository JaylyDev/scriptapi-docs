[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-net](../README.md) / NetworkBeforeEvents

# Class: NetworkBeforeEvents

## Constructors

### Constructor

> `private` **new NetworkBeforeEvents**(): `NetworkBeforeEvents`

#### Returns

`NetworkBeforeEvents`

## Properties

### packetReceive

> `readonly` **packetReceive**: [`PacketReceiveBeforeEventSignal`](PacketReceiveBeforeEventSignal.md)

#### Remarks

This property can be read in early-execution mode.

#### Example

```js
import * as mcnet from "@minecraft/server-net";

// Subscribe to packetReceive event
mcnet.beforeEvents.packetReceive.subscribe(
(evd) => {
   console.log(`Packet Received: ${evd.packetId} | Size: ${evd.packetSize}`);
},
{
   // Filter some packet ids, these packet IDs
   // in this list will not trigger the event subscriptions
   ignoredPacketIds: [
       mcnet.PacketId.ClientCacheBlobStatusPacket,
       mcnet.PacketId.PlayerAuthInputPacket,
       mcnet.PacketId.RequestChunkRadiusPacket,
       mcnet.PacketId.SubChunkRequestPacket,
   ],
}
);
```

***

### packetSend

> `readonly` **packetSend**: [`PacketSendBeforeEventSignal`](PacketSendBeforeEventSignal.md)

#### Remarks

This property can be read in early-execution mode.

#### Example

```js
import * as mcnet from "@minecraft/server-net";

mcnet.beforeEvents.packetSend.subscribe(
(event) => {
   // Cancel the action of server sending RemoveActorPacket to players.
   event.cancel = true;
   console.log(`Canceled sending packet ${event.packetId} to ${event.recipients.map((p) => p.name)}`);
},
{
   // Event only fires when RemoveActorPacket is triggered.
   monitoredPacketIds: [mcnet.PacketId.RemoveActorPacket],
}
);
```
