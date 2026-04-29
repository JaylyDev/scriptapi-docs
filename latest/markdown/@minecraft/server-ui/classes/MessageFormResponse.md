[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-ui](../README.md) / MessageFormResponse

# Class: MessageFormResponse

Returns data about the player results from a modal message
form.

## Examples

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { MessageFormResponse, MessageFormData } from "@minecraft/server-ui";

function showBasicMessageForm(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  const messageForm = new MessageFormData()
    .title("Message Form Example")
    .body("This shows a simple example using §o§7MessageFormData§r.")
    .button1("Button 1")
    .button2("Button 2");

  messageForm
    .show(players[0])
    .then((formData: MessageFormResponse) => {
      // player canceled the form, or another dialog was up and open.
      if (formData.canceled || formData.selection === undefined) {
        return;
      }

      log(`You selected ${formData.selection === 0 ? "Button 1" : "Button 2"}`);
    })
    .catch((error: Error) => {
      log("Failed to show form: " + error);
      return -1;
    });
}
```

```typescript
import { world, DimensionLocation } from "@minecraft/server";
import { MessageFormResponse, MessageFormData } from "@minecraft/server-ui";

function showTranslatedMessageForm(
  log: (message: string, status?: number) => void,
  targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  const messageForm = new MessageFormData()
    .title({ translate: "permissions.removeplayer" })
    .body({ translate: "accessibility.list.or.two", with: ["Player 1", "Player 2"] })
    .button1("Player 1")
    .button2("Player 2");

  messageForm
    .show(players[0])
    .then((formData: MessageFormResponse) => {
      // player canceled the form, or another dialog was up and open.
      if (formData.canceled || formData.selection === undefined) {
        return;
      }

      log(`You selected ${formData.selection === 0 ? "Player 1" : "Player 2"}`);
    })
    .catch((error: Error) => {
      log("Failed to show form: " + error);
      return -1;
    });
}
```

## Source

```ts
export class MessageFormResponse extends FormResponse {
    private constructor();
    readonly selection?: number;
}
```

## Extends

- [`FormResponse`](FormResponse.md)

## Constructors

### Constructor

> `private` **new MessageFormResponse**(): `MessageFormResponse`

#### Returns

`MessageFormResponse`

#### Overrides

[`FormResponse`](FormResponse.md).[`constructor`](FormResponse.md#constructor)

## Properties

### cancelationReason?

> `readonly` `optional` **cancelationReason?**: [`FormCancelationReason`](../enumerations/FormCancelationReason.md)

#### Remarks

Contains additional details as to why a form was canceled.

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`FormResponse`](FormResponse.md).[`cancelationReason`](FormResponse.md#cancelationreason)

***

### canceled

> `readonly` **canceled**: `boolean`

#### Remarks

If true, the form was canceled by the player (e.g., they
selected the pop-up X close button).

#### World Ready

This property can't be read in early-execution mode.

#### Inherited from

[`FormResponse`](FormResponse.md).[`canceled`](FormResponse.md#canceled)

***

### selection?

> `readonly` `optional` **selection?**: `number`

#### Remarks

Returns the index of the button that was pushed.

#### World Ready

This property can't be read in early-execution mode.
