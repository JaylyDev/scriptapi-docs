[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockPermutation

# Class: BlockPermutation

Contains the combination of type [BlockType](BlockType-1.md) and
properties (also sometimes called block state) which
describe a block (but does not belong to a specific [Block](Block-1.md)).

## Example

```typescript
import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from "@minecraft/server";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function addTranslatedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const dim = players[0].dimension;

  const signBlock = dim.getBlock(targetLocation);

  if (!signBlock) {
    log("Could not find a block at specified location.");
    return -1;
  }
  const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;

  signComponent?.setText({ translate: "item.skull.player.name", with: [players[0].name] });
}
```

## Constructors

### Constructor

> `private` **new BlockPermutation**(): `BlockPermutation`

#### Returns

`BlockPermutation`

## Properties

### localizationKey

> `readonly` **localizationKey**: `string`

**`Beta`**

#### Remarks

Key for the localization of this BlockPermutation's name
used in .lang files.

#### World Ready

This property can't be read in early-execution mode.

***

### type

> `readonly` **type**: [`BlockType`](BlockType-1.md)

#### Remarks

The [BlockType](BlockType-1.md) that the permutation has.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### canBeDestroyedByLiquidSpread()

> **canBeDestroyedByLiquidSpread**(`liquidType`): `boolean`

#### Parameters

##### liquidType

[`Water`](../enumerations/LiquidType-1.md#water)

The type of liquid this function should be called for.

#### Returns

`boolean`

Whether this block is removed when touched by liquid.

#### Remarks

Returns whether this block is removed when touched by
liquid.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### canContainLiquid()

> **canContainLiquid**(`liquidType`): `boolean`

#### Parameters

##### liquidType

[`Water`](../enumerations/LiquidType-1.md#water)

The type of liquid this function should be called for.

#### Returns

`boolean`

Whether this block can have a liquid placed over it.

#### Remarks

Returns whether this block can have a liquid placed over it,
i.e. be waterlogged.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getAllStates()

> **getAllStates**(): `Record`\<`string`, `boolean` \| `number` \| `string`\>

#### Returns

`Record`\<`string`, `boolean` \| `number` \| `string`\>

Returns the list of all of the block states that the
permutation has.

#### Remarks

Returns all available block states associated with this
block.

#### World Ready

This function can't be called in early-execution mode.

***

### getItemStack()

> **getItemStack**(`amount?`): [`ItemStack`](ItemStack-1.md) \| `undefined`

#### Parameters

##### amount?

`number`

Number of instances of this block to place in the prototype
item stack.
Defaults to: 1

#### Returns

[`ItemStack`](ItemStack-1.md) \| `undefined`

#### Remarks

Retrieves a prototype item stack based on this block
permutation that can be used with item
Container/ContainerSlot APIs.

#### World Ready

This function can't be called in early-execution mode.

***

### getState()

> **getState**\<`T`\>(`stateName`): `any`

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### stateName

`T`

Name of the block state who's value is to be returned.

#### Returns

`any`

Returns the state if the permutation has it, else
`undefined`.

#### Remarks

Gets a state for the permutation.

#### World Ready

This function can't be called in early-execution mode.

***

### getTags()

> **getTags**(): `string`[]

#### Returns

`string`[]

#### Remarks

Creates a copy of the permutation.

#### World Ready

This function can't be called in early-execution mode.

***

### hasTag()

> **hasTag**(`tag`): `boolean`

#### Parameters

##### tag

`string`

#### Returns

`boolean`

Returns `true` if the permutation has the tag, else `false`.

#### Remarks

Checks to see if the permutation has a specific tag.

#### Example

```typescript
import { DimensionLocation } from "@minecraft/server";

function checkBlockTags(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  // Fetch the block
  const block = targetLocation.dimension.getBlock(targetLocation);

  // check that the block is loaded
  if (block) {
    log(`Block is dirt: ${block.hasTag("dirt")}`);
    log(`Block is wood: ${block.hasTag("wood")}`);
    log(`Block is stone: ${block.hasTag("stone")}`);
  }
}
```

#### World Ready

This function can't be called in early-execution mode.

***

### isLiquidBlocking()

> **isLiquidBlocking**(`liquidType`): `boolean`

#### Parameters

##### liquidType

[`Water`](../enumerations/LiquidType-1.md#water)

The type of liquid this function should be called for.

#### Returns

`boolean`

Whether this block stops liquid from flowing.

#### Remarks

Returns whether this block stops liquid from flowing.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### liquidSpreadCausesSpawn()

> **liquidSpreadCausesSpawn**(`liquidType`): `boolean`

#### Parameters

##### liquidType

[`Water`](../enumerations/LiquidType-1.md#water)

The type of liquid this function should be called for.

#### Returns

`boolean`

Whether this block is removed and spawns its item when
touched by liquid.

#### Remarks

Returns whether this block is removed and spawns its item
when touched by liquid.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### matches()

> **matches**\<`T`\>(`blockName`, `states?`): `boolean`

#### Type Parameters

##### T

`T` *extends* `string` = `MinecraftBlockTypes`

#### Parameters

##### blockName

`T`

An optional set of states to compare against.

##### states?

[`BlockStateArg`](../type-aliases/BlockStateArg-1.md)\<`T`\>

#### Returns

`boolean`

#### Remarks

Returns a boolean whether a specified permutation matches
this permutation. If states is not specified, matches checks
against the set of types more broadly.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
// Script by WavePlayz

import { world } from "@minecraft/server";

/**
Function to check if a given block is red wool
@param {import('@minecraft/server').Block} block
@returns true if a given block is red wool
/
function isRedWool(block) {
// Define the type id of block we are checking for
let typeId = "wool";

// Define the block state we are looking for
// In this case, we want the color to be red
let states = { color: "red" };

// Check if the block matches the specified type and states
// The 'matches' method returns true if the block is of the specified type and has the specified states
return block.matches(typeId, states);
}
```

***

### withState()

> **withState**\<`T`\>(`name`, `value`): `BlockPermutation`

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### name

`T`

Identifier of the block property.

##### value

`BlockStateSuperset`

Value of the block property.

#### Returns

`BlockPermutation`

#### Remarks

Returns a derived BlockPermutation with a specific property
set.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### resolve()

> `static` **resolve**\<`T`\>(`blockName`, `states?`): `BlockPermutation`

#### Type Parameters

##### T

`T` *extends* `string` = `MinecraftBlockTypes`

#### Parameters

##### blockName

`T`

Identifier of the block to check.

##### states?

[`BlockStateArg`](../type-aliases/BlockStateArg-1.md)\<`T`\>

#### Returns

`BlockPermutation`

#### Remarks

Given a type identifier and an optional set of properties,
will return a BlockPermutation object that is usable in
other block APIs (e.g., block.setPermutation)

#### Throws

This function can throw errors.

#### Example

```typescript
import { BlockPermutation, DimensionLocation } from "@minecraft/server";
import { Vector3Utils } from "@minecraft/math";
import { MinecraftBlockTypes } from "@minecraft/vanilla-data";

function addBlockColorCube(targetLocation: DimensionLocation) {
  const allWoolBlocks: string[] = [
    MinecraftBlockTypes.WhiteWool,
    MinecraftBlockTypes.OrangeWool,
    MinecraftBlockTypes.MagentaWool,
    MinecraftBlockTypes.LightBlueWool,
    MinecraftBlockTypes.YellowWool,
    MinecraftBlockTypes.LimeWool,
    MinecraftBlockTypes.PinkWool,
    MinecraftBlockTypes.GrayWool,
    MinecraftBlockTypes.LightGrayWool,
    MinecraftBlockTypes.CyanWool,
    MinecraftBlockTypes.PurpleWool,
    MinecraftBlockTypes.BlueWool,
    MinecraftBlockTypes.BrownWool,
    MinecraftBlockTypes.GreenWool,
    MinecraftBlockTypes.RedWool,
    MinecraftBlockTypes.BlackWool,
  ];

  const cubeDim = 7;

  let colorIndex = 0;

  for (let x = 0; x <= cubeDim; x++) {
    for (let y = 0; y <= cubeDim; y++) {
      for (let z = 0; z <= cubeDim; z++) {
        colorIndex++;
        targetLocation.dimension
          .getBlock(Vector3Utils.add(targetLocation, { x, y, z }))
          ?.setPermutation(BlockPermutation.resolve(allWoolBlocks[colorIndex % allWoolBlocks.length]));
      }
    }
  }
}
```

#### World Ready

This function can't be called in early-execution mode.
