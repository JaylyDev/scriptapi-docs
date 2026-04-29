[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IObservable

# Interface: IObservable\<T\>

Represents a stateful value that can be observed by
different objects.

## Source

```ts
export interface IObservable<T> {
    readonly validator?: ObservableValidator<T>;
    readonly value: Readonly<T>;
    set(newValue: T): boolean;
}
```

## Type Parameters

### T

`T`

## Properties

### validator?

> `readonly` `optional` **validator?**: [`ObservableValidator`](../classes/ObservableValidator.md)\<`T`\>

#### Remarks

Optional validator that will pre-process the new value.

***

### value

> `readonly` **value**: `Readonly`\<`T`\>

#### Remarks

Current value of the observable.

## Methods

### set()

> **set**(`newValue`): `boolean`

#### Parameters

##### newValue

`T`

New value to be set (will be processed by the validator if
it exists).

#### Returns

`boolean`

#### Remarks

Updates the value and notifies dependent objects.
