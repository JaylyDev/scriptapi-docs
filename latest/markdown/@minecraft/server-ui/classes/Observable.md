[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / Observable

# Class: Observable\<T\>

**`Beta`**

A class that represents data that can be Observed.
Extensively used for UI.

## Examples

```ts
// Adapted from Microsoft's DDUI intro doc:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui
import { CustomForm, Observable } from "@minecraft/server-ui";
import { CommandPermissionLevel, CustomCommandStatus, Player, system } from "@minecraft/server";

const statusLabel = Observable.create<string>("Ready");
const itemCount = Observable.create<number>(0);

// Whenever itemCount changes, the label text updates too.
itemCount.subscribe((count) => {
   statusLabel.setData(`Found ${count} items`);
});

// Run /test:dynamiclabel in chat.
system.beforeEvents.startup.subscribe((event) => {
   event.customCommandRegistry.registerCommand(
       {
           name: "test:dynamiclabel",
           description: "Show a form with a label bound to an Observable",
           permissionLevel: CommandPermissionLevel.Any,
       },
       (origin) => {
           const player = origin.sourceEntity;
           if (!(player instanceof Player)) {
               return {
                   message: "This command can only be used by a player.",
                   status: CustomCommandStatus.Failure,
               };
           }

           // Demo update so beginners can immediately see label changes.
           itemCount.setData(Math.floor(Math.random() * 10) + 1);

           CustomForm.create(player, "Inventory")
               .label(statusLabel)
               .button("Refresh", () => {
                   itemCount.setData(Math.floor(Math.random() * 10) + 1);
               })
               .closeButton()
               .show()
               .catch((e) => {
                   console.error(e);
               });

           return {
               message: "Opening dynamic label demo...",
               status: CustomCommandStatus.Success,
           };
       }
   );
});
```

```ts
import { CustomForm, Observable } from "@minecraft/server-ui";
import { CustomCommandStatus, Player, system } from "@minecraft/server";

const selectedOption = Observable.create<number>(0, { clientWritable: true });

selectedOption.subscribe((newValue) => {
   console.log(`Selection changed to: ${newValue}`);
});

// Simulate a change from a player
system.beforeEvents.startup.subscribe((event) => {
   event.customCommandRegistry.registerCommand(
       {
           name: "test:changeoption",
           description: "Change the selected option",
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
           system.run(() => {
               const form = CustomForm.create(player, "Change Option");
               form.dropdown("Select an option", selectedOption, [
                   { label: "Option 1", value: 0 },
                   { label: "Option 2", value: 1 },
                   { label: "Option 3", value: 2 },
               ]);
               form.show().catch((e) => console.error(e));
           });
           return {
               message: "Creating form...",
               status: CustomCommandStatus.Success,
           };
       }
   );
});
```

```ts
import { Observable } from "@minecraft/server-ui";
import { system, world } from "@minecraft/server";

// Create an Observable to track the number of entities in the dimension
const entityCount = Observable.create<number>(0);

// Update the value - UI automatically reflects the change
system.runInterval(() => {
   const entities = world.getDimension("overworld").getEntities();
   entityCount.setData(entities.length);
}, 20);
```
> [!IMPORTANT]
>
> - Colour codes are only supported by the non-blurry Ore UI text (form title, header and label)
> - Glyphs are not supported by Ore UI at all

## Source

```ts
export declare class Observable<T extends string | number | boolean | UIRawMessage> {
    getData(): T;
    setData(data: T): void;
    subscribe(listener: (newValue: T) => void): (newValue: T) => void;
    unsubscribe(listener: (newValue: T) => void): void;
    static create<T extends string | number | boolean | UIRawMessage>(
        data: T,
        options?: ObservableOptions,
    ): Observable<T>;
}
```

## Type Parameters

### T

`T` *extends* `string` \| `number` \| `boolean` \| [`UIRawMessage`](../interfaces/UIRawMessage.md)

## Constructors

### Constructor

> **new Observable**\<`T`\>(): `Observable`\<`T`\>

#### Returns

`Observable`\<`T`\>

## Methods

### getData()

> **getData**(): `T`

#### Returns

`T`

#### Remarks

Gets the data from the Observable.

#### World Ready

This function can't be called in early-execution mode.

***

### setData()

> **setData**(`data`): `void`

#### Parameters

##### data

`T`

#### Returns

`void`

#### Remarks

Sets the data on this Observable and notifies the
subscribers.

#### World Ready

This function can't be called in early-execution mode.

***

### subscribe()

> **subscribe**(`listener`): (`newValue`) => `void`

#### Parameters

##### listener

(`newValue`) => `void`

#### Returns

(`newValue`) => `void`

#### Remarks

Subscribes a callback to any changes that occur to the
Observable. The return value can be passed into the
`unsubscribe` function to stop listening to changes.

#### World Ready

This function can't be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`listener`): `void`

#### Parameters

##### listener

(`newValue`) => `void`

#### Returns

`void`

#### Remarks

Unsubscribe a callback from any changes that occur to the
Observable. This takes the return value from the `subscribe`
function.

#### World Ready

This function can't be called in early-execution mode.

***

### create()

> `static` **create**\<`T`\>(`data`, `options?`): `Observable`\<`T`\>

#### Type Parameters

##### T

`T` *extends* `string` \| `number` \| `boolean` \| [`UIRawMessage`](../interfaces/UIRawMessage.md)

#### Parameters

##### data

`T`

##### options?

[`ObservableOptions`](../interfaces/ObservableOptions.md)

#### Returns

`Observable`\<`T`\>

#### Remarks

Creates an Observable, use this instead of a constructor.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { Observable } from "@minecraft/server-ui";

// Read-only Observable (server controls the value)
const status = Observable.create<string>("Loading...");

// Client-writable Observable (UI controls can update it)
const userInput = Observable.create<string>("", { clientWritable: true });
```
