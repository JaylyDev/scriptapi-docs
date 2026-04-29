[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-admin](../README.md) / LevelStorageQuerySnapshotFile

# Class: LevelStorageQuerySnapshotFile

Contains information about a file that was gathered during a
snapshot.

## Source

```ts
export class LevelStorageQuerySnapshotFile {
    private constructor();
    readonly fileName: string;
    readonly fileSize: number;
}
```

## Constructors

### Constructor

> `private` **new LevelStorageQuerySnapshotFile**(): `LevelStorageQuerySnapshotFile`

#### Returns

`LevelStorageQuerySnapshotFile`

## Properties

### fileName

> `readonly` **fileName**: `string`

#### Remarks

The path to the file in the snapshot.

#### World Ready

This property can't be read in early-execution mode.

***

### fileSize

> `readonly` **fileSize**: `number`

#### Remarks

The size of the file in the snapshot.

#### World Ready

This property can't be read in early-execution mode.
