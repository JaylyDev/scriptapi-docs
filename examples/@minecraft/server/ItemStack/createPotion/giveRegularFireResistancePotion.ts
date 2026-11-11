import { ItemStack, world } from "@minecraft/server";

const item = ItemStack.createPotion({
  effect: 'FireResistance',
  liquid: 'Regular'
})

for (const player of world.getAllPlayers()) {
  player.getComponent("inventory").container.addItem(item);
}
