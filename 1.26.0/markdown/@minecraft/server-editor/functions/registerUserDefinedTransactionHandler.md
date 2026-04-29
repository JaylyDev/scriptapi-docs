[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server-editor](../README.md) / registerUserDefinedTransactionHandler

# Function: registerUserDefinedTransactionHandler()

> **registerUserDefinedTransactionHandler**\<`T`\>(`transactionManager`, `undoHandler`, `redoHandler`): [`UserDefinedTransactionHandle`](../classes/UserDefinedTransactionHandle.md)\<`T`\>

## Type Parameters

### T

`T`

## Parameters

### transactionManager

[`TransactionManager`](../classes/TransactionManager.md)

A reference to the minecraftservereditorbindings.TransactionManager (from the extension
context for your extension)

### undoHandler

(`payload`) => `void`

A function that will be invoked when the transaction is
undone. The function will be passed a copy of the payload
data that was inserted into the transaction log.

### redoHandler

(`payload`) => `void`

A function that will be invoked when the transaction is
redone. The function will be passed a copy of the payload
data that was inserted into the transaction log.

## Returns

[`UserDefinedTransactionHandle`](../classes/UserDefinedTransactionHandle.md)\<`T`\>

- [UserDefinedTransactionHandle](../classes/UserDefinedTransactionHandle.md) - A strongly typed
transaction handle that can be used to add transactions to
the transaction manager.

## Remarks

Creates a strongly typed transaction handle to enforce type
safety when adding user defined transactions. This function
is a wrapper around the more generalized transaction manager
API for script based transactions. Any Editor minecraftservereditorbindings.Extension that
needs to insert data into the transaction log for undo/redo
should use this function to create a handler for the
specific type of data that needs to be inserted. When a
transaction is undone/redone, the associated handler
function will be invoked with a copy of the payload data
that was inserted into the log. As a general rule,
transaction data should contain 2 things:<br> 1. The data
that will be used to perform the operation we're trying to
record<br> 2. The data that will be used to restore the
state of the program to what it was before the
operation.<br> NOTE/WARNING:<br> The payload data is
serialized to JSON before being inserted into the
transaction log and the underlying implementation uses the
JSON.stringify() function to serialize the data. Any
non-primitive data, such as classes or minecraft native
objects will not serialize to JSON properly, so you should
avoid using them as payload data.

## World Ready

This function can't be called in early-execution mode.
