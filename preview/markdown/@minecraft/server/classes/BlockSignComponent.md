[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / BlockSignComponent

# Class: BlockSignComponent

Represents a block that can display text on it.

## Examples

```typescript
import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

function addSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const dim = players[0].dimension;

  const signBlock = dim.getBlock(targetLocation);

  if (!signBlock) {
    log('Could not find a block at specified location.');
    return -1;
  }
  const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;

  signComponent?.setText(`Basic sign!\nThis is green on the front.`);
}
```

```typescript
import {
  BlockPermutation,
  BlockSignComponent,
  SignSide,
  DyeColor,
  BlockComponentTypes,
  DimensionLocation,
} from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

function addTwoSidedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const signBlock = targetLocation.dimension.getBlock(targetLocation);

  if (!signBlock) {
    log('Could not find a block at specified location.');
    return -1;
  }
  const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;

  if (signComponent) {
    signComponent.setText(`Party Sign!\nThis is green on the front.`);
    signComponent.setText(`Party Sign!\nThis is red on the back.`, SignSide.Back);
    signComponent.setTextDyeColor(DyeColor.Green);
    signComponent.setTextDyeColor(DyeColor.Red, SignSide.Back);

    // players cannot edit sign!
    signComponent.setWaxed(true);
  } else {
    log('Could not find sign component.');
  }
}
```

```typescript
import { BlockSignComponent, BlockComponentTypes, DimensionLocation, RawMessage, RawText } from '@minecraft/server';

function updateSignText(targetLocation: DimensionLocation) {
  const block = targetLocation.dimension.getBlock(targetLocation);
  if (!block) {
    console.warn('Could not find a block at specified location.');
    return;
  }

  const sign = block.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;
  if (sign) {
    // RawMessage
    const helloWorldMessage: RawMessage = { text: 'Hello World' };
    sign.setText(helloWorldMessage);

    // RawText
    const helloWorldText: RawText = { rawtext: [{ text: 'Hello World' }] };
    sign.setText(helloWorldText);

    // Regular string
    sign.setText('Hello World');
  } else {
    console.warn('Could not find a sign component on the block.');
  }
}
```

```typescript
import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

function addTranslatedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const dim = players[0].dimension;

  const signBlock = dim.getBlock(targetLocation);

  if (!signBlock) {
    log('Could not find a block at specified location.');
    return -1;
  }
  const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;

  signComponent?.setText({ translate: 'item.skull.player.name', with: [players[0].name] });
}
```

## Source

```ts
export class BlockSignComponent extends BlockComponent {
    private constructor();
    readonly isWaxed: boolean;
    static readonly componentId = 'minecraft:sign';
    getRawText(side?: SignSide): RawText | undefined;
    getText(side?: SignSide): string | undefined;
    getTextDyeColor(side?: SignSide): DyeColor | undefined;
    setText(message: RawMessage | string, side?: SignSide): void;
    setTextDyeColor(color?: DyeColor, side?: SignSide): void;
    setWaxed(waxed: boolean): void;
}
```

## Extends

- [`BlockComponent`](BlockComponent.md)

## Constructors

### Constructor

> `private` **new BlockSignComponent**(): `BlockSignComponent`

#### Returns

`BlockSignComponent`

#### Overrides

[`BlockComponent`](BlockComponent.md).[`constructor`](BlockComponent.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block.md)

#### Remarks

Block instance that this component pertains to.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent.md).[`block`](BlockComponent.md#block)

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether the component is valid. A component is
considered valid if its owner is valid, in addition to any
addition to any additional validation required by the
component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent.md).[`isValid`](BlockComponent.md#isvalid)

***

### isWaxed

> `readonly` **isWaxed**: `boolean`

#### Remarks

Whether or not players can edit the sign. This happens if a
sign has had a honeycomb used on it or `setWaxed` was called
on the sign.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Identifier of the component.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent.md).[`typeId`](BlockComponent.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:sign"` = `'minecraft:sign'`

## Methods

### getRawText()

> **getRawText**(`side?`): [`RawText`](../interfaces/RawText.md) \| `undefined`

#### Parameters

##### side?

[`SignSide`](../enumerations/SignSide.md)

The side of the sign to read the message from. If not
provided, this will return the message from the front side
of the sign.
Defaults to: 0

#### Returns

[`RawText`](../interfaces/RawText.md) \| `undefined`

#### Remarks

Returns the RawText of the sign if `setText` was called with
a RawMessage or a RawText object, otherwise returns
undefined.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getText()

> **getText**(`side?`): `string` \| `undefined`

#### Parameters

##### side?

[`SignSide`](../enumerations/SignSide.md)

The side of the sign to read the message from. If not
provided, this will return the message from the front side
of the sign.
Defaults to: 0

#### Returns

`string` \| `undefined`

#### Remarks

Returns the text of the sign if `setText` was called with a
string, otherwise returns undefined.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getTextDyeColor()

> **getTextDyeColor**(`side?`): [`DyeColor`](../enumerations/DyeColor.md) \| `undefined`

#### Parameters

##### side?

[`SignSide`](../enumerations/SignSide.md)

The side of the sign to read the dye from. If not provided,
this will return the dye on the front side of the sign.
Defaults to: 0

#### Returns

[`DyeColor`](../enumerations/DyeColor.md) \| `undefined`

#### Remarks

Gets the dye that is on the text or undefined if the sign
has not been dyed.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setText()

> **setText**(`message`, `side?`): `void`

#### Parameters

##### message

`string` \| [`RawMessage`](../interfaces/RawMessage.md)

The message to set on the sign. If set to a string, then
call `getText` to read that string. If set to a RawMessage,
then calling `getRawText` will return a RawText.

##### side?

[`SignSide`](../enumerations/SignSide.md)

The side of the sign the message will be set on. If not
provided, the message will be set on the front side of the
sign.
Defaults to: 0

#### Returns

`void`

#### Remarks

Sets the text of the sign component.

This function can't be called in restricted-execution mode.

#### Throws

Throws if the provided message is greater than 512
characters in length.

#### World Ready

This function can't be called in early-execution mode.

***

### setTextDyeColor()

> **setTextDyeColor**(`color?`, `side?`): `void`

#### Parameters

##### color?

[`DyeColor`](../enumerations/DyeColor.md)

The dye color to apply to the sign or undefined to clear the
dye on the sign.
Defaults to: null

##### side?

[`SignSide`](../enumerations/SignSide.md)

The side of the sign the color will be set on. If not
provided, the color will be set on the front side of the
sign.
Defaults to: 0

#### Returns

`void`

#### Remarks

Sets the dye color of the text.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setWaxed()

> **setWaxed**(`waxed`): `void`

#### Parameters

##### waxed

`boolean`

#### Returns

`void`

#### Remarks

Makes it so players cannot edit this sign.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
