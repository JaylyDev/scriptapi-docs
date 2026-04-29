[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / WidgetComponentBase

# Class: WidgetComponentBase

## Extended by

- [`WidgetComponentBoundingBox`](WidgetComponentBoundingBox.md)
- [`WidgetComponentClipboard`](WidgetComponentClipboard.md)
- [`WidgetComponentEntity`](WidgetComponentEntity.md)
- [`WidgetComponentGizmo`](WidgetComponentGizmo.md)
- [`WidgetComponentGrid`](WidgetComponentGrid.md)
- [`WidgetComponentGuide`](WidgetComponentGuide.md)
- [`WidgetComponentRenderPrimitive`](WidgetComponentRenderPrimitive.md)
- [`WidgetComponentSpline`](WidgetComponentSpline.md)
- [`WidgetComponentText`](WidgetComponentText.md)
- [`WidgetComponentVolumeOutline`](WidgetComponentVolumeOutline.md)

## Constructors

### Constructor

> `private` **new WidgetComponentBase**(): `WidgetComponentBase`

#### Returns

`WidgetComponentBase`

## Properties

### componentType

> `readonly` **componentType**: [`WidgetComponentType`](../enumerations/WidgetComponentType.md)

#### Throws

This property can throw when used.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### location

> `readonly` **location**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Throws

This property can throw when used.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### lockToSurface

> **lockToSurface**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### name

> `readonly` **name**: `string`

#### Throws

This property can throw when used.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This property can't be read in early-execution mode.

***

### offset

> **offset**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### valid

> `readonly` **valid**: `boolean`

***

### visible

> **visible**: `boolean`

***

### widget

> `readonly` **widget**: [`Widget`](Widget.md)

#### Throws

This property can throw when used.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This property can't be read in early-execution mode.

## Methods

### delete()

> **delete**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This function can't be called in early-execution mode.
