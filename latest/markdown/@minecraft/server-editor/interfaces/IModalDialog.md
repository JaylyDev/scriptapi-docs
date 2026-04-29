[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IModalDialog

# Interface: IModalDialog

## Properties

### activeRequestId

> `readonly` **activeRequestId**: `string` \| `undefined`

#### Remarks

Identifier for the active request for this dialog

***

### contentPane

> `readonly` **contentPane**: [`IPropertyPane`](IPropertyPane.md)

#### Remarks

Custom pane layout for the dialog

***

### controlPane

> `readonly` **controlPane**: [`IModalControlPane`](IModalControlPane.md)

#### Remarks

Custom pane layout for the dialog

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier for the dialog

***

### title

> `readonly` **title**: [`LocalizedString`](../type-aliases/LocalizedString.md) \| `undefined`

#### Remarks

Title of the dialog

## Methods

### sendDismiss()

> **sendDismiss**(): `void`

#### Returns

`void`

#### Remarks

Dispatches a dismiss message to the active request if it is
available

***

### sendResponse()

> **sendResponse**(`response`): `void`

#### Parameters

##### response

[`ModalDialogCustomResponse`](../type-aliases/ModalDialogCustomResponse.md)

Response message to be handled by the active request

#### Returns

`void`

#### Remarks

Dispatches a response message to the active request if it is
available

***

### setTitle()

> **setTitle**(`title`): `void`

#### Parameters

##### title

[`LocalizedString`](../type-aliases/LocalizedString.md) \| `undefined`

New title

#### Returns

`void`

#### Remarks

Updates the title of the modal dialog
