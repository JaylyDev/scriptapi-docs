[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-gametest](../README.md) / GameTestSequence

# Class: GameTestSequence

Executes a set of steps defined via chained .thenXyz
methods, sequentially. This facilitates a 'script' of
GameTest setup methods and assertions over time.

## Constructors

### Constructor

> `private` **new GameTestSequence**(): `GameTestSequence`

#### Returns

`GameTestSequence`

## Methods

### thenExecute()

> **thenExecute**(`callback`): `GameTestSequence`

#### Parameters

##### callback

() => `void`

Callback function to execute.

#### Returns

`GameTestSequence`

Returns a GameTestSequence object where additional .thenXyz
method steps can be added.

#### Remarks

Runs the given callback as a step within a GameTest
sequence. Exceptions thrown within the callback will end
sequence execution.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### thenExecuteAfter()

> **thenExecuteAfter**(`delayTicks`, `callback`): `GameTestSequence`

#### Parameters

##### delayTicks

`number`

Number of ticks to wait before executing the callback.

##### callback

() => `void`

Callback function to execute.

#### Returns

`GameTestSequence`

Returns a GameTestSequence object where additional .thenXyz
method steps can be added.

#### Remarks

After a delay, runs the given callback as a step within a
GameTest sequence. Exceptions thrown within the callback
will end sequence execution.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### thenExecuteFor()

> **thenExecuteFor**(`tickCount`, `callback`): `GameTestSequence`

#### Parameters

##### tickCount

`number`

##### callback

() => `void`

Callback function to execute.

#### Returns

`GameTestSequence`

Returns a GameTestSequence object where additional .thenXyz
method steps can be added.

#### Remarks

Runs the given callback every tick for the given number of
ticks.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### thenFail()

> **thenFail**(`errorMessage`): `void`

#### Parameters

##### errorMessage

`string`

Error message summarizing the failure condition.

#### Returns

`void`

#### Remarks

Causes the test to fail if this step in the GameTest
sequence is reached.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### thenIdle()

> **thenIdle**(`delayTicks`): `GameTestSequence`

#### Parameters

##### delayTicks

`number`

Number of ticks to delay for this step in the GameTest
sequence.

#### Returns

`GameTestSequence`

Returns a GameTestSequence object where additional .thenXyz
method steps can be added.

#### Remarks

Idles the GameTest sequence for the specified delayTicks.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### thenSucceed()

> **thenSucceed**(): `void`

#### Returns

`void`

#### Remarks

Marks the GameTest a success if this step is reached in the
GameTest sequence.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### thenWait()

> **thenWait**(`callback`): `GameTestSequence`

#### Parameters

##### callback

() => `void`

Testing callback function to execute. Typically, this
function will have .assertXyz functions within it.

#### Returns

`GameTestSequence`

Returns a GameTestSequence object where additional .thenXyz
method steps can be added.

#### Remarks

Executes the given callback every tick until it succeeds.
Exceptions thrown within the callback will end sequence
execution.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.

***

### thenWaitAfter()

> **thenWaitAfter**(`delayTicks`, `callback`): `GameTestSequence`

#### Parameters

##### delayTicks

`number`

Tick (after the previous step in the GameTest sequence) to
run the callback at.

##### callback

() => `void`

Testing callback function to execute. Typically, this
function will have .assertXyz functions within it.

#### Returns

`GameTestSequence`

Returns a GameTestSequence object where additional .thenXyz
method steps can be added.

#### Remarks

After a delay from the previous step, executes the given
callback every tick until it succeeds. Exceptions thrown
within the callback will end sequence execution.

This function can't be called in restricted-execution mode.

#### World Ready

This function can't be called in early-execution mode.
