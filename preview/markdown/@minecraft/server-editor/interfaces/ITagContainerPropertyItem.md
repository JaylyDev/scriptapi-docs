[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / ITagContainerPropertyItem

# Interface: ITagContainerPropertyItem

A property item which supports Tag Container properties

## Source

```ts
export interface ITagContainerPropertyItem extends IPropertyItemBase {
    readonly tags: ReadonlyArray<string>;
    readonly tagsPool: ReadonlyArray<string>;
    addTag(tag: string): void;
    addTagToPool(tag: string): void;
    removeTag(tag: string): void;
    removeTagFromPool(tag: string): void;
    setTags(tags: string[] | undefined): void;
    setTagsPool(tagsPool: string[] | undefined): void;
    setTitle(title: LocalizedString): void;
    setVariant(variant: TagContainerVariant | undefined): void;
}
```

## Extends

- [`IPropertyItemBase`](IPropertyItemBase.md)

## Properties

### enable

> **enable**: `boolean`

#### Remarks

If the item is enabled in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`enable`](IPropertyItemBase.md#enable)

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique ID for the property item.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`id`](IPropertyItemBase.md#id)

***

### paneId

> `readonly` **paneId**: `string`

#### Remarks

The parent pane id.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`paneId`](IPropertyItemBase.md#paneid)

***

### tags

> `readonly` **tags**: readonly `string`[]

#### Remarks

Current tags value of the property item.

***

### tagsPool

> `readonly` **tagsPool**: readonly `string`[]

#### Remarks

Current tags pool value of the property item.

***

### typeName

> `readonly` **typeName**: [`PropertyItemType`](../enumerations/PropertyItemType.md)

#### Remarks

The type name of the target property.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`typeName`](IPropertyItemBase.md#typename)

***

### visible

> **visible**: `boolean`

#### Remarks

If the item should be visible in the UI.

#### Inherited from

[`IPropertyItemBase`](IPropertyItemBase.md).[`visible`](IPropertyItemBase.md#visible)

## Methods

### addTag()

> **addTag**(`tag`): `void`

#### Parameters

##### tag

`string`

Tag to add.

#### Returns

`void`

#### Remarks

Adds a tag to the current tags.

***

### addTagToPool()

> **addTagToPool**(`tag`): `void`

#### Parameters

##### tag

`string`

Tag to add to the pool.

#### Returns

`void`

#### Remarks

Adds a tag to the tags pool.

***

### removeTag()

> **removeTag**(`tag`): `void`

#### Parameters

##### tag

`string`

Tag to remove.

#### Returns

`void`

#### Remarks

Removes a tag from the current tags.

***

### removeTagFromPool()

> **removeTagFromPool**(`tag`): `void`

#### Parameters

##### tag

`string`

Tag to remove from the pool.

#### Returns

`void`

#### Remarks

Removes a tag from the tags pool.

***

### setTags()

> **setTags**(`tags`): `void`

#### Parameters

##### tags

`string`[] \| `undefined`

New tags array.

#### Returns

`void`

#### Remarks

Updates all tags.

***

### setTagsPool()

> **setTagsPool**(`tagsPool`): `void`

#### Parameters

##### tagsPool

`string`[] \| `undefined`

New tags pool array.

#### Returns

`void`

#### Remarks

Updates the tags pool.

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

Set title of the property item.

***

### setVariant()

> **setVariant**(`variant`): `void`

#### Parameters

##### variant

[`TagContainerVariant`](../enumerations/TagContainerVariant.md) \| `undefined`

New variant.

#### Returns

`void`

#### Remarks

Sets the visual variant of the tag container.
