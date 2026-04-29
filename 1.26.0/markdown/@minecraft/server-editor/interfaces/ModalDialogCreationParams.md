[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / ModalDialogCreationParams

# Interface: ModalDialogCreationParams

Represents parameters to create a modal dialog

## Properties

### canUserDismiss?

> `optional` **canUserDismiss?**: `boolean`

#### Remarks

Determines if the panel can be dismissed by the user
actions. If undefined, it will be true.

***

### height?

> `optional` **height?**: `number`

#### Remarks

Panel height for the dialog

***

### onActiveRequestChange?

> `optional` **onActiveRequestChange?**: (`requestId`) => `void`

#### Parameters

##### requestId

`string` \| `undefined`

#### Returns

`void`

#### Remarks

Callback to notify changes in active request

***

### title?

> `optional` **title?**: [`LocalizedString`](../type-aliases/LocalizedString.md)

#### Remarks

Dialog title

***

### uniqueId?

> `optional` **uniqueId?**: `string`

#### Remarks

Optional user defined unique identifier

***

### width?

> `optional` **width?**: `number`

#### Remarks

Panel width for the dialog
