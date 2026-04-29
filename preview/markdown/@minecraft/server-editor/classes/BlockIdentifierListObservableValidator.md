[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / BlockIdentifierListObservableValidator

# Class: BlockIdentifierListObservableValidator

Validates observable objects that support string list as
BlockType

## Source

```ts
export declare class BlockIdentifierListObservableValidator implements ObservableValidator<string[]> {
    validate(newValue: string[]): string[];
}
```

## Implements

- [`ObservableValidator`](ObservableValidator.md)\<`string`[]\>

## Constructors

### Constructor

> **new BlockIdentifierListObservableValidator**(): `BlockIdentifierListObservableValidator`

#### Returns

`BlockIdentifierListObservableValidator`

## Methods

### validate()

> **validate**(`newValue`): `string`[]

#### Parameters

##### newValue

`string`[]

#### Returns

`string`[]

#### Implementation of

[`ObservableValidator`](ObservableValidator.md).[`validate`](ObservableValidator.md#validate)
