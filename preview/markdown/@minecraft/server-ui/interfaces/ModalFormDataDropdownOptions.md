[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-ui](../README.md) / ModalFormDataDropdownOptions

# Interface: ModalFormDataDropdownOptions

An interface that is passed into @minecraft/Server-ui.ModalFormData.dropdown to provide
additional options for the dropdown creation.

## Source

```ts
export interface ModalFormDataDropdownOptions {
    defaultValueIndex?: number;
    tooltip?: minecraftserver.RawMessage | string;
}
```

## Properties

### defaultValueIndex?

> `optional` **defaultValueIndex?**: `number`

#### Remarks

The default selected item index. It will be zero in case of
not setting this value.

***

### tooltip?

> `optional` **tooltip?**: `string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

#### Remarks

It will show an exclamation icon that will display a tooltip
if it is hovered.
