import { ItemStack, world } from "@minecraft/server";

const item1 = new ItemStack("minecraft:acacia_trapdoor", 1);
item1.matches("minecraft:acacia_trapdoor", {
  direction: 0,
  open_bit: true,
  upside_down_bit: false,
});