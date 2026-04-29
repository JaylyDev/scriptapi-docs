[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / ExtensionContextAfterEvents

# Class: ExtensionContextAfterEvents

Contains a set of events that are available across the scope
of the ExtensionContext.

## Source

```ts
export class ExtensionContextAfterEvents {
    private constructor();
    readonly blockPaletteSelectedItemChange: BlockPaletteSelectedItemChangeAfterEventSignal;
    readonly clipboardChange: ClipboardChangeAfterEventSignal;
    readonly currentThemeChange: CurrentThemeChangeAfterEventSignal;
    readonly currentThemeColorChange: CurrentThemeColorChangeAfterEventSignal;
    readonly cursorPropertyChange: CursorPropertyChangeAfterEventSignal;
    readonly modeChange: ModeChangeAfterEventSignal;
    readonly SelectionChange: SelectionChangeAfterEventSignal;
}
```

## Constructors

### Constructor

> `private` **new ExtensionContextAfterEvents**(): `ExtensionContextAfterEvents`

#### Returns

`ExtensionContextAfterEvents`

## Properties

### blockPaletteSelectedItemChange

> `readonly` **blockPaletteSelectedItemChange**: [`BlockPaletteSelectedItemChangeAfterEventSignal`](BlockPaletteSelectedItemChangeAfterEventSignal.md)

#### Remarks

This property can be read in early-execution mode.

***

### clipboardChange

> `readonly` **clipboardChange**: [`ClipboardChangeAfterEventSignal`](ClipboardChangeAfterEventSignal.md)

#### Remarks

This property can be read in early-execution mode.

***

### currentThemeChange

> `readonly` **currentThemeChange**: [`CurrentThemeChangeAfterEventSignal`](CurrentThemeChangeAfterEventSignal.md)

#### Remarks

This property can be read in early-execution mode.

***

### currentThemeColorChange

> `readonly` **currentThemeColorChange**: [`CurrentThemeColorChangeAfterEventSignal`](CurrentThemeColorChangeAfterEventSignal.md)

#### Remarks

This property can be read in early-execution mode.

***

### cursorPropertyChange

> `readonly` **cursorPropertyChange**: [`CursorPropertyChangeAfterEventSignal`](CursorPropertyChangeAfterEventSignal.md)

#### Remarks

This property can be read in early-execution mode.

***

### modeChange

> `readonly` **modeChange**: [`ModeChangeAfterEventSignal`](ModeChangeAfterEventSignal.md)

#### Remarks

This event triggers when the editor mode changes for the
player.

This property can be read in early-execution mode.

***

### SelectionChange

> `readonly` **SelectionChange**: [`SelectionChangeAfterEventSignal`](SelectionChangeAfterEventSignal.md)

#### Remarks

This property can be read in early-execution mode.
