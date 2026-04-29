[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-editor](../README.md) / ExtensionContext

# Class: ExtensionContext

The extension context is a native (C++) object created for
each registered Editor Extension, when a player connection
is established with the server.
A registered extension activation or deactivation closure is
accompanied by an [ExtensionContext] object, which provides
a player specific, editor extension specific context.
The Extension Context is the main interface to all the bound
Editor Services.
As more player services are added to the editor, they will
be exposed through this object

## Source

```ts
export class ExtensionContext {
    private constructor();
    readonly afterEvents: ExtensionContextAfterEvents;
    readonly blockPalette: BlockPaletteManager;
    readonly blockUtilities: BlockUtilities;
    readonly brushShapeManager: BrushShapeManager;
    readonly clipboardManager: ClipboardManager;
    readonly cursor: Cursor;
    readonly exportManager: ExportManager;
    readonly extensionInfo: Extension;
    readonly minimapManager: MinimapManager;
    readonly player: minecraftserver.Player;
    readonly playtest: PlaytestManager;
    readonly selectionManager: SelectionManager;
    readonly settings: SettingsManager;
    readonly structureManager: EditorStructureManager;
    readonly transactionManager: TransactionManager;
    readonly widgetManager: WidgetManager;
}
```

## Constructors

### Constructor

> `private` **new ExtensionContext**(): `ExtensionContext`

#### Returns

`ExtensionContext`

## Properties

### afterEvents

> `readonly` **afterEvents**: [`ExtensionContextAfterEvents`](ExtensionContextAfterEvents.md)

#### Remarks

Contains a set of events that are applicable to the editor
player.  Event callbacks are called in a deferred manner.
Event callbacks are executed in read-write mode.

#### World Ready

This property can't be read in early-execution mode.

***

### blockPalette

> `readonly` **blockPalette**: [`BlockPaletteManager`](BlockPaletteManager.md)

***

### blockUtilities

> `readonly` **blockUtilities**: [`BlockUtilities`](BlockUtilities.md)

***

### brushShapeManager

> `readonly` **brushShapeManager**: [`BrushShapeManager`](BrushShapeManager.md)

***

### clipboardManager

> `readonly` **clipboardManager**: [`ClipboardManager`](ClipboardManager.md)

#### Remarks

This is used to access the players Clipboard Manager and the
main interface through which the player can create, modify
and apply clipboard items

#### World Ready

This property can't be read in early-execution mode.

***

### cursor

> `readonly` **cursor**: [`Cursor`](Cursor.md)

#### Remarks

This is used to access the players 3D block cursor and it's
properties

#### World Ready

This property can't be read in early-execution mode.

***

### exportManager

> `readonly` **exportManager**: [`ExportManager`](ExportManager.md)

***

### extensionInfo

> `readonly` **extensionInfo**: [`Extension`](Extension.md)

#### Remarks

Contains information about the registered extension
instance.

#### World Ready

This property can't be read in early-execution mode.

***

### minimapManager

> `readonly` **minimapManager**: [`MinimapManager`](MinimapManager.md)

#### Remarks

Manager for minimap functionality, providing interface for
creating markers and controlling minimap displays.

#### World Ready

This property can't be read in early-execution mode.

***

### player

> `readonly` **player**: [`Player`](../../server/classes/Player.md)

#### Remarks

The current player which is the subject of the extension
invocation

#### World Ready

This property can't be read in early-execution mode.

***

### playtest

> `readonly` **playtest**: [`PlaytestManager`](PlaytestManager.md)

***

### selectionManager

> `readonly` **selectionManager**: [`SelectionManager`](SelectionManager.md)

#### Remarks

The instance of the players Selection Manager and the main
interface through which the player can create/modify
selections

#### World Ready

This property can't be read in early-execution mode.

***

### settings

> `readonly` **settings**: [`SettingsManager`](SettingsManager.md)

#### Remarks

The instance of the players Settings Manager and the
contract through which the settings for the player can be
modified.

#### World Ready

This property can't be read in early-execution mode.

***

### structureManager

> `readonly` **structureManager**: [`EditorStructureManager`](EditorStructureManager.md)

***

### transactionManager

> `readonly` **transactionManager**: [`TransactionManager`](TransactionManager.md)

#### Remarks

The instance of the players Transaction Manager and the main
interface through which the creator can create transaction
records, and undo/redo previous transactions

#### World Ready

This property can't be read in early-execution mode.

***

### widgetManager

> `readonly` **widgetManager**: [`WidgetManager`](WidgetManager.md)
