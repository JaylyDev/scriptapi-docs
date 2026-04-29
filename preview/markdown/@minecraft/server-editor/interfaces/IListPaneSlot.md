[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IListPaneSlot

# Interface: IListPaneSlot

List Pane slot

## Source

```ts
export interface IListPaneSlot {
    readonly entryCount: number;
    readonly id: string;
    readonly paneId: string;
    readonly selected: boolean;
    readonly tags: ReadonlyArray<string>;
    readonly title: LocalizedString;
    getEntry<K extends ListPaneEntryType | undefined = undefined>(
        index: number,
        type?: K,
    ): (K extends ListPaneEntryType ? ListPaneEntryMap[K] : IListPaneEntry) | undefined;
    getUserData(): unknown;
    setSelected(selected: boolean): void;
    setTags(tags: string[] | undefined): void;
    setTitle(title: LocalizedString): void;
    setUserData(data: unknown): void;
}
```

## Properties

### entryCount

> `readonly` **entryCount**: `number`

#### Remarks

Count of entries.

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier of the slot.

***

### paneId

> `readonly` **paneId**: `string`

#### Remarks

Unique identifier of the parent pane.

***

### selected

> `readonly` **selected**: `boolean`

#### Remarks

Selected state of the slot.

***

### tags

> `readonly` **tags**: readonly `string`[]

#### Remarks

List of tags associated with the slot.

***

### title

> `readonly` **title**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Count of entries.

## Methods

### getEntry()

> **getEntry**\<`K`\>(`index`, `type?`): `K` *extends* [`ListPaneEntryType`](../enumerations/ListPaneEntryType.md) ? [`ListPaneEntryMap`](../type-aliases/ListPaneEntryMap.md)\[`K`\] : [`IListPaneEntry`](IListPaneEntry.md) \| `undefined`

#### Type Parameters

##### K

`K` *extends* [`ListPaneEntryType`](../enumerations/ListPaneEntryType.md) \| `undefined` = `undefined`

#### Parameters

##### index

`number`

Sequence index of the entry in the slot.

##### type?

`K`

Optional type check for the entry.

#### Returns

`K` *extends* [`ListPaneEntryType`](../enumerations/ListPaneEntryType.md) ? [`ListPaneEntryMap`](../type-aliases/ListPaneEntryMap.md)\[`K`\] : [`IListPaneEntry`](IListPaneEntry.md) \| `undefined`

#### Remarks

Finds the entry with the index if it exists.

***

### getUserData()

> **getUserData**(): `unknown`

#### Returns

`unknown`

User data associated with the slot.

#### Remarks

***

### setSelected()

> **setSelected**(`selected`): `void`

#### Parameters

##### selected

`boolean`

New selected state.

#### Returns

`void`

#### Remarks

Updates selected state of the slot.

***

### setTags()

> **setTags**(`tags`): `void`

#### Parameters

##### tags

`string`[] \| `undefined`

New tag list.

#### Returns

`void`

#### Remarks

Updates tags of the slot.

***

### setTitle()

> **setTitle**(`title`): `void`

#### Parameters

##### title

[`LocalizedString`](../type-aliases/LocalizedString.md)

New title.

#### Returns

`void`

#### Remarks

Updates title of the slot.

***

### setUserData()

> **setUserData**(`data`): `void`

#### Parameters

##### data

`unknown`

New user data.

#### Returns

`void`

#### Remarks

Updates user data associated with the slot
