import { system, world } from "@minecraft/server";

system.runInterval(() => {
    // Get all overworld entities
    for (const entity of world.getDimension('overworld').getEntities()) {
        if (entity.isClimbing) {
            entity.runCommand("say I'm climbing!");
        }
    }
})