[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / ActionFormResponse

# Class: ActionFormResponse

Returns data about the player results from a modal action
form.

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

## Source

```ts
export class ActionFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}
```

## Extends

- [`FormResponse`](FormResponse-1.md)

## Constructors

### Constructor

> `private` **new ActionFormResponse**(): `ActionFormResponse`

#### Returns

`ActionFormResponse`

#### Overrides

[`FormResponse`](FormResponse-1.md).[`constructor`](FormResponse-1.md#constructor)

## Properties

### cancelationReason?

> `readonly` `optional` **cancelationReason?**: [`FormCancelationReason`](../enumerations/FormCancelationReason-1.md)

#### Remarks

Contains additional details as to why a form was canceled.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`FormResponse`](FormResponse-1.md).[`cancelationReason`](FormResponse-1.md#cancelationreason)

***

### canceled

> `readonly` **canceled**: `boolean`

#### Remarks

If true, the form was canceled by the player (e.g., they
selected the pop-up X close button).

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`FormResponse`](FormResponse-1.md).[`canceled`](FormResponse-1.md#canceled)

***

### selection?

> `readonly` `optional` **selection?**: `number`

#### Remarks

Returns the index of the button that was pushed.

#### World Ready

This property can't be read in early-execution mode.
