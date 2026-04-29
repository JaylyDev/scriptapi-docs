[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / ScoreboardObjective

# Class: ScoreboardObjective

Contains objectives and participants for the scoreboard.

## Source

```ts
export class ScoreboardObjective {
    private constructor();
    readonly displayName: string;
    readonly id: string;
    readonly isValid: boolean;
    addScore(participant: Entity | ScoreboardIdentity | string, scoreToAdd: number): number;
    getParticipants(): ScoreboardIdentity[];
    getScore(participant: Entity | ScoreboardIdentity | string): number | undefined;
    getScores(): ScoreboardScoreInfo[];
    hasParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    removeParticipant(participant: Entity | ScoreboardIdentity | string): boolean;
    setScore(participant: Entity | ScoreboardIdentity | string, score: number): void;
}
```

## Constructors

### Constructor

> `private` **new ScoreboardObjective**(): `ScoreboardObjective`

#### Returns

`ScoreboardObjective`

## Properties

### displayName

> `readonly` **displayName**: `string`

#### Remarks

Returns the player-visible name of this scoreboard
objective.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### id

> `readonly` **id**: `string`

#### Remarks

Identifier of the scoreboard objective.

#### Throws

This property can throw when used.

#### World Ready

This property can't be read in early-execution mode.

***

### isValid

> `readonly` **isValid**: `boolean`

#### Remarks

Returns true if the ScoreboardObjective reference is still
valid.

#### World Ready

This property can't be read in early-execution mode.

## Methods

### addScore()

> **addScore**(`participant`, `scoreToAdd`): `number`

#### Parameters

##### participant

`string` \| [`Entity`](Entity.md) \| [`ScoreboardIdentity`](ScoreboardIdentity.md)

Participant to apply the scoreboard value addition to.

##### scoreToAdd

`number`

#### Returns

`number`

#### Remarks

Adds a score to the given participant and objective.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Examples

```js
import { world } from "@minecraft/server";

const money = world.scoreboard.getObjective("money");
const player = world.getPlayers()[0];
const currentScore = money.addScore(player, 100);
player.sendMessage(`Your current score is ${currentScore}`);
```

```js
import { world } from "@minecraft/server";

const money = world.scoreboard.getObjective("money");
const player = world.getPlayers()[0];
const currentScore = money.addScore(player, -100);
player.sendMessage(`Your current score is ${currentScore}`);
```

***

### getParticipants()

> **getParticipants**(): [`ScoreboardIdentity`](ScoreboardIdentity.md)[]

#### Returns

[`ScoreboardIdentity`](ScoreboardIdentity.md)[]

#### Remarks

Returns all objective participant identities.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getScore()

> **getScore**(`participant`): `number` \| `undefined`

#### Parameters

##### participant

`string` \| [`Entity`](Entity.md) \| [`ScoreboardIdentity`](ScoreboardIdentity.md)

Identifier of the participant to retrieve a score for.

#### Returns

`number` \| `undefined`

#### Remarks

Returns a specific score for a participant.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getScores()

> **getScores**(): [`ScoreboardScoreInfo`](ScoreboardScoreInfo.md)[]

#### Returns

[`ScoreboardScoreInfo`](ScoreboardScoreInfo.md)[]

#### Remarks

Returns specific scores for this objective for all
participants.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```ts
import { world } from "@minecraft/server";

const money = world.scoreboard.getObjective("money");
var scoreArray = money.getScores();
scoreArray.sort(function (a, b) {
return b.score - a.score;
});

console.log(scoreArray.map((score) => score.participant.displayName));
```

***

### hasParticipant()

> **hasParticipant**(`participant`): `boolean`

#### Parameters

##### participant

`string` \| [`Entity`](Entity.md) \| [`ScoreboardIdentity`](ScoreboardIdentity.md)

#### Returns

`boolean`

#### Remarks

Returns if the specified identity is a participant of the
scoreboard objective.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### removeParticipant()

> **removeParticipant**(`participant`): `boolean`

#### Parameters

##### participant

`string` \| [`Entity`](Entity.md) \| [`ScoreboardIdentity`](ScoreboardIdentity.md)

Participant to remove from being tracked with this
objective.

#### Returns

`boolean`

#### Remarks

Removes a participant from this scoreboard objective.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### setScore()

> **setScore**(`participant`, `score`): `void`

#### Parameters

##### participant

`string` \| [`Entity`](Entity.md) \| [`ScoreboardIdentity`](ScoreboardIdentity.md)

Identity of the participant.

##### score

`number`

New value of the score.

#### Returns

`void`

#### Remarks

Sets a score for a participant.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

#### Example

```js
import { world } from "@minecraft/server";

const money = world.scoreboard.getObjective("money");
const player = world.getPlayers()[0];
money.setScore(player, 0);
player.sendMessage(`Your score has been reset.`);
```
