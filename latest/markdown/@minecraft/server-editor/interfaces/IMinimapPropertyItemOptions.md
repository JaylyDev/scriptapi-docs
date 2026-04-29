[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IMinimapPropertyItemOptions

# Interface: IMinimapPropertyItemOptions

Optional properties for Minimap property item

## Source

```ts
export interface IMinimapPropertyItemOptions extends IPropertyItemOptionsBase {
    alignment?: LayoutAlignment;
    isMeMarkerShown?: boolean;
    isMultiplayerMarkerShown?: boolean;
    mapImageSize?:
        | number
        | {
              width: number;
              height: number;
          };
    onClick?: (x: number, y: number) => void;
}
```

## Extends

- [`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md)

## Properties

### alignment?

> `optional` **alignment?**: [`LayoutAlignment`](../enumerations/LayoutAlignment.md)

#### Remarks

Alignment of the map in the container. If not defined,
LayoutAlignment.Center is used.

***

### enable?

> `optional` **enable?**: `boolean`

#### Remarks

Initial enabled state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`enable`](IPropertyItemOptionsBase.md#enable)

***

### isMeMarkerShown?

> `optional` **isMeMarkerShown?**: `boolean`

#### Remarks

Whether to show me marker on the minimap. If undefined,
defaults to true.

***

### isMultiplayerMarkerShown?

> `optional` **isMultiplayerMarkerShown?**: `boolean`

#### Remarks

Whether to show multiplayer markers on the minimap. If
undefined, defaults to false.

***

### mapImageSize?

> `optional` **mapImageSize?**: `number` \| \{ `height`: `number`; `width`: `number`; \}

#### Remarks

Size of the map image. If undefined, defaults to 35.

***

### onClick?

> `optional` **onClick?**: (`x`, `y`) => `void`

#### Parameters

##### x

`number`

##### y

`number`

#### Returns

`void`

#### Remarks

Called when map is clicked.

***

### style?

> `optional` **style?**: [`PaneItemStyle`](../type-aliases/PaneItemStyle.md)

#### Remarks

Optional styling overrides for the item.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`style`](IPropertyItemOptionsBase.md#style)

***

### visible?

> `optional` **visible?**: `boolean`

#### Remarks

Initial visibility state of property item. If undefined, it
will default to true.

#### Inherited from

[`IPropertyItemOptionsBase`](IPropertyItemOptionsBase.md).[`visible`](IPropertyItemOptionsBase.md#visible)
