// Script by WavePlayz

import { world } from "@minecraft/server";

// Subscribe to the `playerEmote` event, which is triggered when a player performs an emote
world.afterEvents.playerEmote.subscribe(eventData => {
    const { player, personaPieceId } = eventData;
    
    world.sendMessage(`${player.name} performed emote ${personaPieceId}`);
});
