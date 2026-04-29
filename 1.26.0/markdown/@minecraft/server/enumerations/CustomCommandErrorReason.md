[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / CustomCommandErrorReason

# Enumeration: CustomCommandErrorReason

Reason why custom command registration failed.

## Enumeration Members

### AlreadyRegistered

> **AlreadyRegistered**: `"AlreadyRegistered"`

#### Remarks

Command name already registered.

***

### EnumDependencyMissing

> **EnumDependencyMissing**: `"EnumDependencyMissing"`

#### Remarks

Custom Command references an enum that has not been
registered.

***

### NamespaceMismatch

> **NamespaceMismatch**: `"NamespaceMismatch"`

#### Remarks

Supplied Custom Command namespace does not match previous
registrations for this add-on.

***

### ParameterLimit

> **ParameterLimit**: `"ParameterLimit"`

#### Remarks

Too many command parameters defined in CustomCommand.

***

### RegistryInvalid

> **RegistryInvalid**: `"RegistryInvalid"`

#### Remarks

Custom command registry can not be accessed after world
initialized event.

***

### RegistryReadOnly

> **RegistryReadOnly**: `"RegistryReadOnly"`

#### Remarks

Command parameters cannot be redefined during reload. Only
the script closure itself can be changed.
