import { world } from "@minecraft/server";

const player = world.getAllPlayers()[0];
const cooldown = player.getItemCooldown("equipment");
// console.log removed for example clarity