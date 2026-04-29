[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-ui](../README.md) / ModalFormDataSliderOptions

# Interface: ModalFormDataSliderOptions

An interface that is passed into @minecraft/Server-ui.ModalFormData.slider to provide
additional options for the slider creation.

## Properties

### defaultValue?

> `optional` **defaultValue?**: `number`

#### Remarks

The default value for the slider.

***

### tooltip?

> `optional` **tooltip?**: `string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

#### Remarks

It will show an exclamation icon that will display a tooltip
if it is hovered.

***

### valueStep?

> `optional` **valueStep?**: `number`

#### Remarks

Defines the increment of values that the slider generates
when moved. It will be '1' in case of not providing this.
