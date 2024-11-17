import { system, world } from "@minecraft/server";

system.runInterval(() => {
  for (const player of world.getPlayers()) {
    const cursorInventory = player.getComponent("minecraft:cursor_inventory");
    const item = cursorInventory.item;
    if (!item) continue;

    player.sendMessage("You selected " + item.typeId);
  }
}, 20);