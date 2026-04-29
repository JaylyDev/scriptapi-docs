[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IRegisteredKeyBinding

# Interface: IRegisteredKeyBinding

Key binding that is registered to an input context

## Source

```ts
export interface IRegisteredKeyBinding {
    readonly id: string;
    getProcessingState(): KeyProcessingState;
    setProcessingState(newState: KeyProcessingState | undefined): void;
}
```

## Properties

### id

> `readonly` **id**: `string`

#### Remarks

Unique identifier for the binding.

## Methods

### getProcessingState()

> **getProcessingState**(): [`KeyProcessingState`](../enumerations/KeyProcessingState.md)

#### Returns

[`KeyProcessingState`](../enumerations/KeyProcessingState.md)

#### Remarks

Returns current processing state of the binding.

***

### setProcessingState()

> **setProcessingState**(`newState`): `void`

#### Parameters

##### newState

[`KeyProcessingState`](../enumerations/KeyProcessingState.md) \| `undefined`

New binding processing state.

#### Returns

`void`

#### Remarks

Updates how the key input will be processed for this
binding. If undefined, it will be consumed.
