[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / BlockRedstoneProducerComponent

# Class: BlockRedstoneProducerComponent

Represents a block that can output a redstone signal.

## Source

```ts
export class BlockRedstoneProducerComponent extends BlockComponent {
    private constructor();
    readonly power: number;
    static readonly componentId = 'minecraft:redstone_producer';
    getConnectedFaces(): Direction[];
    getStronglyPoweredFace(): Direction | undefined;
}
```

## Extends

- [`BlockComponent`](BlockComponent-1.md)

## Constructors

### Constructor

> `private` **new BlockRedstoneProducerComponent**(): `BlockRedstoneProducerComponent`

#### Returns

`BlockRedstoneProducerComponent`

#### Overrides

[`BlockComponent`](BlockComponent-1.md).[`constructor`](BlockComponent-1.md#constructor)

## Properties

### block

> `readonly` **block**: [`Block`](Block-1.md)

#### Remarks

Block instance that this component pertains to.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`BlockComponent`](BlockComponent-1.md).[`block`](BlockComponent-1.md#block)

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

[`BlockComponent`](BlockComponent-1.md).[`isValid`](BlockComponent-1.md#isvalid)

***

### power

> `readonly` **power**: `number`

#### Remarks

Gets the power that this block outputs to circuit system.
Returns error if block is no longer valid or if block
doesn't have a 'minecraft:redstone_producer' component.

#### Throws

This property can throw when used.

[InvalidBlockComponentError](InvalidBlockComponentError-1.md)

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

[`BlockComponent`](BlockComponent-1.md).[`typeId`](BlockComponent-1.md#typeid)

***

### componentId

> `readonly` `static` **componentId**: `"minecraft:redstone_producer"` = `'minecraft:redstone_producer'`

## Methods

### getConnectedFaces()

> **getConnectedFaces**(): [`Direction`](../enumerations/Direction-1.md)[]

#### Returns

[`Direction`](../enumerations/Direction-1.md)[]

#### Remarks

Gets the faces of this block that can connect to the circuit
and output power. Returns error if block is no longer valid
or if block doesn't have a 'minecraft:redstone_producer'
component.

#### Throws

This function can throw errors.

[InvalidBlockComponentError](InvalidBlockComponentError-1.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getStronglyPoweredFace()

> **getStronglyPoweredFace**(): [`Direction`](../enumerations/Direction-1.md) \| `undefined`

#### Returns

[`Direction`](../enumerations/Direction-1.md) \| `undefined`

#### Remarks

Gets the block face that strongly powers the block touching
it. If the 'minecraft:redstone_producer' block component
hasn't defined a 'strongly_powered_face' then this method
returns 'undefined'. Returns error if block is no longer
valid or if block doesn't have a
'minecraft:redstone_producer' component.

#### Throws

This function can throw errors.

[InvalidBlockComponentError](InvalidBlockComponentError-1.md)

#### World Ready

This function can't be called in early-execution mode.
