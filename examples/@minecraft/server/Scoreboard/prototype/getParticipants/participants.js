// Script by WavePlayz

import { world, system, Player } from "@minecraft/server";


// Subscribe to the scriptEventReceive event, which is triggered when a custom script event is received
system.afterEvents.scriptEventReceive.subscribe(event => {
    const { message, sourceEntity } = event;
    
    // Check if the source entity is a player
    if (sourceEntity instanceof Player) {
        // If the received message is "participants"
        if (message === "participants") {
        	// Retrieve all participants (players and entities) from the scoreboard
            let participants = world.scoreboard.getParticipants();
            
            // Extract the display names of all scoreboard participants
            let participantNames = participants.map(participant => participant.displayName);
            
            // Send the list of participant names to the player who triggered the event
            sourceEntity.sendMessage(participantNames.join("\n"));
        }
    }
});

/*
  Usage:
  This script listens for the "participants" message sent via a custom script event.
  To trigger this event in-game, a player can run the following command:

  /scriptevent foo:bar participants

  When triggered, the script will send a list of all scoreboard participants' names to the player
  who ran the command. The names will be displayed one per line in the chat.
*/
