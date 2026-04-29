[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / Scoreboard

# Class: Scoreboard

Contains objectives and participants for the scoreboard.

## Example

```typescript
import { world, DisplaySlotId, ObjectiveSortOrder, DimensionLocation } from "@minecraft/server";

function updateScoreboard(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const scoreboardObjectiveId = "scoreboard_demo_objective";
  const scoreboardObjectiveDisplayName = "Demo Objective";

  const players = world.getPlayers();

  // Ensure a new objective.
  let objective = world.scoreboard.getObjective(scoreboardObjectiveId);

  if (!objective) {
    objective = world.scoreboard.addObjective(scoreboardObjectiveId, scoreboardObjectiveDisplayName);
  }

  // get the scoreboard identity for player 0
  const player0Identity = players[0].scoreboardIdentity;

  if (player0Identity === undefined) {
    log("Could not get a scoreboard identity for player 0.");
    return -1;
  }

  // initialize player score to 100;
  objective.setScore(player0Identity, 100);

  world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.Sidebar, {
    objective: objective,
    sortOrder: ObjectiveSortOrder.Descending,
  });

  const playerScore = objective.getScore(player0Identity) ?? 0;

  // score should now be 110.
  objective.setScore(player0Identity, playerScore + 10);
}
```

## Constructors

### Constructor

> `private` **new Scoreboard**(): `Scoreboard`

#### Returns

`Scoreboard`

## Methods

### addObjective()

> **addObjective**(`objectiveId`, `displayName?`): [`ScoreboardObjective`](ScoreboardObjective-1.md)

#### Parameters

##### objectiveId

`string`

##### displayName?

`string`

#### Returns

[`ScoreboardObjective`](ScoreboardObjective-1.md)

#### Remarks

Adds a new objective to the scoreboard.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### Examples

```typescript
import { world, DisplaySlotId, ObjectiveSortOrder, DimensionLocation } from "@minecraft/server";

function updateScoreboard(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const scoreboardObjectiveId = "scoreboard_demo_objective";
  const scoreboardObjectiveDisplayName = "Demo Objective";

  const players = world.getPlayers();

  // Ensure a new objective.
  let objective = world.scoreboard.getObjective(scoreboardObjectiveId);

  if (!objective) {
    objective = world.scoreboard.addObjective(scoreboardObjectiveId, scoreboardObjectiveDisplayName);
  }

  // get the scoreboard identity for player 0
  const player0Identity = players[0].scoreboardIdentity;

  if (player0Identity === undefined) {
    log("Could not get a scoreboard identity for player 0.");
    return -1;
  }

  // initialize player score to 100;
  objective.setScore(player0Identity, 100);

  world.scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.Sidebar, {
    objective: objective,
    sortOrder: ObjectiveSortOrder.Descending,
  });

  const playerScore = objective.getScore(player0Identity) ?? 0;

  // score should now be 110.
  objective.setScore(player0Identity, playerScore + 10);
}
```

```js
import { world } from "@minecraft/server";

world.scoreboard.addObjective("example", "example");
```

#### World Ready

This function can't be called in early-execution mode.

***

### clearObjectiveAtDisplaySlot()

> **clearObjectiveAtDisplaySlot**(`displaySlotId`): [`ScoreboardObjective`](ScoreboardObjective-1.md) \| `undefined`

#### Parameters

##### displaySlotId

[`DisplaySlotId`](../enumerations/DisplaySlotId-1.md)

#### Returns

[`ScoreboardObjective`](ScoreboardObjective-1.md) \| `undefined`

#### Remarks

Clears the objective that occupies a display slot.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world, DisplaySlotId } from "@minecraft/server";

// Access the scoreboard object from the world
const { scoreboard } = world;

// Clear the objective currently displayed below players' names
scoreboard.clearObjectiveAtDisplaySlot(DisplaySlotId.BelowName);

// Clear the objective currently displayed in the player list (tab menu)
scoreboard.clearObjectiveAtDisplaySlot(DisplaySlotId.List);

// Clear the objective currently displayed in the sidebar on the right side of the screen
scoreboard.clearObjectiveAtDisplaySlot(DisplaySlotId.Sidebar);

