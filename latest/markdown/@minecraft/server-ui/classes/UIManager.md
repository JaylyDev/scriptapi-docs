[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-ui](../README.md) / UIManager

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

#### Write Privilege

This function can't be called in read-only mode.

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
