[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / INumberTimelinePropertyItemOptions

# Interface: INumberTimelinePropertyItemOptions

Optional properties for Number Timeline property item

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

> `optional` **entries?**: [`INumberTimelinePropertyItemEntry`](INumberTimelinePropertyItemEntry.md)[]

#### Remarks

List of nodes entries in the color timeline.

***

### gridSeparatorSliceCount?

> `optional` **gridSeparatorSliceCount?**: [`Vector2`](../../server/interfaces/Vector2.md)

#### Remarks

The separator slice count for the graph thin lines

***

### gridSeparatorStepCount?

> `optional` **gridSeparatorStepCount?**: [`Vector2`](../../server/interfaces/Vector2.md)

#### Remarks

The separator step counts for the graph bold lines

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

[`INumberTimelinePropertyItemEntry`](INumberTimelinePropertyItemEntry.md)

#### Returns

`void`

#### Remarks

Callback triggered when a new number node is added to the
timeline.

***

### onNodeChanged?

> `optional` **onNodeChanged?**: (`node`) => `void`

#### Parameters

##### node

[`INumberTimelinePropertyItemEntry`](INumberTimelinePropertyItemEntry.md)

#### Returns

`void`

#### Remarks

Callback triggered when a timeline node's number value
changes.

***

### onNodeRemoved?

> `optional` **onNodeRemoved?**: (`node`) => `void`

#### Parameters

##### node

[`INumberTimelinePropertyItemEntry`](INumberTimelinePropertyItemEntry.md)

#### Returns

`void`

#### Remarks

Callback triggered when an number node is removed from the
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
