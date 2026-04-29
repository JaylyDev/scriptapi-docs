[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / ModalFormDataDropdownOptions

# Interface: ModalFormDataDropdownOptions

An interface that is passed into @minecraft/Server-ui.ModalFormData.dropdown to provide
additional options for the dropdown creation.

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
