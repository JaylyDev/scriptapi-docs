[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / AimAssistPreset

# Class: AimAssistPreset

**`Beta`**

Handle to an aim-assist preset that exists in the
world.aimAssist registry.

## Constructors

### Constructor

> `private` **new AimAssistPreset**(): `AimAssistPreset`

#### Returns

`AimAssistPreset`

## Properties

### defaultItemSettings?

> `readonly` `optional` **defaultItemSettings?**: `string`

#### Remarks

Optional. Default aim-assist category Id used for items not
provided to setItemSettings.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### handSettings?

> `readonly` `optional` **handSettings?**: `string`

#### Remarks

Optional. Aim-assist category Id used for an empty hand.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### identifier

> `readonly` **identifier**: `string`

#### Remarks

The unique Id associated with the preset.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getExcludedBlockTagTargets()

> **getExcludedBlockTagTargets**(): `string`[]

#### Returns

`string`[]

The array of block tags.

#### Remarks

Gets the list of block tags to exclude from aim assist
targeting.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getExcludedBlockTargets()

> **getExcludedBlockTargets**(): `string`[]

#### Returns

`string`[]

The array of block Ids.

#### Remarks

Gets the list of block Ids to exclude from aim assist
targeting.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getExcludedEntityTargets()

> **getExcludedEntityTargets**(): `string`[]

#### Returns

`string`[]

The array of entity Ids.

#### Remarks

Gets the list of entity Ids to exclude from aim assist
targeting.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getExcludedEntityTypeFamilyTargets()

> **getExcludedEntityTypeFamilyTargets**(): `string`[]

#### Returns

`string`[]

The array of entity type families.

#### Remarks

Gets the list of entity type families to exclude from aim
assist targeting.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

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

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getLiquidTargetingItems()

> **getLiquidTargetingItems**(): `string`[]

#### Returns

`string`[]

The array of item Ids.

#### Remarks

Gets the list of item Ids that will target liquid blocks
with aim-assist when being held.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
