[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / MessageBox

# Class: MessageBox

**`Beta`**

A simple message form UI, 2 buttons and a text body.

## Example

```ts
import { MessageBox } from "@minecraft/server-ui";
import { CustomCommandStatus, Player, system } from "@minecraft/server";

// Run /test:messagebox in the chat to see the message box in action
system.beforeEvents.startup.subscribe((event) => {
   event.customCommandRegistry.registerCommand(
       {
           name: "test:messagebox",
           description: "Test the MessageBox API",
           permissionLevel: 0,
       },
       (origin) => {
           const player = origin.sourceEntity;
           if (!(player instanceof Player)) {
               return {
                   message: "This command can only be used by a player.",
                   status: CustomCommandStatus.Failure,
               };
           }
           MessageBox.create(player, "Delete Item")
               .body("Are you sure you want to delete this item? This action cannot be undone.")
               .button1("Delete")
               .button2("Cancel", "Keep the item and close this dialog")
               .show()
               .then((response) => {
                   if (response.selection === 0) {
                       console.log("Player chose to delete the item.");
                       // Here you would add the logic to delete the item from the player's inventory
                   }
               })
               .catch((e) => {
                   console.error(e);
               });
       }
   );
});
```

## Source

```ts
export declare class MessageBox {
    body(text: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage): MessageBox;
    button1(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        tooltip?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): MessageBox;
    button2(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        tooltip?: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): MessageBox;
    close(): void;
    isShowing(): boolean;
    show(): Promise<MessageBoxResult>;
    static create(
        player: minecraftserver.Player,
        title: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): MessageBox;
}
```

## Constructors

### Constructor

> **new MessageBox**(): `MessageBox`

#### Returns

`MessageBox`

## Methods

### body()

> **body**(`text`): `MessageBox`

#### Parameters

##### text

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

#### Returns

`MessageBox`

#### Remarks

Sets the data for the text in the body of the message box.
It is contained within a scroll view to allow for lots of
text.

#### World Ready

This function can't be called in early-execution mode.

***

### button1()

> **button1**(`label`, `tooltip?`): `MessageBox`

#### Parameters

##### label

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

##### tooltip?

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

#### Returns

`MessageBox`

#### Remarks

Sets the data for the top button in the message box.

#### World Ready

This function can't be called in early-execution mode.

***

### button2()

> **button2**(`label`, `tooltip?`): `MessageBox`

#### Parameters

##### label

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

##### tooltip?

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

#### Returns

`MessageBox`

#### Remarks

Sets the data for the bottom button in the message box.

#### World Ready

This function can't be called in early-execution mode.

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Remarks

Tell the client to close the message box. Throws [FormCloseError](FormCloseError.md) if the message box is not open.

#### World Ready

This function can't be called in early-execution mode.

***

### isShowing()

> **isShowing**(): `boolean`

#### Returns

`boolean`

#### Remarks

Returns true if the message box is currently being shown to
the player.

#### World Ready

This function can't be called in early-execution mode.

***

### show()

> **show**(): `Promise`\<[`MessageBoxResult`](../interfaces/MessageBoxResult.md)\>

#### Returns

`Promise`\<[`MessageBoxResult`](../interfaces/MessageBoxResult.md)\>

#### Remarks

Show this message box to the player. Will return a result
even if the client was busy (i.e. in another menu). Will
throw if the user disconnects.

#### World Ready

This function can't be called in early-execution mode.

***

### create()

> `static` **create**(`player`, `title`): `MessageBox`

#### Parameters

##### player

[`Player`](../../server/classes/Player.md)

##### title

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

#### Returns

`MessageBox`

#### Remarks

Creates a message box for a certain player. Use this instead
of a constructor.

#### World Ready

This function can't be called in early-execution mode.
