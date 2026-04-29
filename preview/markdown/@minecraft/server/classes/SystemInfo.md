[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / SystemInfo

# Class: SystemInfo

Contains device information, like memory tier.

## Source

```ts
export class SystemInfo {
    private constructor();
    readonly memoryTier: MemoryTier;
}
```

## Extended by

- [`ClientSystemInfo`](ClientSystemInfo.md)

## Constructors

### Constructor

> `private` **new SystemInfo**(): `SystemInfo`

#### Returns

`SystemInfo`

## Properties

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
