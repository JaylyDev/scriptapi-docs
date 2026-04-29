[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server-ui](../README-1.md) / DataDrivenScreenClosedReason

# Enumeration: DataDrivenScreenClosedReason

**`Beta`**

The reason why a data driven screen (i.e. MessageBox or
CustomForm) was closed.

## Enumeration Members

### ServerClose

> **ServerClose**: `"ServerClose"`

#### Remarks

Closed because it was programmatically told by the server to
close using `form.close()`.

***

### UserBusy

> **UserBusy**: `"UserBusy"`

#### Remarks

Closed because the user was busy (i.e. other UI was open).

***

### UserClose

> **UserClose**: `"UserClose"`

#### Remarks

Closed because the client closed the form. This can be with
a close button on the form (i.e. the X in the corner of a
message box, the 'Close' button on a custom form, or either
button in the message box)
