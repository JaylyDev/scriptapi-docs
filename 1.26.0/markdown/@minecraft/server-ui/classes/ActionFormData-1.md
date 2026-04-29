[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / ActionFormData

# Class: ActionFormData

Builds a simple player form with buttons that let the player
take action.

## Examples

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";

function showActionForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const playerList = world.getPlayers();

  if (playerList.length >= 1) {
    const form = new ActionFormData()
      .title("Test Title")
      .body("Body text here!")
      .button("btn 1")
      .button("btn 2")
      .button("btn 3")
      .button("btn 4")
      .button("btn 5");

    form.show(playerList[0]).then((result: ActionFormResponse) => {
      if (result.canceled) {
        log("Player exited out of the dialog. Note that if the chat window is up, dialogs are automatically canceled.");
        return -1;
      } else {
        log("Your result was: " + result.selection);
      }
    });
  }
}
```

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { ActionFormData, ActionFormResponse } from "@minecraft/server-ui";

function showFavoriteMonth(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  if (players.length >= 1) {
    const form = new ActionFormData()
      .title("Months")
      .body("Choose your favorite month!")
      .button("January")
      .button("February")
      .button("March")
      .button("April")
      .button("May");

    form.show(players[0]).then((response: ActionFormResponse) => {
      if (response.selection === 3) {
        log("I like April too!");
        return -1;
      }
    });
  }
}
```

```js
import { world } from "@minecraft/server";
import { ActionFormData } from "@minecraft/server-ui";
const form = new ActionFormData();
form.title("Minigames");
form.body("Choose the games");
form.button("Spleef", "textures/items/diamond_shovel");
form.button("Murder Mystery", "textures/items/iron_sword");
form.button("Bedwars", "textures/minigames/bedwars.png");
for (const player of world.getAllPlayers()) {
   form.show(player).then((response) => {
       if (response.canceled) {
           player.sendMessage("Canceled due to " + response.cancelationReason);
       }
       if (response.selection == 0) {
           player.sendMessage("You have selected Spleef");
       }
       if (response.selection == 1) {
           player.sendMessage("You have selected Murder Mystery");
       }
       if (response.selection == 2) {
           player.sendMessage("You have selected Bedwars");
       }
       return;
   }); // show player the form
}
```
![image](https://jaylydev.github.io/scriptapi-docs/assets/minecraft/ActionFormData.png)

## Constructors

### Constructor

> **new ActionFormData**(): `ActionFormData`

#### Returns

`ActionFormData`

## Methods

### body()

> **body**(`bodyText`): `ActionFormData`

#### Parameters

##### bodyText

`string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

#### Returns

`ActionFormData`

#### Remarks

Method that sets the body text for the modal form.

#### World Ready

This function can't be called in early-execution mode.

***

### button()

> **button**(`text`, `iconPath?`): `ActionFormData`

#### Parameters

##### text

`string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

##### iconPath?

`string`

#### Returns

`ActionFormData`

#### Remarks

Adds a button to this form with an icon from a resource
pack.

#### World Ready

This function can't be called in early-execution mode.

***

### divider()

> **divider**(): `ActionFormData`

#### Returns

`ActionFormData`

#### Remarks

Adds a section divider to the form.

#### World Ready

This function can't be called in early-execution mode.

***

### header()

> **header**(`text`): `ActionFormData`

#### Parameters

##### text

`string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

Text to display.

#### Returns

`ActionFormData`

#### Remarks

Adds a header to the form.

#### World Ready

This function can't be called in early-execution mode.

***

### label()

> **label**(`text`): `ActionFormData`

#### Parameters

##### text

`string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

Text to display.

#### Returns

`ActionFormData`

#### Remarks

Adds a label to the form.

#### World Ready

This function can't be called in early-execution mode.

***

### show()

> **show**(`player`): `Promise`\<[`ActionFormResponse`](ActionFormResponse-1.md)\>

#### Parameters

##### player

[`Player`](../../server/classes/Player.md)

Player to show this dialog to.

#### Returns

`Promise`\<[`ActionFormResponse`](ActionFormResponse-1.md)\>

#### Remarks

Creates and shows this modal popup form. Returns
asynchronously when the player confirms or cancels the
dialog.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[minecraftserver.InvalidEntityError](../../server/classes/InvalidEntityError.md)

[minecraftserver.RawMessageError](../../server/classes/RawMessageError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### title()

> **title**(`titleText`): `ActionFormData`

#### Parameters

##### titleText

`string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

#### Returns

`ActionFormData`

#### Remarks

This builder method sets the title for the modal dialog.

#### World Ready

This function can't be called in early-execution mode.
