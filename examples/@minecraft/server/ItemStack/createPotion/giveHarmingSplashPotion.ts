import { ItemStack, world } from "@minecraft/server";

const item = ItemStack.createPotion({
  effect: 'Harming',
  liquid: 'Splash'
})

for (const player of world.getAllPlayers()) {
  player.getComponent("inventory").container.addItem(item);
}
