[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / PackSettingChangeAfterEvent

# Class: PackSettingChangeAfterEvent

**`Beta`**

Pack setting name and value that changed.

## Source

```ts
export class PackSettingChangeAfterEvent {
    private constructor();
    readonly settingName: string;
    readonly settingValue: boolean | number | string;
}
```

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
