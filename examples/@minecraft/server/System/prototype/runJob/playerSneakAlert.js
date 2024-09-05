// by WavePlayz

import { system, world } from "@minecraft/server";

// A generator function to check if any player in the world is sneaking
function* generatorFunction() {
	// Long running task
	while (true) {
	    // Retrieve all players currently in the world
	    let worldPlayers = world.getAllPlayers();
	
	    // Iterate over each player in the world
	    for (let worldPlayer of worldPlayers) {
	        // If the player is sneaking, display an alert on their action bar
	        if (worldPlayer.isSneaking) {
	            worldPlayer.onScreenDisplay.setActionBar("[Alert] You are now sneaking");
	        }
	
	        // Pause the generator function until the next game tick
	        yield;
	    }
	}
}

// Create an instance of the generator function
const generator = generatorFunction();

// Run the generator function as a periodic job in the game system
system.runJob(generator);
