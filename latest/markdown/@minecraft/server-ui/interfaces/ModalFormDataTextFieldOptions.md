[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-ui](../README.md) / ModalFormDataTextFieldOptions

# Interface: ModalFormDataTextFieldOptions

An interface that is passed into @minecraft/Server-ui.ModalFormData.textField to provide
additional options for the textfield creation.

## Source

```ts
export interface ModalFormDataTextFieldOptions {
    defaultValue?: string;
    tooltip?: minecraftserver.RawMessage | string;
}
```

## Properties

### defaultValue?

> `optional` **defaultValue?**: `string`

#### Remarks

The default value for the textfield.

***

### tooltip?

> `optional` **tooltip?**: `string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

#### Remarks

It will show an exclamation icon that will display a tooltip
if it is hovered.
