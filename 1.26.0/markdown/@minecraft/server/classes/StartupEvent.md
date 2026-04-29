[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / StartupEvent

# Class: StartupEvent

## Constructors

### Constructor

> `private` **new StartupEvent**(): `StartupEvent`

#### Returns

`StartupEvent`

## Properties

### blockComponentRegistry

> `readonly` **blockComponentRegistry**: [`BlockComponentRegistry`](BlockComponentRegistry.md)

#### Remarks

This property can be read in early-execution mode.

***

### customCommandRegistry

> `readonly` **customCommandRegistry**: [`CustomCommandRegistry`](CustomCommandRegistry.md)

#### Remarks

This property can be read in early-execution mode.

#### Examples

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

***

### itemComponentRegistry

> `readonly` **itemComponentRegistry**: [`ItemComponentRegistry`](ItemComponentRegistry.md)

#### Remarks

This property can be read in early-execution mode.
