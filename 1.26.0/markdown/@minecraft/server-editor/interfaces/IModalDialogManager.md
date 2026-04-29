[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IModalDialogManager

# Interface: IModalDialogManager

## Methods

### activateDialog()

> **activateDialog**\<`T`\>(`params`): [`IModalDialogActivationRequest`](IModalDialogActivationRequest.md)

#### Type Parameters

##### T

`T` *extends* `string` \| [`DataPicker`](../enumerations/CoreModalDialogType.md#datapicker)

#### Parameters

##### params

[`ModalDialogActivationParams`](../type-aliases/ModalDialogActivationParams.md)\<`T`\>

Activation parameters

#### Returns

[`IModalDialogActivationRequest`](IModalDialogActivationRequest.md)

#### Remarks

Creates a modal activation request for an existing modal
template

***

### dismissActiveDialog()

> **dismissActiveDialog**(): `void`

#### Returns

`void`

#### Remarks

Removes the active modal from view

***

### registerDialog()

> **registerDialog**(`params`): [`IModalDialog`](IModalDialog.md)

#### Parameters

##### params

[`ModalDialogCreationParams`](ModalDialogCreationParams.md)

Creation parameters

#### Returns

[`IModalDialog`](IModalDialog.md)

#### Remarks

Creates a custom modal dialog with a property pane
