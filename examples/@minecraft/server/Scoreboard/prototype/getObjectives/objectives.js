// Script by WavePlayz

import { world, system, Player } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe(event => {
    const { message, sourceEntity } = event;

    // Check if the source entity is a player
    if (sourceEntity instanceof Player) {

        // If the received message is "objectives"
        if (message === "objectives") {

            // Retrieve all scoreboard objectives
            let objectives = world.scoreboard.getObjectives();

            // Map through the objectives to get their display names
            let objectiveNames = objectives.map(objective => objective.displayName);

            // Send the list of objective names to the player who triggered the event
            sourceEntity.sendMessage(objectiveNames.join("\n"));
        }
    }
});

/*
  Usage:
  This script listens for the "objectives" message sent via a custom script event.
  To trigger this event in-game, a player can run the following command:

  /scriptevent foo:bar objectives

  When triggered, the script will send a list of all scoreboard objective names to the player
  who ran the command. The names will be displayed one per line in the chat.
*/
