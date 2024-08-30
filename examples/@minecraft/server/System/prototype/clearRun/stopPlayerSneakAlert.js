// by WavePlayz

import { system, world } from "@minecraft/server";

let interval

// A function to check if any player in the world is sneaking
function looper() {
    // Retrieve all players currently in the world
    let worldPlayers = world.getAllPlayers();
    
    // If no players are found, stop the job and exit the function
    if (worldPlayers.length === 0) {
        system.clearRun(interval); // Clear the running job
        return; // Exit the generator function
    }
    
    // Iterate over each player in the world
    for (let worldPlayer of worldPlayers) {
        // If the player is sneaking, display an alert on their action bar
        if (worldPlayer.isSneaking) {
            worldPlayer.onScreenDisplay.setActionBar("[Alert] You are now sneaking");
        }
    }
}

// Run the generator function as a periodic job in the game system
interval = system.runInterval( looper );


