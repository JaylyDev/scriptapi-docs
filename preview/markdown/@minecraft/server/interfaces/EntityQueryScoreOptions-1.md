[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityQueryScoreOptions

# Interface: EntityQueryScoreOptions

Contains additional options for filtering players based on
their score for an objective.

## Source

```ts
export interface EntityQueryScoreOptions {
    exclude?: boolean;
    maxScore?: number;
    minScore?: number;
    objective?: string;
}
```

## Properties

### exclude?

> `optional` **exclude?**: `boolean`

#### Remarks

If set to true, entities and players within this score range
are excluded from query results.

***

### maxScore?

> `optional` **maxScore?**: `number`

#### Remarks

If defined, only players that have a score equal to or under
maxScore are included.

***

### minScore?

> `optional` **minScore?**: `number`

#### Remarks

If defined, only players that have a score equal to or over
minScore are included.

***

### objective?

> `optional` **objective?**: `string`

#### Remarks

Identifier of the scoreboard objective to filter on.
