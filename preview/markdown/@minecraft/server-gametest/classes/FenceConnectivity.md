[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-gametest](../README.md) / FenceConnectivity

# Class: FenceConnectivity

Returns information about whether this fence is connected to
other fences in several directions.

## Source

```ts
export class FenceConnectivity {
    private constructor();
    readonly east: boolean;
    readonly north: boolean;
    readonly south: boolean;
    readonly west: boolean;
}
```

## Constructors

### Constructor

> `private` **new FenceConnectivity**(): `FenceConnectivity`

#### Returns

`FenceConnectivity`

## Properties

### east

> `readonly` **east**: `boolean`

#### Remarks

Represents whether this fence block is connected to another
fence to the east (x + 1).

#### World Ready

This property can't be read in early-execution mode.

***

### north

> `readonly` **north**: `boolean`

#### Remarks

Represents whether this fence block is connected to another
fence to the north (z - 1).

#### World Ready

This property can't be read in early-execution mode.

***

### south

> `readonly` **south**: `boolean`

#### Remarks

Represents whether this fence block is connected to another
fence to the south (z + 1).

#### World Ready

This property can't be read in early-execution mode.

***

### west

> `readonly` **west**: `boolean`

#### Remarks

Represents whether this fence block is connected to another
fence to the west (x - 1).

#### World Ready

This property can't be read in early-execution mode.
