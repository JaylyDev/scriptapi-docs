[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / AimAssistRegistry

# Class: AimAssistRegistry

A container for APIs related to the world's aim-assist
settings.

## Source

```ts
export class AimAssistRegistry {
    private constructor();
    static readonly DefaultCategoryId = 'minecraft:default';
    static readonly DefaultPresetId = 'minecraft:aim_assist_default';
    addCategory(category: AimAssistCategorySettings): AimAssistCategory;
    addPreset(preset: AimAssistPresetSettings): AimAssistPreset;
    getCategories(): AimAssistCategory[];
    getCategory(categoryId: string): AimAssistCategory | undefined;
    getPreset(presetId: string): AimAssistPreset | undefined;
    getPresets(): AimAssistPreset[];
}
```

## Constructors

### Constructor

> `private` **new AimAssistRegistry**(): `AimAssistRegistry`

#### Returns

`AimAssistRegistry`

## Properties

### DefaultCategoryId

> `readonly` `static` **DefaultCategoryId**: `"minecraft:default"` = `'minecraft:default'`

#### Remarks

The default aim-assist category Id that is used when not
otherwise specified.

#### World Ready

This property can't be read in early-execution mode.

***

### DefaultPresetId

> `readonly` `static` **DefaultPresetId**: `"minecraft:aim_assist_default"` = `'minecraft:aim_assist_default'`

#### Remarks

The default aim-assist preset Id that is used when not
otherwise specified.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### addCategory()

> **addCategory**(`category`): [`AimAssistCategory`](AimAssistCategory.md)

#### Parameters

##### category

[`AimAssistCategorySettings`](AimAssistCategorySettings.md)

The category settings used to create the new category.

#### Returns

[`AimAssistCategory`](AimAssistCategory.md)

The created category handle.

#### Remarks

Adds an aim-assist category to the registry.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

Error

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[NamespaceNameError](NamespaceNameError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world, system, AimAssistCategorySettings, AimAssistRegistry, Player } from "@minecraft/server";

// Basic category creation and addition
// This Demonstrates how to add categories to AimAssistRegistry via world.getAimAssist()
function createBasicAimAssistCategory() {
console.log("=== Creating Basic Aim Assist Category ===");

// Get the AimAssist registry from the world
const aimAssistRegistry: AimAssistRegistry = world.getAimAssist();

// Create a new category with custom settings
const basicCategorySettings = new AimAssistCategorySettings("jayly:mining_priority");

// Configure block priorities (higher values = higher priority)
const blockPriorities: Record<string, number> = {
   "minecraft:diamond_ore": 10,
   "minecraft:gold_ore": 8,
   "minecraft:iron_ore": 6,
   "minecraft:coal_ore": 4,
   "minecraft:stone": 2,
};

// Set the block priorities for this category
basicCategorySettings.setBlockPriorities(blockPriorities);

// Add the category to the registry
aimAssistRegistry.addCategory(basicCategorySettings);

console.log(`Added category '${basicCategorySettings.identifier}' to AimAssist registry`);
console.log("Block priorities set:", blockPriorities);
}

system.run(() => createBasicAimAssistCategory());
```

***

### addPreset()

> **addPreset**(`preset`): [`AimAssistPreset`](AimAssistPreset.md)

#### Parameters

##### preset

[`AimAssistPresetSettings`](AimAssistPresetSettings.md)

The preset settings used to create the new preset.

#### Returns

[`AimAssistPreset`](AimAssistPreset.md)

The created preset handle.

#### Remarks

Adds an aim-assist preset to the registry.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

Error

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

[NamespaceNameError](NamespaceNameError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getCategories()

> **getCategories**(): [`AimAssistCategory`](AimAssistCategory.md)[]

#### Returns

[`AimAssistCategory`](AimAssistCategory.md)[]

An array of all available category objects.

#### Remarks

Gets all available categories in the registry.

#### World Ready

This function can't be called in early-execution mode.

***

### getCategory()

> **getCategory**(`categoryId`): [`AimAssistCategory`](AimAssistCategory.md) \| `undefined`

#### Parameters

##### categoryId

`string`

#### Returns

[`AimAssistCategory`](AimAssistCategory.md) \| `undefined`

The category object if it exists, otherwise returns
undefined.

#### Remarks

Gets the category associated with the provided Id.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

world.getAimAssist().getCategory("jayly:mining_priority");
```

***

### getPreset()

> **getPreset**(`presetId`): [`AimAssistPreset`](AimAssistPreset.md) \| `undefined`

#### Parameters

##### presetId

`string`

The Id of the preset to retrieve. Must have a namespace.

#### Returns

[`AimAssistPreset`](AimAssistPreset.md) \| `undefined`

The preset object if it exists, otherwise returns undefined.

#### Remarks

Gets the preset associated with the provided Id.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getPresets()

> **getPresets**(): [`AimAssistPreset`](AimAssistPreset.md)[]

#### Returns

[`AimAssistPreset`](AimAssistPreset.md)[]

An array of all available preset objects.

#### Remarks

Gets all available presets in the registry.

#### World Ready

This function can't be called in early-execution mode.
