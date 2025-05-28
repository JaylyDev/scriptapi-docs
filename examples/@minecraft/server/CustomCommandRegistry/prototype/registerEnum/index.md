> [!IMPORTANT]
>
> - `registerEnum()` must be called before [`registerCommand()`](#registercommand) for the custom command to be registered successfully.
> - The command enum name must match the registered enum name declared in the custom command object.

```js
system.beforeEvents.startup.subscribe((init: StartupEvent) => {
    const command: CustomCommand = {
        name: "creator:command",
        // ... more required parameters
        mandatoryParameters: [
            { type: CustomCommandParamType.Enum, name: "creator:enum" },
        ],
    };
    // registerEnum() must be called before registerCommand()
    init.customCommandRegistry.registerEnum("creator:enum", ['value1', 'value2']); // The command enum name must match the registered enum name declared above.
    init.customCommandRegistry.registerCommand(command, callback);
});
```
