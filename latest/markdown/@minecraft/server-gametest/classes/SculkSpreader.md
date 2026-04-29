[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-gametest](../README.md) / SculkSpreader

# Class: SculkSpreader

Implements a class that can be used for testing sculk
spreading behaviors. This sculk spreader class can drive the
growth of sculk around a particular block.

## Source

```ts
export class SculkSpreader {
    private constructor();
    readonly maxCharge: number;
    addCursorsWithOffset(offset: minecraftserver.Vector3, charge: number): void;
    getCursorPosition(index: number): minecraftserver.Vector3;
    getNumberOfCursors(): number;
    getTotalCharge(): number;
}
```

## Constructors

### Constructor

> `private` **new SculkSpreader**(): `SculkSpreader`

#### Returns

`SculkSpreader`

## Properties

### maxCharge

> `readonly` **maxCharge**: `number`

#### Remarks

Gets the maximum charge of a sculk spreader.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### addCursorsWithOffset()

> **addCursorsWithOffset**(`offset`, `charge`): `void`

#### Parameters

##### offset

[`Vector3`](../../server/interfaces/Vector3.md)

##### charge

`number`

#### Returns

`void`

#### Remarks

Adds a cursor - which is a notional waypoint that the sculk
will spread in the direction of.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### getCursorPosition()

> **getCursorPosition**(`index`): [`Vector3`](../../server/interfaces/Vector3.md)

#### Parameters

##### index

`number`

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

Retrieves the current position of the specified cursor.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getNumberOfCursors()

> **getNumberOfCursors**(): `number`

#### Returns

`number`

#### Remarks

Returns a number of overall cursors for this sculk spreader.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getTotalCharge()

> **getTotalCharge**(): `number`

#### Returns

`number`

#### Remarks

Gets the total current charge of the sculk spreader.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
