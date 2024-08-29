// by WavePlayz

import { system, world } from "@minecraft/server";

// A function to check if any player in the world is sneaking
function looper() {
    // Retrieve all players currently in the world
    let worldPlayers = world.getAllPlayers();

    // Iterate over each player in the world
    for (let worldPlayer of worldPlayers) {
        // If the player is sneaking, display an alert on their action bar
        if (worldPlayer.isSneaking) {
            worldPlayer.onScreenDisplay.setActionBar("[Alert] You are now sneaking");
        }
    }
}

// Attach the looper function as interval in the game system
system.runInterval( looper );
