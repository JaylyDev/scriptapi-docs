[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / CustomCommandRegistry

# Class: CustomCommandRegistry

Provides the functionality for registering custom commands.

## Examples

```ts
import {
   system,
   StartupEvent,
   CustomCommand,
   CommandPermissionLevel,
   CustomCommandParamType,
   CustomCommandOrigin,
   CustomCommandResult,
   CustomCommandStatus,
   world,
} from "@minecraft/server";

system.beforeEvents.startup.subscribe((init: StartupEvent) => {
   const dimensionsEnum: string[] = ["overworld", "nether", "the_end"];
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
   if (!entity) return { status: CustomCommandStatus.Failure, message: "No entity found" };

   system.run(() => {
       entity.teleport(entity.location, { dimension: world.getDimension(dimensionId) });
   });

   return {
       status: CustomCommandStatus.Success,
       message: `Teleported ${entity.typeId.replace("minecraft:", "")} to ${dimensionId}`,
   };
}
```

```ts
// This sample is from Mojang, see an updated sample at
// https://github.com/microsoft/minecraft-scripting-samples/tree/main/custom-commands
import {
   system,
   StartupEvent,
   CommandPermissionLevel,
   CustomCommand,
   CustomCommandParamType,
   CustomCommandStatus,
   CustomCommandOrigin,
   CustomCommandResult,
   world,
   Entity,
   Vector3,
} from "@minecraft/server";

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
```

```ts
// This sample is from Mojang, see an updated sample at
// https://github.com/microsoft/minecraft-scripting-samples/tree/main/custom-commands
import {
   system,
   StartupEvent,
   CommandPermissionLevel,
   CustomCommand,
   CustomCommandParamType,
   CustomCommandStatus,
   CustomCommandOrigin,
   CustomCommandResult,
   world,
} from "@minecraft/server";

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
```

```ts
// This sample is from Mojang, see an updated sample at
// https://github.com/microsoft/minecraft-scripting-samples/tree/main/custom-commands
import {
   system,
   StartupEvent,
   CommandPermissionLevel,
   CustomCommand,
   CustomCommandParamType,
   CustomCommandStatus,
   CustomCommandOrigin,
   CustomCommandResult,
   world,
   Entity,
} from "@minecraft/server";

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
```

```ts
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
```
Custom Command APIs are released as part of Scripting API 2.0 Beta in Minecraft v1.21.80. Here's a video from Mojang that covers the custom command APIs.

<iframe width="914" height="514" src="https://www.youtube.com/embed/cXfMwcDg1Lo" title="Building Custom Commands in Script" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Source

```ts
export class CustomCommandRegistry {
    private constructor();
    registerCommand(
        customCommand: CustomCommand,
        callback: (origin: CustomCommandOrigin, ...args: any[]) => CustomCommandResult | undefined,
    ): void;
    registerEnum(name: string, values: string[]): void;
}
```

## Constructors

### Constructor

> `private` **new CustomCommandRegistry**(): `CustomCommandRegistry`

#### Returns

`CustomCommandRegistry`

## Methods

### registerCommand()

> **registerCommand**(`customCommand`, `callback`): `void`

#### Parameters

##### customCommand

[`CustomCommand`](../interfaces/CustomCommand.md)

##### callback

(`origin`, ...`args`) => [`CustomCommandResult`](../interfaces/CustomCommandResult.md) \| `undefined`

The callback triggered when the command executes.

#### Returns

`void`

#### Remarks

Registers a custom command that when executed triggers a
script callback.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

#### Throws

This function can throw errors.

[CustomCommandError](CustomCommandError.md)

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[NamespaceNameError](NamespaceNameError.md)

#### Examples

```ts
// This sample is from Mojang, see an updated sample at
// https://github.com/microsoft/minecraft-scripting-samples/tree/main/custom-commands
import {
system,
StartupEvent,
CommandPermissionLevel,
CustomCommand,
CustomCommandParamType,
CustomCommandStatus,
CustomCommandOrigin,
CustomCommandResult,
world,
Entity,
Vector3,
} from "@minecraft/server";

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
```

```ts
// This sample is from Mojang, see an updated sample at
// https://github.com/microsoft/minecraft-scripting-samples/tree/main/custom-commands
import {
system,
StartupEvent,
CommandPermissionLevel,
CustomCommand,
CustomCommandParamType,
CustomCommandStatus,
CustomCommandOrigin,
CustomCommandResult,
world,
} from "@minecraft/server";

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
```

```ts
// This sample is from Mojang, see an updated sample at
// https://github.com/microsoft/minecraft-scripting-samples/tree/main/custom-commands
import {
system,
StartupEvent,
CommandPermissionLevel,
CustomCommand,
CustomCommandParamType,
CustomCommandStatus,
CustomCommandOrigin,
CustomCommandResult,
world,
Entity,
} from "@minecraft/server";

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
```

***

### registerEnum()

> **registerEnum**(`name`, `values`): `void`

#### Parameters

##### name

`string`

##### values

`string`[]

#### Returns

`void`

#### Remarks

Registers a custom command enum.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

#### Throws

This function can throw errors.

[CustomCommandError](CustomCommandError.md)

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[NamespaceNameError](NamespaceNameError.md)

#### Example

```ts
import {
system,
StartupEvent,
CustomCommand,
CommandPermissionLevel,
CustomCommandParamType,
CustomCommandOrigin,
CustomCommandResult,
CustomCommandStatus,
world,
} from "@minecraft/server";

system.beforeEvents.startup.subscribe((init: StartupEvent) => {
const dimensionsEnum: string[] = ["overworld", "nether", "the_end"];
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
if (!entity) return { status: CustomCommandStatus.Failure, message: "No entity found" };

system.run(() => {
   entity.teleport(entity.location, { dimension: world.getDimension(dimensionId) });
});

return {
   status: CustomCommandStatus.Success,
   message: `Teleported ${entity.typeId.replace("minecraft:", "")} to ${dimensionId}`,
};
}
```
> [!IMPORTANT]
>
> - `registerEnum()` must be called before [`registerCommand()`](#registercommand) for the custom command to be registered successfully.
> - The command enum name must match the registered enum name declared in the custom command object.

```js
system.beforeEvents.startup.subscribe((init: StartupEvent) => {
    const command: CustomCommand = {
        name: "creator:command",
        // ... more required parameters
        mandatoryParameters: [
            { type: CustomCommandParamType.Enum, name: "creator:enum" },
        ],
    };
    // registerEnum() must be called before registerCommand()
    init.customCommandRegistry.registerEnum("creator:enum", ['value1', 'value2']); // The command enum name must match the registered enum name declared above.
    init.customCommandRegistry.registerCommand(command, callback);
});
```
