This is related to Operator Permission Levels (The `op-permission-level` setting in `server.properties` file in Minecraft Bedrock Dedicated Server).

This property determines the default permission level assigned to players when using the `/op` command. This affects which commands they can use unless explicitly set in `permissions.json`.

---

## Level 0 – General Commands

Allows only non-destructive, informational, and communication-related commands. Ideal for minimal permissions.

Example level 0 commands: `/help`, `/tell`

---

## Level 1 – Basic / Game Director Commands

Adds access to gameplay-related commands such as gamemode changes, teleporting, and giving items. Suitable for creative players or minor helpers.

Example level 1 commands: `/aimassist`, `/camera`

---

## Level 2 – Game Management / Admin Commands

Example level 2 commands: `/op`, `/deop`

Grants access to moderation tools like kicking and banning players. Useful for server moderators or staff.

---

## Level 3 – Moderation / Host Commands

Provides some access to server and management commands. This is the command permission level for the host when launching a Minecraft world from the client.

Example level 3 command: `/setmaxplayers`

---

## Level 4 – Full Administrative Access / Owner Commands

Provides full access to all server and management commands. Intended only for server owners or trusted administrators.

Example level 4 commands: `/changesetting`, `/stop`

> Additional info by [Visual1mpact](https://github.com/Visual1mpact)