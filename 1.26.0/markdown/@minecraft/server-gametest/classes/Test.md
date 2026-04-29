[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-gametest](../README.md) / Test

# Class: Test

Main class for GameTest functions, with helpers and data for
manipulating the respective test. Note that all methods of
this class expect BlockLocations and Locations relative to
the GameTest structure block.

![image](https://jaylydev.github.io/scriptapi-docs/assets/minecraft/gametest.png)

## Constructors

### Constructor

> `private` **new Test**(): `Test`

#### Returns

`Test`

## Methods

### assert()

> **assert**(`condition`, `message`): `void`

#### Parameters

##### condition

`boolean`

Expression of the condition to evaluate.

##### message

`string`

Message that is passed if the _condition_ does not evaluate
to true.

#### Returns

`void`

#### Remarks

Tests that the condition specified in _condition_ is true.
If not, an error with the specified _message_ is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertBlockPresent()

> **assertBlockPresent**(`blockType`, `blockLocation`, `isPresent?`): `void`

#### Parameters

##### blockType

`string` \| [`BlockType`](../../server/classes/BlockType.md)

Expected block type.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block to test at.

##### isPresent?

`boolean`

If true, this function tests whether a block of the
specified type is at the location. If false, tests that a
block of the specified type is not present.
Defaults to: true

#### Returns

`void`

#### Remarks

Tests that a block of the specified type is present at the
specified location. If it is not, an exception is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertBlockState()

> **assertBlockState**(`blockLocation`, `callback`): `void`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block to test at.

##### callback

(`arg0`) => `boolean`

Callback function that contains additional tests based on
the block at the specified location.

#### Returns

`void`

#### Remarks

Tests that a block has a particular state value at the
specified location. If it does not have that state value, an
exception is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertCanReachLocation()

> **assertCanReachLocation**(`mob`, `blockLocation`, `canReach?`): `void`

#### Parameters

##### mob

[`Entity`](../../server/classes/Entity.md)

Entity that you wish to test the location against.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Structure-relative location to test whether the specified
mob can reach.

##### canReach?

`boolean`

If true, tests whether the mob can reach the location. If
false, tests whether the mob is not able to reach the
location.
Defaults to: true

#### Returns

`void`

#### Remarks

Tests that an entity can reach a particular location.
Depending on the value of canReach, throws an exception if
the condition is not met.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertContainerContains()

> **assertContainerContains**(`itemStack`, `blockLocation`): `void`

#### Parameters

##### itemStack

[`ItemStack`](../../server/classes/ItemStack.md)

Represents the type of item to check for. The specified
container must contain at least 1 item matching the item
type defined in _itemStack_.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block with a container (for example, a
chest) to test the contents of.

#### Returns

`void`

#### Remarks

Tests that a container (e.g., a chest) at the specified
location contains a specified of item stack. If not, an
error is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertContainerEmpty()

> **assertContainerEmpty**(`blockLocation`): `void`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block with a container (for example, a
chest) to test is empty of contents.

#### Returns

`void`

#### Remarks

Tests that a container (e.g., a chest) at the specified
location is empty. If not, an error is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertEntityHasArmor()

> **assertEntityHasArmor**(`entityTypeIdentifier`, `armorSlot`, `armorName`, `armorData`, `blockLocation`, `hasArmor?`): `void`

#### Parameters

##### entityTypeIdentifier

`string`

Identifier of the entity to match (e.g.,
'minecraft:skeleton').

##### armorSlot

`number`

Container slot index to test.

##### armorName

`string`

Name of the armor to look for.

##### armorData

`number`

Data value integer to look for.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the entity with armor to test for.

##### hasArmor?

`boolean`

Whether or not the entity is expected to have the specified
armor equipped.
Defaults to: true

#### Returns

`void`

#### Remarks

Tests that an entity has a specific piece of armor equipped.
If not, an error is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertEntityHasComponent()

> **assertEntityHasComponent**(`entityTypeIdentifier`, `componentIdentifier`, `blockLocation`, `hasComponent?`): `void`

#### Parameters

##### entityTypeIdentifier

`string`

Identifier of the specified entity (e.g.,
'minecraft:skeleton'). If the namespace is not specified,
'minecraft:' is assumed.

##### componentIdentifier

`string`

Identifier of the component to check for. If the namespace
is not specified, 'minecraft:' is assumed.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block with a container (for example, a
chest.)

##### hasComponent?

`boolean`

Determines whether to test that the component exists, or
does not.
Defaults to: true

#### Returns

`void`

#### Remarks

Tests that an entity has a particular component. If not, an
exception is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertEntityInstancePresent()

> **assertEntityInstancePresent**(`entity`, `blockLocation`, `isPresent?`): `void`

#### Parameters

##### entity

[`Entity`](../../server/classes/Entity.md)

Specific entity to test for.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the entity to test for.

##### isPresent?

`boolean`

Whether to test that an entity is present or not present at
the specified location.
Defaults to: true

#### Returns

`void`

#### Remarks

Depending on the value for isPresent, tests that a
particular entity is present or not present at the specified
location. Depending on the value of isPresent, if the entity
is found or not found, an error is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertEntityInstancePresentInArea()

> **assertEntityInstancePresentInArea**(`entity`, `isPresent?`): `void`

#### Parameters

##### entity

[`Entity`](../../server/classes/Entity.md)

Entity instance to test for.

##### isPresent?

`boolean`

If true, this function tests whether the specified entity is
present in the GameTest area. If false, tests that the
specified entity is not present.
Defaults to: true

#### Returns

`void`

#### Remarks

Tests that an entity instance is present within the GameTest
area. If not, an exception is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### Example

```typescript
import * as gameTest from '@minecraft/server-gametest';

gameTest
    .register('StarterTests', 'simpleMobTest', (test: gameTest.Test) => {
        const attackerId = 'fox';
        const victimId = 'chicken';

        test.spawn(attackerId, { x: 5, y: 2, z: 5 });
        const victim = test.spawn(victimId, { x: 2, y: 2, z: 2 });

        test.assertEntityInstancePresentInArea(victim, true);

        test.succeedWhen(() => {
            test.assertEntityInstancePresentInArea(victim, false);
        });
    })
    .maxTicks(400)
    .structureName('gametests:mediumglass');
```

#### World Ready

This function can't be called in early-execution mode.

***

### assertEntityPresent()

> **assertEntityPresent**(`entityTypeIdentifier`, `blockLocation`, `searchDistance?`, `isPresent?`): `void`

#### Parameters

##### entityTypeIdentifier

`string`

Type of entity to test for (e.g., 'minecraft:skeleton'). If
an entity namespace is not specified, 'minecraft:' is
assumed.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the entity to test for.

##### searchDistance?

`number`

The distance to search for the entity from the
blockLocation.
Defaults to: 0

##### isPresent?

`boolean`

If true, this function tests whether an entity of the
specified type is present. If false, tests that an entity of
the specified type is not present.
Defaults to: true

#### Returns

`void`

#### Remarks

Depending on the value of isPresent, tests for the presence
or non-presence of entity of a specified type at a
particular location. If the condition is not met, an
exception is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertEntityPresentInArea()

> **assertEntityPresentInArea**(`entityTypeIdentifier`, `isPresent?`): `void`

#### Parameters

##### entityTypeIdentifier

`string`

Type of entity to test for (e.g., 'minecraft:skeleton'). If
an entity namespace is not specified, 'minecraft:' is
assumed.

##### isPresent?

`boolean`

If true, this function tests whether an entity of the
specified type is present in the GameTest area. If false,
tests that an entity of the specified type is not present.
Defaults to: true

#### Returns

`void`

#### Remarks

Tests that an entity of a specified type is present within
the GameTest area. If not, an exception is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### Examples

```typescript
import * as gameTest from '@minecraft/server-gametest';

gameTest
    .register('StarterTests', 'simpleMobTest', (test: gameTest.Test) => {
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

#### World Ready

This function can't be called in early-execution mode.

***

### assertEntityState()

> **assertEntityState**(`blockLocation`, `entityTypeIdentifier`, `callback`): `void`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the entity to look for.

##### entityTypeIdentifier

`string`

Identifier of the entity (e.g., 'minecraft:skeleton') to
look for. Note if no namespace is specified, 'minecraft:' is
assumed.

##### callback

(`arg0`) => `boolean`

Callback function where facets of the selected entity can be
tested for. If this callback function returns false or no
entity with the specified identifier is found, an exception
is thrown.

#### Returns

`void`

#### Remarks

Tests that an entity (e.g., a skeleton) at the specified
location has a particular piece of data. If not, an error is
thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertEntityTouching()

> **assertEntityTouching**(`entityTypeIdentifier`, `location`, `isTouching?`): `void`

#### Parameters

##### entityTypeIdentifier

`string`

Type of entity to test for (e.g., 'minecraft:skeleton'). If
an entity namespace is not specified, 'minecraft:' is
assumed.

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the entity to test for.

##### isTouching?

`boolean`

If true, this function tests whether the entity is touching
the specified location. If false, tests that an entity is
not testing the specified location.
Defaults to: true

#### Returns

`void`

#### Remarks

Depending on the value of isTouching, tests that an entity
of a specified type is touching or connected to another
entity. If the condition is not met, an exception is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertIsWaterlogged()

> **assertIsWaterlogged**(`blockLocation`, `isWaterlogged?`): `void`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block to test for.

##### isWaterlogged?

`boolean`

Whether to test that the block at _position_ is expected to
be waterlogged.
Defaults to: true

#### Returns

`void`

#### Remarks

Depending on the value of isWaterlogged, tests that a block
at a location contains water. If the condition is not met,
an error is thrown. Pure water blocks are not considered to
be waterlogged.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertItemEntityCountIs()

> **assertItemEntityCountIs**(`itemType`, `blockLocation`, `searchDistance`, `count`): `void`

#### Parameters

##### itemType

`string` \| [`ItemType`](../../server/classes/ItemType.md)

Type of item to look for.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location to search around for the specified set of items.

##### searchDistance

`number`

Range, in blocks, to aggregate a count of items around. If
0, will only search the particular block at _position_.

##### count

`number`

Number of items, at minimum, to look and test for.

#### Returns

`void`

#### Remarks

Tests that items of a particular type and count are present
within an area. If not, an error is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertItemEntityPresent()

> **assertItemEntityPresent**(`itemType`, `blockLocation`, `searchDistance?`, `isPresent?`): `void`

#### Parameters

##### itemType

`string` \| [`ItemType`](../../server/classes/ItemType.md)

Type of item to test for.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the item entity to test for.

##### searchDistance?

`number`

Radius in blocks to look for the item entity.
Defaults to: 0

##### isPresent?

`boolean`

If true, this function tests whether an item entity of the
specified type is present. If false, tests that an item
entity of the specified type is not present.
Defaults to: true

#### Returns

`void`

#### Remarks

Depending on the value of isPresent, tests whether a
particular item entity is present or not at a particular
location. If the condition is not met, an exception is
thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### assertRedstonePower()

> **assertRedstonePower**(`blockLocation`, `power`): `void`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location to test.

##### power

`number`

Expected power level.

#### Returns

`void`

#### Remarks

Tests that Redstone power at a particular location matches a
particular value. If not, an exception is thrown.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### destroyBlock()

> **destroyBlock**(`blockLocation`, `dropResources?`): `void`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block to destroy.

##### dropResources?

`boolean`

Whether to add resources exposed with a particular drop.
Defaults to: false

#### Returns

`void`

#### Remarks

Destroys a block at a particular location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### fail()

> **fail**(`errorMessage`): `void`

#### Parameters

##### errorMessage

`string`

Error message summarizing the failure condition.

#### Returns

`void`

#### Remarks

Marks the current test as a failure case.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### failIf()

> **failIf**(`callback`): `void`

#### Parameters

##### callback

() => `void`

Callback function that runs. If the function runs
successfully, the test is marked as a failure. Typically,
this function will have .assertXyz method calls within it.

#### Returns

`void`

#### Remarks

Runs the given callback. If the callback does not throw an
exception, the test is marked as a failure.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### getBlock()

> **getBlock**(`blockLocation`): [`Block`](../../server/classes/Block.md)

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block to retrieve.

#### Returns

[`Block`](../../server/classes/Block.md)

#### Remarks

Gets a block at the specified block location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getDimension()

> **getDimension**(): [`Dimension`](../../server/classes/Dimension.md)

#### Returns

[`Dimension`](../../server/classes/Dimension.md)

#### Remarks

Gets the dimension of this test.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getFenceConnectivity()

> **getFenceConnectivity**(`blockLocation`): [`FenceConnectivity`](FenceConnectivity.md)

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block to retrieve.

#### Returns

[`FenceConnectivity`](FenceConnectivity.md)

#### Remarks

If the block at the specified block location is a fence,
this returns a helper object with details on how a fence is
connected.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getSculkSpreader()

> **getSculkSpreader**(`blockLocation`): [`SculkSpreader`](SculkSpreader.md) \| `undefined`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block to retrieve a sculk spreader from.

#### Returns

[`SculkSpreader`](SculkSpreader.md) \| `undefined`

Returns the SculkSpreader or undefined if no SculkSpreader
is present on the block.

#### Remarks

Retrieves a sculk spreader object that can be used to
control and manage how sculk grows from a block.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### getTestDirection()

> **getTestDirection**(): [`Direction`](../../server/enumerations/Direction.md)

#### Returns

[`Direction`](../../server/enumerations/Direction.md)

#### Remarks

Returns the direction of the current test - see the minecraftserver.Direction enum for more information on
potential values (north, east, south, west - values 2-5).

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### idle()

> **idle**(`tickDelay`): `Promise`\<`void`\>

#### Parameters

##### tickDelay

`number`

Amount of time to wait, in ticks.

#### Returns

`Promise`\<`void`\>

#### Remarks

This asynchronous function will wait for the specified time
in ticks before continuing execution.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### isCleaningUp()

> **isCleaningUp**(): `boolean`

#### Returns

`boolean`

#### Remarks

Returns whether or not the test is currently in the Clean Up
step after running.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### isCompleted()

> **isCompleted**(): `boolean`

#### Returns

`boolean`

#### Remarks

Returns whether or not the test has already completed

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### killAllEntities()

> **killAllEntities**(): `void`

#### Returns

`void`

#### Remarks

Kills all entities within the GameTest structure.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### onPlayerJump()

> **onPlayerJump**(`mob`, `jumpAmount`): `void`

#### Parameters

##### mob

[`Entity`](../../server/classes/Entity.md)

##### jumpAmount

`number`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### pressButton()

> **pressButton**(`blockLocation`): `void`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location to push the button at.

#### Returns

`void`

#### Remarks

Presses a button at a block location.

This function can't be called in restricted-execution mode.

#### Throws

Will throw an error if a button is not present at the
specified position.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### print()

> **print**(`text`): `void`

#### Parameters

##### text

`string`

Message to display.

#### Returns

`void`

#### Remarks

Displays the specified message to all players.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### pullLever()

> **pullLever**(`blockLocation`): `void`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location to pull the lever at.

#### Returns

`void`

#### Remarks

Pulls a lever at a block location.

This function can't be called in restricted-execution mode.

#### Throws

Will throw an error if a lever is not present at the
specified position.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### pulseRedstone()

> **pulseRedstone**(`blockLocation`, `duration`): `void`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location to pulse Redstone at.

##### duration

`number`

Number of ticks to pulse Redstone.

#### Returns

`void`

#### Remarks

Sends a Redstone pulse at a particular location by creating
a temporary Redstone block.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### relativeBlockLocation()

> **relativeBlockLocation**(`worldBlockLocation`): [`Vector3`](../../server/interfaces/Vector3.md)

#### Parameters

##### worldBlockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Absolute location in the world to convert to a relative
location.

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

A location relative to the GameTest command block.

#### Remarks

From a BlockLocation, returns a new BlockLocation with
coordinates relative to the current GameTest structure
block. For example, the relative coordinates for the block
above the structure block are (0, 1, 0). Rotation of the
GameTest structure is also taken into account.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### relativeLocation()

> **relativeLocation**(`worldLocation`): [`Vector3`](../../server/interfaces/Vector3.md)

#### Parameters

##### worldLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Absolute location in the world to convert to a relative
location.

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

A location relative to the GameTest command block.

#### Remarks

From a location, returns a new location with coordinates
relative to the current GameTest structure block. For
example, the relative coordinates for the block above the
structure block are (0, 1, 0). Rotation of the GameTest
structure is also taken into account.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### removeSimulatedPlayer()

> **removeSimulatedPlayer**(`simulatedPlayer`): `void`

#### Parameters

##### simulatedPlayer

[`SimulatedPlayer`](SimulatedPlayer.md)

Simulated player to remove.

#### Returns

`void`

#### Remarks

Removes a simulated player from the world.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### rotateDirection()

> **rotateDirection**(`direction`): [`Direction`](../../server/enumerations/Direction.md)

#### Parameters

##### direction

[`Direction`](../../server/enumerations/Direction.md)

Direction to translate into a direction relative to the
GameTest facing. Passing in Direction.south will return the
test direction; Passing in Direction.north will return the
opposite of the test direction, and so on.

#### Returns

[`Direction`](../../server/enumerations/Direction.md)

#### Remarks

Returns a relative direction given the current rotation of
the current test. Passing in Direction.south will return the
test direction; Passing in Direction.north will return the
opposite of the test direction, and so on.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### rotateVector()

> **rotateVector**(`vector`): [`Vector3`](../../server/interfaces/Vector3.md)

#### Parameters

##### vector

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### runAfterDelay()

> **runAfterDelay**(`delayTicks`, `callback`): `void`

#### Parameters

##### delayTicks

`number`

Number of ticks to delay before running the specified
callback.

##### callback

() => `void`

Callback function to execute.

#### Returns

`void`

#### Remarks

Runs a specific callback after a specified delay of ticks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### runAtTickTime()

> **runAtTickTime**(`tick`, `callback`): `void`

#### Parameters

##### tick

`number`

Tick (after the start of the GameTest) to run the callback
at.

##### callback

() => `void`

Callback function to execute.

#### Returns

`void`

#### Remarks

Runs the given callback after a delay of _tick_ ticks from
the start of the GameTest.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### runOnFinish()

> **runOnFinish**(`callback`): `void`

#### Parameters

##### callback

() => `void`

Callback to execute.

#### Returns

`void`

#### Remarks

Runs the given callback after the GameTest has completed
regardless if the test passed, failed, or timed out.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setBlockPermutation()

> **setBlockPermutation**(`blockData`, `blockLocation`): `void`

#### Parameters

##### blockData

[`BlockPermutation`](../../server/classes/BlockPermutation.md)

Permutation that contains the configuration data for a
block.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block to set.

#### Returns

`void`

#### Remarks

Sets a block to a particular configuration (a
BlockPermutation) at the specified block location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setBlockType()

> **setBlockType**(`blockType`, `blockLocation`): `void`

#### Parameters

##### blockType

`string` \| [`BlockType`](../../server/classes/BlockType.md)

Type of block to set.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block to set.

#### Returns

`void`

#### Remarks

Sets a block to a particular type at the specified block
location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### Example

```typescript
import { EntityComponentTypes } from "@minecraft/server";
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function minibiomes(test: Test) {
  const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
  const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });

  test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });

  const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);

  minecartRideableComp?.addRider(pig);

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
}
register("ChallengeTests", "minibiomes", minibiomes).structureName("gametests:minibiomes").maxTicks(160);
```

#### World Ready

This function can't be called in early-execution mode.

***

### setFluidContainer()

> **setFluidContainer**(`location`, `type`): `void`

#### Parameters

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the fluid container block.

##### type

[`FluidType`](../../server/enumerations/FluidType.md)

Type of fluid to set. See [minecraftserver.FluidType](../../server/enumerations/FluidType.md)
for a list of values.

#### Returns

`void`

#### Remarks

For blocks that are fluid containers - like a cauldron -
changes the type of fluid within that container.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### setTntFuse()

> **setTntFuse**(`entity`, `fuseLength`): `void`

#### Parameters

##### entity

[`Entity`](../../server/classes/Entity.md)

Entity that is explodable.

##### fuseLength

`number`

Length of time, in ticks, before the entity explodes.

#### Returns

`void`

#### Remarks

Sets the fuse of an explodable entity.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### spawn()

> **spawn**(`entityTypeIdentifier`, `blockLocation`): [`Entity`](../../server/classes/Entity.md)

#### Parameters

##### entityTypeIdentifier

`string`

Type of entity to create. If no namespace is provided,
'minecraft:' is assumed. Note that an optional initial spawn
event can be specified between less than/greater than signs
(e.g., namespace:entityType<spawnEvent>).

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Entity`](../../server/classes/Entity.md)

