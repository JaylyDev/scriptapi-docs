[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IPropertyPaneOptions

# Interface: IPropertyPaneOptions

Common optional properties used for constructing a property
pane.

## Source

```ts
export interface IPropertyPaneOptions {
    infoTooltip?: TooltipInteractiveContent;
    title?: LocalizedString;
    uniqueId?: string;
}
```

## Extended by

- [`IRootPropertyPaneOptions`](IRootPropertyPaneOptions.md)
- [`ISubPanePropertyItemOptions`](ISubPanePropertyItemOptions.md)

## Properties

### infoTooltip?

> `optional` **infoTooltip?**: [`TooltipInteractiveContent`](../type-aliases/TooltipInteractiveContent.md)

#### Remarks

Optional information tooltip for the pane to be displayed on
the header.

***

### title?

> `optional` **title?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Localized title of the property pane

***

### uniqueId?

> `optional` **uniqueId?**: `string`

#### Remarks

Unique identifier for the pane
