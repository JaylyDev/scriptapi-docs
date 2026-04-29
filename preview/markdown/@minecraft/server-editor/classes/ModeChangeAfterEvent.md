[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / ModeChangeAfterEvent

# Class: ModeChangeAfterEvent

Contains information related to changes in player editor
mode.

## Source

```ts
export class ModeChangeAfterEvent {
    private constructor();
    readonly mode: EditorMode;
}
```

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
