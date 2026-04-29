[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-private-bindings](../README.md) / ModeChangeAfterEvent

# Class: ModeChangeAfterEvent

Contains information related to changes in player editor
mode.

## Constructors

### Constructor

> `private` **new ModeChangeAfterEvent**(): `ModeChangeAfterEvent`

#### Returns

`ModeChangeAfterEvent`

## Properties

### mode

> `readonly` **mode**: [`EditorMode`](../enumerations/EditorMode.md)

#### Remarks

The editor mode that the player is changed to.

#### World Ready

This property can't be read in early-execution mode.
