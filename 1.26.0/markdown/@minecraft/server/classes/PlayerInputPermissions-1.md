[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PlayerInputPermissions

# Class: PlayerInputPermissions

Contains APIs to enable/disable player input permissions.

## Constructors

### Constructor

> `private` **new PlayerInputPermissions**(): `PlayerInputPermissions`

#### Returns

`PlayerInputPermissions`

## Methods

### isPermissionCategoryEnabled()

> **isPermissionCategoryEnabled**(`permissionCategory`): `boolean`

#### Parameters

##### permissionCategory

[`InputPermissionCategory`](../enumerations/InputPermissionCategory-1.md)

#### Returns

`boolean`

#### Remarks

Returns true if an input permission is enabled.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setPermissionCategory()

> **setPermissionCategory**(`permissionCategory`, `isEnabled`): `void`

#### Parameters

##### permissionCategory

[`InputPermissionCategory`](../enumerations/InputPermissionCategory-1.md)

##### isEnabled

`boolean`

#### Returns

`void`

#### Remarks

Enable or disable an input permission. When enabled the
input will work, when disabled will not work.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
