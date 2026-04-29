[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / CustomCommand

# Interface: CustomCommand

Define the custom command, including name, permissions, and
parameters.

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
Custom Command APIs are released as part of Scripting API 2.0 Beta in Minecraft v1.21.80. Here's a video from Mojang that covers the custom command APIs.

<iframe width="914" height="514" src="https://www.youtube.com/embed/cXfMwcDg1Lo" title="Building Custom Commands in Script" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**Notes on [CustomCommand.permissionLevel](#permissionlevel) property by [Visual1mpact](https://github.com/Visual1mpact):**

permissionLevel property is related to Operator Permission Levels (The `op-permission-level` setting in `server.properties` file in Minecraft Bedrock Dedicated Server).

This property determines the default permission level assigned to players when using the `/op` command. This affects which commands they can use unless explicitly set in `permissions.json`.

---

## Level 0 – General Commands

Allows only non-destructive, informational, and communication-related commands. Ideal for minimal permissions.

Example level 0 commands: `/help`, `/tell`

---

## Level 1 – Basic / Game Director Commands

Adds access to gameplay-related commands such as gamemode changes, teleporting, and giving items. Suitable for creative players or minor helpers.

Example level 1 commands: `/aimassist`, `/camera`

---

## Level 2 – Game Management / Admin Commands

Example level 2 commands: `/op`, `/deop`

Grants access to moderation tools like kicking and banning players. Useful for server moderators or staff.

---

## Level 3 – Moderation / Host Commands

Provides some access to server and management commands. This is the command permission level for the host when launching a Minecraft world from the client.

Example level 3 command: `/setmaxplayers`

---

## Level 4 – Full Administrative Access / Owner Commands

Provides full access to all server and management commands. Intended only for server owners or trusted administrators.

Example level 4 commands: `/changesetting`, `/stop`

## Source

```ts
export interface CustomCommand {
    cheatsRequired?: boolean;
    description: string;
    mandatoryParameters?: CustomCommandParameter[];
    name: string;
    optionalParameters?: CustomCommandParameter[];
    permissionLevel: CommandPermissionLevel;
}
```

## Properties

### cheatsRequired?

> `optional` **cheatsRequired?**: `boolean`

#### Remarks

Cheats must be enabled to run this command. Defaults to
true.

***

### description

> **description**: `string`

#### Remarks

Command description as seen on the command line.

***

### mandatoryParameters?

> `optional` **mandatoryParameters?**: [`CustomCommandParameter`](CustomCommandParameter-1.md)[]

#### Remarks

List of mandatory command parameters.

***

### name

> **name**: `string`

#### Remarks

The name of the command. A namespace is required.

***

### optionalParameters?

> `optional` **optionalParameters?**: [`CustomCommandParameter`](CustomCommandParameter-1.md)[]

#### Remarks

List of optional command parameters.

***

### permissionLevel

> **permissionLevel**: [`CommandPermissionLevel`](../enumerations/CommandPermissionLevel-1.md)

#### Remarks

The permission level required to execute the command.
