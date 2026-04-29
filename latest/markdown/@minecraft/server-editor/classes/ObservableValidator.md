[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / ObservableValidator

# Abstract Class: ObservableValidator\<T\>

Used for validating an observable value before it gets set

## Source

```ts
export declare abstract class ObservableValidator<T> {
    abstract validate(newValue: T): T | undefined;
}
```

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new ObservableValidator**\<`T`\>(): `ObservableValidator`\<`T`\>

#### Returns

`ObservableValidator`\<`T`\>

## Methods

### validate()

> `abstract` **validate**(`newValue`): `T` \| `undefined`

#### Parameters

##### newValue

`T`

#### Returns

`T` \| `undefined`
