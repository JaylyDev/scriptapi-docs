[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README.md) / ScriptEventSource

# Enumeration: ScriptEventSource

Describes where the script event originated from.

## Enumeration Members

### Block

> **Block**: `"Block"`

#### Remarks

The script event originated from a Block such as a Command
Block.

***

### Entity

> **Entity**: `"Entity"`

#### Remarks

The script event originated from an Entity such as a Player,
Command Block Minecart or Animation Controller.

***

### NPCDialogue

> **NPCDialogue**: `"NPCDialogue"`

#### Remarks

The script event originated from an NPC dialogue.

***

### Server

> **Server**: `"Server"`

#### Remarks

The script event originated from the server, such as from a
runCommand API call or a dedicated server console.
