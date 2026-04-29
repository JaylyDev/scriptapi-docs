[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / InputService

# Class: InputService

## Constructors

### Constructor

> `private` **new InputService**(): `InputService`

#### Returns

`InputService`

## Methods

### focusViewport()

> **focusViewport**(): `void`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getKeyBindingProcessingState()

> **getKeyBindingProcessingState**(`contextId`, `bindingId`): `number` \| `undefined`

#### Parameters

##### contextId

`string`

##### bindingId

`string`

#### Returns

`number` \| `undefined`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### World Ready

This function can't be called in early-execution mode.

***

### registerKeyBinding()

> **registerKeyBinding**(`contextId`, `bindingId`, `key`, `modifier`, `info`): `void`

#### Parameters

##### contextId

`string`

##### bindingId

`string`

##### key

`number`

##### modifier

[`InputModifier`](../enumerations/InputModifier.md)

##### info

[`InputBindingInfo`](../interfaces/InputBindingInfo.md)

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### registerMouseBinding()

> **registerMouseBinding**(`contextId`, `bindingId`, `mouseAction`): `void`

#### Parameters

##### contextId

`string`

##### bindingId

`string`

##### mouseAction

[`MouseActionCategory`](../enumerations/MouseActionCategory.md)

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### unregisterKeyBinding()

> **unregisterKeyBinding**(`contextId`, `bindingId`): `void`

#### Parameters

##### contextId

`string`

##### bindingId

`string`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### unregisterMouseBinding()

> **unregisterMouseBinding**(`contextId`, `bindingId`): `void`

#### Parameters

##### contextId

`string`

##### bindingId

`string`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### updateKeyBindingProcessingState()

> **updateKeyBindingProcessingState**(`contextId`, `bindingId`, `state?`): `void`

#### Parameters

##### contextId

`string`

##### bindingId

`string`

##### state?

`number`

#### Returns

`void`

#### Remarks

#### Write Privilege

This function can't be called in read-only mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
