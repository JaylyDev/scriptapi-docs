[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / UIManager

# Class: UIManager

## Constructors

### Constructor

> `private` **new UIManager**(): `UIManager`

#### Returns

`UIManager`

## Methods

### closeAllForms()

> **closeAllForms**(`player`): `void`

#### Parameters

##### player

[`Player`](../../server/classes/Player.md)

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { Player } from "@minecraft/server";
import { uiManager } from "@minecraft/server-ui";

/**
which closes all modal/message/action forms from a player
@param player Player to close the form to
/
function closeForm(player: Player) {
uiManager.closeAllForms(player);
}
```
