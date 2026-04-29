[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / MouseRayCastAction

# Type Alias: MouseRayCastAction

> **MouseRayCastAction** = `object`

An action which returns the ray corresponding to a vector
from the users mouse click in the viewport.

## Properties

### actionType

> `readonly` **actionType**: [`MouseRayCastAction`](../enumerations/ActionTypes.md#mouseraycastaction)

***

### onExecute

> `readonly` **onExecute**: (`mouseRay`, `mouseProps`) => `void`

#### Parameters

##### mouseRay

[`Ray`](Ray.md)

##### mouseProps

[`MouseProps`](MouseProps.md)

#### Returns

`void`
