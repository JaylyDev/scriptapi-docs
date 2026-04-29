[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-ui](../README.md) / ModalFormDataToggleOptions

# Interface: ModalFormDataToggleOptions

An interface that is passed into @minecraft/Server-ui.ModalFormData.toggle to provide
additional options for the toggle creation.

## Source

```ts
export interface ModalFormDataToggleOptions {
    defaultValue?: boolean;
    tooltip?: minecraftserver.RawMessage | string;
}
```

## Properties

### defaultValue?

> `optional` **defaultValue?**: `boolean`

#### Remarks

The default value for the toggle.

***

### tooltip?

> `optional` **tooltip?**: `string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

#### Remarks

It will show an exclamation icon that will display a tooltip
if it is hovered.
