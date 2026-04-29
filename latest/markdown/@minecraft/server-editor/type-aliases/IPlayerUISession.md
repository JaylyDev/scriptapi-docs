[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / IPlayerUISession

# Type Alias: IPlayerUISession\<PerPlayerStorage\>

> **IPlayerUISession**\<`PerPlayerStorage`\> = `object`

The IPlayerUISession represents the editor user interface
for a given player and given extension. Extensions
registered with Minecraft are instantiated for each player
which joins a server, and this interface provides the set of
functionality needed to create and modify the editor UI for
that player. The associated Editor Context for this session
object is also player specific. From a given
IPlayerUISession object, there is no way to interact with
the UI of another player, that must be done from global
extension scope registration and/or data sharing independent
of the UI object.

## Type Parameters

### PerPlayerStorage

`PerPlayerStorage` = `Record`\<`string`, `never`\>

## Properties

### actionBar

> `readonly` **actionBar**: [`IActionBar`](../interfaces/IActionBar.md)

***

### actionManager

> `readonly` **actionManager**: [`ActionManager`](../interfaces/ActionManager.md)

***

### builtInUIManager

> `readonly` **builtInUIManager**: [`BuiltInUIManager`](../interfaces/BuiltInUIManager.md)

***

### dialogManager

> `readonly` **dialogManager**: [`IModalDialogManager`](../interfaces/IModalDialogManager.md)

***

### eventSubscriptionCache

> `readonly` **eventSubscriptionCache**: [`BedrockEventSubscriptionCache`](../classes/BedrockEventSubscriptionCache.md)

***

### extensionContext

> `readonly` **extensionContext**: [`ExtensionContext`](../classes/ExtensionContext.md)

***

### inputManager

> `readonly` **inputManager**: [`IGlobalInputManager`](../interfaces/IGlobalInputManager.md)

***

### log

> `readonly` **log**: [`IPlayerLogger`](../interfaces/IPlayerLogger.md)

***

### menuBar

> `readonly` **menuBar**: [`IMenuContainer`](../interfaces/IMenuContainer.md)

***

### scratchStorage

> **scratchStorage**: `PerPlayerStorage` \| `undefined`

***

### statusBar

> `readonly` **statusBar**: [`IStatusBar`](../interfaces/IStatusBar.md)

***

### toolRail

> `readonly` **toolRail**: [`IModalToolContainer`](../interfaces/IModalToolContainer.md)

## Methods

### createPropertyPane()

> **createPropertyPane**(`options`): [`IRootPropertyPane`](../interfaces/IRootPropertyPane.md)

#### Parameters

##### options

[`IRootPropertyPaneOptions`](../interfaces/IRootPropertyPaneOptions.md)

#### Returns

[`IRootPropertyPane`](../interfaces/IRootPropertyPane.md)
