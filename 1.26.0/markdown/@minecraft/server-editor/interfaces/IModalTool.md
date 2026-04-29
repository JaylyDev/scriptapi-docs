[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IModalTool

# Interface: IModalTool

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier for the tool

***

### isActive

> `readonly` **isActive**: `boolean`

#### Remarks

Active state of the modal tool

***

### onModalToolActivation

> **onModalToolActivation**: [`EventSink`](EventSink.md)\<[`ModalToolLifecycleEventPayload`](../type-aliases/ModalToolLifecycleEventPayload.md)\>

#### Remarks

Provides lifecycle activation events for a modal tool

## Methods

### bindPropertyPane()

> **bindPropertyPane**(`pane`): `void`

#### Parameters

##### pane

[`IRootPropertyPane`](IRootPropertyPane.md)

Root pane associated with the modal tool

#### Returns

`void`

#### Remarks

Binds a property pane to the tool. When the tool is
selected, the pane's visibility updates. Only one pane can
be bound at a time.

***

### registerKeyBinding()

> **registerKeyBinding**(`action`, `binding`, `info?`): [`IRegisteredKeyBinding`](IRegisteredKeyBinding.md)

#### Parameters

##### action

[`SupportedKeyboardActionTypes`](../type-aliases/SupportedKeyboardActionTypes.md)

Action to register the binding for.

##### binding

[`KeyBinding`](../type-aliases/KeyBinding.md)

Keyboard binding to invoke action.

##### info?

[`KeyBindingInfo`](../type-aliases/KeyBindingInfo.md)

Additional information about key binding.

#### Returns

[`IRegisteredKeyBinding`](IRegisteredKeyBinding.md)

#### Remarks

Register a key press binding for an action which will be
handled by the tool input context.

***

### registerMouseButtonBinding()

> **registerMouseButtonBinding**(`action`): `void`

#### Parameters

##### action

[`SupportedMouseActionTypes`](../type-aliases/SupportedMouseActionTypes.md)

Action to register the binding for.

#### Returns

`void`

#### Remarks

Register an action to be called when mouse left/middle/right
buttons are pressed or released.

***

### registerMouseDragBinding()

> **registerMouseDragBinding**(`action`): `void`

#### Parameters

##### action

[`SupportedMouseActionTypes`](../type-aliases/SupportedMouseActionTypes.md)

Action to register the binding for.

#### Returns

`void`

#### Remarks

Register an action to be called when mouse is dragged while
left mouse button is down.

***

### registerMouseWheelBinding()

> **registerMouseWheelBinding**(`action`): `void`

#### Parameters

##### action

[`SupportedMouseActionTypes`](../type-aliases/SupportedMouseActionTypes.md)

Action to register the binding for.

#### Returns

`void`

#### Remarks

Register an action to be called when mouse wheel is
scrolled.

***

### unregisterInputBindings()

> **unregisterInputBindings**(): `void`

#### Returns

`void`

#### Remarks

Unregister all input binding for this tool.
