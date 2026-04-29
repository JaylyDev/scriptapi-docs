[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ITagContainerPropertyItemOptions

# Interface: ITagContainerPropertyItemOptions

Optional properties for Tag Container property item

## Source

```ts
export interface ITagContainerPropertyItemOptions extends IPropertyItemOptionsBase {
    onTagAdded?: (tag: string) => void;
    onTagRemoved?: (tag: string) => void;
    tags?: string[];
    tagsPool?: string[];
    title?: LocalizedString;
    variant?: TagContainerVariant;
}
```

## Extends

- [`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md)

## Properties

### enable?

> `optional` **enable?**: `boolean`

#### Remarks

Initial enabled state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`enable`](IPropertyItemOptionsBase.md#enable)

***

### onTagAdded?

> `optional` **onTagAdded?**: (`tag`) => `void`

#### Parameters

##### tag

`string`

#### Returns

`void`

#### Remarks

This callback is called when a tag is added.

***

### onTagRemoved?

> `optional` **onTagRemoved?**: (`tag`) => `void`

#### Parameters

##### tag

`string`

#### Returns

`void`

#### Remarks

This callback is called when a tag is removed.

***

### style?

> `optional` **style?**: [`PaneItemStyle`](../type-aliases/PaneItemStyle.md)

#### Remarks

Optional styling overrides for the item.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`style`](IPropertyItemOptionsBase.md#style)

***

### tags?

> `optional` **tags?**: `string`[]

#### Remarks

Initial tags for the container.

***

### tagsPool?

> `optional` **tagsPool?**: `string`[]

#### Remarks

Available tags pool to select from.

***

### title?

> `optional` **title?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Localized title of the property item.

***

### variant?

> `optional` **variant?**: [`TagContainerVariant`](../enumerations/TagContainerVariant.md)

#### Remarks

Visual variant of the tag container. If undefined, it will
default to Inverted.

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`visible`](IPropertyItemOptionsBase.md#visible)
