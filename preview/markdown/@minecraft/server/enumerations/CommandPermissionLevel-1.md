[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / CommandPermissionLevel

# Enumeration: CommandPermissionLevel

The required permission level to execute the custom command.

## Enumeration Members

### Admin

> **Admin**: `2`

#### Remarks

Any operator can run this command, but NOT command blocks.

***

### Any

> **Any**: `0`

#### Remarks

Anything can run this level.

***

### GameDirectors

> **GameDirectors**: `1`

#### Remarks

Any operator can run this command, including command blocks.

***

### Host

> **Host**: `3`

#### Remarks

Any server host can run this command.

***

### Owner

> **Owner**: `4`

#### Remarks

Only dedicated server can run this command.
