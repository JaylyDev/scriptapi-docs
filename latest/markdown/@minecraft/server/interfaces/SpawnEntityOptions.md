[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / SpawnEntityOptions

# Interface: SpawnEntityOptions

Contains additional options for spawning an Entity.

## Source

```ts
export interface SpawnEntityOptions {
    initialPersistence?: boolean;
    initialRotation?: number;
    spawnEvent?: string;
}
```

## Properties

### initialPersistence?

> `optional` **initialPersistence?**: `boolean`

#### Remarks

Optional boolean which determines if this entity should
persist in the game world. Persistence prevents the entity
from automatically despawning.

***

### initialRotation?

> `optional` **initialRotation?**: `number`

#### Remarks

Optional initial rotation, in degrees, to set on the entity
when it spawns.

***

### spawnEvent?

> `optional` **spawnEvent?**: `string`

#### Remarks

Optional spawn event to send to the entity after it is
spawned.
