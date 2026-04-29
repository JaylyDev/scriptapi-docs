[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-admin](../README.md) / DedicatedServerUtils

# Class: DedicatedServerUtils

Contains apis that are only available when in Bedrock
Dedicated Server.

## Source

```ts
export class DedicatedServerUtils {
    private constructor();
    readonly allowList: AllowList;
    readonly levelStorage: LevelStorage;
    stopServer(): void;
}
```

## Constructors

### Constructor

> `private` **new DedicatedServerUtils**(): `DedicatedServerUtils`

#### Returns

`DedicatedServerUtils`

## Properties

### allowList

> `readonly` **allowList**: [`AllowList`](AllowList.md)

#### Remarks

Returns an object that manages the server's allow list.

#### World Ready

This property can't be read in early-execution mode.

***

### levelStorage

> `readonly` **levelStorage**: [`LevelStorage`](LevelStorage.md)

#### Remarks

Returns an object that manages the level's storage.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### stopServer()

> **stopServer**(): `void`

#### Returns

`void`

#### Remarks

Shuts down the dedicated server.

#### World Ready

This function can't be called in early-execution mode.
