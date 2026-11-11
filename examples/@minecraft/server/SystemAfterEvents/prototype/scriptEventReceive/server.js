import { system, world } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe((event) => {
  const { id, message, sourceType } = event;

  // console.log removed for example clarity // wiki:test
  // console.log removed for example clarity // Hello World
  // console.log removed for example clarity // Server
});

world.getDimension('overworld').runCommand('scriptevent wiki:test Hello World');