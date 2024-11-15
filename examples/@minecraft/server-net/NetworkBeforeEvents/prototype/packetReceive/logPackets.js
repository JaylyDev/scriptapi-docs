import * as mcnet from "@minecraft/server-net";

mcnet.beforeEvents.packetReceive.subscribe(
  (evd) => {
    console.log(`Packet Received: ${evd.packetId} | Size: ${evd.packetSize}`);
  },
  {
    ignoredPacketIds: [
      mcnet.PacketId.ClientCacheBlobStatusPacket,
      mcnet.PacketId.PlayerAuthInputPacket,
      mcnet.PacketId.RequestChunkRadiusPacket,
      mcnet.PacketId.SubChunkRequestPacket,
    ],
  }
);
