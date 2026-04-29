[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IListPaneSlotOptions

# Interface: IListPaneSlotOptions

List Pane slot optional properties

## Source

```ts
export interface IListPaneSlotOptions {
    tags?: string[];
    title?: LocalizedString;
    uniqueId?: string;
    userData?: unknown;
}
```

## Properties

### tags?

> `optional` **tags?**: `string`[]

#### Remarks

List of tags associated with the slot.

***

### title?

> `optional` **title?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Localized title of the slot.

***

### uniqueId?

> `optional` **uniqueId?**: `string`

#### Remarks

Unique identifier to use for the slot.

***

### userData?

> `optional` **userData?**: `unknown`

#### Remarks

Optional user data that can be associated with a slot.
