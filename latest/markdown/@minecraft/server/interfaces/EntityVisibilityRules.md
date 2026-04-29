[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / EntityVisibilityRules

# Interface: EntityVisibilityRules

**`Beta`**

Controls when a waypoint is visible based on the state of
the entity it tracks. These rules allow filtering waypoint
visibility by entity conditions like sneaking, invisibility,
and death state.

## Source

```ts
export interface EntityVisibilityRules {
    showDead?: boolean;
    showInvisible?: boolean;
    showSneaking?: boolean;
}
```

## Extended by

- [`PlayerVisibilityRules`](PlayerVisibilityRules.md)

## Properties

### showDead?

> `optional` **showDead?**: `boolean`

#### Remarks

Controls whether the waypoint is shown when the tracked
entity is dead. If undefined, defaults to true.

***

### showInvisible?

> `optional` **showInvisible?**: `boolean`

#### Remarks

Controls whether the waypoint is shown when the tracked
entity is invisible. If undefined, defaults to true.

***

### showSneaking?

> `optional` **showSneaking?**: `boolean`

#### Remarks

Controls whether the waypoint is shown when the tracked
entity is sneaking. If undefined, defaults to true.
