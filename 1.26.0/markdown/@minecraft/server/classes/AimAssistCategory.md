[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / AimAssistCategory

# Class: AimAssistCategory

**`Beta`**

Handle to an aim-assist category that exists in the
world.aimAssist registry.

## Constructors

### Constructor

> `private` **new AimAssistCategory**(): `AimAssistCategory`

#### Returns

`AimAssistCategory`

## Properties

### defaultBlockPriority

> `readonly` **defaultBlockPriority**: `number`

#### Remarks

Default targeting priority used for block types not found in
getBlockPriorities.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### defaultEntityPriority

> `readonly` **defaultEntityPriority**: `number`

#### Remarks

Default targeting priority used for entity types not found
in getEntityPriorities.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### identifier

> `readonly` **identifier**: `string`

#### Remarks

The unique Id associated with the category.

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

#### Throws

This function can throw errors.

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

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

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

#### Throws

This function can throw errors.

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

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

#### World Ready

This function can't be called in early-execution mode.
