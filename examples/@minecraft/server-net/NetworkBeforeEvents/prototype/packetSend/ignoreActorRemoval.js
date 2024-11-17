import * as mcnet from "@minecraft/server-net";

mcnet.beforeEvents.packetSend.subscribe((event) => {
  // Cancel the action of server sending RemoveActorPacket to players.
  event.cancel = true;
  console.log(`Canceled sending packet ${event.packetId} to ${event.recipients.map(p => p.name)}`);
}, {
  // Event only fires when RemoveActorPacket is triggered.
  monitoredPacketIds: [
    mcnet.PacketId.RemoveActorPacket
  ]
})