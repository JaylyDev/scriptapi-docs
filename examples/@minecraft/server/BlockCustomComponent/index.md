### Custom Components V1

Custom Components V1 is the original implementation of custom components in Minecraft. It allows you to define custom behaviors and properties for blocks, items, and entities using JSON components.

For script implementation, check out [registerBlockComponent_v1.ts](#example-registerblockcomponent_v1ts)

JSON Example:

```json
{
    "components": {
        "minecraft:custom_components": [
            "my_custom_component:name"
        ]
    }
}
```

### Custom Components V2

Custom Components V2 is a new experiment which must be enabled along with the "Beta APIs" experiment to use the new features for custom components. With the experiment enabled:

- `minecraft:custom_components` is deprecated in favor of flattened custom components
- Custom components now support parameters

#### Flattening

In the previous version of custom components, components had to be listed inside the `minecraft:custom_components` component. This is no longer required and the `minecraft:custom_components` component is deprecated. Instead, you can write your custom components similar to any other Minecraft component. For example:

```json
{
    "components": {
        "minecraft:loot": "...",
        "minecraft:collision_box": {
            "enabled": true
        },
        "my_custom_component:name": {},
        "my_custom_component:another_component": {}
    }
}
```

#### Parameters

Along with flattening a custom component in JSON, you also can provide parameters to the component. The script bindings for custom components have been upgraded to support a second parameter, `CustomComponentParameters`, which grants access to the JSON parameter list for your component. The following example shows how to use custom component parameters in script:

```json
{
    "components": {
        "some_component:name": {
            "first": "hello",
            "second": 4,
            "third": [
                "test",
                "example"
            ]
        }
    }
}
```

```typescript
type SomeComponentParams = {
    first?: string;
    second?: number;
    third?: string[];
};

system.beforeEvents.startup.subscribe(init => {
    init.blockComponentRegistry.registerCustomComponent('some_component:name', {
        onStepOn: (e : BlockComponentStepOnEvent, p : CustomComponentParameters) : {
            let params = p.params as SomeComponentParams;
            ...
        }
    });
});
```