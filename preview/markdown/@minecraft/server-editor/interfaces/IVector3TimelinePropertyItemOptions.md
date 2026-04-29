[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IVector3TimelinePropertyItemOptions

# Interface: IVector3TimelinePropertyItemOptions

Optional properties for Vector3 Timeline property item

## Source

```ts
export interface IVector3TimelinePropertyItemOptions extends IPropertyItemOptionsBase {
    bounds?: {
        minValue: number;
        maxValue: number;
    };
    decimalPrecision?: number;
    disableAddRemoveNodes?: boolean;
    entries?: IVector3TimelinePropertyItemEntry[];
    isGraphReadOnly?: boolean;
    onNodeAdded?: (node: IVector3TimelinePropertyItemEntry) => void;
    onNodeChanged?: (node: IVector3TimelinePropertyItemEntry) => void;
    onNodeRemoved?: (node: IVector3TimelinePropertyItemEntry) => void;
    onTimeChanged?: (current: number, prev: number) => void;
    title?: LocalizedString;
}
```

## Extends

- [`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md)

## Properties

### bounds?

> `optional` **bounds?**: `object`

#### maxValue

> **maxValue**: `number`

#### minValue

> **minValue**: `number`

#### Remarks

The data bounds for the value node property

***

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

> `optional` **entries?**: [`IVector3TimelinePropertyItemEntry`](IVector3TimelinePropertyItemEntry.md)[]

#### Remarks

List of nodes entries in the vector3 timeline.

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

[`IVector3TimelinePropertyItemEntry`](IVector3TimelinePropertyItemEntry.md)

#### Returns

`void`

#### Remarks

Callback triggered when a new vector3 node is added to the
timeline.

***

### onNodeChanged?

> `optional` **onNodeChanged?**: (`node`) => `void`

#### Parameters

##### node

[`IVector3TimelinePropertyItemEntry`](IVector3TimelinePropertyItemEntry.md)

#### Returns

`void`

#### Remarks

Callback triggered when a timeline node's vector3 value
changes.

***

### onNodeRemoved?

> `optional` **onNodeRemoved?**: (`node`) => `void`

#### Parameters

##### node

[`IVector3TimelinePropertyItemEntry`](IVector3TimelinePropertyItemEntry.md)

#### Returns

`void`

#### Remarks

Callback triggered when a vector3 node is removed from the
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
