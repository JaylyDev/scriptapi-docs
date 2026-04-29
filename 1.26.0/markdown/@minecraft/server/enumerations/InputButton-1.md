[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / InputButton

# Enumeration: InputButton

All the different input buttons that are supported. Use with
[InputInfo.getButtonState](../classes/InputInfo-1.md#getbuttonstate) via [Player.inputInfo](../classes/Player-1.md#inputinfo) or [PlayerButtonInputAfterEvent](../classes/PlayerButtonInputAfterEvent-1.md) via
[WorldAfterEvents.playerButtonInput](../classes/WorldAfterEvents-1.md#playerbuttoninput)

## Enumeration Members

### Jump

> **Jump**: `"Jump"`

#### Remarks

This is mapped to the 'Jump' button on controllers,
keyboards, and touch interfaces.

***

### Sneak

> **Sneak**: `"Sneak"`

#### Remarks

This is mapped to the 'Sneak' button on controllers,
keyboards, and touch interfaces. By default, this is shift
on a keyboard or B on an Xbox controller. On touch
interfaces this will only be pressed for 1 tick or less and
then it will be released immediately even if the player
holds their finger down. Dismounting a horse or exiting a
boat will not send a Sneak button change event.