The spawned entity. If the entity cannot be spawned, returns
undefined.

#### Remarks

Spawns an entity at a location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### Examples

```typescript
import * as gameTest from '@minecraft/server-gametest';

gameTest
    .register('StarterTests', 'simpleMobTest', (test: gameTest.Test) => {
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

```typescript
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function phantomsShouldFlyFromCats(test: Test) {
  test.spawn(MinecraftEntityTypes.Cat, { x: 4, y: 3, z: 3 });
  test.spawn(MinecraftEntityTypes.Phantom, { x: 4, y: 3, z: 3 });

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Phantom, { x: 4, y: 6, z: 3 }, true);
}

register("MobBehaviorTests", "phantoms_should_fly_from_cats", phantomsShouldFlyFromCats)
  .structureName("gametests:glass_cells");
```

```typescript
import { EntityComponentTypes } from "@minecraft/server";
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function minibiomes(test: Test) {
  const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
  const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });

  test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });

  const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);

  minecartRideableComp?.addRider(pig);

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
}
register("ChallengeTests", "minibiomes", minibiomes).structureName("gametests:minibiomes").maxTicks(160);
```

#### World Ready

This function can't be called in early-execution mode.

***

### spawnAtLocation()

> **spawnAtLocation**(`entityTypeIdentifier`, `location`): [`Entity`](../../server/classes/Entity.md)

#### Parameters

##### entityTypeIdentifier

`string`

Type of entity to create. If no namespace is provided,
'minecraft:' is assumed. Note that an optional initial spawn
event can be specified between less than/greater than signs
(e.g., namespace:entityType<spawnEvent>).

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

#### Returns

[`Entity`](../../server/classes/Entity.md)

The spawned entity. If the entity cannot be spawned, returns
undefined.

#### Remarks

Spawns an entity at a location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### spawnItem()

> **spawnItem**(`itemStack`, `location`): [`Entity`](../../server/classes/Entity.md)

#### Parameters

##### itemStack

[`ItemStack`](../../server/classes/ItemStack.md)

ItemStack that describes the item entity to create.

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

Location to create the item entity at.

#### Returns

[`Entity`](../../server/classes/Entity.md)

#### Remarks

Spawns an item entity at a specified location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### spawnSimulatedPlayer()

> **spawnSimulatedPlayer**(`blockLocation`, `name?`, `gameMode?`): [`SimulatedPlayer`](SimulatedPlayer.md)

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location where to spawn the simulated player.

##### name?

`string`

Name to give the new simulated player.
Defaults to: "Simulated Player"

##### gameMode?

[`GameMode`](../../server/enumerations/GameMode.md)

Defaults to: 0

#### Returns

[`SimulatedPlayer`](SimulatedPlayer.md)

#### Remarks

Creates a new simulated player within the world.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### spawnWithoutBehaviors()

> **spawnWithoutBehaviors**(`entityTypeIdentifier`, `blockLocation`): [`Entity`](../../server/classes/Entity.md)

#### Parameters

##### entityTypeIdentifier

`string`

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location where the entity should be spawned.

#### Returns

[`Entity`](../../server/classes/Entity.md)

#### Remarks

Spawns an entity at a location without any AI behaviors.
This method is frequently used in conjunction with methods
like .walkTo to create predictable mob actions.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### spawnWithoutBehaviorsAtLocation()

> **spawnWithoutBehaviorsAtLocation**(`entityTypeIdentifier`, `location`): [`Entity`](../../server/classes/Entity.md)

#### Parameters

##### entityTypeIdentifier

`string`

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

Location where the entity should be spawned.

#### Returns

[`Entity`](../../server/classes/Entity.md)

#### Remarks

Spawns an entity at a location without any AI behaviors.
This method is frequently used in conjunction with methods
like .walkTo to create predictable mob actions.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### spreadFromFaceTowardDirection()

> **spreadFromFaceTowardDirection**(`blockLocation`, `fromFace`, `direction`): `void`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

BlockLocation containing a multiface block.

##### fromFace

[`Direction`](../../server/enumerations/Direction.md)

Face to spread from. This face must already be set.

##### direction

[`Direction`](../../server/enumerations/Direction.md)

Direction to spread. Use the Minecraft.Direction enum to
specify a direction.

#### Returns

`void`

#### Remarks

Tests that a particular item entity is present at a
particular location. If not, an exception is thrown.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### startSequence()

> **startSequence**(): [`GameTestSequence`](GameTestSequence.md)

#### Returns

[`GameTestSequence`](GameTestSequence.md)

A new GameTestSequence with chaining methods that facilitate
creating a set of steps.

#### Remarks

Creates a new GameTestSequence - A set of steps that play
out sequentially within a GameTest.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### succeed()

> **succeed**(): `void`

#### Returns

`void`

#### Remarks

Marks the current test as a success case.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### succeedIf()

> **succeedIf**(`callback`): `void`

#### Parameters

##### callback

() => `void`

Callback function that runs. If the function runs
successfully, the test is marked as a success. Typically,
this function will have .assertXyz method calls within it.

#### Returns

`void`

#### Remarks

Runs the given callback. If the callback does not throw an
exception, the test is marked as a success.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### succeedOnTick()

> **succeedOnTick**(`tick`): `void`

#### Parameters

##### tick

`number`

Tick after the start of the GameTest to mark the test as
successful.

#### Returns

`void`

#### Remarks

Marks the test as a success at the specified tick.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### succeedOnTickWhen()

> **succeedOnTickWhen**(`tick`, `callback`): `void`

#### Parameters

##### tick

`number`

Tick after the start of the GameTest to run the testing
callback at.

##### callback

() => `void`

Callback function that runs. If the function runs
successfully, the test is marked as a success.

#### Returns

`void`

#### Remarks

Runs the given callback at _tick_ ticks after the start of
the test. If the callback does not throw an exception, the
test is marked as a failure.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### succeedWhen()

> **succeedWhen**(`callback`): `void`

#### Parameters

##### callback

() => `void`

Testing callback function that runs. If the function runs
successfully, the test is marked as a success.

#### Returns

`void`

#### Remarks

Runs the given callback every tick. When the callback
successfully executes, the test is marked as a success.
Specifically, the test will succeed when the callback does
not throw an exception.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### Example

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

#### World Ready

This function can't be called in early-execution mode.

***

### succeedWhenBlockPresent()

> **succeedWhenBlockPresent**(`blockType`, `blockLocation`, `isPresent?`): `void`

#### Parameters

##### blockType

`string` \| [`BlockType`](../../server/classes/BlockType.md)

Type of block to test for.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the block to test at.

##### isPresent?

`boolean`

If true, this function tests whether a block of the
specified type is present. If false, tests that a block of
the specified type is not present.
Defaults to: true

#### Returns

`void`

#### Remarks

Depending on the condition of isPresent, tests for the
presence of a block of a particular type on every tick. When
the specified block of a type is found or not found
(depending on isPresent), the test is marked as a success.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### succeedWhenEntityHasComponent()

> **succeedWhenEntityHasComponent**(`entityTypeIdentifier`, `componentIdentifier`, `blockLocation`, `hasComponent`): `void`

#### Parameters

##### entityTypeIdentifier

`string`

Type of entity to look for. If no namespace is specified,
'minecraft:' is assumed.

##### componentIdentifier

`string`

Type of component to test for the presence of. If no
namespace is specified, 'minecraft:' is assumed.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Block location of the entity to test.

##### hasComponent

`boolean`

If true, this function tests for the presence of a
component. If false, this function tests for the lack of a
component.

#### Returns

`void`

#### Remarks

Tests for the presence of a component on every tick.
Depending on the value of hasComponent, when the specified
component is found, the test is marked as a success.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### succeedWhenEntityPresent()

> **succeedWhenEntityPresent**(`entityTypeIdentifier`, `blockLocation`, `isPresent?`): `void`

#### Parameters

##### entityTypeIdentifier

`string`

Type of entity to test for (e.g., 'minecraft:skeleton'). If
an entity namespace is not specified, 'minecraft:' is
assumed.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location of the entity to test for.

##### isPresent?

`boolean`

If true, this function tests whether an entity of the
specified type is present. If false, tests that an entity of
the specified type is not present.
Defaults to: true

#### Returns

`void`

#### Remarks

Depending on the value of isPresent, tests for the presence
of an entity on every tick. When an entity of the specified
type is found or not found (depending on isPresent), the
test is marked as a success.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### Examples

```typescript
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftEntityTypes } from "@minecraft/vanilla-data";

