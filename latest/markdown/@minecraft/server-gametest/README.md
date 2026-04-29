[**Script API - v1.26.10**](../../README.md)

***

[Script API - v1.26.10](../../packages.md) / @minecraft/server-gametest

### Dependencies
**@minecraft/common** (Optional in Manifest Details)
- Requires **v1.2.0** or above
```json
{
  "module_name": "@minecraft/common",
  "version": "1.2.0"
}
```
**@minecraft/server** (Required one of the following in Manifest Details)
- Requires **v1.17.0** up to, but not including, v2.0.0
```json
{
  "module_name": "@minecraft/server",
  "version": "1.17.0"
}
```
- Requires **v2.0.0** up to, but not including, v3.0.0
```json
{
  "module_name": "@minecraft/server",
  "version": "2.0.0"
}
```
- Requires **v2.7.0-beta** up to, but not including, v3.0.0
```json
{
  "module_name": "@minecraft/server",
  "version": "2.7.0-beta"
}
```
### Installation
Install type definition for `@minecraft/server-gametest` module using npm:
```bash
npm i @minecraft/server-gametest@1.0.0-beta.1.26.10-stable
```

**`Beta`**

The @minecraft/server-gametest module provides scriptable
APIs for scaffolding and testing content experiences in
Minecraft.

Manifest Details
```json
{
  "module_name": "@minecraft/server-gametest",
  "version": "1.0.0-beta"
}
```

## Enumerations

- [GameTestCompletedErrorReason](enumerations/GameTestCompletedErrorReason.md)
- [GameTestErrorType](enumerations/GameTestErrorType.md)
- [LookDuration](enumerations/LookDuration.md)
- [PersonaArmSize](enumerations/PersonaArmSize.md)
- [PersonaPieceType](enumerations/PersonaPieceType.md)

## Classes

- [FenceConnectivity](classes/FenceConnectivity.md)
- [GameTestCompletedError](classes/GameTestCompletedError.md)
- [GameTestError](classes/GameTestError.md)
- [GameTestSequence](classes/GameTestSequence.md)
- [NavigationResult](classes/NavigationResult.md)
- [RegistrationBuilder](classes/RegistrationBuilder.md)
- [SculkSpreader](classes/SculkSpreader.md)
- [SimulatedPlayer](classes/SimulatedPlayer.md)
- [Tags](classes/Tags.md)
- [Test](classes/Test.md)

## Interfaces

- [GameTestErrorContext](interfaces/GameTestErrorContext.md)
- [MoveToOptions](interfaces/MoveToOptions.md)
- [PlayerPersonaPiece](interfaces/PlayerPersonaPiece.md)
- [PlayerSkinData](interfaces/PlayerSkinData.md)

## Functions

- [getPlayerSkin](functions/getPlayerSkin.md)
- [register](functions/register.md)
- [registerAsync](functions/registerAsync.md)
- [setAfterBatchCallback](functions/setAfterBatchCallback.md)
- [setBeforeBatchCallback](functions/setBeforeBatchCallback.md)
- [spawnSimulatedPlayer](functions/spawnSimulatedPlayer.md)
