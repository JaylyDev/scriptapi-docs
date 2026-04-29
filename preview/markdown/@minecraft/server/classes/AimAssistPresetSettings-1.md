[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / AimAssistPresetSettings

# Class: AimAssistPresetSettings

Settings used with AimAssistRegistry.addPreset for creation
of the AimAssistPreset.

## Example

```ts
import { AimAssistPresetSettings, world } from "@minecraft/server";

// Example of creating aim assist preset settings object
// This demonstrates the structure needed for aim assist preset configuration
const presetSettings = new AimAssistPresetSettings("custom:my_preset");

presetSettings.setExcludedTargets(["minecraft:item_frame", "minecraft:painting"]);
presetSettings.setItemSettings({
   "minecraft:bow": "custom:ranged_category",
   "minecraft:crossbow": "custom:ranged_category",
   "minecraft:sword": "custom:melee_category",
});
presetSettings.setLiquidTargetingItems(["minecraft:bucket", "minecraft:water_bucket", "minecraft:lava_bucket"]);

world.getAimAssist().addPreset(presetSettings);
```

## Source

```ts
export class AimAssistPresetSettings {
    defaultItemSettings?: string;
    handSettings?: string;
    readonly identifier: string;
    constructor(identifier: string);
    getExcludedBlockTagTargets(): string[] | undefined;
    getExcludedBlockTargets(): string[] | undefined;
    getExcludedEntityTargets(): string[] | undefined;
    getExcludedEntityTypeFamilyTargets(): string[] | undefined;
    getItemSettings(): Record<string, string>;
    getLiquidTargetingItems(): string[] | undefined;
    setExcludedBlockTagTargets(targets?: string[]): void;
    setExcludedBlockTargets(targets?: (keyof typeof minecraftvanilladata.MinecraftBlockTypes | string)[]): void;
    setExcludedEntityTargets(targets?: (keyof typeof minecraftvanilladata.MinecraftEntityTypes | string)[]): void;
    setExcludedEntityTypeFamilyTargets(targets?: string[]): void;
    setItemSettings(itemSettings: Record<keyof typeof minecraftvanilladata.MinecraftItemTypes | string, string>): void;
    setLiquidTargetingItems(items?: (keyof typeof minecraftvanilladata.MinecraftItemTypes | string)[]): void;
}
```

## Constructors

### Constructor

> **new AimAssistPresetSettings**(`identifier`): `AimAssistPresetSettings`

#### Parameters

##### identifier

`string`

#### Returns

`AimAssistPresetSettings`

#### Remarks

Constructor that takes a unique Id to associate with the
created AimAssistPreset. Must have a namespace.

## Properties

### defaultItemSettings?

> `optional` **defaultItemSettings?**: `string`

#### Remarks

Optional. Default aim-assist category Id used for items not
provided to setItemSettings.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### handSettings?

> `optional` **handSettings?**: `string`

#### Remarks

Optional. Aim-assist category Id used for an empty hand.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### identifier

> `readonly` **identifier**: `string`

#### Remarks

The unique Id used to register the preset with. Must have a
namespace.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getExcludedBlockTagTargets()

> **getExcludedBlockTagTargets**(): `string`[] \| `undefined`

#### Returns

`string`[] \| `undefined`

The array of block tags.

#### Remarks

Gets the list of block tags to exclude from aim assist
targeting.

#### World Ready

This function can't be called in early-execution mode.

***

### getExcludedBlockTargets()

> **getExcludedBlockTargets**(): `string`[] \| `undefined`

#### Returns

`string`[] \| `undefined`

The array of block Ids.

#### Remarks

Gets the list of block Ids to exclude from aim assist
targeting.

#### World Ready

This function can't be called in early-execution mode.

***

### getExcludedEntityTargets()

> **getExcludedEntityTargets**(): `string`[] \| `undefined`

#### Returns

`string`[] \| `undefined`

The array of entity Ids.

#### Remarks

Gets the list of entity Ids to exclude from aim assist
targeting.

#### World Ready

This function can't be called in early-execution mode.

***

### getExcludedEntityTypeFamilyTargets()

> **getExcludedEntityTypeFamilyTargets**(): `string`[] \| `undefined`

#### Returns

`string`[] \| `undefined`

The array of entity type families.

#### Remarks

Gets the list of entity type families to exclude from aim
assist targeting.

#### World Ready

This function can't be called in early-execution mode.

***

### getItemSettings()

> **getItemSettings**(): `Record`\<`string`, `string`\>

#### Returns

`Record`\<`string`, `string`\>

The record mapping item Ids to aim-assist category Ids.

#### Remarks

Gets the per-item aim-assist category Ids.

#### World Ready

This function can't be called in early-execution mode.

***

### getLiquidTargetingItems()

> **getLiquidTargetingItems**(): `string`[] \| `undefined`

#### Returns

`string`[] \| `undefined`

The array of item Ids.

#### Remarks

Gets the list of item Ids that will target liquid blocks
with aim-assist when being held.

#### World Ready

This function can't be called in early-execution mode.

***

### setExcludedBlockTagTargets()

> **setExcludedBlockTagTargets**(`targets?`): `void`

#### Parameters

##### targets?

`string`[]

An array of block tags.

#### Returns

`void`

#### Remarks

Sets the list of block tags to exclude from aim assist
targeting.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setExcludedBlockTargets()

> **setExcludedBlockTargets**(`targets?`): `void`

#### Parameters

##### targets?

(`string` \| `number` \| `symbol`)[]

An array of block Ids.

#### Returns

`void`

#### Remarks

Sets the list of block Ids to exclude from aim assist
targeting.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setExcludedEntityTargets()

> **setExcludedEntityTargets**(`targets?`): `void`

#### Parameters

##### targets?

(`string` \| `number` \| `symbol`)[]

An array of entity Ids.

#### Returns

`void`

#### Remarks

Sets the list of entity Ids to exclude from aim assist
targeting.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setExcludedEntityTypeFamilyTargets()

> **setExcludedEntityTypeFamilyTargets**(`targets?`): `void`

#### Parameters

##### targets?

`string`[]

An array of entity type families.

#### Returns

`void`

#### Remarks

Sets the list of entity type families to exclude from aim
assist targeting.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setItemSettings()

> **setItemSettings**(`itemSettings`): `void`

#### Parameters

##### itemSettings

`Record`\<keyof *typeof* `minecraftvanilladata.MinecraftItemTypes` \| `string`, `string`\>

A record mapping item Ids to aim-assist category Ids.
Category Ids must have a namespace.

#### Returns

`void`

#### Remarks

Sets the per-item aim-assist category Ids.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setLiquidTargetingItems()

> **setLiquidTargetingItems**(`items?`): `void`

#### Parameters

##### items?

(`string` \| `number` \| `symbol`)[]

An array of item Ids.

#### Returns

`void`

#### Remarks

Sets the list of item Ids that will target liquid blocks
with aim-assist when being held.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.
