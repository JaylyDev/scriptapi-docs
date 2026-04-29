[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ModalDialogActivationParams

# Type Alias: ModalDialogActivationParams\<T\>

> **ModalDialogActivationParams**\<`T`\> = `object` & `T` *extends* [`CoreModalDialogType`](../enumerations/CoreModalDialogType.md) ? `object` : `object`

Parameters required to activate a modal dialog instance

## Type Declaration

### dialogId

> **dialogId**: `T`

### onResponse?

> `optional` **onResponse?**: (`payload`) => `void`

#### Parameters

##### payload

`T` *extends* [`CoreModalDialogType`](../enumerations/CoreModalDialogType.md) ? [`ModalDialogCoreResponseType`](ModalDialogCoreResponseType.md)\[`T`\] : [`ModalDialogCustomResponse`](ModalDialogCustomResponse.md) \| [`ModalDialogDismissResponse`](ModalDialogDismissResponse.md)

#### Returns

`void`

## Type Parameters

### T

`T` *extends* [`CoreModalDialogType`](../enumerations/CoreModalDialogType.md) \| `string`
