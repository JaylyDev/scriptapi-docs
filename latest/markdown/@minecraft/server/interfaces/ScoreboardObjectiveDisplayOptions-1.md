[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / ScoreboardObjectiveDisplayOptions

# Interface: ScoreboardObjectiveDisplayOptions

Contains additional options for how a scoreboard should be
displayed within its display slot.

## Source

```ts
export interface ScoreboardObjectiveDisplayOptions {
    objective: ScoreboardObjective;
    sortOrder?: ObjectiveSortOrder;
}
```

## Properties

### objective

> **objective**: [`ScoreboardObjective`](../classes/ScoreboardObjective-1.md)

#### Remarks

Objective to be displayed.

***

### sortOrder?

> `optional` **sortOrder?**: [`ObjectiveSortOrder`](../enumerations/ObjectiveSortOrder-1.md)

#### Remarks

The sort order to display the objective items within.
