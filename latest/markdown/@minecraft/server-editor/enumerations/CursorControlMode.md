[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / CursorControlMode

# Enumeration: CursorControlMode

An enumeration used by the 3D block cursor [Cursor](../classes/Cursor.md)

## Enumeration Members

### Fixed

> **Fixed**: `3`

#### Remarks

When in fixed mode, the 3D block cursor will remain in a
fixed position directly in front of the players facing
direction.  It cannot be moved without moving the player (or
adjusting the fixed block distance).
This mode is useful for addressing block locations in the
air (put the cursor into fixed mode, and fly the player
until the desired air block is beneath the cursor, at which
point it is selectable without being clickable)

***

### Keyboard

> **Keyboard**: `0`

#### Remarks

Using Keyboard mode will remove the dependence of the 3D
block cursor on the player mouse position.  The 3D block
cursor can be positioned using the keyboard (or the Cursor
move methods on the cursor object) and the position will not
be reset if the mouse is moved

***

### KeyboardAndMouse

> **KeyboardAndMouse**: `2`

#### Remarks

This is generally the default move mode for the 3D block
cursor.
The 3D block cursor can be positioned using the keyboard (or
the Cursor move methods on the cursor object) but the
position will be reset to the block location under the
players mouse position if any mouse movement is detected.

***

### Mouse

> **Mouse**: `1`

#### Remarks

The Mouse movement mode will disable keyboard or manual 3D
block cursor movement and make the 3D block cursor only
react to player mouse movement
