[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IRootPropertyPaneOptions

# Interface: IRootPropertyPaneOptions

The options to create a root pane.

## Source

```ts
export interface IRootPropertyPaneOptions extends IPropertyPaneOptions {
    headerAction?: IRootPropertyPaneHeaderAction;
    icon?: string;
    location?: RootPaneLocation;
}
```

## Extends

- [`IPropertyPaneOptions`](IPropertyPaneOptions.md)

## Properties

### headerAction?

> `optional` **headerAction?**: [`IRootPropertyPaneHeaderAction`](IRootPropertyPaneHeaderAction.md)

#### Remarks

Optional action button to be displayed on the header.

***

### icon?

> `optional` **icon?**: `string`

#### Remarks

Pane icon shown in front of the pane header

***

### infoTooltip?

> `optional` **infoTooltip?**: [`TooltipInteractiveContent`](../type-aliases/TooltipInteractiveContent.md)

#### Remarks

Optional information tooltip for the pane to be displayed on
the header.

#### Inherited from

[`IPropertyPaneOptions`](IPropertyPaneOptions.md).[`infoTooltip`](IPropertyPaneOptions.md#infotooltip)

***

### location?

> `optional` **location?**: [`RootPaneLocation`](../enumerations/RootPaneLocation.md)

#### Remarks

Determines how root pane will be displayed in the UI.

***

### title?

> `optional` **title?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Localized title of the property pane

#### Inherited from

[`IPropertyPaneOptions`](IPropertyPaneOptions.md).[`title`](IPropertyPaneOptions.md#title)

***

### uniqueId?

> `optional` **uniqueId?**: `string`

#### Remarks

Unique identifier for the pane

#### Inherited from

[`IPropertyPaneOptions`](IPropertyPaneOptions.md).[`uniqueId`](IPropertyPaneOptions.md#uniqueid)
