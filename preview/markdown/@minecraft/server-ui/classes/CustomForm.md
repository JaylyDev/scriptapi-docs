[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / CustomForm

# Class: CustomForm

**`Beta`**

A customizable form that lets you put buttons, labels,
toggles, dropdowns, sliders, and more into a form! Built on
top of Observable, the form will update when the
Observables' value changes.

## Examples

```ts
// Originally from MS Learn: https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui
import { CustomForm, Observable } from "@minecraft/server-ui";
import { CommandPermissionLevel, CustomCommandStatus, Player, system } from "@minecraft/server";

const playerName = Observable.create<string>("Player", { clientWritable: true });
const difficulty = Observable.create<number>(1, { clientWritable: true });
const musicEnabled = Observable.create<boolean>(true, { clientWritable: true });
const volumeLevel = Observable.create<number>(75, { clientWritable: true });

// Run /test:customform in the chat to see the form in action
system.beforeEvents.startup.subscribe((event) => {
   event.customCommandRegistry.registerCommand(
       {
           name: "test:customform",
           description: "Test the CustomForm API",
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
           CustomForm.create(player, "Game Settings")
               .closeButton()
               .spacer()
               .label("General Settings")
               .divider()
               .textField("Player Name", playerName, {
                   description: "Your display name in-game",
               })
               .spacer()
               .label("Difficulty")
               .dropdown("", difficulty, [
                   { label: "Peaceful", value: 0 },
                   { label: "Easy", value: 1 },
                   { label: "Normal", value: 2 },
                   { label: "Hard", value: 3 },
               ])
               .spacer()
               .divider()
               .label("Audio Settings")
               .toggle("Music Enabled", musicEnabled)
               .slider("Volume", volumeLevel, 0, 100, {
                   description: "Master volume level",
                   step: 5,
               })
               .spacer()
               .show()
               .then(() => {
                   console.log(
                       `Data: ${playerName.getData()} (also this settings do nothing, it's just a demo of the form api)`
                   );
               })
               .catch((e) => {
                   console.error(e);
               });
       }
   );
});
```

```ts
// Adapted from Microsoft's DDUI intro doc:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui
import { CustomForm } from "@minecraft/server-ui";
import { CommandPermissionLevel, CustomCommandStatus, Player, system } from "@minecraft/server";

// Run /test:localizedform in chat.
// Note: This example expects translation keys to exist in your language files.
system.beforeEvents.startup.subscribe((event) => {
   event.customCommandRegistry.registerCommand(
       {
           name: "test:localizedform",
           description: "Open a DDUI form that uses RawMessage localization",
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

           CustomForm.create(player, { translate: "ui.settings.title" })
               .label({ translate: "ui.settings.description", with: ["value1", "value2"] })
               .button({ translate: "ui.button.save" }, () => {
                   console.log(`Localized save button clicked by ${player.name}`);
               })
               .closeButton()
               .show()
               .catch((e) => {
                   console.error(e);
               });

           return {
               message: "Opening localized DDUI form...",
               status: CustomCommandStatus.Success,
           };
       }
   );
});
```

```ts
// Adapted from Microsoft's DDUI intro doc:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui
import { CustomForm, Observable } from "@minecraft/server-ui";
import { CommandPermissionLevel, CustomCommandStatus, Player, TicksPerSecond, system } from "@minecraft/server";

