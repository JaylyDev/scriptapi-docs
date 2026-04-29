[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IToggleGroupPropertyItemEntry

# Interface: IToggleGroupPropertyItemEntry

Properties of toggle group property item list entry

## Source

```ts
export interface IToggleGroupPropertyItemEntry {
    readonly enabled?: boolean;
    readonly icon?: string;
    readonly label?: LocalizedString;
    readonly tooltip?: BasicTooltipContent;
    readonly value: number;
}
```

## Properties

### enabled?

> `readonly` `optional` **enabled?**: `boolean`

#### Remarks

Optional enabled state of the entry. If undefined it will be
true.

***

### icon?

> `readonly` `optional` **icon?**: `string`

#### Remarks

Optional icon of the dropdown entry.

***

### label?

> `readonly` `optional` **label?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Localized display text of the entry.

***

### tooltip?

> `readonly` `optional` **tooltip?**: [`BasicTooltipContent`](../type-aliases/BasicTooltipContent.md)

#### Remarks

Optional tooltip description text of the entry.

***

### value

> `readonly` **value**: `number`

#### Remarks

The selectable value of the entry.
