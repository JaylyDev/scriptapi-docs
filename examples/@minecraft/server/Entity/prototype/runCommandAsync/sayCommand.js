import { world } from "@minecraft/server";

world.beforeEvents.explosion.subscribe(event => {
  event.source?.runCommand("say I exploded!");
})