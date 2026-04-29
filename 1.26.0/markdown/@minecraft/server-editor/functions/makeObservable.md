[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / makeObservable

# Function: makeObservable()

> **makeObservable**\<`T`\>(`initialValue`, `validator?`): [`IObservable`](../interfaces/IObservable.md)\<`T`\>

## Type Parameters

### T

`T`

## Parameters

### initialValue

`T`

Initial value of the observable.

### validator?

[`ObservableValidator`](../classes/ObservableValidator.md)\<`T`\>

Optional validator to use for the setter.

## Returns

[`IObservable`](../interfaces/IObservable.md)\<`T`\>

## Remarks

Creates an observable object that stores a value state.

## World Ready

This function can't be called in early-execution mode.
