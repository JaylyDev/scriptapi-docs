[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / MessageFormData

# Class: MessageFormData

Builds a simple two-button modal dialog.

## Examples

```typescript
import { world, DimensionLocation } from '@minecraft/server';
import { MessageFormResponse, MessageFormData } from '@minecraft/server-ui';

function showBasicMessageForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const messageForm = new MessageFormData()
    .title('Message Form Example')
    .body('This shows a simple example using §o§7MessageFormData§r.')
    .button1('Button 1')
    .button2('Button 2');

  messageForm
    .show(players[0])
    .then((formData: MessageFormResponse) => {
      // player canceled the form, or another dialog was up and open.
      if (formData.canceled || formData.selection === undefined) {
        return;
      }

      log(`You selected ${formData.selection === 0 ? 'Button 1' : 'Button 2'}`);
    })
    .catch((error: Error) => {
      log('Failed to show form: ' + error);
      return -1;
    });
}
```

```typescript
import { world, DimensionLocation } from '@minecraft/server';
import { MessageFormResponse, MessageFormData } from '@minecraft/server-ui';

function showTranslatedMessageForm(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const messageForm = new MessageFormData()
    .title({ translate: 'permissions.removeplayer' })
    .body({ translate: 'accessibility.list.or.two', with: ['Player 1', 'Player 2'] })
    .button1('Player 1')
    .button2('Player 2');

  messageForm
    .show(players[0])
    .then((formData: MessageFormResponse) => {
      // player canceled the form, or another dialog was up and open.
      if (formData.canceled || formData.selection === undefined) {
        return;
      }

      log(`You selected ${formData.selection === 0 ? 'Player 1' : 'Player 2'}`);
    })
    .catch((error: Error) => {
      log('Failed to show form: ' + error);
      return -1;
    });
}
```

```js
import { world } from "@minecraft/server";
import { MessageFormData } from "@minecraft/server-ui";
// Find player with admin tag
let player = world.getPlayers({ tags: ["admin"] })[0];
let form = new MessageFormData();
form.title("Higher Random Tick Warning");
form.body(
   "Are you sure you want to run this command:\n/gamerule randomtickspeed 1000\nThis can cause lag to the world"
);
form.button1("Yes, do it!");
form.button2("No, leave it as default!");
form.show(player).then((response) => {
   if (response.selection == 0) {
       player.runCommand("/gamerule randomtickspeed 1000");
   }
});
```
![image](https://jaylydev.github.io/scriptapi-docs/assets/minecraft/MessageFormData.png)

## Source

```ts
export class MessageFormData {
    body(bodyText: minecraftserver.RawMessage | string): MessageFormData;
    button1(text: minecraftserver.RawMessage | string): MessageFormData;
    button2(text: minecraftserver.RawMessage | string): MessageFormData;
    show(player: minecraftserver.Player): Promise<MessageFormResponse>;
    title(titleText: minecraftserver.RawMessage | string): MessageFormData;
}
```

## Constructors

### Constructor

> **new MessageFormData**(): `MessageFormData`

#### Returns

`MessageFormData`

## Methods

### body()

> **body**(`bodyText`): `MessageFormData`

#### Parameters

##### bodyText

`string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

#### Returns

`MessageFormData`

#### Remarks

Method that sets the body text for the modal form.

#### World Ready

This function can't be called in early-execution mode.

***

### button1()

> **button1**(`text`): `MessageFormData`

#### Parameters

##### text

`string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

#### Returns

`MessageFormData`

#### Remarks

Method that sets the text for the first button of the
dialog.

#### World Ready

This function can't be called in early-execution mode.

***

### button2()

> **button2**(`text`): `MessageFormData`

#### Parameters

##### text

`string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

#### Returns

`MessageFormData`

#### Remarks

This method sets the text for the second button on the
dialog.

#### World Ready

This function can't be called in early-execution mode.

***

### show()

> **show**(`player`): `Promise`\<[`MessageFormResponse`](MessageFormResponse-1.md)\>

#### Parameters

##### player

[`Player`](../../server/classes/Player.md)

Player to show this dialog to.

#### Returns

`Promise`\<[`MessageFormResponse`](MessageFormResponse-1.md)\>

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

> **title**(`titleText`): `MessageFormData`

#### Parameters

##### titleText

`string` \| [`RawMessage`](../../server/interfaces/RawMessage.md)

#### Returns

`MessageFormData`

#### Remarks

This builder method sets the title for the modal dialog.

#### World Ready

This function can't be called in early-execution mode.