/*
Explanation:
This script clears the scoreboard objectives displayed in different areas of the Minecraft UI:

1. **BelowName Slot**: 
- The `clearObjectiveAtDisplaySlot(DisplaySlotId.BelowName)` method removes the objective currently shown below players' names in the game world.

2. **List Slot**:
- The `clearObjectiveAtDisplaySlot(DisplaySlotId.List)` method removes the objective currently shown next to players' names in the player list (the tab menu).

3. **Sidebar Slot**:
- The `clearObjectiveAtDisplaySlot(DisplaySlotId.Sidebar)` method removes the objective currently shown in the sidebar on the right side of the screen.

Usage:
Use this script when you want to remove scoreboard objectives from the display slots without replacing them with new objectives. This can be useful for resetting the UI, cleaning up old objectives, or preparing to display new ones.

Note:
Clearing an objective from a display slot does not delete the objective from the scoreboard; it simply removes it from that specific display slot.
/
```

***

### getObjective()

> **getObjective**(`objectiveId`): [`ScoreboardObjective`](ScoreboardObjective-1.md) \| `undefined`

#### Parameters

##### objectiveId

`string`

Identifier of the objective.

#### Returns

[`ScoreboardObjective`](ScoreboardObjective-1.md) \| `undefined`

#### Remarks

Returns a specific objective (by id).

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

const money = world.scoreboard.getObjective("money");
```

***

### getObjectiveAtDisplaySlot()

> **getObjectiveAtDisplaySlot**(`displaySlotId`): [`ScoreboardObjectiveDisplayOptions`](../interfaces/ScoreboardObjectiveDisplayOptions-1.md) \| `undefined`

#### Parameters

##### displaySlotId

[`DisplaySlotId`](../enumerations/DisplaySlotId-1.md)

#### Returns

[`ScoreboardObjectiveDisplayOptions`](../interfaces/ScoreboardObjectiveDisplayOptions-1.md) \| `undefined`

#### Remarks

Returns an objective that occupies the specified display
slot.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world, DisplaySlotId } from "@minecraft/server";

// Access the scoreboard object from the world
const { scoreboard } = world;

// Retrieve the objective currently displayed below players' names
let objectiveBelowName = scoreboard.getObjectiveAtDisplaySlot(DisplaySlotId.BelowName);

// Retrieve the objective currently displayed in the player list (tab menu)
let objectiveList = scoreboard.getObjectiveAtDisplaySlot(DisplaySlotId.List);

// Retrieve the objective currently displayed in the sidebar on the right side of the screen
let objectiveSideBar = scoreboard.getObjectiveAtDisplaySlot(DisplaySlotId.Sidebar);

/*
Explanation:
This script retrieves and stores the current scoreboard objectives that are displayed in different areas of the Minecraft UI:

1. **BelowName Slot**: 
- `objectiveBelowName` holds the objective that is currently shown below players' names in the game world.

2. **List Slot**:
- `objectiveList` holds the objective that is currently shown next to players' names in the player list (the tab menu).

3. **Sidebar Slot**:
- `objectiveSideBar` holds the objective that is currently shown in the sidebar on the right side of the screen.

Usage:
This script is useful for checking which scoreboard objectives are currently assigned to each display slot. You can use these variables to reference or modify the displayed objectives as needed. For example, you might want to compare or switch objectives based on game events or conditions.
/
```

***

### getObjectives()

> **getObjectives**(): [`ScoreboardObjective`](ScoreboardObjective-1.md)[]

#### Returns

[`ScoreboardObjective`](ScoreboardObjective-1.md)[]

#### Remarks

Returns all defined objectives.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world, system, Player } from "@minecraft/server";

system.afterEvents.scriptEventReceive.subscribe((event) => {
const { message, sourceEntity } = event;

// Check if the source entity is a player
if (sourceEntity instanceof Player) {
   // If the received message is "objectives"
   if (message === "objectives") {
       // Retrieve all scoreboard objectives
       let objectives = world.scoreboard.getObjectives();

       // Map through the objectives to get their display names
       let objectiveNames = objectives.map((objective) => objective.displayName);

       // Send the list of objective names to the player who triggered the event
       sourceEntity.sendMessage(objectiveNames.join("\n"));
   }
}
});

/*
Usage:
This script listens for the "objectives" message sent via a custom script event.
To trigger this event in-game, a player can run the following command:

/scriptevent foo:bar objectives

When triggered, the script will send a list of all scoreboard objective names to the player
who ran the command. The names will be displayed one per line in the chat.
/
```

***

### getParticipants()

> **getParticipants**(): [`ScoreboardIdentity`](ScoreboardIdentity-1.md)[]

#### Returns

[`ScoreboardIdentity`](ScoreboardIdentity-1.md)[]

#### Remarks

Returns all defined scoreboard identities.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world, system, Player } from "@minecraft/server";

// Subscribe to the scriptEventReceive event, which is triggered when a custom script event is received
system.afterEvents.scriptEventReceive.subscribe((event) => {
const { message, sourceEntity } = event;

// Check if the source entity is a player
if (sourceEntity instanceof Player) {
   // If the received message is "participants"
   if (message === "participants") {
       // Retrieve all participants (players and entities) from the scoreboard
       let participants = world.scoreboard.getParticipants();

       // Extract the display names of all scoreboard participants
       let participantNames = participants.map((participant) => participant.displayName);

       // Send the list of participant names to the player who triggered the event
       sourceEntity.sendMessage(participantNames.join("\n"));
   }
}
});

/*
Usage:
This script listens for the "participants" message sent via a custom script event.
To trigger this event in-game, a player can run the following command:

/scriptevent foo:bar participants

When triggered, the script will send a list of all scoreboard participants' names to the player
who ran the command. The names will be displayed one per line in the chat.
/
```

***

### removeObjective()

> **removeObjective**(`objectiveId`): `boolean`

#### Parameters

##### objectiveId

`string` \| [`ScoreboardObjective`](ScoreboardObjective-1.md)

#### Returns

`boolean`

#### Remarks

Removes an objective from the scoreboard.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

world.scoreboard.removeObjective("money");
```

***

### setObjectiveAtDisplaySlot()

> **setObjectiveAtDisplaySlot**(`displaySlotId`, `objectiveDisplaySetting`): [`ScoreboardObjective`](ScoreboardObjective-1.md) \| `undefined`

#### Parameters

##### displaySlotId

[`DisplaySlotId`](../enumerations/DisplaySlotId-1.md)

##### objectiveDisplaySetting

[`ScoreboardObjectiveDisplayOptions`](../interfaces/ScoreboardObjectiveDisplayOptions-1.md)

#### Returns

[`ScoreboardObjective`](ScoreboardObjective-1.md) \| `undefined`

Returns the previous `ScoreboardObjective` set at the
display slot, if no objective was previously set it returns
`undefined`.

#### Remarks

Sets an objective into a display slot with specified
additional display settings.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world, DisplaySlotId } from "@minecraft/server";

// Access the scoreboard object from the world
const { scoreboard } = world;

// Set the display slot below players' names to show scores from "Objective1"
scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.BelowName, {
objective: scoreboard.getObjective("Objective1"), // Reference to the "Objective1" objective
});

// Set the display slot in the player list to show scores from "Objective2"
scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.List, {
objective: scoreboard.getObjective("Objective2"), // Reference to the "Objective2" objective
});

// Set the sidebar display slot to show scores from "Objective3"
scoreboard.setObjectiveAtDisplaySlot(DisplaySlotId.Sidebar, {
objective: scoreboard.getObjective("Objective3"), // Reference to the "Objective3" objective
});

/*
Explanation:
This script assigns different scoreboard objectives to specific display slots in Minecraft:

1. **BelowName Display Slot**: The `BelowName` slot is used to show scores beneath players' names. Here, scores from the "Objective1" objective are displayed below the names of all players in the game.

2. **List Display Slot**: The `List` slot displays scores next to players' names in the player list (the tab menu). This script sets it to show scores from the "Objective2" objective.

3. **Sidebar Display Slot**: The `Sidebar` slot displays scores on the right side of the screen for all players. This script assigns the "Objective3" objective to this slot.

Usage:
Make sure that "Objective1", "Objective2", and "Objective3" exist as objectives in your scoreboard. You can create these objectives using Minecraft commands, for example:

/scoreboard objectives add Objective1 dummy "Objective 1"
/scoreboard objectives add Objective2 dummy "Objective 2"
/scoreboard objectives add Objective3 dummy "Objective 3"

After running this script, the scores for these objectives will be displayed in the appropriate slots for all players in the game.
/
```
