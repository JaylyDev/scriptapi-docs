[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IActionBarItemCreationParams

# Interface: IActionBarItemCreationParams

Properties required to create an Action Bar item.

## Source

```ts
export interface IActionBarItemCreationParams {
    enabled?: boolean;
    executeOnAdd?: boolean;
    icon: string;
    iconAnimation?: ImageAnimationData;
    label: string;
    tooltipDescription?: string;
    tooltipTitle?: string;
}
```

## Properties

### enabled?

> `optional` **enabled?**: `boolean`

#### Remarks

Initial enabled state of the item. If not defined, default
is true.

***

### executeOnAdd?

> `optional` **executeOnAdd?**: `boolean`

#### Remarks

Sets whether the Action Bar Item's execute is run when it is
added to the Action Bar. If not defined, default is false.

***

### icon

> **icon**: `string`

#### Remarks

Icon resource for the item.

***

### iconAnimation?

> `optional` **iconAnimation?**: [`ImageAnimationData`](../type-aliases/ImageAnimationData.md)

#### Remarks

Animation data for sprite sheet icon image

***

### label

> **label**: `string`

#### Remarks

Text label for item.

***

### tooltipDescription?

> `optional` **tooltipDescription?**: `string`

#### Remarks

Tooltip description for the item.

***

### tooltipTitle?

> `optional` **tooltipTitle?**: `string`

#### Remarks

Tooltip title for the item.
