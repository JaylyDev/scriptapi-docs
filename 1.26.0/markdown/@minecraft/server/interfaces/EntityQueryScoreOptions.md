[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EntityQueryScoreOptions

# Interface: EntityQueryScoreOptions

Contains additional options for filtering players based on
their score for an objective.

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
