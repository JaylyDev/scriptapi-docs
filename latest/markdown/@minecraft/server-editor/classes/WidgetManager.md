[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / WidgetManager

# Class: WidgetManager

## Constructors

### Constructor

> `private` **new WidgetManager**(): `WidgetManager`

#### Returns

`WidgetManager`

## Methods

### createGroup()

> **createGroup**(`options?`): [`WidgetGroup`](WidgetGroup.md)

#### Parameters

##### options?

[`WidgetGroupCreateOptions`](../interfaces/WidgetGroupCreateOptions.md)

#### Returns

[`WidgetGroup`](WidgetGroup.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### deleteGroup()

> **deleteGroup**(`groupToDelete`): `void`

#### Parameters

##### groupToDelete

[`WidgetGroup`](WidgetGroup.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
