import { TicksPerSecond, system } from "@minecraft/server";

system.runTimeout(() => {
  // console.log removed for example clarity
}, TicksPerSecond * 5); // Tick delay of 5 seconds