// Run /test:entitymonitor in chat.
system.beforeEvents.startup.subscribe((event) => {
   event.customCommandRegistry.registerCommand(
       {
           name: "test:entitymonitor",
           description: "Open a DDUI form that updates while it is open",
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

           const entityStatus = Observable.create<string>("Scanning...");
           const clearButtonDisabled = Observable.create<boolean>(true);
           const statusMessage = Observable.create<string>("No action yet.");

           // This interval keeps updating the UI every 4 seconds.
           const intervalId = system.runInterval(() => {
               const nearbyEntities = player.dimension.getEntities({
                   location: player.location,
                   maxDistance: 20,
                   excludeTypes: ["minecraft:player"],
               });

               entityStatus.setData(`Found ${nearbyEntities.length} entities within 20 blocks`);
               clearButtonDisabled.setData(nearbyEntities.length === 0);
           }, TicksPerSecond * 4);

           CustomForm.create(player, "Entity Monitor")
               .spacer()
               .label(entityStatus)
               .spacer()
               .button(
                   "Remove Nearby Non-Player Entities",
                   () => {
                       const entities = player.dimension.getEntities({
                           location: player.location,
                           maxDistance: 20,
                           excludeTypes: ["minecraft:player"],
                       });

                       let count = 0;
                       for (const entity of entities) {
                           entity.kill();
                           count++;
                       }

                       statusMessage.setData(`Removed ${count} entities.`);
                   },
                   {
                       tooltip: "Removes non-player entities in range",
                       disabled: clearButtonDisabled,
                   }
               )
               .spacer()
               .divider()
               .label(statusMessage)
               .closeButton()
               .show()
               .then(() => {
                   // Always clean up intervals when form closes.
                   system.clearRun(intervalId);
               })
               .catch((e) => {
                   system.clearRun(intervalId);
                   console.error(e);
               });

           return {
               message: "Opening live entity monitor...",
               status: CustomCommandStatus.Success,
           };
       }
   );
});
```

```ts
// Adapted from Microsoft's DDUI intro doc:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui
import { CustomForm, Observable } from "@minecraft/server-ui";
import { CommandPermissionLevel, CustomCommandStatus, Player, system } from "@minecraft/server";

// Run /test:dduisettings in chat.
system.beforeEvents.startup.subscribe((event) => {
   event.customCommandRegistry.registerCommand(
       {
           name: "test:dduisettings",
           description: "Open a settings form with simple validation",
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

           const username = Observable.create<string>("", { clientWritable: true });
           const renderDistance = Observable.create<number>(12, { clientWritable: true });
           const showParticles = Observable.create<boolean>(true, { clientWritable: true });
           const language = Observable.create<number>(0, { clientWritable: true });

           CustomForm.create(player, "Settings")
               .textField("Username", username, {
                   description: "Your display name",
               })
               .slider("Render Distance", renderDistance, 2, 32, {
                   step: 1,
                   description: "Higher values may impact performance",
               })
               .toggle("Show Particles", showParticles, {
                   description: "Display particle effects",
               })
               .dropdown("Language", language, [
                   { label: "English", value: 0 },
                   { label: "Spanish", value: 1 },
                   { label: "French", value: 2 },
               ])
               .closeButton()
               .show()
               .then(() => {
                   const finalUsername = username.getData().trim();

                   // Beginner-friendly validation: keep username required.
                   if (!finalUsername) {
                       console.warn("Username is required. Please open the form again.");
                       return;
                   }

                   console.log(
                       `Saved settings for ${
                           player.name
                       }: username=${finalUsername}, renderDistance=${renderDistance.getData()}, showParticles=${showParticles.getData()}, languageIndex=${language.getData()}`
                   );
               })
               .catch((e) => {
                   console.error(e);
               });

           return {
               message: "Opening DDUI settings form...",
               status: CustomCommandStatus.Success,
           };
       }
   );
});
```

```ts
// Adapted from Microsoft's DDUI intro doc:
// https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/intro-to-ddui
import { CustomForm } from "@minecraft/server-ui";
import { CommandPermissionLevel, CustomCommandStatus, Player, system } from "@minecraft/server";

// This helper keeps the button callbacks easy to read for beginners.
function runMenuAction(player: Player, action: "play" | "settings" | "exit") {
   switch (action) {
       case "play":
           console.log(`${player.name} selected: Play Game`);
           break;
       case "settings":
           console.log(`${player.name} selected: Settings`);
           break;
       case "exit":
           console.log(`${player.name} selected: Exit`);
           break;
   }
}

