[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / Extension

# Class: Extension

Editor Extensions are the basis for all player specific,
editor specific functionality within the game.  Almost all
editor functionality is exported and available within the
context of an [ExtensionContext](ExtensionContext.md)
When the script manager initializes during level loading,
the scripts are loaded from the behavior packs and executed.
As part of the global execution context, the scripts are
free to register any number of extensions.
An Editor Extension is defined a name, an activation
function and a shutdown function.

It is not recommended to directly use this function as the
contract is not guaranteed to be stable, instead prefer
[registerEditorExtension](../functions/registerEditorExtension.md) as it provides additional
functionality and a stable contract.

## Constructors

### Constructor

> `private` **new Extension**(): `Extension`

#### Returns

`Extension`

## Properties

### defaultToolGroupId

> `readonly` **defaultToolGroupId**: `string`

#### Remarks

Default identifier for tool rail grouping. All modal tools
created from the extension will use this.

#### World Ready

This property can't be read in early-execution mode.

***

### description

> `readonly` **description**: `string`

#### Remarks

Description specified during registration for the extension.

#### World Ready

This property can't be read in early-execution mode.

***

### name

> `readonly` **name**: `string`

#### Remarks

Name of the extension.

#### World Ready

This property can't be read in early-execution mode.

***

### notes

> `readonly` **notes**: `string`

#### Remarks

Notes specified during registration for the extension.

#### World Ready

This property can't be read in early-execution mode.
