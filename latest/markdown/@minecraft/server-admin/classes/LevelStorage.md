[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-admin](../README.md) / LevelStorage

# Class: LevelStorage

Controls how the server saves to disk. Only available on
dedicated server.

## Source

```ts
export class LevelStorage {
    private constructor();
    saveHold(): void;
    saveQuery(): LevelStorageQuerySnapshotFile[];
    saveResume(): void;
}
```

## Constructors

### Constructor

> `private` **new LevelStorage**(): `LevelStorage`

#### Returns

`LevelStorage`

## Methods

### saveHold()

> **saveHold**(): `void`

#### Returns

`void`

#### Remarks

Disables the server writing to the world files and begins
creating a snapshot.

#### Throws

This function can throw errors.

[LevelStorageSaveStateChangeError](LevelStorageSaveStateChangeError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### saveQuery()

> **saveQuery**(): [`LevelStorageQuerySnapshotFile`](LevelStorageQuerySnapshotFile.md)[]

#### Returns

[`LevelStorageQuerySnapshotFile`](LevelStorageQuerySnapshotFile.md)[]

#### Remarks

Returns the path and size of every file in the current
snapshot if a snapshot is being taken.

#### Throws

This function can throw errors.

[LevelStorageSaveStateChangeError](LevelStorageSaveStateChangeError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### saveResume()

> **saveResume**(): `void`

#### Returns

`void`

#### Remarks

Re-enables server writing world state to files and removes
snapshot.

#### Throws

This function can throw errors.

[LevelStorageSaveStateChangeError](LevelStorageSaveStateChangeError.md)

#### World Ready

This function can't be called in early-execution mode.
