[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / ScoreboardIdentity

# Class: ScoreboardIdentity

Contains an identity of the scoreboard item.

## Source

```ts
export class ScoreboardIdentity {
    private constructor();
    readonly displayName: string;
    readonly id: number;
    readonly isValid: boolean;
    readonly 'type': ScoreboardIdentityType;
    getEntity(): Entity | undefined;
}
```

## Constructors

### Constructor

> `private` **new ScoreboardIdentity**(): `ScoreboardIdentity`

#### Returns

`ScoreboardIdentity`

## Properties

### displayName

> `readonly` **displayName**: `string`

#### Remarks

Returns the player-visible name of this identity.

#### World Ready

This property can't be read in early-execution mode.

***

### id

> `readonly` **id**: `number`

#### Remarks

Identifier of the scoreboard identity.

#### World Ready

This property can't be read in early-execution mode.

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns true if the ScoreboardIdentity reference is still
valid.

#### World Ready

This property can't be read in early-execution mode.

***

### type

> `readonly` **type**: [`ScoreboardIdentityType`](../enumerations/ScoreboardIdentityType.md)

#### Remarks

Type of the scoreboard identity.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getEntity()

> **getEntity**(): [`Entity`](Entity.md) \| `undefined`

#### Returns

[`Entity`](Entity.md) \| `undefined`

#### Remarks

If the scoreboard identity is an entity or player, returns
the entity that this scoreboard item corresponds to.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