// Run /test:simplemenu in chat.
system.beforeEvents.startup.subscribe((event) => {
   event.customCommandRegistry.registerCommand(
       {
           name: "test:simplemenu",
           description: "Open a basic DDUI action menu",
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

           CustomForm.create(player, "Main Menu")
               .label("What would you like to do?")
               .spacer()
               .button("Play Game", () => runMenuAction(player, "play"))
               .button("Settings", () => runMenuAction(player, "settings"))
               .button("Exit", () => runMenuAction(player, "exit"))
               .show()
               .catch((e) => {
                   console.error(e);
               });

           return {
               message: "Opening simple menu...",
               status: CustomCommandStatus.Success,
           };
       }
   );
});
```
> [!IMPORTANT]
>
> - Colour codes are only supported by the non-blurry Ore UI text (form title, header and label)
> - Glyphs are not supported by Ore UI at all
> - As of April 2026, Mojang is planning to support screens with rich layouts by defining a layout file.

## Source

```ts
export declare class CustomForm {
    button(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        onClick: () => void,
        options?: ButtonOptions,
    ): CustomForm;
    close(): void;
    closeButton(): CustomForm;
    divider(options?: DividerOptions): CustomForm;
    dropdown(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        value: Observable<number>,
        items: DropdownItem[],
        options?: DropdownOptions,
    ): CustomForm;
    header(
        text: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        options?: TextOptions,
    ): CustomForm;
    isShowing(): boolean;
    label(
        text: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        options?: TextOptions,
    ): CustomForm;
    show(): Promise<DataDrivenScreenClosedReason>;
    slider(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        value: Observable<number>,
        minValue: Observable<number> | number,
        maxValue: Observable<number> | number,
        options?: SliderOptions,
    ): CustomForm;
    spacer(options?: SpacingOptions): CustomForm;
    textField(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        text: Observable<string>,
        options?: TextFieldOptions,
    ): CustomForm;
    toggle(
        label: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
        toggled: Observable<boolean>,
        options?: ToggleOptions,
    ): CustomForm;
    static create(
        player: minecraftserver.Player,
        title: Observable<string> | Observable<UIRawMessage> | string | UIRawMessage,
    ): CustomForm;
}
```

## Constructors

### Constructor

> **new CustomForm**(): `CustomForm`

#### Returns

`CustomForm`

## Methods

### button()

> **button**(`label`, `onClick`, `options?`): `CustomForm`

#### Parameters

##### label

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

##### onClick

() => `void`

##### options?

[`ButtonOptions`](../interfaces/ButtonOptions.md)

#### Returns

`CustomForm`

#### Remarks

Inserts a button into the Custom form. onClick is called
when the button is pressed.

#### World Ready

This function can't be called in early-execution mode.

***

### close()

> **close**(): `void`

#### Returns

`void`

#### Remarks

Tell the client to close the form. Throws an error if the
form is not open.

#### World Ready

This function can't be called in early-execution mode.

***

### closeButton()

> **closeButton**(): `CustomForm`

#### Returns

`CustomForm`

#### Remarks

Adds a close "X" button to the form.

#### World Ready

This function can't be called in early-execution mode.

***

### divider()

> **divider**(`options?`): `CustomForm`

#### Parameters

##### options?

[`DividerOptions`](../interfaces/DividerOptions.md)

#### Returns

`CustomForm`

#### Remarks

Inserts a divider (i.e. a line) into the Custom form.

#### World Ready

This function can't be called in early-execution mode.

***

### dropdown()

> **dropdown**(`label`, `value`, `items`, `options?`): `CustomForm`

#### Parameters

##### label

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

##### value

[`Observable`](Observable.md)\<`number`\>

##### items

[`DropdownItem`](../interfaces/DropdownItem.md)[]

##### options?

[`DropdownOptions`](../interfaces/DropdownOptions.md)

#### Returns

`CustomForm`

#### Remarks

Inserts a dropdown into the Custom form with the provided
items. The value is based on the items value that selected.

#### World Ready

This function can't be called in early-execution mode.

***

### header()

> **header**(`text`, `options?`): `CustomForm`

#### Parameters

##### text

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

##### options?

[`TextOptions`](../interfaces/TextOptions.md)

#### Returns

`CustomForm`

#### Remarks

Inserts a header (i.e. large sized text) into the Custom
form.

#### World Ready

This function can't be called in early-execution mode.

***

### isShowing()

> **isShowing**(): `boolean`

#### Returns

`boolean`

#### Remarks

Returns true if the form is currently being shown to the
player.

#### World Ready

This function can't be called in early-execution mode.

***

### label()

> **label**(`text`, `options?`): `CustomForm`

#### Parameters

##### text

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

##### options?

[`TextOptions`](../interfaces/TextOptions.md)

#### Returns

`CustomForm`

#### Remarks

Inserts a label (i.e. medium sized text) into the Custom
form.

#### World Ready

This function can't be called in early-execution mode.

***

### show()

> **show**(): `Promise`\<[`DataDrivenScreenClosedReason`](../enumerations/DataDrivenScreenClosedReason.md)\>

#### Returns

`Promise`\<[`DataDrivenScreenClosedReason`](../enumerations/DataDrivenScreenClosedReason.md)\>

#### Remarks

Shows the form to the player. Will return false if the
client was busy (i.e. in another menu or this one is open).
Will throw if the user disconnects.

#### Throws

*

#### World Ready

This function can't be called in early-execution mode.

***

### slider()

> **slider**(`label`, `value`, `minValue`, `maxValue`, `options?`): `CustomForm`

#### Parameters

##### label

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

##### value

[`Observable`](Observable.md)\<`number`\>

##### minValue

`number` \| [`Observable`](Observable.md)\<`number`\>

##### maxValue

`number` \| [`Observable`](Observable.md)\<`number`\>

##### options?

[`SliderOptions`](../interfaces/SliderOptions.md)

#### Returns

`CustomForm`

#### Remarks

Creates a slider that lets players pick a number between
minValue and maxValue. value must be client writable.

#### World Ready

This function can't be called in early-execution mode.

***

### spacer()

> **spacer**(`options?`): `CustomForm`

#### Parameters

##### options?

[`SpacingOptions`](../interfaces/SpacingOptions.md)

#### Returns

`CustomForm`

#### Remarks

Inserts a space into the Custom form.

#### World Ready

This function can't be called in early-execution mode.

***

### textField()

> **textField**(`label`, `text`, `options?`): `CustomForm`

#### Parameters

##### label

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

##### text

[`Observable`](Observable.md)\<`string`\>

##### options?

[`TextFieldOptions`](../interfaces/TextFieldOptions.md)

#### Returns

`CustomForm`

#### Remarks

Inserts a text field into the Custom for that players can
enter text into.

#### World Ready

This function can't be called in early-execution mode.

***

### toggle()

> **toggle**(`label`, `toggled`, `options?`): `CustomForm`

#### Parameters

##### label

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

##### toggled

[`Observable`](Observable.md)\<`boolean`\>

##### options?

[`ToggleOptions`](../interfaces/ToggleOptions.md)

#### Returns

`CustomForm`

#### Remarks

Inserts an on/off toggle that players can interact with into
the Custom form.

#### World Ready

This function can't be called in early-execution mode.

***

### create()

> `static` **create**(`player`, `title`): `CustomForm`

#### Parameters

##### player

[`Player`](../../server/classes/Player.md)

##### title

`string` \| [`Observable`](Observable.md)\<`string`\> \| [`UIRawMessage`](../interfaces/UIRawMessage.md) \| [`Observable`](Observable.md)\<[`UIRawMessage`](../interfaces/UIRawMessage.md)\>

#### Returns

`CustomForm`

#### Remarks

Creates a Custom form to show to the player. Use this
instead of a constructor.

#### World Ready

This function can't be called in early-execution mode.
