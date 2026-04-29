[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityRaycastOptions

# Interface: EntityRaycastOptions

Contains additional options for an entity raycast operation.

## Source

```ts
export interface EntityRaycastOptions extends EntityFilter {
    ignoreBlockCollision?: boolean;
    includeLiquidBlocks?: boolean;
    includePassableBlocks?: boolean;
    maxDistance?: number;
}
```

## Extends

- [`EntityFilter`](EntityFilter-1.md)

## Properties

### excludeFamilies?

> `optional` **excludeFamilies?**: `string`[]

#### Remarks

Excludes entities that match one or more of the specified
families.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`excludeFamilies`](EntityFilter-1.md#excludefamilies)

***

### excludeGameModes?

> `optional` **excludeGameModes?**: [`GameMode`](../enumerations/GameMode-1.md)[]

#### Remarks

Excludes entities if have a specific gamemode that matches
the specified gamemode.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`excludeGameModes`](EntityFilter-1.md#excludegamemodes)

***

### excludeNames?

> `optional` **excludeNames?**: `string`[]

#### Remarks

Excludes entities that have a name that match one of the
specified values.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`excludeNames`](EntityFilter-1.md#excludenames)

***

### excludeTags?

> `optional` **excludeTags?**: `string`[]

#### Remarks

Excludes entities with a tag that matches one of the
specified values.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`excludeTags`](EntityFilter-1.md#excludetags)

***

### excludeTypes?

> `optional` **excludeTypes?**: `string`[]

#### Remarks

Excludes entities if they are one of the specified types.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`excludeTypes`](EntityFilter-1.md#excludetypes)

***

### families?

> `optional` **families?**: `string`[]

#### Remarks

If specified, includes entities that match all of the
specified families.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`families`](EntityFilter-1.md#families)

***

### gameMode?

> `optional` **gameMode?**: [`GameMode`](../enumerations/GameMode-1.md)

#### Remarks

If specified, includes entities with a gamemode that matches
the specified gamemode.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`gameMode`](EntityFilter-1.md#gamemode)

***

### ignoreBlockCollision?

> `optional` **ignoreBlockCollision?**: `boolean`

#### Remarks

If true, blocks will not be considered as blocks that 'stop'
the raycast.

***

### includeLiquidBlocks?

> `optional` **includeLiquidBlocks?**: `boolean`

#### Remarks

If true, liquid blocks will be considered as blocks that
'stop' the raycast.

***

### includePassableBlocks?

> `optional` **includePassableBlocks?**: `boolean`

#### Remarks

If true, passable blocks like vines and flowers will be
considered as blocks that 'stop' the raycast.

***

### maxDistance?

> `optional` **maxDistance?**: `number`

#### Remarks

Maximum distance, in blocks, to process the raycast.

***

### maxHorizontalRotation?

> `optional` **maxHorizontalRotation?**: `number`

#### Remarks

If specified, will only include entities that have at most
this horizontal rotation.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`maxHorizontalRotation`](EntityFilter-1.md#maxhorizontalrotation)

***

### maxLevel?

> `optional` **maxLevel?**: `number`

#### Remarks

If defined, only players that have at most this level are
returned.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`maxLevel`](EntityFilter-1.md#maxlevel)

***

### maxVerticalRotation?

> `optional` **maxVerticalRotation?**: `number`

#### Remarks

If specified, only entities that have at most this vertical
rotation are returned.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`maxVerticalRotation`](EntityFilter-1.md#maxverticalrotation)

***

### minHorizontalRotation?

> `optional` **minHorizontalRotation?**: `number`

#### Remarks

If specified, will only include entities that have at a
minimum this horizontal rotation.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`minHorizontalRotation`](EntityFilter-1.md#minhorizontalrotation)

***

### minLevel?

> `optional` **minLevel?**: `number`

#### Remarks

If defined, only players that have at least this level are
returned.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`minLevel`](EntityFilter-1.md#minlevel)

***

### minVerticalRotation?

> `optional` **minVerticalRotation?**: `number`

#### Remarks

If specified, will only include entities that have at least
this vertical rotation.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`minVerticalRotation`](EntityFilter-1.md#minverticalrotation)

***

### name?

> `optional` **name?**: `string`

#### Remarks

Includes entities with the specified name.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`name`](EntityFilter-1.md#name)

***

### propertyOptions?

> `optional` **propertyOptions?**: [`EntityQueryPropertyOptions`](EntityQueryPropertyOptions-1.md)[]

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`propertyOptions`](EntityFilter-1.md#propertyoptions)

***

### scoreOptions?

> `optional` **scoreOptions?**: [`EntityQueryScoreOptions`](EntityQueryScoreOptions-1.md)[]

#### Remarks

Gets/sets a collection of EntityQueryScoreOptions objects
with filters for specific scoreboard objectives.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`scoreOptions`](EntityFilter-1.md#scoreoptions)

***

### tags?

> `optional` **tags?**: `string`[]

#### Remarks

Includes entities that match all of the specified tags.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`tags`](EntityFilter-1.md#tags)

***

### type?

> `optional` **type?**: `string`

#### Remarks

If defined, entities that match this type are included.

#### Inherited from

[`EntityFilter`](EntityFilter-1.md).[`type`](EntityFilter-1.md#type)
