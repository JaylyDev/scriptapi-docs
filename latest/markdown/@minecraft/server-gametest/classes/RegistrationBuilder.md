[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-gametest](../README.md) / RegistrationBuilder

# Class: RegistrationBuilder

A utility class to set GameTest parameters for a test.
Methods can be chained together to set multiple properties.

## Source

```ts
export class RegistrationBuilder {
    private constructor();
    batch(batchName: string): RegistrationBuilder;
    maxAttempts(attemptCount: number): RegistrationBuilder;
    maxTicks(tickCount: number): RegistrationBuilder;
    padding(paddingBlocks: number): RegistrationBuilder;
    required(isRequired: boolean): RegistrationBuilder;
    requiredSuccessfulAttempts(attemptCount: number): RegistrationBuilder;
    rotateTest(rotate: boolean): RegistrationBuilder;
    setupTicks(tickCount: number): RegistrationBuilder;
    structureLocation(
        structureLocation: minecraftserver.Vector3,
        structureDimension?: minecraftserver.DimensionType | string,
    ): RegistrationBuilder;
    structureName(structureName: string): RegistrationBuilder;
    tag(tag: string): RegistrationBuilder;
}
```

## Constructors

### Constructor

> `private` **new RegistrationBuilder**(): `RegistrationBuilder`

#### Returns

`RegistrationBuilder`

## Methods

### batch()

> **batch**(`batchName`): `RegistrationBuilder`

#### Parameters

##### batchName

`string`

Name of the batch for the test.

#### Returns

`RegistrationBuilder`

RegistrationBuilder object where additional configuration
methods can be called.

#### Remarks

Sets the batch for the test to run in.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### maxAttempts()

> **maxAttempts**(`attemptCount`): `RegistrationBuilder`

#### Parameters

##### attemptCount

`number`

#### Returns

`RegistrationBuilder`

RegistrationBuilder object where additional configuration
methods can be called.

#### Remarks

Sets the maximum number of times a test will try to rerun if
it fails.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### maxTicks()

> **maxTicks**(`tickCount`): `RegistrationBuilder`

#### Parameters

##### tickCount

`number`

#### Returns

`RegistrationBuilder`

RegistrationBuilder object where additional configuration
methods can be called.

#### Remarks

Sets the maximum number of ticks a test will run for before
timing out and failing.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### padding()

> **padding**(`paddingBlocks`): `RegistrationBuilder`

#### Parameters

##### paddingBlocks

`number`

Size, in blocks, around the GameTest where additional
GameTests should not be created.

#### Returns

`RegistrationBuilder`

RegistrationBuilder object where additional configuration
methods can be called.

#### Remarks

Size around the GameTest, in blocks, that should be reserved
for the test when running multiple tests together.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### required()

> **required**(`isRequired`): `RegistrationBuilder`

#### Parameters

##### isRequired

`boolean`

If set to true, the test must pass in order for the entire
run of tests to pass.

#### Returns

`RegistrationBuilder`

RegistrationBuilder object where additional configuration
methods can be called.

#### Remarks

Whether this test is required to pass as part of its broader
set of tests.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### requiredSuccessfulAttempts()

> **requiredSuccessfulAttempts**(`attemptCount`): `RegistrationBuilder`

#### Parameters

##### attemptCount

`number`

#### Returns

`RegistrationBuilder`

RegistrationBuilder object where additional configuration
methods can be called.

#### Remarks

Sets the number of successful test runs to be considered
successful.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### rotateTest()

> **rotateTest**(`rotate`): `RegistrationBuilder`

#### Parameters

##### rotate

`boolean`

#### Returns

`RegistrationBuilder`

#### Remarks

If true, runs the test in all four rotations when run via
/gametest runset.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### setupTicks()

> **setupTicks**(`tickCount`): `RegistrationBuilder`

#### Parameters

##### tickCount

`number`

#### Returns

`RegistrationBuilder`

RegistrationBuilder object where additional configuration
methods can be called.

#### Remarks

Sets the number of ticks for a test to wait before executing
when the structure is spawned.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

***

### structureLocation()

> **structureLocation**(`structureLocation`, `structureDimension?`): `RegistrationBuilder`

#### Parameters

##### structureLocation

[`Vector3`](../../server/interfaces/Vector3.md)

##### structureDimension?

`string` \| [`DimensionType`](../../server/classes/DimensionType.md)

#### Returns

`RegistrationBuilder`

RegistrationBuilder object where additional configuration
methods can be called.

#### Remarks

Overrides the default structure placement with a specific
location and dimension. If height (y) is set to
Dimension.heightRange.max, the structure will snap to the
ground. If the dimension is not specified, it will run in
the dimension the command was run from.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

#### Throws

This function can throw errors.

[minecraftcommon.EngineError](../../common/classes/EngineError.md)

[minecraftcommon.InvalidArgumentError](../../common/classes/InvalidArgumentError.md)

***

### structureName()

> **structureName**(`structureName`): `RegistrationBuilder`

#### Parameters

##### structureName

`string`

#### Returns

`RegistrationBuilder`

RegistrationBuilder object where additional configuration
methods can be called.

#### Remarks

Sets the name of the structure for a test to use. "xyz:bar"
will load `/structures/xyz/bar.mcstructure` from the
behavior pack stack.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

#### Example

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

***

### tag()

> **tag**(`tag`): `RegistrationBuilder`

#### Parameters

##### tag

`string`

#### Returns

`RegistrationBuilder`

RegistrationBuilder object where additional configuration
methods can be called.

#### Remarks

Adds a tag to a test. You can run all tests with a given tag
with `/gametest runset <tag>`.

This function can't be called in restricted-execution mode.

This function can be called in early-execution mode.

#### Example

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
