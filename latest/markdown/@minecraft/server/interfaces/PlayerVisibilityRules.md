[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerVisibilityRules

# Interface: PlayerVisibilityRules

**`Beta`**

Controls when a waypoint is visible based on player-specific
states. Extends [EntityVisibilityRules](EntityVisibilityRules.md) with
additional rules for player-only states like hidden mode and
spectator mode.

## Source

```ts
export interface PlayerVisibilityRules extends EntityVisibilityRules {
    showHidden?: boolean;
    showSpectator?: boolean;
    showSpectatorToSpectator?: boolean;
}
```

## Extends

- [`EntityVisibilityRules`](EntityVisibilityRules.md)

## Properties

### showDead?

> `optional` **showDead?**: `boolean`

#### Remarks

Controls whether the waypoint is shown when the tracked
entity is dead. If undefined, defaults to true.

#### Inherited from

[`EntityVisibilityRules`](EntityVisibilityRules.md).[`showDead`](EntityVisibilityRules.md#showdead)

***

### showHidden?

> `optional` **showHidden?**: `boolean`

#### Remarks

Controls whether the waypoint is shown when the tracked
player is hidden. If undefined, defaults to true.

***

### showInvisible?

> `optional` **showInvisible?**: `boolean`

#### Remarks

Controls whether the waypoint is shown when the tracked
entity is invisible. If undefined, defaults to true.

#### Inherited from

[`EntityVisibilityRules`](EntityVisibilityRules.md).[`showInvisible`](EntityVisibilityRules.md#showinvisible)

***

### showSneaking?

> `optional` **showSneaking?**: `boolean`

#### Remarks

Controls whether the waypoint is shown when the tracked
entity is sneaking. If undefined, defaults to true.

#### Inherited from

[`EntityVisibilityRules`](EntityVisibilityRules.md).[`showSneaking`](EntityVisibilityRules.md#showsneaking)

***

### showSpectator?

> `optional` **showSpectator?**: `boolean`

#### Remarks

Controls whether the waypoint is shown when the tracked
player is in spectator mode. If undefined, defaults to true.

***

### showSpectatorToSpectator?

> `optional` **showSpectatorToSpectator?**: `boolean`

#### Remarks

Controls whether the waypoint is shown when a spectator is
viewing another spectator player. If undefined, defaults to
true.
