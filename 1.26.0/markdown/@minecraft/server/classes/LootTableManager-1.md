[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / LootTableManager

# Class: LootTableManager

Manager for Loot Table related APIs. Allows for generation
of drops from blocks and entities according to their loot
tables.

## Constructors

### Constructor

> `private` **new LootTableManager**(): `LootTableManager`

#### Returns

`LootTableManager`

## Methods

### generateLootFromBlock()

> **generateLootFromBlock**(`block`, `tool?`): [`ItemStack`](ItemStack-1.md)[] \| `undefined`

#### Parameters

##### block

[`Block`](Block-1.md)

The block to generate loot from.

##### tool?

[`ItemStack`](ItemStack-1.md)

Optional. The tool to use in the looting operation.

#### Returns

[`ItemStack`](ItemStack-1.md)[] \| `undefined`

An array of item stacks dropped from the loot drop event.
Can be empty if no loot dropped, or undefined if the
provided tool is insufficient to mine the block.

#### Remarks

Generates loot from a given block as if it had been mined.

#### Throws

Throws if the block is in an unloaded chunk, or if the
block's position is outside of world bounds.

[LocationInUnloadedChunkError](LocationInUnloadedChunkError-1.md)

[LocationOutOfWorldBoundariesError](LocationOutOfWorldBoundariesError-1.md)

[UnloadedChunksError](UnloadedChunksError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### generateLootFromBlockPermutation()

> **generateLootFromBlockPermutation**(`blockPermutation`, `tool?`): [`ItemStack`](ItemStack-1.md)[] \| `undefined`

#### Parameters

##### blockPermutation

[`BlockPermutation`](BlockPermutation-1.md)

##### tool?

[`ItemStack`](ItemStack-1.md)

Optional. The tool to use in the looting operation.

#### Returns

[`ItemStack`](ItemStack-1.md)[] \| `undefined`

An array of item stacks dropped from the loot drop event.
Can be empty if no loot dropped, or undefined if the
provided tool is insufficient to mine the block.

#### Remarks

Generates loot from a given block permutation as if it had
been mined.

#### World Ready

This function can't be called in early-execution mode.

***

### generateLootFromBlockType()

> **generateLootFromBlockType**(`scriptBlockType`, `tool?`): [`ItemStack`](ItemStack-1.md)[] \| `undefined`

#### Parameters

##### scriptBlockType

[`BlockType`](BlockType-1.md)

##### tool?

[`ItemStack`](ItemStack-1.md)

Optional. The tool to use in the looting operation.

#### Returns

[`ItemStack`](ItemStack-1.md)[] \| `undefined`

An array of item stacks dropped from the loot drop event.
Can be empty if no loot dropped, or undefined if the
provided tool is insufficient to mine the block.

#### Remarks

Generates loot from a given block type as if it had been
mined.

#### World Ready

This function can't be called in early-execution mode.

***

### generateLootFromEntity()

> **generateLootFromEntity**(`entity`, `tool?`): [`ItemStack`](ItemStack-1.md)[] \| `undefined`

#### Parameters

##### entity

[`Entity`](Entity-1.md)

##### tool?

[`ItemStack`](ItemStack-1.md)

Optional. The tool to use in the looting operation.

#### Returns

[`ItemStack`](ItemStack-1.md)[] \| `undefined`

An array of item stacks dropped from the loot drop event.
Can be empty if no loot dropped, or undefined if the entity
was invalid.

#### Remarks

Generates loot from given a entity as if it had been killed.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### generateLootFromEntityType()

> **generateLootFromEntityType**(`entityType`, `tool?`): [`ItemStack`](ItemStack-1.md)[] \| `undefined`

#### Parameters

##### entityType

[`EntityType`](EntityType-1.md)

##### tool?

[`ItemStack`](ItemStack-1.md)

Optional. The tool to use in the looting operation.

#### Returns

[`ItemStack`](ItemStack-1.md)[] \| `undefined`

An array of item stacks dropped from the loot drop event.
Can be empty if no loot dropped.

#### Remarks

Generates loot from given a entity type as if it had been
killed.

#### World Ready

This function can't be called in early-execution mode.

***

### generateLootFromTable()

> **generateLootFromTable**(`lootTable`, `tool?`): [`ItemStack`](ItemStack-1.md)[] \| `undefined`

#### Parameters

##### lootTable

[`LootTable`](LootTable-1.md)

##### tool?

[`ItemStack`](ItemStack-1.md)

Optional. The tool to use in the looting operation.

#### Returns

[`ItemStack`](ItemStack-1.md)[] \| `undefined`

An array of item stacks dropped from the loot drop event.
Can be empty if no loot dropped, or undefined if the
provided tool is insufficient to mine the block.

#### Remarks

Generates loot from a given LootTable.

#### World Ready

This function can't be called in early-execution mode.

***

### getLootTable()

> **getLootTable**(`path`): [`LootTable`](LootTable-1.md) \| `undefined`

#### Parameters

##### path

`string`

Path to the table to retrieve. Does not include file
extension, or 'loot_tables/' folder prefix. Example:
`entities/creeper`.

#### Returns

[`LootTable`](LootTable-1.md) \| `undefined`

Returns a LootTable if one is found, or `undefined` if the
provided path does not correspond to an existing loot table.

#### Remarks

Retrieves a single loot table from the level's current
registry.

#### World Ready

This function can't be called in early-execution mode.
