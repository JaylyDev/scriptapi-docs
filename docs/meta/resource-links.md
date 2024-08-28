---
title: Resource Links
description: A list of links related to resources for Minecraft Script API. I'll try to keep this page up to date with useful content.
---

# Resource Links

A list of links related to resources for Minecraft Script API. I'll try to keep this page up to date with useful content. This webpage is made since all the Script API documentation are all over the place, _and I'm definitely not part of the problem..._

## JavaScript Fundamental

- [Codecademy: Introduction to JavaScript](https://www.codecademy.com/learn/introduction-to-javascript)

  > Learn how to use JavaScript — a powerful and flexible programming language in an interactive way.

- [MDN: JavaScript language overview](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Overview)

  > An article written by Mozilla which provides begineer-level information for JavaScript language.

- [freeCodeCamp.org: JavaScript Algorithms and Data Structures](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)

  > Learn the fundamentals of JavaScript including variables, arrays, objects, loops, and functions.

- [TypeScript: Documentation - Interfaces](https://www.typescriptlang.org/docs/handbook/2/objects.html)

  > Interfaces are capable of describing the wide range of shapes that JavaScript objects can take. It is used frequently in Minecraft Script API.

  ::: warning
  Interfaces is one of TypeScript’s core principles for type checking, and `interface` syntax is not supported in JavaScript.
  :::

## Script API

### Microsoft Learn

**Getting Started with Script API**

- [Introduction to Scripting in Minecraft](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptingintroduction?view=minecraft-bedrock-stable)

  > An introducion to writing and deploying scripts in Minecraft: Bedrock Edition

- [Official Script API Documentation](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/)

  > Microsoft's official documentation of high-level introduction of experimental Script API

**`@minecraft/server` Related Documentation**

- [Stable API Reference](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server?view=minecraft-bedrock-stable)

  > Reference documentation for `@minecraft/server` latest stable APIs

- [Beta API Reference](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server/minecraft-server?view=minecraft-bedrock-experimental)

  > Reference documentation for `@minecraft/server` preview beta APIs

- [Game Loops and Timed Callbacks](https://learn.microsoft.com/en-us/minecraft/creator/documents/systemrunguide?view=minecraft-bedrock-stable)

  > High level introduction to `system.run()`, `system.runInterval()` and `system.runJob()` functions within the `@minecraft/server` module.

- [Custom Components](https://learn.microsoft.com/en-us/minecraft/creator/documents/customcomponents?view=minecraft-bedrock-stable)
  > Guide to connect the configuration of Blocks and Items in JSON to scripting

**Other Minecraft Modules and Libraries**

- [`@minecraft/server-ui` API Reference](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-ui/minecraft-server-ui?view=minecraft-bedrock-stable)

  > Reference documentation for `@minecraft/server-ui` latest stable APIs

  ::: tip
  For reference documentation for [Minecraft Preview Beta APIs for `@minecraft/server-ui`](https://learn.microsoft.com/en-us/minecraft/creator/scriptapi/minecraft/server-ui/minecraft-server-ui?view=minecraft-bedrock-experimental)
  :::

- [Open Source Scripting Libraries](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptinglibraries)

  > Overview of Mojang's open source scripting libraries such as `@minecraft/math` and `@minecraft/vanilla-data` hosted on [npmjs.com](https://npmjs.com/)

- [Get Started with GameTest Framework](https://learn.microsoft.com/en-us/minecraft/creator/documents/gametestgettingstarted?view=minecraft-bedrock-stable)
  > Introduction to the GameTest Framework / `@minecraft/server-gametest` module.

**Using TypeScript in Scripting**

- [Build a gameplay experience with TypeScript](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptinggettingstarted?view=minecraft-bedrock-stable)

  > Use TypeScript compilation and with Microsoft's build configuration for Minecraft to build a simple gameplay experience in Minecraft scripting.

- [Using Type Defintion files and Minecraft Script Debugger](https://learn.microsoft.com/en-us/minecraft/creator/documents/scriptdevelopertools?view=minecraft-bedrock-stable)

  > Mojang provides tools for enhanced editing, debugging, and profiling of JavaScript within Visual Studio Code to write scripts more efficiently.

**GitHub Repositories**

- [Minecraft GameTest Samples](https://github.com/microsoft/minecraft-gametests/tree/main/behavior_packs)

  > Sample GameTest behavior files for Minecraft Bedrock Edition. Minecraft supports GameTests - a combination of JavaScript + MCStructures - for validating facets of Minecraft behavior.

- [Scripting Project Starters](https://github.com/microsoft/minecraft-scripting-samples)
  > Contains various project samples for Minecraft script development.

### Bedrock Wiki

- [Starting Scripting](https://wiki.bedrock.dev/scripting/starting-scripts.html)

  > Community documentation on starting a project that utilize Minecraft Scripting API

- [BeforeEvents privilege system](https://wiki.bedrock.dev/scripting/script-server.html#beforeevents-privilege-system)

  > Overview of BeforeEvents privilege system, the feature which throws the following error at times:
  > `Native function does not have required privileges.`

- [Creating Script UI Forms](https://wiki.bedrock.dev/scripting/gametest-form.html)

  > Using `@minecraft/server-ui` module to create form UIs without the need for JSON UI-wrangling in Minecraft.

- [Script Requests API](https://wiki.bedrock.dev/scripting/script-net.html)

  > Send and receive HTTP-based requests to interact with the internet using `@minecraft/server-net` module.

  ::: warning
  This feature is only available to [Bedrock Dedicated Servers](https://www.minecraft.net/en-us/download/server/bedrock), and it cannot be used on Minecraft clients.
  :::

- [Script Watchdog System](https://wiki.bedrock.dev/scripting/script-watchdog.html)
  > Overview of Watchdog performance system in Minecraft script engine.

**Scripting Q&A with Microsoft/Mojang**

<!-- If I'm being honest, this is the only valuable infomation in the scripting section of the wiki. -->

- [GameTest Q&A 2021/08/06](https://wiki.bedrock.dev/scripting/gametest-qna.html)

  > Questions and answers about the Scripting API back in 2021.

- [Scripting and Editor Q&A 2023/09/22](https://wiki.bedrock.dev/scripting/scripting-editor-qna.html)

  > Questions and answers about the Scripting and Editor API.

### Others

- [Jayly's Script API examples](https://github.com/JaylyDev/ScriptAPI)

  > Community driven script examples for Minecraft Bedrock Script API.

- [Bundle Minecraft Scripts with ESBuild and Regolith](https://jaylydev.github.io/posts/bundle-minecraft-scripts-esbuild/)
  > Merge Minecraft script files through bundling with esbuild and regolith. Using Mojang's open source libraries, such as `@minecraft/math` in scripts, require it.
