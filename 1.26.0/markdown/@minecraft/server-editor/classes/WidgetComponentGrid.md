[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / WidgetComponentGrid

# Class: WidgetComponentGrid

## Extends

- [`WidgetComponentBase`](WidgetComponentBase.md)

## Constructors

### Constructor

> `private` **new WidgetComponentGrid**(): `WidgetComponentGrid`

#### Returns

`WidgetComponentGrid`

#### Overrides

[`WidgetComponentBase`](WidgetComponentBase.md).[`constructor`](WidgetComponentBase.md#constructor)

## Properties

### componentType

> `readonly` **componentType**: [`WidgetComponentType`](../enumerations/WidgetComponentType.md)

#### Throws

This property can throw when used.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`componentType`](WidgetComponentBase.md#componenttype)

***

### gridColor

> **gridColor**: [`RGBA`](../../server/interfaces/RGBA.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### gridCount

> **gridCount**: [`Vector2`](../../server/interfaces/Vector2.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### gridSize

> **gridSize**: [`Vector2`](../../server/interfaces/Vector2.md)

#### Remarks

This property can't be edited in restricted-execution mode.

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

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`location`](WidgetComponentBase.md#location)

***

### lockToSurface

> **lockToSurface**: `boolean`

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`lockToSurface`](WidgetComponentBase.md#locktosurface)

***

### name

> `readonly` **name**: `string`

#### Throws

This property can throw when used.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`name`](WidgetComponentBase.md#name)

***

### offset

> **offset**: [`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`offset`](WidgetComponentBase.md#offset)

***

### plane

> **plane**: [`Plane`](../enumerations/Plane.md)

#### Remarks

This property can't be edited in restricted-execution mode.

#### World Ready

This property can't be read in early-execution mode.

***

### valid

> `readonly` **valid**: `boolean`

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`valid`](WidgetComponentBase.md#valid)

***

### visible

> **visible**: `boolean`

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`visible`](WidgetComponentBase.md#visible)

***

### widget

> `readonly` **widget**: [`Widget`](Widget.md)

#### Throws

This property can throw when used.

[InvalidWidgetComponentError](InvalidWidgetComponentError.md)

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`widget`](WidgetComponentBase.md#widget)

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

#### Inherited from

[`WidgetComponentBase`](WidgetComponentBase.md).[`delete`](WidgetComponentBase.md#delete)
