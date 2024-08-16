import { BlockPermutation, ItemStack, world } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

// Chest Block at (0, 0, 0)
const block = world.getDimension('overworld').getBlock({ x: 0, y: 0, z: 0 });
block.setPermutation(BlockPermutation.resolve(MinecraftBlockTypes.DarkoakStandingSign));

const sign = block.getComponent("minecraft:sign");
sign.setText("lol");
