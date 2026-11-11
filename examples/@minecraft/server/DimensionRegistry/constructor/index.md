Some notes that might be relevant:

> [!IMPORTANT]  
> Most infomation found in this section is based on Minecraft Preview 26.20.26, which is still in Beta APIs and may be subject to change.

- You can have a max of 58079 dimensions in one world.
- Custom dimensions should persist on world save and be able to rejoin when you reload the world
- For now, you can generate custom terrain with JavaScript with your own implementation. There are lots of noise generation libraries in npmjs that you can use to generate them.
- Like other registries, the id of the dimension should be in the format of `namespace:name`.
- Use ticking areas before building or teleporting into custom dimensions, so chunks are loaded.
- If your pack does not work, check Beta APIs and dependencies in manifest first.

Check out this video for a quick demo:

<video preload="none" poster="https://jaylydev.github.io/scriptapi-docs/assets/minecraft/CustomWorldGenSimplexNoise_first.jpg" src="https://jaylydev.github.io/scriptapi-docs/assets/minecraft/CustomWorldGenSimplexNoise.mp4" controls style="max-width: 100%;"></video>

> Video provided by [darknavi](https://github.com/JakeShirley)

Examples in this folder are adapted from:

- https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/custom-dimension-api-tutorial
- https://github.com/microsoft/minecraft-samples/tree/main/custom_dimensions

Files:

- registerDimensions.ts: smallest startup-only registration snippet.
- registerDimensionsWithCommand.ts: registration plus a command entry point.
- buildPlatformsOnWorldLoad.ts: build safe landing platforms after world load using ticking areas.
- teleportToCustomDimension.ts: reusable helper for safe teleport into custom dimensions.
- dimensionTravelMenu.ts: command + ActionForm travel menu for vanilla and custom dimensions.
