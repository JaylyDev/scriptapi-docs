[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ScoreboardScoreInfo

# Class: ScoreboardScoreInfo

Contains a pair of a scoreboard participant and its
respective score.

## Source

```ts
export class ScoreboardScoreInfo {
    private constructor();
    readonly participant: ScoreboardIdentity;
    readonly score: number;
}
```

## Constructors

### Constructor

> `private` **new ScoreboardScoreInfo**(): `ScoreboardScoreInfo`

#### Returns

`ScoreboardScoreInfo`

## Properties

### participant

> `readonly` **participant**: [`ScoreboardIdentity`](ScoreboardIdentity-1.md)

#### Remarks

This scoreboard participant for this score.

#### World Ready

This property can't be read in early-execution mode.

***

### score

> `readonly` **score**: `number`

#### Remarks

Score value of the identity for this objective.

#### World Ready

This property can't be read in early-execution mode.
