[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / GraphicsSettings

# Class: GraphicsSettings

Settings category that manages [GraphicsSettingsProperty](../enumerations/GraphicsSettingsProperty.md) configurations.

## Constructors

### Constructor

> `private` **new GraphicsSettings**(): `GraphicsSettings`

#### Returns

`GraphicsSettings`

## Methods

### get()

> **get**\<`T`\>(`property`): [`GraphicsSettingsPropertyTypeMap`](../type-aliases/GraphicsSettingsPropertyTypeMap.md)\[`T`\] \| `undefined`

#### Type Parameters

##### T

`T` *extends* keyof [`GraphicsSettingsPropertyTypeMap`](../type-aliases/GraphicsSettingsPropertyTypeMap.md)

#### Parameters

##### property

`T`

Property identifier.

#### Returns

[`GraphicsSettingsPropertyTypeMap`](../type-aliases/GraphicsSettingsPropertyTypeMap.md)\[`T`\] \| `undefined`

Returns the property value if it is found. If the property
is not available, it returns undefined.

#### Remarks

Retrieves a graphics settings property value.

#### World Ready

This function can't be called in early-execution mode.

***

### getAll()

> **getAll**(): [`GraphicsSettingsPropertyTypeMap`](../type-aliases/GraphicsSettingsPropertyTypeMap.md)

#### Returns

[`GraphicsSettingsPropertyTypeMap`](../type-aliases/GraphicsSettingsPropertyTypeMap.md)

Returns a property value map for all available properties.

#### Remarks

Retrieves all graphics settings properties and their values.

#### World Ready

This function can't be called in early-execution mode.

***

### set()

> **set**\<`T`\>(`property`, `value`): `void`

#### Type Parameters

##### T

`T` *extends* keyof [`GraphicsSettingsPropertyTypeMap`](../type-aliases/GraphicsSettingsPropertyTypeMap.md)

#### Parameters

##### property

`T`

Property identifier.

##### value

[`GraphicsSettingsPropertyTypeMap`](../type-aliases/GraphicsSettingsPropertyTypeMap.md)\[`T`\]

New property value.

#### Returns

`void`

#### Remarks

Modifies a graphics settings property value.

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

[`GraphicsSettingsPropertyTypeMap`](../type-aliases/GraphicsSettingsPropertyTypeMap.md)

Property map to set available property values. If the
property is not defined in the map, it will not be modified.

#### Returns

`void`

#### Remarks

Modify multiple graphics settings properties.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
