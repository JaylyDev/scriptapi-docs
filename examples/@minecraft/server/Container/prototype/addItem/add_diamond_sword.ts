import { EntityInventoryComponent, ItemStack, MinecraftItemTypes, world } from "@minecraft/server";
for (const player of world.getAllPlayers()) {
  const inventory = player.getComponent('inventory') as EntityInventoryComponent;
  const item = new ItemStack(MinecraftItemTypes.diamondSword, 10);
  inventory.container.addItem(item);
}