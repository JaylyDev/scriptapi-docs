[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / AimAssistCategorySettings

# Class: AimAssistCategorySettings

Settings used with AimAssistRegistry.addCategory for
creation of the AimAssistCategory.

## Example

```ts
import { world, system, AimAssistCategorySettings, AimAssistRegistry, Player } from "@minecraft/server";

// Basic category creation and addition
// This demonstrates how to add categories to AimAssistRegistry via world.getAimAssist()
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

## Source

```ts
export class AimAssistCategorySettings {
    defaultBlockPriority: number;
    defaultEntityPriority: number;
    readonly identifier: string;
    constructor(identifier: string);
    getBlockPriorities(): Record<string, number>;
    getBlockTagPriorities(): Record<string, number>;
    getEntityPriorities(): Record<string, number>;
    getEntityTypeFamilyPriorities(): Record<string, number>;
    setBlockPriorities(
        blockPriorities: Record<keyof typeof minecraftvanilladata.MinecraftBlockTypes | string, number>,
    ): void;
    setBlockTagPriorities(blockTagPriorities: Record<string, number>): void;
    setEntityPriorities(
        entityPriorities: Record<keyof typeof minecraftvanilladata.MinecraftEntityTypes | string, number>,
    ): void;
    setEntityTypeFamilyPriorities(entityTypeFamilyPriorities: Record<string, number>): void;
}
```

## Constructors

### Constructor

> **new AimAssistCategorySettings**(`identifier`): `AimAssistCategorySettings`

#### Parameters

##### identifier

`string`

#### Returns

`AimAssistCategorySettings`

#### Remarks

Constructor that takes a unique Id to associate with the
created AimAssistCategory. Must have a namespace.

## Properties

### defaultBlockPriority

> **defaultBlockPriority**: `number`

#### Remarks

Optional. Default targeting priority used for block types
not provided to setBlockPriorities.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### defaultEntityPriority

> **defaultEntityPriority**: `number`

#### Remarks

Optional. Default targeting priority used for entity types
not provided to setEntityPriorities.

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### identifier

> `readonly` **identifier**: `string`

#### Remarks

The unique Id used to register the category with. Must have
a namespace.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getBlockPriorities()

> **getBlockPriorities**(): `Record`\<`string`, `number`\>

#### Returns

`Record`\<`string`, `number`\>

The record mapping block Ids to their priority settings.
Larger numbers have greater priority.

#### Remarks

Gets the priority settings used for block targeting.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlockTagPriorities()

> **getBlockTagPriorities**(): `Record`\<`string`, `number`\>

#### Returns

`Record`\<`string`, `number`\>

The record mapping block tags to their priority settings.
Larger numbers have greater priority.

#### Remarks

Gets the priority settings used for block targeting.

#### World Ready

This function can't be called in early-execution mode.

***

### getEntityPriorities()

> **getEntityPriorities**(): `Record`\<`string`, `number`\>

#### Returns

`Record`\<`string`, `number`\>

The record mapping entity Ids to their priority settings.
Larger numbers have greater priority.

#### Remarks

Gets the priority settings used for entity targeting.

#### World Ready

This function can't be called in early-execution mode.

***

### getEntityTypeFamilyPriorities()

> **getEntityTypeFamilyPriorities**(): `Record`\<`string`, `number`\>

#### Returns

`Record`\<`string`, `number`\>

Map entity type families to their priority settings in a
Record. Larger numbers have greater priority.

#### Remarks

Gets the priority settings used for entity targeting.

#### World Ready

This function can't be called in early-execution mode.

***

### setBlockPriorities()

> **setBlockPriorities**(`blockPriorities`): `void`

#### Parameters

##### blockPriorities

`Record`\<keyof *typeof* `minecraftvanilladata.MinecraftBlockTypes` \| `string`, `number`\>

A record mapping block Ids to their priority settings.
Larger numbers have greater priority.

#### Returns

`void`

#### Remarks

Sets the priority settings used for block targeting.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setBlockTagPriorities()

> **setBlockTagPriorities**(`blockTagPriorities`): `void`

#### Parameters

##### blockTagPriorities

`Record`\<`string`, `number`\>

#### Returns

`void`

#### Remarks

Sets the priority settings used for block targeting.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setEntityPriorities()

> **setEntityPriorities**(`entityPriorities`): `void`

#### Parameters

##### entityPriorities

`Record`\<keyof *typeof* `minecraftvanilladata.MinecraftEntityTypes` \| `string`, `number`\>

A record mapping entity Ids to their priority settings.
Larger numbers have greater priority.

#### Returns

`void`

#### Remarks

Sets the priority settings used for entity targeting.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### setEntityTypeFamilyPriorities()

> **setEntityTypeFamilyPriorities**(`entityTypeFamilyPriorities`): `void`

#### Parameters

##### entityTypeFamilyPriorities

`Record`\<`string`, `number`\>

#### Returns

`void`

#### Remarks

Sets the priority settings used for entity targeting.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.
