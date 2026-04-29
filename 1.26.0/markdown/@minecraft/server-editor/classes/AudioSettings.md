[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / AudioSettings

# Class: AudioSettings

## Constructors

### Constructor

> `private` **new AudioSettings**(): `AudioSettings`

#### Returns

`AudioSettings`

## Methods

### get()

> **get**\<`T`\>(`property`): [`AudioSettingsPropertyTypeMap`](../type-aliases/AudioSettingsPropertyTypeMap.md)\[`T`\] \| `undefined`

#### Type Parameters

##### T

`T` *extends* keyof [`AudioSettingsPropertyTypeMap`](../type-aliases/AudioSettingsPropertyTypeMap.md)

#### Parameters

##### property

`T`

#### Returns

[`AudioSettingsPropertyTypeMap`](../type-aliases/AudioSettingsPropertyTypeMap.md)\[`T`\] \| `undefined`

***

### getAll()

> **getAll**(): [`AudioSettingsPropertyTypeMap`](../type-aliases/AudioSettingsPropertyTypeMap.md)

#### Returns

[`AudioSettingsPropertyTypeMap`](../type-aliases/AudioSettingsPropertyTypeMap.md)

***

### set()

> **set**\<`T`\>(`property`, `value`): `void`

#### Type Parameters

##### T

`T` *extends* keyof [`AudioSettingsPropertyTypeMap`](../type-aliases/AudioSettingsPropertyTypeMap.md)

#### Parameters

##### property

`T`

##### value

[`AudioSettingsPropertyTypeMap`](../type-aliases/AudioSettingsPropertyTypeMap.md)\[`T`\]

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setAll()

> **setAll**(`properties`): `void`

#### Parameters

##### properties

[`AudioSettingsPropertyTypeMap`](../type-aliases/AudioSettingsPropertyTypeMap.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
