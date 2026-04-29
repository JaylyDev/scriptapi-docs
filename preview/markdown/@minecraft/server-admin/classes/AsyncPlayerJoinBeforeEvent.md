[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-admin](../README.md) / AsyncPlayerJoinBeforeEvent

# Class: AsyncPlayerJoinBeforeEvent

The data available before a player joins the world.

## Source

```ts
export class AsyncPlayerJoinBeforeEvent {
    private constructor();
    readonly name: string;
    readonly persistentId: string;
    allowJoin(): void;
    disallowJoin(reason?: string): void;
    disconnect(reason?: string): void;
    isValid(): boolean;
}
```

## Constructors

### Constructor

> `private` **new AsyncPlayerJoinBeforeEvent**(): `AsyncPlayerJoinBeforeEvent`

#### Returns

`AsyncPlayerJoinBeforeEvent`

## Properties

### name

> `readonly` **name**: `string`

#### Remarks

The player's name

#### World Ready

This property can't be read in early-execution mode.

***

### persistentId

> `readonly` **persistentId**: `string`

#### Remarks

An identifier that can be used to identify a player across
sessions.

#### World Ready

This property can't be read in early-execution mode.

Note: persistentId refers to PlayFab ID in this context.

A PlayFab ID is a unique identifier assigned to each player in the PlayFab ecosystem. PlayFab is a backend platform for game developers, offering services like player authentication, data storage, leaderboards, and more. The PlayFab ID helps track and manage individual player data across games and platforms.

It is used in Minecraft to resolve scoreboard identity and identity of the player in the world.

## Methods

### allowJoin()

> **allowJoin**(): `void`

#### Returns

`void`

#### Remarks

Call this to explicitly allow the player to join the server.
This is useful when player joining is disabled
(`allow-player-joining` is set to `false` when playing on
dedicated server).

#### Throws

This function can throw errors.

[DisconnectedError](DisconnectedError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### disallowJoin()

> **disallowJoin**(`reason?`): `void`

#### Parameters

##### reason?

`string`

#### Returns

`void`

#### Remarks

Call this to disallow the player from joining the server.
This is useful for preventing unauthorized access to the
server.

#### Throws

This function can throw errors.

[DisconnectedError](DisconnectedError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### disconnect()

> **disconnect**(`reason?`): `void`

#### Parameters

##### reason?

`string`

#### Returns

`void`

#### Remarks

Deprecated - use [disallowJoin](#disallowjoin) instead.Call this to
disconnect a player. They will be allowed to try to join
again. They will be allowed to try to join again after being
disconnected.

#### Throws

This function can throw errors.

[DisconnectedError](DisconnectedError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### isValid()

> **isValid**(): `boolean`

#### Returns

`boolean`

#### Remarks

Will return true if the player is still waiting to join the
world. If they disconnect then it will return false.

#### World Ready

This function can't be called in early-execution mode.
