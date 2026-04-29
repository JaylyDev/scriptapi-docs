[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / StartupEvent

# Class: StartupEvent

## Constructors

### Constructor

> `private` **new StartupEvent**(): `StartupEvent`

#### Returns

`StartupEvent`

## Properties

### blockComponentRegistry

> `readonly` **blockComponentRegistry**: [`BlockComponentRegistry`](BlockComponentRegistry.md)

#### Remarks

This property can be read in early-execution mode.

> [!TIP]
> See [BlockCustomComponent](../interfaces/_minecraft_server.BlockCustomComponent.html) interface for detailed information and examples.

***

### customCommandRegistry

> `readonly` **customCommandRegistry**: [`CustomCommandRegistry`](CustomCommandRegistry.md)

#### Remarks

This property can be read in early-execution mode.

> [!TIP]
> See [CustomCommandRegistry](../classes/_minecraft_server.CustomCommandRegistry.html) class for detailed information and examples.

***

### itemComponentRegistry

> `readonly` **itemComponentRegistry**: [`ItemComponentRegistry`](ItemComponentRegistry.md)

#### Remarks

This property can be read in early-execution mode.

> [!TIP]
> See [ItemCustomComponent](../interfaces/_minecraft_server.ItemCustomComponent.html) interface for detailed information and examples.
