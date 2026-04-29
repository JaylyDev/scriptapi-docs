[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ICollectionTreeFolder

# Interface: ICollectionTreeFolder

Container for collection items

## Source

```ts
export interface ICollectionTreeFolder {
    readonly entryCount: number;
    readonly expanded: boolean;
    readonly folderCount: number;
    readonly id: string;
    readonly parent: ICollectionTreeFolder | undefined;
    readonly selected: boolean;
    readonly title: LocalizedString;
    readonly userData: unknown;
    addEntry(options: ICollectionTreeEntryOptions): ICollectionTreeEntry;
    addFolder(options: ICollectionTreeFolderOptions): ICollectionTreeFolder;
    forEachEntry(callback: (entry: ICollectionTreeEntry, index: number) => boolean): void;
    forEachFolder(callback: (folder: ICollectionTreeFolder) => boolean): void;
    forEachFolder(callback: (folder: ICollectionTreeFolder) => boolean): void;
    getEntryById(id: string): ICollectionTreeEntry | undefined;
    getEntryByIndex(index: number): ICollectionTreeEntry | undefined;
    getFolder(id: string): ICollectionTreeFolder | undefined;
    removeEntryById(id: string): boolean;
    removeEntryByIndex(index: number): boolean;
    setColor(color: minecraftserver.RGBA | undefined): void;
    setExpanded(expanded: boolean): void;
    setHeaderAction(actionParams: ICollectionTreeFolderHeaderActionParams | undefined): void;
    setSelected(selected: boolean): void;
    setTitle(title: LocalizedString): void;
}
```

## Properties

### entryCount

> `readonly` **entryCount**: `number`

#### Remarks

Count of the entries

***

### expanded

> `readonly` **expanded**: `boolean`

#### Remarks

Expanded state of the folder

***

### folderCount

> `readonly` **folderCount**: `number`

#### Remarks

Count of the child folders

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier of the folder

***

### parent

> `readonly` **parent**: `ICollectionTreeFolder` \| `undefined`

#### Remarks

Parent folder

***

### selected

> `readonly` **selected**: `boolean`

#### Remarks

Selected state of the folder

***

### title

> `readonly` **title**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Title of the folder

***

### userData

> `readonly` **userData**: `unknown`

#### Remarks

User data associated with the folder

## Methods

### addEntry()

> **addEntry**(`options`): [`ICollectionTreeEntry`](ICollectionTreeEntry.md)

#### Parameters

##### options

[`ICollectionTreeEntryOptions`](../type-aliases/ICollectionTreeEntryOptions.md)

Options to create a folder

#### Returns

[`ICollectionTreeEntry`](ICollectionTreeEntry.md)

#### Remarks

Adds a new entry to the folder

***

### addFolder()

> **addFolder**(`options`): `ICollectionTreeFolder`

#### Parameters

##### options

[`ICollectionTreeFolderOptions`](../type-aliases/ICollectionTreeFolderOptions.md)

Options to create a folder

#### Returns

`ICollectionTreeFolder`

#### Remarks

Creates a new child folder

***

### forEachEntry()

> **forEachEntry**(`callback`): `void`

#### Parameters

##### callback

(`entry`, `index`) => `boolean`

Returning false will stop the iteration

#### Returns

`void`

#### Remarks

Iterates over entries within the folder

***

### forEachFolder()

#### Call Signature

> **forEachFolder**(`callback`): `void`

##### Parameters

###### callback

(`folder`) => `boolean`

Returning false will stop the iteration

##### Returns

`void`

##### Remarks

Iterates over the first layer of folders

#### Call Signature

> **forEachFolder**(`callback`): `void`

##### Parameters

###### callback

(`folder`) => `boolean`

Returning false will stop the iteration

##### Returns

`void`

##### Remarks

Iterates over the first layer of folders

***

### getEntryById()

> **getEntryById**(`id`): [`ICollectionTreeEntry`](ICollectionTreeEntry.md) \| `undefined`

#### Parameters

##### id

`string`

Identifier of the folder

#### Returns

[`ICollectionTreeEntry`](ICollectionTreeEntry.md) \| `undefined`

#### Remarks

Gets the entry by its unique identifier

***

### getEntryByIndex()

> **getEntryByIndex**(`index`): [`ICollectionTreeEntry`](ICollectionTreeEntry.md) \| `undefined`

#### Parameters

##### index

`number`

Index of the entry

#### Returns

[`ICollectionTreeEntry`](ICollectionTreeEntry.md) \| `undefined`

#### Remarks

Gets the entry at the index

***

### getFolder()

> **getFolder**(`id`): `ICollectionTreeFolder` \| `undefined`

#### Parameters

##### id

`string`

Identifier of the folder

#### Returns

`ICollectionTreeFolder` \| `undefined`

#### Remarks

Find the folder with the id if it exists

***

### removeEntryById()

> **removeEntryById**(`id`): `boolean`

#### Parameters

##### id

`string`

Identifier of the folder

#### Returns

`boolean`

#### Remarks

Removes the entry by its unique identifier if it exists

***

### removeEntryByIndex()

> **removeEntryByIndex**(`index`): `boolean`

#### Parameters

##### index

`number`

Index of the entry

#### Returns

`boolean`

#### Remarks

Removes the entry at the index if it exists

***

### setColor()

> **setColor**(`color`): `void`

#### Parameters

##### color

[`RGBA`](../../server/interfaces/RGBA.md) \| `undefined`

New color state

#### Returns

`void`

#### Remarks

Set color of the entry.

***

### setExpanded()

> **setExpanded**(`expanded`): `void`

#### Parameters

##### expanded

`boolean`

New expanded state

#### Returns

`void`

#### Remarks

Set expanded state of the entry.

***

### setHeaderAction()

> **setHeaderAction**(`actionParams`): `void`

#### Parameters

##### actionParams

[`ICollectionTreeFolderHeaderActionParams`](../type-aliases/ICollectionTreeFolderHeaderActionParams.md) \| `undefined`

#### Returns

`void`

#### Remarks

Updates the header action for the folder

***

### setSelected()

> **setSelected**(`selected`): `void`

#### Parameters

##### selected

`boolean`

New selected state

#### Returns

`void`

#### Remarks

Set selected state of the entry.

***

### setTitle()

> **setTitle**(`title`): `void`

#### Parameters

##### title

[`LocalizedString`](../type-aliases/LocalizedString.md)

New title state

#### Returns

`void`

#### Remarks

Set title of the entry.
