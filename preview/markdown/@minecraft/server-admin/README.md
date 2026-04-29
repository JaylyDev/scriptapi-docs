[**Script API - v1.26.20.28**](../../README.md)

***

[Script API - v1.26.20.28](../../packages.md) / @minecraft/server-admin

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
### Installation
Install type definition for `@minecraft/server-admin` module using npm:
```bash
npm i @minecraft/server-admin@1.0.0-beta.1.26.20-preview.28
```

**`Beta`**

Contains types related to administering a Bedrock Dedicated
Server. These types allow for the configuration of variables
and secrets in JSON files in the Bedrock Dedicated Server
folder. These types cannot be used on Minecraft clients or
within Minecraft Realms.

Manifest Details
```json
{
  "module_name": "@minecraft/server-admin",
  "version": "1.0.0-beta"
}
```

## Classes

- [AdminBeforeEvents](classes/AdminBeforeEvents.md)
- [AllowList](classes/AllowList.md)
- [AllowListFileReloadError](classes/AllowListFileReloadError.md)
- [AllowListModificationError](classes/AllowListModificationError.md)
- [AsyncPlayerJoinBeforeEvent](classes/AsyncPlayerJoinBeforeEvent.md)
- [AsyncPlayerJoinBeforeEventSignal](classes/AsyncPlayerJoinBeforeEventSignal.md)
- [CannotDeopPlayerError](classes/CannotDeopPlayerError.md)
- [CannotKickPlayerError](classes/CannotKickPlayerError.md)
- [DedicatedServerUtils](classes/DedicatedServerUtils.md)
- [DisconnectedError](classes/DisconnectedError.md)
- [LevelStorage](classes/LevelStorage.md)
- [LevelStorageQuerySnapshotFile](classes/LevelStorageQuerySnapshotFile.md)
- [LevelStorageSaveStateChangeError](classes/LevelStorageSaveStateChangeError.md)
- [PlayerAlreadyOpError](classes/PlayerAlreadyOpError.md)
- [SecretString](classes/SecretString.md)
- [ServerSecrets](classes/ServerSecrets.md)
- [ServerVariables](classes/ServerVariables.md)

## Interfaces

- [TransferPlayerIpPortOptions](interfaces/TransferPlayerIpPortOptions.md)
- [TransferPlayerNetherNetOptions](interfaces/TransferPlayerNetherNetOptions.md)

## Variables

- [beforeEvents](variables/beforeEvents.md)
- [dedicatedServer](variables/dedicatedServer.md)
- [secrets](variables/secrets.md)
- [variables](variables/variables.md)

## Functions

- [deopPlayer](functions/deopPlayer.md)
- [kickPlayer](functions/kickPlayer.md)
- [opPlayer](functions/opPlayer.md)
- [transferPlayer](functions/transferPlayer.md)
