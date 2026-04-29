[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IColorTimelinePropertyItemOptions

# Interface: IColorTimelinePropertyItemOptions

Optional properties for Color Timeline property item

## Source

```ts
export interface IColorTimelinePropertyItemOptions extends IPropertyItemOptionsBase {
    decimalPrecision?: number;
    disableAddRemoveNodes?: boolean;
    entries?: IColorTimelinePropertyItemEntry[];
    isGraphReadOnly?: boolean;
    onNodeAdded?: (node: IColorTimelinePropertyItemEntry) => void;
    onNodeChanged?: (node: IColorTimelinePropertyItemEntry) => void;
    onNodeRemoved?: (node: IColorTimelinePropertyItemEntry) => void;
    onTimeChanged?: (current: number, prev: number) => void;
    renderGradientBackground?: boolean;
    showAlpha?: boolean;
    title?: LocalizedString;
}
```

## Extends

- [`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md)

## Properties

### decimalPrecision?

> `optional` **decimalPrecision?**: `number`

#### Remarks

Custom precision for the calculations

***

### disableAddRemoveNodes?

> `optional` **disableAddRemoveNodes?**: `boolean`

#### Remarks

If true, nodes cannot be added or removed

***

### enable?

> `optional` **enable?**: `boolean`

#### Remarks

Initial enabled state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`enable`](IPropertyItemOptionsBase.md#enable)

***

### entries?

> `optional` **entries?**: [`IColorTimelinePropertyItemEntry`](IColorTimelinePropertyItemEntry.md)[]

#### Remarks

List of nodes entries in the color timeline.

***

### isGraphReadOnly?

> `optional` **isGraphReadOnly?**: `boolean`

#### Remarks

True means nodes cannot be dragged or modified

***

### onNodeAdded?

> `optional` **onNodeAdded?**: (`node`) => `void`

#### Parameters

##### node

[`IColorTimelinePropertyItemEntry`](IColorTimelinePropertyItemEntry.md)

#### Returns

`void`

#### Remarks

Callback triggered when a new RGBA node is added to the
timeline.

***

### onNodeChanged?

> `optional` **onNodeChanged?**: (`node`) => `void`

#### Parameters

##### node

[`IColorTimelinePropertyItemEntry`](IColorTimelinePropertyItemEntry.md)

#### Returns

`void`

#### Remarks

Callback triggered when a timeline node's RGBA value
changes.

***

### onNodeRemoved?

> `optional` **onNodeRemoved?**: (`node`) => `void`

#### Parameters

##### node

[`IColorTimelinePropertyItemEntry`](IColorTimelinePropertyItemEntry.md)

#### Returns

`void`

#### Remarks

Callback triggered when an RGBA node is removed from the
timeline. *

***

### onTimeChanged?

> `optional` **onTimeChanged?**: (`current`, `prev`) => `void`

#### Parameters

##### current

`number`

##### prev

`number`

#### Returns

`void`

#### Remarks

This callback is called when UI control time is changed.

***

### renderGradientBackground?

> `optional` **renderGradientBackground?**: `boolean`

#### Remarks

Flag that enables gradient background color on the timeline
to be rendered, default is true

***

### showAlpha?

> `optional` **showAlpha?**: `boolean`

#### Remarks

False means the alpha elements will not be shown in the
color picker

***

### style?

> `optional` **style?**: [`PaneItemStyle`](../type-aliases/PaneItemStyle.md)

#### Remarks

Optional styling overrides for the item.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`style`](IPropertyItemOptionsBase.md#style)

***

### title?

> `optional` **title?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Localized title of the property item

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`visible`](IPropertyItemOptionsBase.md#visible)