function phantomsShouldFlyFromCats(test: Test) {
  test.spawn(MinecraftEntityTypes.Cat, { x: 4, y: 3, z: 3 });
  test.spawn(MinecraftEntityTypes.Phantom, { x: 4, y: 3, z: 3 });

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Phantom, { x: 4, y: 6, z: 3 }, true);
}

register("MobBehaviorTests", "phantoms_should_fly_from_cats", phantomsShouldFlyFromCats)
  .structureName("gametests:glass_cells");
```

```typescript
import { EntityComponentTypes } from "@minecraft/server";
import { Test, register } from "@minecraft/server-gametest";
import { MinecraftBlockTypes, MinecraftEntityTypes } from "@minecraft/vanilla-data";

function minibiomes(test: Test) {
  const minecart = test.spawn(MinecraftEntityTypes.Minecart, { x: 9, y: 7, z: 7 });
  const pig = test.spawn(MinecraftEntityTypes.Pig, { x: 9, y: 7, z: 7 });

  test.setBlockType(MinecraftBlockTypes.Cobblestone, { x: 10, y: 7, z: 7 });

  const minecartRideableComp = minecart.getComponent(EntityComponentTypes.Rideable);

  minecartRideableComp?.addRider(pig);

  test.succeedWhenEntityPresent(MinecraftEntityTypes.Pig, { x: 8, y: 3, z: 1 }, true);
}
register("ChallengeTests", "minibiomes", minibiomes).structureName("gametests:minibiomes").maxTicks(160);
```

#### World Ready

This function can't be called in early-execution mode.

***

### triggerInternalBlockEvent()

> **triggerInternalBlockEvent**(`blockLocation`, `event`, `eventParameters?`): `void`

#### Parameters

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

##### event

`string`

Event to trigger. Valid values include minecraft:drip,
minecraft:grow_stalagtite, minecraft:grow_stalagmite,
minecraft:grow_up, minecraft:grow_down and
minecraft:grow_sideways.

##### eventParameters?

`number`[]

Defaults to: []

#### Returns

`void`

#### Remarks

Triggers a block event from a fixed list of available block
events.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### until()

> **until**(`callback`): `Promise`\<`void`\>

#### Parameters

##### callback

() => `void`

Function with code to evaluate.

#### Returns

`Promise`\<`void`\>

#### Remarks

This asynchronous function will wait until the code in the
specified callback successfully completes. until can be used
in conjunction with .assert functions to evaluate that a
condition is true.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### walkTo()

> **walkTo**(`mob`, `blockLocation`, `speedModifier?`): `void`

#### Parameters

##### mob

[`Entity`](../../server/classes/Entity.md)

Mob entity to give orders to.

##### blockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location where the entity should be walk to.

##### speedModifier?

`number`

Adjustable modifier to the mob's walking speed.
Defaults to: 1

#### Returns

`void`

#### Remarks

Forces a mob to walk to a particular location. Usually used
in conjunction with methods like .spawnWithoutBehaviors to
have more predictable mob behaviors. Mobs will stop
navigation as soon as they intersect the target location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### walkToLocation()

> **walkToLocation**(`mob`, `location`, `speedModifier?`): `void`

#### Parameters

##### mob

[`Entity`](../../server/classes/Entity.md)

Mob entity to give orders to.

##### location

[`Vector3`](../../server/interfaces/Vector3.md)

Location where the entity should be walk to.

##### speedModifier?

`number`

Adjustable modifier to the mob's walking speed.
Defaults to: 1

#### Returns

`void`

#### Remarks

Forces a mob to walk to a particular location. Usually used
in conjunction with methods like .spawnWithoutBehaviors to
have more predictable mob behaviors. Mobs will stop
navigation as soon as they intersect the target location.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### worldBlockLocation()

> **worldBlockLocation**(`relativeBlockLocation`): [`Vector3`](../../server/interfaces/Vector3.md)

#### Parameters

##### relativeBlockLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location relative to the GameTest command block.

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

An absolute location relative to the GameTest command block.

#### Remarks

From a BlockLocation with coordinates relative to the
GameTest structure block, returns a new BlockLocation with
coordinates relative to world. Rotation of the GameTest
structure is also taken into account.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.

***

### worldLocation()

> **worldLocation**(`relativeLocation`): [`Vector3`](../../server/interfaces/Vector3.md)

#### Parameters

##### relativeLocation

[`Vector3`](../../server/interfaces/Vector3.md)

Location relative to the GameTest command block.

#### Returns

[`Vector3`](../../server/interfaces/Vector3.md)

An absolute location relative to the GameTest command block.

#### Remarks

From a location with coordinates relative to the GameTest
structure block, returns a new location with coordinates
relative to world. Rotation of the GameTest structure is
also taken into account.

#### Throws

This function can throw errors.

[GameTestCompletedError](GameTestCompletedError.md)

[GameTestError](GameTestError.md)

#### World Ready

This function can't be called in early-execution mode.
