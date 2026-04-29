[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / ClientSystemInfo

# Class: ClientSystemInfo

Contains the device information for a client instance.

## Extends

- [`SystemInfo`](SystemInfo.md)

## Constructors

### Constructor

> `private` **new ClientSystemInfo**(): `ClientSystemInfo`

#### Returns

`ClientSystemInfo`

#### Overrides

[`SystemInfo`](SystemInfo.md).[`constructor`](SystemInfo.md#constructor)

## Properties

### maxRenderDistance

> `readonly` **maxRenderDistance**: `number`

#### Remarks

The max render distance for the device in chunks.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

// Show the maximum render distance every online player
function displayMaxRenderDistance() {
for (const player of world.getPlayers()) {
   player.sendMessage("Your maximum render distance: " + player.clientSystemInfo.maxRenderDistance + " chunks");
}
}
```

***

### memoryTier

> `readonly` **memoryTier**: [`MemoryTier`](../enumerations/MemoryTier.md)

#### Remarks

Describes the memory of the device.

#### World Ready

This property can't be read in early-execution mode.

#### Examples

```ts
import { MemoryTier, Player } from "@minecraft/server";

/**
Show player's device memory
@param player
/
function showClientMemory(player: Player) {
const tier = player.clientSystemInfo.memoryTier;

// Actual value of each memory tier is subject to change.
switch (tier) {
   case MemoryTier.SuperLow:
       player.sendMessage("Client Total Memory: Under 1.5 GB (Super Low)");
       break;

   case MemoryTier.Low:
       player.sendMessage("Client Total Memory: 1.5 - 2.0 GB (Low)");
       break;

   case MemoryTier.Mid:
       player.sendMessage("Client Total Memory: 2.0 - 4.0 GB (Mid)");
       break;

   case MemoryTier.High:
       player.sendMessage("Client Total Memory: 4.0 - 8.0 GB (High)");
       break;

   case MemoryTier.SuperHigh:
       player.sendMessage("Client Total Memory: Over 8.0 GB (Super High)");
       break;

   default:
       break;
}

player.sendMessage("(Value for memory tier is used for reference. They are subject to change.)");
}
```

```ts
import { MemoryTier, system, world } from "@minecraft/server";

function showServerMemory() {
const tier = system.serverSystemInfo.memoryTier;

// Actual value of each memory tier is subject to change.
switch (tier) {
   case MemoryTier.SuperLow:
       world.sendMessage("Server Total Memory: Under 1.5 GB (Super Low)");
       break;

   case MemoryTier.Low:
       world.sendMessage("Server Total Memory: 1.5 - 2.0 GB (Low)");
       break;

   case MemoryTier.Mid:
       world.sendMessage("Server Total Memory: 2.0 - 4.0 GB (Mid)");
       break;

   case MemoryTier.High:
       world.sendMessage("Server Total Memory: 4.0 - 8.0 GB (High)");
       break;

   case MemoryTier.SuperHigh:
       world.sendMessage("Server Total Memory: Over 8.0 GB (Super High)");
       break;

   default:
       break;
}

world.sendMessage("(Value for memory tier is used for reference. They are subject to change.)");
}

showServerMemory();
```

#### Inherited from

[`SystemInfo`](SystemInfo.md).[`memoryTier`](SystemInfo.md#memorytier)

***

### platformType

> `readonly` **platformType**: [`PlatformType`](../enumerations/PlatformType.md)

#### Remarks

The platform type of the device.

#### World Ready

This property can't be read in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

// Show platform type to every player
function showPlatformType() {
for (const player of world.getPlayers()) {
   player.sendMessage("You're playing Minecraft on a " + player.clientSystemInfo.platformType);
}
}
```
