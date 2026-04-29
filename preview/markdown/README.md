**Script API - v1.26.20.28**

***

Minecraft Script API lets you easily interact your Minecraft world using Add-Ons with JavaScript. The most common use case is to control many things and add complex behavior in a Minecraft world.

The Script API reference provides a list of functionalities Minecraft provides through Script API. If you are new to JavaScript or Minecraft Add-On, start with the [guide](https://learn.microsoft.com/en-us/minecraft/creator/documents/scripting/introduction). Once you have learned the fundamentals, you can use the reference to get more details on individual APIs each script module provides.

## API Versioning

Newer features are introduced in newer versions of Minecraft Bedrock and Minecraft Preview. You should choose a version of the reference documentation below that matches your Minecraft version.

- Minecraft: Bedrock Edition API references: [**Script API - Latest**](/scriptapi-docs/latest/index.html)

- Minecraft: Bedrock Edition Preview API references: [**Script API - Preview**](/scriptapi-docs/preview/index.html)

- Other Minecraft Script API references: [**Homepage**](/scriptapi-docs/#versions)

<div class="kofi-widget-wrap">
  <a href="/donate/" class="kofi-widget-link" title="Support this project on ko-fi.com" aria-label="Support this project on Ko-fi">
    <p class="kofi-widget-title">
      <span class="kofi-title-icon" aria-hidden="true"></span>
      Buy me a coffee
    </p>
    <p class="kofi-widget-subtitle">Support me to keep the docs updated and the site ad-free</p>
    <span class="kofi-button" title="Support me on ko-fi.com">
      <img src="https://storage.ko-fi.com/cdn/logomarkLogo.png" alt="Ko-fi donations" />
      <span>Buy me a coffee</span>
    </span>
  </a>
</div>

## Script Modules

Script API contains multiple modules with separate releases, with each module provides specific functionalities.

- `@minecraft/server` - A module which is essential for managing and interacting with a Minecraft world.

  - [Stable APIs Docs](./modules/_minecraft_server.html)
  - [Beta APIs Docs](./modules/_minecraft_server-1.html)
  - [Scripting v1 Docs (Latest version: v1.19.0)](/scriptapi-docs/1.21.80/modules/_minecraft_server.html)

- `@minecraft/server-ui` - A module for creating simple pop-up forms that allow users to provide you with formatted inputs through submissions.

  - [Stable APIs Docs](./modules/_minecraft_server-ui.html)
  - [Beta APIs Docs](./modules/_minecraft_server-ui-1.html)
  - [Scripting v1 Docs (Latest version: v1.3.0)](/scriptapi-docs/1.21.80/modules/_minecraft_server-ui.html)

- `@minecraft/server-gametest` ([docs](./modules/_minecraft_server-gametest.html)) - A module for building your own tests in GameTest Framework.

- `@minecraft/server-editor` ([docs](./modules/_minecraft_server-editor.html)) - A module for interacting with the Minecraft Editor API, and building an Editor extension.

- `@minecraft/server-net` ([docs](./modules/_minecraft_server-net.html)) - A module which allows for server-based HTTP request handling, and manages server packets handling within a Bedrock Dedicated Server.

- `@minecraft/server-admin` ([docs](./modules/_minecraft_server-admin.html)) - A module to manage the administration in a Bedrock Dedicated Server.

- `@minecraft/debug-utilities` ([docs](./modules/_minecraft_debug-utilities.html)) - An utility module that is used for debugging purposes.

- `@minecraft/diagnostics` ([docs](https://jaylydev.github.io/scriptapi-docs/latest/modules/_minecraft_diagnostics.html)) - A module allows script modules to connect their script packs to Sentry. This enables remote error tracking and monitoring for script packs.

- `@minecraft/server-graphics` ([docs](./modules/_minecraft_server-graphics.html)) - A module that provides access to graphics and rendering settings on the server side for Vibrant Visuals.

## Platform Differences

There are several script API modules in Bedrock Edition that are exclusive to certain platforms due to capability restrictions on different platforms. Here is a table of the features that are available only on certain platforms as of **Minecraft v26.20**.

| Modules                    | Client / Single-player | Bedrock Dedicated Server |    Realms     |
| -------------------------- | :--------------------: | :----------------------: | :-----------: |
| @minecraft/common          |          Yes           |           Yes            |      Yes      |
| @minecraft/debug-utilities |          Yes           |      Yes _(Note 3)_      |      No       |
| @minecraft/diagnostics     |           No           |      Yes _(Note 3)_      |      No       |
| @minecraft/server          |          Yes           |           Yes            |      Yes      |
| @minecraft/server-admin    |          Yes           |           Yes            | No _(Note 4)_ |
| @minecraft/server-editor   |     Yes _(Note 1)_     |      Yes _(Note 2)_      |      Yes      |
| @minecraft/server-gametest |          Yes           |           Yes            |      Yes      |
| @minecraft/server-net      |           No           |      Yes _(Note 3)_      |      No       |
| @minecraft/server-ui       |          Yes           |           Yes            |      Yes      |
| @minecraft/server-graphics |          Yes           |      Yes _(Note 3)_      |      No       |

**Notes:**

1. Requires Bedrock Editor. The editor can be opened from the "Creator Tools" tab.
2. Requires Bedrock Editor. Launch the `bedrock_server.exe` to enable editor with the command line, like this:
   ```
   bedrock_server.exe Editor=true
   ```
3. Script module must be enabled manually in "permissions.json" file.
4. @minecraft/server-admin module is disabled in Realms. [Read more on why this was changed](https://help.minecraft.net/hc/en-us/articles/43490711924109-Update-Changes-to-Server-Admin-Scripting-Module)
