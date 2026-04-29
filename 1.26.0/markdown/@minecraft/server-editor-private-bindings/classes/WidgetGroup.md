[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / WidgetGroup

# Class: WidgetGroup

## Constructors

### Constructor

> `private` **new WidgetGroup**(): `WidgetGroup`

#### Returns

`WidgetGroup`

## Properties

### selectedWidgetCount

> `readonly` **selectedWidgetCount**: `number`

#### Throws

This property can throw when used.

[InvalidWidgetGroupError](InvalidWidgetGroupError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### visible

> **visible**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### visibleBounds

> **visibleBounds**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### createWidget()

> **createWidget**(`location`, `options?`): [`Widget`](Widget.md)

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

##### options?

[`WidgetCreateOptions`](../interfaces/WidgetCreateOptions.md)

#### Returns

[`Widget`](Widget.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### delete()

> **delete**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### deleteWidget()

> **deleteWidget**(`widgetToDelete`): `void`

#### Parameters

##### widgetToDelete

[`Widget`](Widget.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### deselectAllWidgets()

> **deselectAllWidgets**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidWidgetGroupError](InvalidWidgetGroupError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### selectAllWidgets()

> **selectAllWidgets**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidWidgetGroupError](InvalidWidgetGroupError.md)

#### World Ready

This function can't be called in early-execution mode.
