// Script by WavePlayz

import { system, world, Player } from "@minecraft/server";

// Subscribe to the scriptEventReceive event, which is triggered when a custom script event is received
system.afterEvents.scriptEventReceive.subscribe(event => {
    const { message, sourceEntity } = event;
    
    // Check if the source entity is a player
    if (sourceEntity instanceof Player) {
        // If the received message is "hi"
        if (message === "hi") {
            // Get the player's name
            let playerName = sourceEntity.name;
            
            // Send a greeting message back to the player
            sourceEntity.sendMessage(`hello ${playerName}`);
        }
    }
});

/*
  Usage:
  Run the following command in Minecraft to trigger this script event:

  /scriptevent foo:bar hi

  This will cause the script to detect the event and respond with a message
  "hello [playerName]", where [playerName] is the name of the player who ran the command.
*/
