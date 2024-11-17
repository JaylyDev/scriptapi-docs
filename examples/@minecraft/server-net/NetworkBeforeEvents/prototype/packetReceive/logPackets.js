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
