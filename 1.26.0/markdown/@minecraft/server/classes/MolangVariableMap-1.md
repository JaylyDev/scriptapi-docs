[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / MolangVariableMap

# Class: MolangVariableMap

Contains a set of additional variable values for further
defining how rendering and animations function.

## Constructors

### Constructor

> **new MolangVariableMap**(): `MolangVariableMap`

#### Returns

`MolangVariableMap`

## Methods

### setColorRGB()

> **setColorRGB**(`variableName`, `color`): `void`

#### Parameters

##### variableName

`string`

##### color

[`RGB`](../interfaces/RGB-1.md)

#### Returns

`void`

#### Remarks

Adds the following variables to Molang:
- `<variable_name>.r` - Red color value [0-1]
- `<variable_name>.g` - Green color value [0-1]
- `<variable_name>.b` - Blue color value [0-1]

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setColorRGBA()

> **setColorRGBA**(`variableName`, `color`): `void`

#### Parameters

##### variableName

`string`

##### color

[`RGBA`](../interfaces/RGBA-1.md)

#### Returns

`void`

#### Remarks

Adds the following variables to Molang:
- `<variable_name>.r` - Red color value [0-1]
- `<variable_name>.g` - Green color value [0-1]
- `<variable_name>.b` - Blue color value [0-1]
- `<variable_name>.a` - Alpha (transparency) color value
[0-1]

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setFloat()

> **setFloat**(`variableName`, `number`): `void`

#### Parameters

##### variableName

`string`

Name of the float-based number to set.

##### number

`number`

Value for the Molang-based variable to set.

#### Returns

`void`

#### Remarks

Sets a numeric (decimal) value within the Molang variable
map.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setSpeedAndDirection()

> **setSpeedAndDirection**(`variableName`, `speed`, `direction`): `void`

#### Parameters

##### variableName

`string`

##### speed

`number`

##### direction

[`Vector3`](../interfaces/Vector3-1.md)

#### Returns

`void`

#### Remarks

Adds the following variables to Molang:
- `<variable_name>.speed` - Speed number provided
- `<variable_name>.direction_x` - X value from the [Vector3](../interfaces/Vector3-1.md) provided
- `<variable_name>.direction_y` - Y value from the [Vector3](../interfaces/Vector3-1.md) provided
- `<variable_name>.direction_z` - Z value from the [Vector3](../interfaces/Vector3-1.md) provided

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setVector3()

> **setVector3**(`variableName`, `vector`): `void`

#### Parameters

##### variableName

`string`

##### vector

[`Vector3`](../interfaces/Vector3-1.md)

#### Returns

`void`

#### Remarks

Adds the following variables to Molang:
- `<variable_name>.x` - X value from the [Vector3](../interfaces/Vector3-1.md)
provided
- `<variable_name>.y` - Y value from the [Vector3](../interfaces/Vector3-1.md)
provided
- `<variable_name>.z` - Z value from the [Vector3](../interfaces/Vector3-1.md)
provided

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
