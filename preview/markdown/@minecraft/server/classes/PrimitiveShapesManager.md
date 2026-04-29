[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PrimitiveShapesManager

# Class: PrimitiveShapesManager

**`Beta`**

Primitive Shapes class used to allow adding and removing
text primitives to the world.

## Source

```ts
export class PrimitiveShapesManager {
    private constructor();
    readonly maxShapes: number;
    addText(text: TextPrimitive, dimension?: Dimension): void;
    removeAll(): void;
    removeText(text: TextPrimitive): void;
}
```

## Constructors

### Constructor

> `private` **new PrimitiveShapesManager**(): `PrimitiveShapesManager`

#### Returns

`PrimitiveShapesManager`

## Properties

### maxShapes

> `readonly` **maxShapes**: `number`

#### Remarks

This is the maximum number of allowed primitive shapes.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### addText()

> **addText**(`text`, `dimension?`): `void`

#### Parameters

##### text

[`TextPrimitive`](TextPrimitive.md)

The text primitive to be added.

##### dimension?

[`Dimension`](Dimension-1.md)

#### Returns

`void`

#### Remarks

Adds a new text primitive to the world.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[PrimitiveShapeError](PrimitiveShapeError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### removeAll()

> **removeAll**(): `void`

#### Returns

`void`

#### Remarks

Removes all text primitives from the world.

#### World Ready

This function can't be called in early-execution mode.

***

### removeText()

> **removeText**(`text`): `void`

#### Parameters

##### text

[`TextPrimitive`](TextPrimitive.md)

#### Returns

`void`

#### Remarks

Removes an instance of a text primitive from the world. This
is equivalent to calling remove on the text itself.

#### World Ready

This function can't be called in early-execution mode.
