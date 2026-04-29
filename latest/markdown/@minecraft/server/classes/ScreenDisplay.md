[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ScreenDisplay

# Class: ScreenDisplay

Contains information about user interface elements that are
showing up on the screen.

## Examples

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function setTitle(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  if (players.length > 0) {
    players[0].onScreenDisplay.setTitle("§o§6Fancy Title§r");
  }
}
```

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function setTitleAndSubtitle(
    targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("Chapter 1", {
    stayDuration: 100,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "Trouble in Block Town",
  });
}
```

```typescript
import { world, system, DimensionLocation } from "@minecraft/server";

function countdown(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("Get ready!", {
    stayDuration: 220,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "10",
  });

  let countdown = 10;

  const intervalId = system.runInterval(() => {
    countdown--;
    players[0].onScreenDisplay.updateSubtitle(countdown.toString());

    if (countdown == 0) {
      system.clearRun(intervalId);
    }
  }, 20);
}
```

## Source

```ts
export class ScreenDisplay {
    private constructor();
    readonly isValid: boolean;
    getHiddenHudElements(): HudElement[];
    hideAllExcept(hudElements?: HudElement[]): void;
    isForcedHidden(hudElement: HudElement): boolean;
    resetHudElementsVisibility(): void;
    setActionBar(text: (RawMessage | string)[] | RawMessage | string): void;
    setHudVisibility(visible: HudVisibility, hudElements?: HudElement[]): void;
    setTitle(title: (RawMessage | string)[] | RawMessage | string, options?: TitleDisplayOptions): void;
    updateSubtitle(subtitle: (RawMessage | string)[] | RawMessage | string): void;
}
```

## Constructors

### Constructor

> `private` **new ScreenDisplay**(): `ScreenDisplay`

#### Returns

`ScreenDisplay`

## Properties

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns true if the current reference to this screen display
manager object is valid and functional.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### getHiddenHudElements()

> **getHiddenHudElements**(): [`HudElement`](../enumerations/HudElement.md)[]

#### Returns

[`HudElement`](../enumerations/HudElement.md)[]

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### hideAllExcept()

> **hideAllExcept**(`hudElements?`): `void`

#### Parameters

##### hudElements?

[`HudElement`](../enumerations/HudElement.md)[]

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### isForcedHidden()

> **isForcedHidden**(`hudElement`): `boolean`

#### Parameters

##### hudElement

[`HudElement`](../enumerations/HudElement.md)

#### Returns

`boolean`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### resetHudElementsVisibility()

> **resetHudElementsVisibility**(): `void`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setActionBar()

> **setActionBar**(`text`): `void`

#### Parameters

##### text

`string` \| [`RawMessage`](../interfaces/RawMessage.md) \| (`string` \| [`RawMessage`](../interfaces/RawMessage.md))[]

New value for the action bar text.

#### Returns

`void`

#### Remarks

Set the action bar text - a piece of text that displays
beneath the title and above the hot-bar.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

[RawMessageError](RawMessageError.md)

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

// Subscribe to the event that triggers when a player places a block
world.afterEvents.playerPlaceBlock.subscribe((eventData) => {
// Extract the player and block objects from the event data
const { player, block } = eventData;

// Display a message on the player's action bar indicating the type of block they placed
player.onScreenDisplay.setActionBar(`You placed ${block.typeId}`);
});
```

***

### setHudVisibility()

> **setHudVisibility**(`visible`, `hudElements?`): `void`

#### Parameters

##### visible

[`HudVisibility`](../enumerations/HudVisibility.md)

Whether to set the HUD element to invisible, or to reset it
back to its default.

##### hudElements?

[`HudElement`](../enumerations/HudElement.md)[]

Optional list of HUD elements to configure visibility for.

#### Returns

`void`

#### Remarks

Sets visibility of a particular element of the heads up
display (HUD).

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setTitle()

> **setTitle**(`title`, `options?`): `void`

#### Parameters

##### title

`string` \| [`RawMessage`](../interfaces/RawMessage.md) \| (`string` \| [`RawMessage`](../interfaces/RawMessage.md))[]

##### options?

[`TitleDisplayOptions`](../interfaces/TitleDisplayOptions.md)

#### Returns

`void`

#### Remarks

Will cause a title to show up on the player's on screen
display. Will clear the title if set to empty string. You
can optionally specify an additional subtitle as well as
fade in, stay and fade out times.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.ArgumentOutOfBoundsError](../../common/classes/ArgumentOutOfBoundsError.md)

[InvalidEntityError](InvalidEntityError.md)

[RawMessageError](RawMessageError.md)

#### Examples

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function setTitle(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  if (players.length > 0) {
    players[0].onScreenDisplay.setTitle("§o§6Fancy Title§r");
  }
}
```

```typescript
import { world, DimensionLocation } from "@minecraft/server";

function setTitleAndSubtitle(
    targetLocation: DimensionLocation
) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("Chapter 1", {
    stayDuration: 100,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "Trouble in Block Town",
  });
}
```

```typescript
import { world, system, DimensionLocation } from "@minecraft/server";

function countdown(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("Get ready!", {
    stayDuration: 220,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "10",
  });

  let countdown = 10;

  const intervalId = system.runInterval(() => {
    countdown--;
    players[0].onScreenDisplay.updateSubtitle(countdown.toString());

    if (countdown == 0) {
      system.clearRun(intervalId);
    }
  }, 20);
}
```

```js
import { world } from "@minecraft/server";

// Function to convert seconds to ticks (1 second = 20 ticks in Minecraft)
let secsToTicks = (/** @type {number} */ secs) => secs * 20;

// Subscribe to the event that triggers when a player places a block
world.afterEvents.playerPlaceBlock.subscribe((eventData) => {
// Extract the player and block objects from the event data
const { player, block } = eventData;

// Define display options for the title message
let displayOptions = {
   fadeInDuration: secsToTicks(0.5), // Duration for the title to fade in
   fadeOutDuration: secsToTicks(1), // Duration for the title to fade out
   stayDuration: secsToTicks(1.5), // Duration for the title to stay on screen
   subtitle: player.name, // Subtitle showing the player's name
};

// Set the title message to display when a block is placed
player.onScreenDisplay.setTitle(`You placed \n ${block.typeId}`, displayOptions);
});
```

#### World Ready

This function can't be called in early-execution mode.

***

### updateSubtitle()

> **updateSubtitle**(`subtitle`): `void`

#### Parameters

##### subtitle

`string` \| [`RawMessage`](../interfaces/RawMessage.md) \| (`string` \| [`RawMessage`](../interfaces/RawMessage.md))[]

#### Returns

`void`

#### Remarks

Updates the subtitle if the subtitle was previously
displayed via the setTitle method.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[InvalidEntityError](InvalidEntityError.md)

[RawMessageError](RawMessageError.md)

#### Example

```typescript
import { world, system, DimensionLocation } from "@minecraft/server";

function countdown(targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  players[0].onScreenDisplay.setTitle("Get ready!", {
    stayDuration: 220,
    fadeInDuration: 2,
    fadeOutDuration: 4,
    subtitle: "10",
  });

  let countdown = 10;

  const intervalId = system.runInterval(() => {
    countdown--;
    players[0].onScreenDisplay.updateSubtitle(countdown.toString());

    if (countdown == 0) {
      system.clearRun(intervalId);
    }
  }, 20);
}
```

#### World Ready

This function can't be called in early-execution mode.
