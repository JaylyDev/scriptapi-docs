[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor-bindings](../README.md) / TransactionManager

# Class: TransactionManager

The Transaction Manager is responsible for tracking and
managing all of the registered transaction operations which
represent creator changes in the world.
Transaction Manager is the basis of the UNDO and REDO
operations, and allows a creator to store the changes made
to the world and the state of the world BEFORE those changes
were applied, making it possible to UNDO those changes and
restore the world state.
The transactions are stored as a stack, and can be undone in
stack order to restore the world to it's original state

## Constructors

### Constructor

> `private` **new TransactionManager**(): `TransactionManager`

#### Returns

`TransactionManager`

## Methods

### addEntityOperation()

> **addEntityOperation**(`entity`, `type`): `boolean`

#### Parameters

##### entity

[`Entity`](../../server/classes/Entity.md)

##### type

[`EntityOperationType`](../enumerations/EntityOperationType.md)

#### Returns

`boolean`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### addUserDefinedOperation()

> **addUserDefinedOperation**(`transactionHandlerId`, `operationData`, `operationName?`): `void`

#### Parameters

##### transactionHandlerId

[`UserDefinedTransactionHandlerId`](UserDefinedTransactionHandlerId.md)

##### operationData

`string`

##### operationName?

`string`

#### Returns

`void`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### commitOpenTransaction()

> **commitOpenTransaction**(): `boolean`

#### Returns

`boolean`

#### Remarks

Commit all of the transaction operations currently attached
to the open transaction record to the manager.  These will
be added as a single transaction manager entry.
The open record will be closed and all tracking operations
will cease.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### commitTrackedChanges()

> **commitTrackedChanges**(): `number`

#### Returns

`number`

Returns the number of change requests that were being
tracked

#### Remarks

This function will commit the pending changes caused by any
of the track changes variants.  The changes will be
committed to the currently open transaction, but the
transaction will remain open for further records.
Pending block changes from tracking operations will be added
to the transaction record before submission to the
transaction manager

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### createUserDefinedTransactionHandler()

> **createUserDefinedTransactionHandler**(`undoClosure`, `redoClosure`): [`UserDefinedTransactionHandlerId`](UserDefinedTransactionHandlerId.md)

#### Parameters

##### undoClosure

(`arg0`) => `void`

##### redoClosure

(`arg0`) => `void`

#### Returns

[`UserDefinedTransactionHandlerId`](UserDefinedTransactionHandlerId.md)

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### discardOpenTransaction()

> **discardOpenTransaction**(): `boolean`

#### Returns

`boolean`

#### Remarks

Discard the currently open transaction without committing it
to the transaction manager stack.
All records within the transaction will be discarded, and
any tracking requests currently active will be stopped

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### discardTrackedChanges()

> **discardTrackedChanges**(): `number`

#### Returns

`number`

Returns the number of change requests that were discarded

#### Remarks

Discard any pending tracked changes.  This does not affect
the current open transaction contents, only the pending
tracked block operations

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### isBusy()

> **isBusy**(): `boolean`

#### Returns

`boolean`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### openTransaction()

> **openTransaction**(`name`): `boolean`

#### Parameters

##### name

`string`

Give the transaction record a name

#### Returns

`boolean`

#### Remarks

Open a transaction record which will be a container for any
number of transaction operations.
All transaction operations within a record are grouped and
treated as a single atomic unit

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### redo()

> **redo**(): `void`

#### Returns

`void`

#### Remarks

Perform an redo operation.  This will take the last
transaction record on the redo stack and store the current
world state and then apply the changes in the record.  This
will reduce the redo record stack by one.

The transaction record affected by this operation will be
transferred to the undo stack in case the creator decides to
undo it

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### redoSize()

> **redoSize**(): `number`

#### Returns

`number`

#### Remarks

Return the number of transaction records on the redo stack.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### trackBlockChangeArea()

> **trackBlockChangeArea**(`from`, `to`): `boolean`

#### Parameters

##### from

[`Vector3`](../../server/interfaces/Vector3.md)

Min block location of a bounding area

##### to

[`Vector3`](../../server/interfaces/Vector3.md)

Max block location of a bounding area

#### Returns

`boolean`

#### Remarks

Begin tracking block changes in a specified area.  These
will be added to a pending changes list.
The pending list will be added to the open transaction
record when a commit has been issued.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### trackBlockChangeList()

> **trackBlockChangeList**(`locations`): `boolean`

#### Parameters

##### locations

[`Vector3`](../../server/interfaces/Vector3.md)[]

An array of block locations to monitor for changes

#### Returns

`boolean`

#### Remarks

Begin tracking block changes in a list of specified block
locations.

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### trackBlockChangeVolume()

> **trackBlockChangeVolume**(`blockVolume`): `boolean`

#### Parameters

##### blockVolume

[`BlockVolumeBase`](../../server/classes/BlockVolumeBase.md)

#### Returns

`boolean`

#### Remarks

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### undo()

> **undo**(): `void`

#### Returns

`void`

#### Remarks

Perform an undo operation.  This will take the last
transaction record on the stack and apply the stored world
state from before the changes were made.  This will reduce
the record stack by one.

The transaction record affected by this operation will be
transferred to the redo stack in case the creator decides to
reapply it

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.

***

### undoSize()

> **undoSize**(): `number`

#### Returns

`number`

#### Remarks

Return how many transactions records currently exist on the
stack

This function can't be called in restricted-execution mode.

#### Throws

This function can throw errors.

#### World Ready

This function can't be called in early-execution mode.
