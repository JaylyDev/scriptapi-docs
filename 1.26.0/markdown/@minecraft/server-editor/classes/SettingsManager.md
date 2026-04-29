[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / SettingsManager

# Class: SettingsManager

The SettingsManager (accessible from the [ExtensionContext](ExtensionContext.md)) is responsible for the management all
player settings.

## Constructors

### Constructor

> `private` **new SettingsManager**(): `SettingsManager`

#### Returns

`SettingsManager`

## Properties

### audio

> `readonly` **audio**: [`AudioSettings`](AudioSettings.md)

***

### graphics

> `readonly` **graphics**: [`GraphicsSettings`](GraphicsSettings.md)

#### Remarks

Manages graphics settings properties.

#### World Ready

This property can't be read in early-execution mode.

***

### speed

> `readonly` **speed**: [`SpeedSettings`](SpeedSettings.md)

***

### theme

> `readonly` **theme**: [`ThemeSettings`](ThemeSettings.md)
