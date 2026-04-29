[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README.md) / RawMessage

# Interface: RawMessage

Defines a JSON structure that is used for more flexible.

## Examples

```typescript
import { DimensionLocation, world, BlockPermutation, BlockComponentTypes } from '@minecraft/server';

function placeTranslatedSign(location: DimensionLocation, text: string) {
  const signBlock = location.dimension.getBlock(location);

  if (!signBlock) {
    console.warn('Could not find a block at specified location.');
    return;
  }
  const signPerm = BlockPermutation.resolve('minecraft:standing_sign', { ground_sign_direction: 8 });
  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign);
  if (signComponent) {
    signComponent.setText({ translate: 'item.skull.player.name', with: [text] });
  } else {
    console.error('Could not find a sign component on the block.');
  }
}

placeTranslatedSign(
  {
    dimension: world.getDimension('overworld'),
    x: 0,
    y: 0,
    z: 0,
  },
  'Steve'
);
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

```typescript
import { world, BlockPermutation, BlockSignComponent, BlockComponentTypes, DimensionLocation } from '@minecraft/server';
import { MinecraftBlockTypes } from '@minecraft/vanilla-data';

function addTranslatedSign(log: (message: string, status?: number) => void, targetLocation: DimensionLocation) {
  const players = world.getPlayers();

  const dim = players[0].dimension;

  const signBlock = dim.getBlock(targetLocation);

  if (!signBlock) {
    log('Could not find a block at specified location.');
    return -1;
  }
  const signPerm = BlockPermutation.resolve(MinecraftBlockTypes.StandingSign, { ground_sign_direction: 8 });

  signBlock.setPermutation(signPerm);

  const signComponent = signBlock.getComponent(BlockComponentTypes.Sign) as BlockSignComponent;

  signComponent?.setText({ translate: 'item.skull.player.name', with: [players[0].name] });
}
```

```ts
import { RawText, world } from "@minecraft/server";

world.afterEvents.entityDie.subscribe((event) => {
   const rawtext: RawText = {
       rawtext: [{ text: "§a" }, { translate: "death.attack.generic", with: [event.deadEntity.typeId] }],
   };
   world.sendMessage(rawtext);
});
```

## Source

```ts
export interface RawMessage {
    rawtext?: RawMessage[];
    score?: RawMessageScore;
    text?: string;
    translate?: string;
    with?: string[] | RawMessage;
}
```

## Properties

### rawtext?

> `optional` **rawtext?**: `RawMessage`[]

#### Remarks

Provides a raw-text equivalent of the current message.

***

### score?

> `optional` **score?**: [`RawMessageScore`](RawMessageScore.md)

#### Remarks

Provides a token that will get replaced with the value of a
score.

***

### text?

> `optional` **text?**: `string`

#### Remarks

Provides a string literal value to use.

***

### translate?

> `optional` **translate?**: `string`

#### Remarks

Provides a translation token where, if the client has an
available resource in the players' language which matches
the token, will get translated on the client.

***

### with?

> `optional` **with?**: `string`[] \| `RawMessage`

#### Remarks

Arguments for the translation token. Can be either an array
of strings or RawMessage containing an array of raw text
objects.
