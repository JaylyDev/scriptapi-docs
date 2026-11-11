// This sample is from Mojang, see an updated sample at
// https://github.com/microsoft/minecraft-scripting-samples/tree/main/custom-commands
import { system, StartupEvent, CommandPermissionLevel, CustomCommand, CustomCommandParamType, CustomCommandStatus, CustomCommandOrigin, CustomCommandResult, world, Entity, Vector3 } from "@minecraft/server";

system.beforeEvents.startup.subscribe((init: StartupEvent) => {
    const dirtsterCommand: CustomCommand = {
        name: "creator:dirtster",
        description: "Adds some dirt, ster",
        permissionLevel: CommandPermissionLevel.GameDirectors,
        mandatoryParameters: [{ type: CustomCommandParamType.Location, name: "dirtLocation" }],
    };
    init.customCommandRegistry.registerCommand(dirtsterCommand, dirtster);
});

function dirtster(origin: CustomCommandOrigin, loc: Vector3): CustomCommandResult {
    world.sendMessage("Lets get dirty!");

    system.run(() => {
        const dim = world.getDimension("overworld");

        dim.setBlockType(loc, "minecraft:dirt");

        // it's a mini dirt pyramid
        dim.setBlockType({ x: loc.x + 2, y: loc.y + 1, z: loc.z }, "minecraft:dirt");
        dim.setBlockType({ x: loc.x - 2, y: loc.y + 1, z: loc.z }, "minecraft:dirt");
        dim.setBlockType({ x: loc.x + 1, y: loc.y + 1, z: loc.z }, "minecraft:dirt");
        dim.setBlockType({ x: loc.x - 1, y: loc.y + 1, z: loc.z }, "minecraft:dirt");
        dim.setBlockType({ x: loc.x, y: loc.y + 1, z: loc.z }, "minecraft:dirt");

        dim.setBlockType({ x: loc.x + 1, y: loc.y + 2, z: loc.z }, "minecraft:dirt");
        dim.setBlockType({ x: loc.x - 1, y: loc.y + 2, z: loc.z }, "minecraft:dirt");
        dim.setBlockType({ x: loc.x, y: loc.y + 2, z: loc.z }, "minecraft:dirt");

        dim.setBlockType({ x: loc.x, y: loc.y + 3, z: loc.z }, "minecraft:dirt");
    }); //

    return {
        status: CustomCommandStatus.Success,
    };
}