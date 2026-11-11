Register your component during startup, then attach it in your item JSON using your component identifier (for example, `custom:starter_item_logic`).

## Setup Steps

1. Register your custom item component in `system.beforeEvents.startup`.
2. Add one or more event handlers in the component object.
3. Attach that component id in your item's `components` object.
4. Add required vanilla dependencies for specific events (listed below).

## Event Handlers You Can Use

- `onBeforeDurabilityDamage(event)`: Runs before durability damage is applied when hitting an entity. You can modify `event.durabilityDamage`.
- `onCompleteUse(event)`: Runs when an item's use duration finishes.
  Dependency: item must include `minecraft:use_modifiers`.
- `onConsume(event)`: Runs when an item is consumed.
  Dependency: item must include both `minecraft:use_modifiers` and `minecraft:food`.
- `onHitEntity(event)`: Runs when the item hits an entity.
- `onMineBlock(event)`: Runs when the item mines a block.
- `onUse(event)`: Runs when a player uses the item.
- `onUseOn(event)`: Runs when the item is used on a block.

## Item JSON Example

Use format version `1.21.90` or newer and bind your custom component id:

```json
{
  "format_version": "1.26.10",
  "minecraft:item": {
    "description": {
      "identifier": "custom:starter_tool"
    },
    "components": {
      "custom:starter_item_logic": {},
      "minecraft:use_modifiers": {
        "use_duration": 5
      }
    }
  }
}
```

If you also use `onConsume`, add `minecraft:food` to `components`.

> Reference: https://wiki.bedrock.dev/items/item-events
