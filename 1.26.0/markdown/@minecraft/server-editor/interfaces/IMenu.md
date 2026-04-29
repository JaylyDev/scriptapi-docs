[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / IMenu

# Interface: IMenu

## Properties

### checked?

> `optional` **checked?**: `boolean`

#### Remarks

If defined, the menu will show a checked or unchecked
checkbox.

***

### enabled

> **enabled**: `boolean`

#### Remarks

The menu will be in either an enabled or disabled state

***

### id

> `readonly` **id**: `string`

#### Remarks

Unique ID for the menu

***

### submenu

> `readonly` **submenu**: `IMenu`[]

#### Remarks

Sub menus of this menu

## Methods

### addItem()

> **addItem**(`params`, `action?`): `IMenu`

#### Parameters

##### params

[`IMenuCreationParams`](IMenuCreationParams.md)

The menu creation parameters for the sub item being added

##### action?

[`RegisteredAction`](../type-aliases/RegisteredAction.md)\<[`NoArgsAction`](../type-aliases/NoArgsAction.md)\>

The action to associate with the menu item. Only a subset of
actions are supported

#### Returns

`IMenu`

#### Remarks

Create a child menu on this menu.

***

### dispose()

> **dispose**(): `void`

#### Returns

`void`

#### Remarks

Destroy the menu and all of its children.

***

### hide()

> **hide**(): `void`

#### Returns

`void`

#### Remarks

Hide the menu and all of its children.

***

### replaceAction()

> **replaceAction**(`action`): `void`

#### Parameters

##### action

[`RegisteredAction`](../type-aliases/RegisteredAction.md)\<[`NoArgsAction`](../type-aliases/NoArgsAction.md)\>

The registered action to associated with this menu item

#### Returns

`void`

#### Remarks

Replaces the current associated menu action with a new
action

***

### show()

> **show**(): `void`

#### Returns

`void`

#### Remarks

Show the menu and all of its children.
