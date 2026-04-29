[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / SpeedSettings

# Class: SpeedSettings

## Constructors

### Constructor

> `private` **new SpeedSettings**(): `SpeedSettings`

#### Returns

`SpeedSettings`

## Methods

### get()

> **get**\<`T`\>(`property`): [`SpeedSettingsPropertyTypeMap`](../type-aliases/SpeedSettingsPropertyTypeMap.md)\[`T`\] \| `undefined`

#### Type Parameters

##### T

`T` *extends* [`FlySpeedMultiplier`](../enumerations/SpeedSettingsProperty.md#flyspeedmultiplier)

#### Parameters

##### property

`T`

#### Returns

[`SpeedSettingsPropertyTypeMap`](../type-aliases/SpeedSettingsPropertyTypeMap.md)\[`T`\] \| `undefined`

***

### getAll()

> **getAll**(): [`SpeedSettingsPropertyTypeMap`](../type-aliases/SpeedSettingsPropertyTypeMap.md)

#### Returns

[`SpeedSettingsPropertyTypeMap`](../type-aliases/SpeedSettingsPropertyTypeMap.md)

***

### set()

> **set**\<`T`\>(`property`, `value`): `void`

#### Type Parameters

##### T

`T` *extends* [`FlySpeedMultiplier`](../enumerations/SpeedSettingsProperty.md#flyspeedmultiplier)

#### Parameters

##### property

`T`

##### value

[`SpeedSettingsPropertyTypeMap`](../type-aliases/SpeedSettingsPropertyTypeMap.md)\[`T`\]

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

[`SpeedSettingsPropertyTypeMap`](../type-aliases/SpeedSettingsPropertyTypeMap.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
