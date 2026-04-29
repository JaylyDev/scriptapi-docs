[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / ChatSendBeforeEventSignal

# Class: ChatSendBeforeEventSignal

**`Beta`**

Manages callbacks that are connected to an event that fires
before chat messages are sent.

## Examples

```typescript
import { world, DimensionLocation } from '@minecraft/server';

function customCommand(targetLocation: DimensionLocation) {
  const chatCallback = world.beforeEvents.chatSend.subscribe(eventData => {
    if (eventData.message.includes('cancel')) {
      // Cancel event if the message contains "cancel"
      eventData.cancel = true;
    } else {
      const args = eventData.message.split(' ');

      if (args.length > 0) {
        switch (args[0].toLowerCase()) {
          case 'echo':
            // Send a modified version of chat message
            world.sendMessage(`Echo '${eventData.message.substring(4).trim()}'`);
            break;
          case 'help':
            world.sendMessage(`Available commands: echo <message>`);
            break;
        }
      }
    }
  });
}
```

```ts
import { world } from "@minecraft/server";

// Subscribe to the blockExplode event
world.beforeEvents.chatSend.subscribe((event) => {
   const { sender, message } = event;
   console.log(`${sender.name}: ${message}`);

   event.cancel = true; // Cancel message to be sent if needed.
});
```

## Source

```ts
export class ChatSendBeforeEventSignal {
    private constructor();
    subscribe(callback: (arg0: ChatSendBeforeEvent) => void): (arg0: ChatSendBeforeEvent) => void;
    unsubscribe(callback: (arg0: ChatSendBeforeEvent) => void): void;
}
```

## Constructors

### Constructor

> `private` **new ChatSendBeforeEventSignal**(): `ChatSendBeforeEventSignal`

#### Returns

`ChatSendBeforeEventSignal`

## Methods

### subscribe()

> **subscribe**(`callback`): (`arg0`) => `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

#### Returns

Closure that is called with restricted-execution privilege.

(`arg0`) => `void`

#### Remarks

Adds a callback that will be called before new chat messages
are sent.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### unsubscribe()

> **unsubscribe**(`callback`): `void`

#### Parameters

##### callback

(`arg0`) => `void`

This closure is called with restricted-execution privilege.

#### Returns

`void`

#### Remarks

Removes a callback from being called before new chat
messages are sent.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.
