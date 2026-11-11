// This sample is from Mojang, see an updated sample at
// https://github.com/microsoft/minecraft-scripting-samples/tree/main/custom-commands
import { system, StartupEvent, CommandPermissionLevel, CustomCommand, CustomCommandParamType, CustomCommandStatus, CustomCommandOrigin, CustomCommandResult, world, Entity } from "@minecraft/server";

system.beforeEvents.startup.subscribe((init: StartupEvent) => {
    const partyCommand: CustomCommand = {
        name: "creator:party",
        description: "Cause selected entities to party",
        permissionLevel: CommandPermissionLevel.GameDirectors,
        mandatoryParameters: [{ type: CustomCommandParamType.EntitySelector, name: "partyParticipants" }],
    };
    init.customCommandRegistry.registerCommand(partyCommand, party);
});

function party(origin: CustomCommandOrigin, entities: Entity[]): CustomCommandResult {
    world.sendMessage("Entity party!");

    system.run(() => {
        for (const entity of entities) {
            entity.applyImpulse({ x: 0, y: 1, z: 0 });
            entity.dimension.spawnParticle("minecraft:ominous_spawning_particle", entity.location);
        }
    }); //

    return {
        status: CustomCommandStatus.Success,
    };
}