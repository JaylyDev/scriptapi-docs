[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / PackSettingChangeAfterEvent

# Class: PackSettingChangeAfterEvent

**`Beta`**

Pack setting name and value that changed.

## Constructors

### Constructor

> `private` **new PackSettingChangeAfterEvent**(): `PackSettingChangeAfterEvent`

#### Returns

`PackSettingChangeAfterEvent`

## Properties

### settingName

> `readonly` **settingName**: `string`

#### Remarks

The name of the setting.

#### World Ready

This property can't be read in early-execution mode.

***

### settingValue

> `readonly` **settingValue**: `string` \| `number` \| `boolean`

#### Remarks

The value of the setting.

#### World Ready

This property can't be read in early-execution mode.
