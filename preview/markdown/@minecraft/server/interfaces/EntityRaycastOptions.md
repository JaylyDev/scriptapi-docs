[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / EntityRaycastOptions

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

- [`EntityFilter`](EntityFilter.md)

## Properties

### excludeFamilies?

> `optional` **excludeFamilies?**: `string`[]

#### Remarks

Excludes entities that match one or more of the specified
families.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`excludeFamilies`](EntityFilter.md#excludefamilies)

***

### excludeGameModes?

> `optional` **excludeGameModes?**: [`GameMode`](../enumerations/GameMode.md)[]

#### Remarks

Excludes entities if have a specific gamemode that matches
the specified gamemode.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`excludeGameModes`](EntityFilter.md#excludegamemodes)

***

### excludeNames?

> `optional` **excludeNames?**: `string`[]

#### Remarks

Excludes entities that have a name that match one of the
specified values.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`excludeNames`](EntityFilter.md#excludenames)

***

### excludeTags?

> `optional` **excludeTags?**: `string`[]

#### Remarks

Excludes entities with a tag that matches one of the
specified values.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`excludeTags`](EntityFilter.md#excludetags)

***

### excludeTypes?

> `optional` **excludeTypes?**: `string`[]

#### Remarks

Excludes entities if they are one of the specified types.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`excludeTypes`](EntityFilter.md#excludetypes)

***

### families?

> `optional` **families?**: `string`[]

#### Remarks

If specified, includes entities that match all of the
specified families.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`families`](EntityFilter.md#families)

***

### gameMode?

> `optional` **gameMode?**: [`GameMode`](../enumerations/GameMode.md)

#### Remarks

If specified, includes entities with a gamemode that matches
the specified gamemode.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`gameMode`](EntityFilter.md#gamemode)

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

[`EntityFilter`](EntityFilter.md).[`maxHorizontalRotation`](EntityFilter.md#maxhorizontalrotation)

***

### maxLevel?

> `optional` **maxLevel?**: `number`

#### Remarks

If defined, only players that have at most this level are
returned.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`maxLevel`](EntityFilter.md#maxlevel)

***

### maxVerticalRotation?

> `optional` **maxVerticalRotation?**: `number`

#### Remarks

If specified, only entities that have at most this vertical
rotation are returned.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`maxVerticalRotation`](EntityFilter.md#maxverticalrotation)

***

### minHorizontalRotation?

> `optional` **minHorizontalRotation?**: `number`

#### Remarks

If specified, will only include entities that have at a
minimum this horizontal rotation.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`minHorizontalRotation`](EntityFilter.md#minhorizontalrotation)

***

### minLevel?

> `optional` **minLevel?**: `number`

#### Remarks

If defined, only players that have at least this level are
returned.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`minLevel`](EntityFilter.md#minlevel)

***

### minVerticalRotation?

> `optional` **minVerticalRotation?**: `number`

#### Remarks

If specified, will only include entities that have at least
this vertical rotation.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`minVerticalRotation`](EntityFilter.md#minverticalrotation)

***

### name?

> `optional` **name?**: `string`

#### Remarks

Includes entities with the specified name.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`name`](EntityFilter.md#name)

***

### propertyOptions?

> `optional` **propertyOptions?**: [`EntityQueryPropertyOptions`](EntityQueryPropertyOptions.md)[]

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`propertyOptions`](EntityFilter.md#propertyoptions)

***

### scoreOptions?

> `optional` **scoreOptions?**: [`EntityQueryScoreOptions`](EntityQueryScoreOptions.md)[]

#### Remarks

Gets/sets a collection of EntityQueryScoreOptions objects
with filters for specific scoreboard objectives.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`scoreOptions`](EntityFilter.md#scoreoptions)

***

### tags?

> `optional` **tags?**: `string`[]

#### Remarks

Includes entities that match all of the specified tags.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`tags`](EntityFilter.md#tags)

***

### type?

> `optional` **type?**: `string`

#### Remarks

If defined, entities that match this type are included.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`type`](EntityFilter.md#type)
