[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/gameplay-utilities](../README.md) / nextEvent

# Function: nextEvent()

> **nextEvent**\<`T`\>(`signal`, `filter?`): [`EventPromise`](../interfaces/EventPromise.md)\<`Parameters`\<`ReturnType`\<`T`\[`"subscribe"`\]\>\>\[`0`\]\>

Helper to create a new EventPromise from an after event signal.

## Type Parameters

### T

`T` *extends* [`BlockExplodeAfterEventSignal`](../../server/classes/BlockExplodeAfterEventSignal.md) \| [`ButtonPushAfterEventSignal`](../../server/classes/ButtonPushAfterEventSignal.md) \| [`DataDrivenEntityTriggerAfterEventSignal`](../../server/classes/DataDrivenEntityTriggerAfterEventSignal.md) \| [`EffectAddAfterEventSignal`](../../server/classes/EffectAddAfterEventSignal.md) \| [`EntityDieAfterEventSignal`](../../server/classes/EntityDieAfterEventSignal.md) \| [`EntityHealAfterEventSignal`](../../server/classes/EntityHealAfterEventSignal.md) \| [`EntityHealthChangedAfterEventSignal`](../../server/classes/EntityHealthChangedAfterEventSignal.md) \| [`EntityHitBlockAfterEventSignal`](../../server/classes/EntityHitBlockAfterEventSignal.md) \| [`EntityHitEntityAfterEventSignal`](../../server/classes/EntityHitEntityAfterEventSignal.md) \| [`EntityHurtAfterEventSignal`](../../server/classes/EntityHurtAfterEventSignal.md) \| [`EntityItemDropAfterEventSignal`](../../server/classes/EntityItemDropAfterEventSignal.md) \| [`EntityItemPickupAfterEventSignal`](../../server/classes/EntityItemPickupAfterEventSignal.md) \| [`EntityLoadAfterEventSignal`](../../server/classes/EntityLoadAfterEventSignal.md) \| [`EntityRemoveAfterEventSignal`](../../server/classes/EntityRemoveAfterEventSignal.md) \| [`EntitySpawnAfterEventSignal`](../../server/classes/EntitySpawnAfterEventSignal.md) \| [`ExplosionAfterEventSignal`](../../server/classes/ExplosionAfterEventSignal.md) \| [`GameRuleChangeAfterEventSignal`](../../server/classes/GameRuleChangeAfterEventSignal.md) \| [`ItemCompleteUseAfterEventSignal`](../../server/classes/ItemCompleteUseAfterEventSignal.md) \| [`ItemReleaseUseAfterEventSignal`](../../server/classes/ItemReleaseUseAfterEventSignal.md) \| [`ItemStartUseAfterEventSignal`](../../server/classes/ItemStartUseAfterEventSignal.md) \| [`ItemStartUseOnAfterEventSignal`](../../server/classes/ItemStartUseOnAfterEventSignal.md) \| [`ItemStopUseAfterEventSignal`](../../server/classes/ItemStopUseAfterEventSignal.md) \| [`ItemStopUseOnAfterEventSignal`](../../server/classes/ItemStopUseOnAfterEventSignal.md) \| [`ItemUseAfterEventSignal`](../../server/classes/ItemUseAfterEventSignal.md) \| [`LeverActionAfterEventSignal`](../../server/classes/LeverActionAfterEventSignal.md) \| [`PistonActivateAfterEventSignal`](../../server/classes/PistonActivateAfterEventSignal.md) \| [`PlayerBreakBlockAfterEventSignal`](../../server/classes/PlayerBreakBlockAfterEventSignal.md) \| [`PlayerButtonInputAfterEventSignal`](../../server/classes/PlayerButtonInputAfterEventSignal.md) \| [`PlayerDimensionChangeAfterEventSignal`](../../server/classes/PlayerDimensionChangeAfterEventSignal.md) \| [`PlayerEmoteAfterEventSignal`](../../server/classes/PlayerEmoteAfterEventSignal.md) \| [`PlayerGameModeChangeAfterEventSignal`](../../server/classes/PlayerGameModeChangeAfterEventSignal.md) \| [`PlayerHotbarSelectedSlotChangeAfterEventSignal`](../../server/classes/PlayerHotbarSelectedSlotChangeAfterEventSignal.md) \| [`PlayerInputModeChangeAfterEventSignal`](../../server/classes/PlayerInputModeChangeAfterEventSignal.md) \| [`PlayerInputPermissionCategoryChangeAfterEventSignal`](../../server/classes/PlayerInputPermissionCategoryChangeAfterEventSignal.md) \| [`PlayerInteractWithBlockAfterEventSignal`](../../server/classes/PlayerInteractWithBlockAfterEventSignal.md) \| [`PlayerInteractWithEntityAfterEventSignal`](../../server/classes/PlayerInteractWithEntityAfterEventSignal.md) \| [`PlayerInventoryItemChangeAfterEventSignal`](../../server/classes/PlayerInventoryItemChangeAfterEventSignal.md) \| [`PlayerJoinAfterEventSignal`](../../server/classes/PlayerJoinAfterEventSignal.md) \| [`PlayerLeaveAfterEventSignal`](../../server/classes/PlayerLeaveAfterEventSignal.md) \| [`PlayerPlaceBlockAfterEventSignal`](../../server/classes/PlayerPlaceBlockAfterEventSignal.md) \| [`PlayerSpawnAfterEventSignal`](../../server/classes/PlayerSpawnAfterEventSignal.md) \| [`PlayerSwingStartAfterEventSignal`](../../server/classes/PlayerSwingStartAfterEventSignal.md) \| [`PressurePlatePopAfterEventSignal`](../../server/classes/PressurePlatePopAfterEventSignal.md) \| [`PressurePlatePushAfterEventSignal`](../../server/classes/PressurePlatePushAfterEventSignal.md) \| [`ProjectileHitBlockAfterEventSignal`](../../server/classes/ProjectileHitBlockAfterEventSignal.md) \| [`ProjectileHitEntityAfterEventSignal`](../../server/classes/ProjectileHitEntityAfterEventSignal.md) \| [`ScriptEventCommandMessageAfterEventSignal`](../../server/classes/ScriptEventCommandMessageAfterEventSignal.md) \| [`TargetBlockHitAfterEventSignal`](../../server/classes/TargetBlockHitAfterEventSignal.md) \| [`TripWireTripAfterEventSignal`](../../server/classes/TripWireTripAfterEventSignal.md) \| [`WeatherChangeAfterEventSignal`](../../server/classes/WeatherChangeAfterEventSignal.md) \| [`WorldLoadAfterEventSignal`](../../server/classes/WorldLoadAfterEventSignal.md)

## Parameters

### signal

`T`

### filter?

`Parameters`\<`T`\[`"subscribe"`\]\>\[`1`\]

## Returns

[`EventPromise`](../interfaces/EventPromise.md)\<`Parameters`\<`ReturnType`\<`T`\[`"subscribe"`\]\>\>\[`0`\]\>
