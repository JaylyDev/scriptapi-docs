[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / EntityQueryOptions

# Interface: EntityQueryOptions

Contains options for selecting entities within an area.

## Examples

```typescript
import { DimensionLocation } from "@minecraft/server";

function blockConditional(targetLocation: DimensionLocation) {
  targetLocation.dimension
    .getEntities({
      type: "fox",
    })
    .filter((entity) => {
      const block = targetLocation.dimension.getBlock({
        x: entity.location.x,
        y: entity.location.y - 1,
        z: entity.location.z,
      });

      return block !== undefined && block.matches("minecraft:stone");
    })
    .forEach((entity) => {
      targetLocation.dimension.spawnEntity("salmon", entity.location);
    });
}
```

```typescript
import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function findEntitiesHavingPropertyEqualsTo(
    targetLocation: DimensionLocation
) {
  // Minecraft bees have a has_nectar boolean property
  const queryOption: EntityQueryOptions = {
    propertyOptions: [{ propertyId: "minecraft:has_nectar", value: { equals: true } }],
  };

  const entities = targetLocation.dimension.getEntities(queryOption);
}
```

```typescript
import { DimensionLocation } from "@minecraft/server";

function playSoundChained(targetLocation: DimensionLocation) {
  const targetPlayers = targetLocation.dimension.getPlayers();
  const originEntities = targetLocation.dimension.getEntities({
    type: "armor_stand",
    name: "myArmorStand",
    tags: ["dummyTag1"],
    excludeTags: ["dummyTag2"],
  });

  originEntities.forEach((entity) => {
    targetPlayers.forEach((player) => {
      player.playSound("raid.horn");
    });
  });
}
```

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function setScoreboardChained(
    targetLocation: DimensionLocation
) {
  const objective = world.scoreboard.addObjective("scoreObjective1", "dummy");
  targetLocation.dimension
    .getEntities({
      type: "armor_stand",
      name: "myArmorStand",
    })
    .forEach((entity) => {
      if (entity.scoreboardIdentity !== undefined) {
        objective.setScore(entity.scoreboardIdentity, -1);
      }
    });
}
```

```typescript
import { DimensionLocation } from "@minecraft/server";

function summonMobChained(targetLocation: DimensionLocation) {
  const armorStandArray = targetLocation.dimension.getEntities({
    type: "armor_stand",
  });
  const playerArray = targetLocation.dimension.getPlayers({
    location: { x: 0, y: -60, z: 0 },
    closest: 4,
    maxDistance: 15,
  });
  armorStandArray.forEach((entity) => {
    playerArray.forEach((player) => {
      targetLocation.dimension.spawnEntity("pig", {
        x: player.location.x + 1,
        y: player.location.y,
        z: player.location.z,
      });
    });
  });
}
```

```typescript
import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function bounceSkeletons(targetLocation: DimensionLocation) {
  const mobs = ["creeper", "skeleton", "sheep"];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    targetLocation.dimension.spawnEntity(mobs[i % mobs.length], targetLocation);
  }

  const eqo: EntityQueryOptions = {
    type: "skeleton",
  };

  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.applyKnockback(0, 0, 0, 1);
  }
}
```

```typescript
import { EntityQueryOptions, DimensionLocation } from "@minecraft/server";

function tagsQuery(targetLocation: DimensionLocation) {
  const mobs = ["creeper", "skeleton", "sheep"];

  // create some sample mob data
  for (let i = 0; i < 10; i++) {
    const mobTypeId = mobs[i % mobs.length];
    const entity = targetLocation.dimension.spawnEntity(mobTypeId, targetLocation);
    entity.addTag("mobparty." + mobTypeId);
  }

  const eqo: EntityQueryOptions = {
    tags: ["mobparty.skeleton"],
  };

  for (const entity of targetLocation.dimension.getEntities(eqo)) {
    entity.kill();
  }
}
```

```typescript
import { EntityItemComponent, EntityComponentTypes, DimensionLocation } from "@minecraft/server";

function testThatEntityIsFeatherItem(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const items = targetLocation.dimension.getEntities({
    location: targetLocation,
    maxDistance: 20,
  });

  for (const item of items) {
    const itemComp = item.getComponent(EntityComponentTypes.Item) as EntityItemComponent;

    if (itemComp) {
      if (itemComp.itemStack.typeId.endsWith("feather")) {
        log("Success! Found a feather", 1);
      }
    }
  }
}
```

## Extends

- [`EntityFilter`](EntityFilter.md)

## Properties

### closest?

> `optional` **closest?**: `number`

#### Remarks

Limits the number of entities to return, opting for the
closest N entities as specified by this property. The
location value must also be specified on the query options
object.

***

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

### farthest?

> `optional` **farthest?**: `number`

#### Remarks

Limits the number of entities to return, opting for the
farthest N entities as specified by this property. The
location value must also be specified on the query options
object.

***

### gameMode?

> `optional` **gameMode?**: [`GameMode`](../enumerations/GameMode.md)

#### Remarks

If specified, includes entities with a gamemode that matches
the specified gamemode.

#### Inherited from

[`EntityFilter`](EntityFilter.md).[`gameMode`](EntityFilter.md#gamemode)

***

### location?

> `optional` **location?**: [`Vector3`](Vector3.md)

#### Remarks

Adds a seed location to the query that is used in
conjunction with closest, farthest, limit, volume, and
distance properties.

***

### maxDistance?

> `optional` **maxDistance?**: `number`

#### Remarks

If specified, includes entities that are less than this
distance away from the location specified in the location
property.

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

### minDistance?

> `optional` **minDistance?**: `number`

#### Remarks

If specified, includes entities that are least this distance
away from the location specified in the location property.

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

***

### volume?

> `optional` **volume?**: [`Vector3`](Vector3.md)

#### Remarks

In conjunction with location, specified a cuboid volume of
entities to include.
