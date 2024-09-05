// Script by WavePlayz

import { system, world } from "@minecraft/server";

// A function that will be executed periodically
function looper() {
    // Send a message to all players in the world with the current game tick count
    world.sendMessage(`Current tick: ${system.currentTick}`);
}

// Define constants for time intervals in ticks
const TICKS_IN_SEC = 20;             // 20 ticks per second (Minecraft runs at 20 ticks per second)
const TICKS_IN_20_SECS = TICKS_IN_SEC * 20;  // 20 seconds in ticks (20 ticks/second * 20 seconds = 400 ticks)

// Set up the looper function to run every 20 seconds in the game
system.runInterval(looper, TICKS_IN_20_SECS);

/*
  Usage:
  This script sends a message to all players in the game every 20 seconds,
  displaying the current tick count in the Minecraft world.

  The message will appear as:
  "Current tick: [currentTick]"
  where [currentTick] is the current game tick at the time the message is sent.
*/
