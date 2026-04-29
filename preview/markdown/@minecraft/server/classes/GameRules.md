[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / GameRules

# Class: GameRules

Represents the game rules for a world experience.

## Examples

```ts
import { world } from "@minecraft/server";

world.gameRules.doDayLightCycle = false;
world.gameRules.doEntityDrops = false;
world.gameRules.doFireTick = false;
world.gameRules.doWeatherCycle = false;
world.gameRules.doMobSpawning = false;
world.gameRules.showCoordinates = true;
world.gameRules.showDaysPlayed = true;
world.gameRules.keepInventory = true;
```

```ts
import { world } from "@minecraft/server";

world.gameRules.drowningDamage = false;
world.gameRules.fallDamage = false;
world.gameRules.fireDamage = false;
world.gameRules.freezeDamage = false;
world.gameRules.pvp = false;
```

## Source

```ts
export class GameRules {
    private constructor();
    commandBlockOutput: boolean;
    commandBlocksEnabled: boolean;
    doDayLightCycle: boolean;
    doEntityDrops: boolean;
    doFireTick: boolean;
    doImmediateRespawn: boolean;
    doInsomnia: boolean;
    doLimitedCrafting: boolean;
    doMobLoot: boolean;
    doMobSpawning: boolean;
    doTileDrops: boolean;
    doWeatherCycle: boolean;
    drowningDamage: boolean;
    fallDamage: boolean;
    fireDamage: boolean;
    freezeDamage: boolean;
    functionCommandLimit: number;
    keepInventory: boolean;
    maxCommandChainLength: number;
    mobGriefing: boolean;
    naturalRegeneration: boolean;
    playersSleepingPercentage: number;
    projectilesCanBreakBlocks: boolean;
    pvp: boolean;
    randomTickSpeed: number;
    recipesUnlock: boolean;
    respawnBlocksExplode: boolean;
    sendCommandFeedback: boolean;
    showBorderEffect: boolean;
    showCoordinates: boolean;
    showDaysPlayed: boolean;
    showDeathMessages: boolean;
    showRecipeMessages: boolean;
    showTags: boolean;
    spawnRadius: number;
    tntExplodes: boolean;
    tntExplosionDropDecay: boolean;
}
```

## Constructors

### Constructor

> `private` **new GameRules**(): `GameRules`

#### Returns

`GameRules`

## Properties

### commandBlockOutput

> **commandBlockOutput**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### commandBlocksEnabled

> **commandBlocksEnabled**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### doDayLightCycle

> **doDayLightCycle**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### doEntityDrops

> **doEntityDrops**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### doFireTick

> **doFireTick**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### doImmediateRespawn

> **doImmediateRespawn**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### doInsomnia

> **doInsomnia**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### doLimitedCrafting

> **doLimitedCrafting**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### doMobLoot

> **doMobLoot**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### doMobSpawning

> **doMobSpawning**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### doTileDrops

> **doTileDrops**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### doWeatherCycle

> **doWeatherCycle**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### drowningDamage

> **drowningDamage**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### fallDamage

> **fallDamage**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### fireDamage

> **fireDamage**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### freezeDamage

> **freezeDamage**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### functionCommandLimit

> **functionCommandLimit**: `number`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### keepInventory

> **keepInventory**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### maxCommandChainLength

> **maxCommandChainLength**: `number`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### mobGriefing

> **mobGriefing**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### naturalRegeneration

> **naturalRegeneration**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### playersSleepingPercentage

> **playersSleepingPercentage**: `number`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### projectilesCanBreakBlocks

> **projectilesCanBreakBlocks**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### pvp

> **pvp**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### randomTickSpeed

> **randomTickSpeed**: `number`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### recipesUnlock

> **recipesUnlock**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### respawnBlocksExplode

> **respawnBlocksExplode**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### sendCommandFeedback

> **sendCommandFeedback**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### showBorderEffect

> **showBorderEffect**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### showCoordinates

> **showCoordinates**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### showDaysPlayed

> **showDaysPlayed**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### showDeathMessages

> **showDeathMessages**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### showRecipeMessages

> **showRecipeMessages**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### showTags

> **showTags**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### spawnRadius

> **spawnRadius**: `number`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### tntExplodes

> **tntExplodes**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### tntExplosionDropDecay

> **tntExplosionDropDecay**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.
