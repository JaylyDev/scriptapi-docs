[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ContinuousAction

# Type Alias: ContinuousAction

> **ContinuousAction** = `object`

An action that continues to execute after activation

## Properties

### actionType

> `readonly` **actionType**: [`ContinuousAction`](../enumerations/ActionTypes.md#continuousaction)

***

### onExecute

> `readonly` **onExecute**: (`state`, `repeatCount`) => `void`

#### Parameters

##### state

[`ContinuousActionState`](../enumerations/ContinuousActionState.md)

##### repeatCount

`number`

#### Returns

`void`

***

### repeatDelay?

> `optional` **repeatDelay?**: `number`

***

### repeatInterval?

> `optional` **repeatInterval?**: `number`
