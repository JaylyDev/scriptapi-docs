import { Entity, world } from "@minecraft/server";

/**
 * Gets entity id
 * @param {Entity} entity 
 */
function showId(entity) {
    entity.runCommandAsync("say My entity ID: " + entity.id);
}

for (const entity of world.getDimension('overworld').getEntities()) {
    showId(entity);
}