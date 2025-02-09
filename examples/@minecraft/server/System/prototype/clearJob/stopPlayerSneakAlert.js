// Script by WavePlayz

import { system, world } from "@minecraft/server";

/**
 * Variable to hold the job reference for later management
 * @type {number}
 */
let job;

/**
 * A generator function to continuously monitor if any players are sneaking
 * @returns {Generator<void, void, void>}
 */
function* generatorFunction() {
    // Infinite loop to create a long-running task
    while (true) {
        // Retrieve the list of all players currently in the world
        let worldPlayers = world.getAllPlayers();
        
        // If no players are found, stop the job and exit the function
        if (worldPlayers.length === 0) {
            system.clearJob(job); // Clear the running job
            return; // Exit the generator function
        }
        
        // Iterate over each player in the world
        for (let worldPlayer of worldPlayers) {
            // Check if the player is sneaking
            if (worldPlayer.isSneaking) {
                // Display an alert message on the player's action bar
                worldPlayer.onScreenDisplay.setActionBar("[Alert] You are now sneaking");
            }

            // Pause the generator function until the next game tick
            yield;
        }
    }
}

// Create an instance of the generator function
const generator = generatorFunction();

// Start the generator function as a periodic job in the game system
job = system.runJob(generator);
