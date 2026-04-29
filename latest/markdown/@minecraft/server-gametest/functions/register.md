[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-gametest](../README.md) / register

# Function: register()

> **register**(`testClassName`, `testName`, `testFunction`): [`RegistrationBuilder`](../classes/RegistrationBuilder.md)

## Parameters

### testClassName

`string`

Name of the class of tests this test should be a part of.

### testName

`string`

Name of this specific test.

### testFunction

(`arg0`) => `void`

Implementation of the test function.

## Returns

[`RegistrationBuilder`](../classes/RegistrationBuilder.md)

Returns a [RegistrationBuilder](../classes/RegistrationBuilder.md) object where
additional options for this test can be specified via
builder methods.

## Remarks

Registers a new GameTest function. This GameTest will become
available in Minecraft via /gametest run
[testClassName]:[testName].

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

## Example

```typescript
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function simpleMobGameTest(test: Test) {
  const attackerId = MinecraftEntityTypes.Fox;
  const victimId = MinecraftEntityTypes.Chicken;

  test.spawn(attackerId, { x: 5, y: 2, z: 5 });
  test.spawn(victimId, { x: 2, y: 2, z: 2 });

  test.assertEntityPresentInArea(victimId, true);

  test.succeedWhen(() => {
    test.assertEntityPresentInArea(victimId, false);
  });
}
register("StarterTests", "simpleMobTest", simpleMobGameTest).maxTicks(400).structureName("gametests:mediumglass");
```
