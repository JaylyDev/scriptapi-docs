import { system, StartupEvent, CustomCommand, CommandPermissionLevel, CustomCommandParamType, CustomCommandOrigin, CustomCommandResult, CustomCommandStatus, world } from "@minecraft/server";

system.beforeEvents.startup.subscribe((init: StartupEvent) => {
    const dimensionsEnum: string[] = [ 'overworld', 'nether', 'the_end' ];
    const switchDimensionCommand: CustomCommand = {
        name: "jayly:switchdimension",
        description: "Switch dimension",
        permissionLevel: CommandPermissionLevel.GameDirectors,
        mandatoryParameters: [{ type: CustomCommandParamType.Enum, name: "jayly:dimension" }],
    };
    // registerEnum() must be called before registerCommand()
    init.customCommandRegistry.registerEnum("jayly:dimension", dimensionsEnum);
    init.customCommandRegistry.registerCommand(switchDimensionCommand, switchDimensionsCommand);
});

function switchDimensionsCommand(origin: CustomCommandOrigin, dimensionId: string): CustomCommandResult {
    const entity = origin.sourceEntity;
    if (!entity) return { status: CustomCommandStatus.Failure, message: 'No entity found' };

    system.run(() => {
        entity.teleport(entity.location, { dimension: world.getDimension(dimensionId) });
    })

    return {
        status: CustomCommandStatus.Success,
        message: `Teleported ${entity.typeId.replace('minecraft:', '')} to ${dimensionId}`
    };
}