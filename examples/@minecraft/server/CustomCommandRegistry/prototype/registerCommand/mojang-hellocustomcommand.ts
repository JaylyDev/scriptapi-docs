// This sample is from Mojang, see an updated sample at
// https://github.com/microsoft/minecraft-scripting-samples/tree/main/custom-commands
import { system, StartupEvent, CommandPermissionLevel, CustomCommand, CustomCommandParamType, CustomCommandStatus, CustomCommandOrigin, CustomCommandResult, world } from "@minecraft/server";

system.beforeEvents.startup.subscribe((init: StartupEvent) => {
    const helloCommand: CustomCommand = {
        name: "creator:hellocustomcommand",
        description: "Celebration super party hello",
        permissionLevel: CommandPermissionLevel.Any,
        optionalParameters: [{ type: CustomCommandParamType.Integer, name: "celebrationSize" }],
    };
    init.customCommandRegistry.registerCommand(helloCommand, helloCustomCommand);
});

function helloCustomCommand(origin: CustomCommandOrigin, celebrationSize?: number): CustomCommandResult {
    world.sendMessage("Hello Custom Command!");
    const player = origin.sourceEntity;

    if (celebrationSize && player) {
        system.run(() => {
            player.dimension.createExplosion(player.location, celebrationSize);
        });
    }

    return {
        status: CustomCommandStatus.Success,
    };
}