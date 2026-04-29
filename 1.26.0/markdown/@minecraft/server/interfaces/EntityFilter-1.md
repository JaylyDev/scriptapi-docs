[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityFilter

# Interface: EntityFilter

Contains options for filtering entities.

## Extended by

- [`EntityQueryOptions`](EntityQueryOptions-1.md)
- [`EntityRaycastOptions`](EntityRaycastOptions-1.md)

## Properties

### excludeFamilies?

> `optional` **excludeFamilies?**: `string`[]

#### Remarks

Excludes entities that match one or more of the specified
families.

***

### excludeGameModes?

> `optional` **excludeGameModes?**: [`GameMode`](../enumerations/GameMode-1.md)[]

#### Remarks

Excludes entities if have a specific gamemode that matches
the specified gamemode.

***

### excludeNames?

> `optional` **excludeNames?**: `string`[]

#### Remarks

Excludes entities that have a name that match one of the
specified values.

***

### excludeTags?

> `optional` **excludeTags?**: `string`[]

#### Remarks

Excludes entities with a tag that matches one of the
specified values.

***

### excludeTypes?

> `optional` **excludeTypes?**: `string`[]

#### Remarks

Excludes entities if they are one of the specified types.

***

### families?

> `optional` **families?**: `string`[]

#### Remarks

If specified, includes entities that match all of the
specified families.

***

### gameMode?

> `optional` **gameMode?**: [`GameMode`](../enumerations/GameMode-1.md)

#### Remarks

If specified, includes entities with a gamemode that matches
the specified gamemode.

***

### maxHorizontalRotation?

> `optional` **maxHorizontalRotation?**: `number`

#### Remarks

If specified, will only include entities that have at most
this horizontal rotation.

***

### maxLevel?

> `optional` **maxLevel?**: `number`

#### Remarks

If defined, only players that have at most this level are
returned.

***

### maxVerticalRotation?

> `optional` **maxVerticalRotation?**: `number`

#### Remarks

If specified, only entities that have at most this vertical
rotation are returned.

***

### minHorizontalRotation?

> `optional` **minHorizontalRotation?**: `number`

#### Remarks

If specified, will only include entities that have at a
minimum this horizontal rotation.

***

### minLevel?

> `optional` **minLevel?**: `number`

#### Remarks

If defined, only players that have at least this level are
returned.

***

### minVerticalRotation?

> `optional` **minVerticalRotation?**: `number`

#### Remarks

If specified, will only include entities that have at least
this vertical rotation.

***

### name?

> `optional` **name?**: `string`

#### Remarks

Includes entities with the specified name.

***

### propertyOptions?

> `optional` **propertyOptions?**: [`EntityQueryPropertyOptions`](EntityQueryPropertyOptions-1.md)[]

***

### scoreOptions?

> `optional` **scoreOptions?**: [`EntityQueryScoreOptions`](EntityQueryScoreOptions-1.md)[]

#### Remarks

Gets/sets a collection of EntityQueryScoreOptions objects
with filters for specific scoreboard objectives.

***

### tags?

> `optional` **tags?**: `string`[]

#### Remarks

Includes entities that match all of the specified tags.

***

### type?

> `optional` **type?**: `string`

#### Remarks

If defined, entities that match this type are included.
