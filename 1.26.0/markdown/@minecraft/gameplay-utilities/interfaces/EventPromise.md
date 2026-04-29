[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/gameplay-utilities](../README.md) / EventPromise

# Interface: EventPromise\<T\>

A promise wrapper utility which returns a new promise that will resolve when the next
event is raised.

## Extends

- `Promise`\<`T` \| `undefined`\>

## Type Parameters

### T

`T`

## Properties

### \[toStringTag\]

> `readonly` **\[toStringTag\]**: `string`

#### Inherited from

`Promise.[toStringTag]`

## Methods

### cancel()

> **cancel**(): `void`

Cancels the promise and unsubscribes from the event signal. Cancellation is done
by fulfilling with undefined.

#### Returns

`void`

***

### catch()

> **catch**\<`TReject`\>(`onrejected?`): `Promise`\<`T` \| `TReject` \| `undefined`\>

Promise-like interface catch.

#### Type Parameters

##### TReject

`TReject` = `never`

#### Parameters

##### onrejected?

((`reason`) => `TReject` \| `PromiseLike`\<`TReject`\>) \| `null`

Called if the promise rejects

#### Returns

`Promise`\<`T` \| `TReject` \| `undefined`\>

#### Overrides

`Promise.catch`

***

### finally()

> **finally**(`onfinally?`): `Promise`\<`T` \| `undefined`\>

Promise-like interface finally.

#### Parameters

##### onfinally?

(() => `void`) \| `null`

Called when the promise resolves

#### Returns

`Promise`\<`T` \| `undefined`\>

***

### then()

> **then**\<`TFulfill`, `TReject`\>(`onfulfilled?`, `onrejected?`): `Promise`\<`TFulfill` \| `TReject`\>

Promise-like interface then.

#### Type Parameters

##### TFulfill

`TFulfill` = `T` \| `undefined`

##### TReject

`TReject` = `never`

#### Parameters

##### onfulfilled?

((`value`) => `TFulfill` \| `PromiseLike`\<`TFulfill`\>) \| `null`

Called if the promise fulfills

##### onrejected?

((`reason`) => `TReject` \| `PromiseLike`\<`TReject`\>) \| `null`

Called if the promise rejects

#### Returns

`Promise`\<`TFulfill` \| `TReject`\>

#### Overrides

`Promise.then`
