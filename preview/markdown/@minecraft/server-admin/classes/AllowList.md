[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-admin](../README.md) / AllowList

# Class: AllowList

Controls the allow list for the server. Only available on
dedicated server.

## Source

```ts
export class AllowList {
    private constructor();
    enabled: boolean;
    add(player: minecraftserver.Player | string): void;
    contains(player: minecraftserver.Player | string): boolean;
    reloadFile(): void;
    remove(player: minecraftserver.Player | string): void;
}
```

## Constructors

### Constructor

> `private` **new AllowList**(): `AllowList`

#### Returns

`AllowList`

## Properties

### enabled

> **enabled**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### add()

> **add**(`player`): `void`

#### Parameters

##### player

`string` \| [`Player`](../../server/classes/Player.md)

Player or player name that should be added to the allow
list.

#### Returns

`void`

#### Remarks

Adds a player to the server's allow list.

#### Throws

This function can throw errors.

[AllowListModificationError](AllowListModificationError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### contains()

> **contains**(`player`): `boolean`

#### Parameters

##### player

`string` \| [`Player`](../../server/classes/Player.md)

Player or player name that should be checked for.

#### Returns

`boolean`

#### Remarks

Returns if the player is in the server's allow list.

#### Throws

This function can throw errors.

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### reloadFile()

> **reloadFile**(): `void`

#### Returns

`void`

#### Remarks

Reloads the server's allow list from disk.

#### Throws

This function can throw errors.

[AllowListFileReloadError](AllowListFileReloadError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### remove()

> **remove**(`player`): `void`

#### Parameters

##### player

`string` \| [`Player`](../../server/classes/Player.md)

Player or player name that should be removed from the allow
list.

#### Returns

`void`

#### Remarks

Removes a player from the server's allow list.

#### Throws

This function can throw errors.

[AllowListModificationError](AllowListModificationError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.
