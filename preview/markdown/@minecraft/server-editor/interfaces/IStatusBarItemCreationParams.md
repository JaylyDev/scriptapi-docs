[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IStatusBarItemCreationParams

# Interface: IStatusBarItemCreationParams

Properties required to create a status bar item

## Source

```ts
export interface IStatusBarItemCreationParams {
    alignment?: StatusBarAlignment;
    icon?: string;
    size?: number;
    text?: LocalizedString;
    visible?: boolean;
}
```

## Properties

### alignment?

> `optional` **alignment?**: [`StatusBarAlignment`](../enumerations/StatusBarAlignment.md)

#### Remarks

Alignment of item within status bar. If undefined, it will
be left aligned.

***

### icon?

> `optional` **icon?**: `string`

#### Remarks

Optional icon image resource of the item.

***

### size?

> `optional` **size?**: `number`

#### Remarks

Size of the status bar item. If undefined, it will wrap text
content.

***

### text?

> `optional` **text?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Default localized display text of the item. If undefined, it
will be empty string.

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Default visibility of the item. If undefined, it will be
true.
