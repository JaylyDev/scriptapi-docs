[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server](../README-1.md) / WatchdogTerminateReason

# Enumeration: WatchdogTerminateReason

**`Beta`**

An enumeration with the reason that a watchdog is deciding
to terminate execution of a behavior packs' script.

## Enumeration Members

### Hang

> **Hang**: `"Hang"`

#### Remarks

Script runtime for a behavior pack is terminated due to
non-responsiveness from script (a hang or infinite loop).

***

### StackOverflow

> **StackOverflow**: `"StackOverflow"`

#### Remarks

Script runtime for a behavior pack is terminated due to a
stack overflow (a long, and potentially infinite) chain of
function calls.
