import {
  CustomCommandRegistry,
  CustomCommand,
  CustomCommandParamType,
  CommandPermissionLevel,
  CustomCommandOrigin,
  CustomCommandResult,
  CustomCommandStatus,
  system,
  Player,
} from "@minecraft/server";

// Example of registering custom commands using CustomCommandRegistry
function registerCustomCommands(registry: CustomCommandRegistry) {
  // Register an enum for command parameters
  registry.registerEnum("custom:teleportTargets", ["spawn", "home", "end", "nether"]);

  // Define a simple teleport command
  const teleportCommand: CustomCommand = {
    name: "custom:teleport",
    description: "Teleport to predefined locations",
    permissionLevel: CommandPermissionLevel.Admin,
    cheatsRequired: true,
    mandatoryParameters: [
      {
        name: "custom:teleportTargets",
        type: CustomCommandParamType.Enum,
      },
    ],
    optionalParameters: [
      {
        name: "player",
        type: CustomCommandParamType.PlayerSelector,
      },
    ],
  };

  // Register the command with a callback
  registry.registerCommand(teleportCommand, (origin: CustomCommandOrigin, args: [string, Player | undefined]) => {
    const [teleportTargets, targetPlayer] = args;

    console.log(`Teleport command executed by ${origin.sourceType}`);
    console.log(`Destination: ${teleportTargets}`);

    if (origin.sourceEntity) {
      console.log(`Command source entity: ${origin.sourceEntity.typeId}`);
    }

    // Perform teleportation logic here
    const result: CustomCommandResult = {
      status: CustomCommandStatus.Success,
      message: `Teleported to ${teleportTargets}`,
    };

    return result;
  });

  // Define a more complex command with multiple parameter types
  const giveItemCommand: CustomCommand = {
    name: "custom:giveitem",
    description: "Give items to players with custom parameters",
    permissionLevel: CommandPermissionLevel.GameDirectors,
    cheatsRequired: false,
    mandatoryParameters: [
      {
        name: "item",
        type: CustomCommandParamType.ItemType,
      },
      {
        name: "amount",
        type: CustomCommandParamType.Integer,
      },
    ],
    optionalParameters: [
      {
        name: "target",
        type: CustomCommandParamType.PlayerSelector,
      },
    ],
  };

  registry.registerCommand(
    giveItemCommand,
    (origin: CustomCommandOrigin, args: [string, number, Player | undefined]) => {
      const [itemType, amount, targetPlayer] = args;

      // Command execution logic
      return {
        status: CustomCommandStatus.Success,
        message: `Gave ${amount} ${itemType} to player`,
      };
    }
  );
}

// Example usage during startup
// This would typically be called in a startup event handler
system.beforeEvents.startup.subscribe((startupEvent) => {
  registerCustomCommands(startupEvent.customCommandRegistry);
});
