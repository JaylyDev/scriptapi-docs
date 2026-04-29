[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / Effect

# Class: Effect

Represents an effect - like poison - that has been added to
an Entity.

## Source

```ts
export class Effect {
    private constructor();
    readonly amplifier: number;
    readonly displayName: string;
    readonly duration: number;
    readonly isValid: boolean;
    readonly typeId: string;
}
```

## Constructors

### Constructor

> `private` **new Effect**(): `Effect`

#### Returns

`Effect`

## Properties

### amplifier

> `readonly` **amplifier**: `number`

#### Remarks

Gets an amplifier that may have been applied to this effect.
Sample values range typically from 0 to 4. Example: The
effect 'Jump Boost II' will have an amplifier value of 1.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### displayName

> `readonly` **displayName**: `string`

#### Remarks

Gets the player-friendly name of this effect.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### duration

> `readonly` **duration**: `number`

#### Remarks

Gets the entire specified duration, in ticks, of this
effect. There are 20 ticks per second. Use [TicksPerSecond](../variables/TicksPerSecond.md) constant to convert between ticks and
seconds.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns whether an effect instance is available for use in
this context.

#### World Ready

This property can't be read in early-execution mode.

***

### typeId

> `readonly` **typeId**: `string`

#### Remarks

Gets the type id of this effect.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.
