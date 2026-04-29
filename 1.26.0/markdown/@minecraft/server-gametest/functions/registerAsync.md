[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-gametest](../README.md) / registerAsync

# Function: registerAsync()

> **registerAsync**(`testClassName`, `testName`, `testFunction`): [`RegistrationBuilder`](../classes/RegistrationBuilder.md)

## Parameters

### testClassName

`string`

Name of the class of tests this test should be a part of.

### testName

`string`

Name of this specific test.

### testFunction

(`arg0`) => `Promise`\<`void`\>

Implementation of the test function.

## Returns

[`RegistrationBuilder`](../classes/RegistrationBuilder.md)

Returns a [RegistrationBuilder](../classes/RegistrationBuilder.md) object where
additional options for this test can be specified via
builder methods.

## Remarks

Registers a new GameTest function that is designed for
asynchronous execution. This GameTest will become available
in Minecraft via /gametest run [testClassName]:[testName].

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

## Example

```typescript
import * as gameTest from '@minecraft/server-gametest';

gameTest
    .registerAsync('StarterTests', 'simpleMobTest', async (test: gameTest.Test) => {
        const attackerId = 'fox';
        const victimId = 'chicken';

        test.spawn(attackerId, { x: 5, y: 2, z: 5 });
        test.spawn(victimId, { x: 2, y: 2, z: 2 });

        test.assertEntityPresentInArea(victimId, true);

        test.succeedWhen(() => {
            test.assertEntityPresentInArea(victimId, false);
        });
    })
    .maxTicks(400)
    .structureName('gametests:mediumglass');
```
