[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / IGlobalInputManager

# Interface: IGlobalInputManager

## Methods

### registerKeyBinding()

> **registerKeyBinding**(`inputContextId`, `action`, `binding`, `info?`): [`IRegisteredKeyBinding`](IRegisteredKeyBinding.md)

#### Parameters

##### inputContextId

[`EditorInputContext`](../enumerations/EditorInputContext.md)

Id of the UI context to handle this binding.

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
handled by the specified input context.
