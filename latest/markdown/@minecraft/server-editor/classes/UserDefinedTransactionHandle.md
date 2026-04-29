[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-editor](../README.md) / UserDefinedTransactionHandle

# Class: UserDefinedTransactionHandle\<T\>

A strongly typed transaction handle to enforce type safety
when adding user defined transactions.<br> This transaction
handle becomes the context for adding the transaction to the
transaction manager.<br> You can obtain one of these handles
by calling [registerUserDefinedTransactionHandler](../functions/registerUserDefinedTransactionHandler.md)

## Source

```ts
export declare class UserDefinedTransactionHandle<T> {
    constructor(nativeHandle: UserDefinedTransactionHandlerId, transactionManager: TransactionManager);
    addUserDefinedOperation(payload: T, transactionName: string): void;
}
```

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new UserDefinedTransactionHandle**\<`T`\>(`nativeHandle`, `transactionManager`): `UserDefinedTransactionHandle`\<`T`\>

#### Parameters

##### nativeHandle

[`UserDefinedTransactionHandlerId`](UserDefinedTransactionHandlerId.md)

##### transactionManager

[`TransactionManager`](TransactionManager.md)

#### Returns

`UserDefinedTransactionHandle`\<`T`\>

#### Remarks

Constructs a new instance of the
`UserDefinedTransactionHandle` class

## Methods

### addUserDefinedOperation()

> **addUserDefinedOperation**(`payload`, `transactionName`): `void`

#### Parameters

##### payload

`T`

The data object to be inserted into the transaction log.

##### transactionName

`string`

A string name that will be associated with this operation

#### Returns

`void`

#### Remarks

Add a user defined transaction operation to the transaction
manager with a payload of the specified type. This allows
the extension to open a transaction, and insert custom data
objects into the transaction log which are stored until an
undo or redo event occurs. The payload data added here is
stored and then passed to the undo/redo handlers (registered
with [registerUserDefinedTransactionHandler](../functions/registerUserDefinedTransactionHandler.md)) when an
undo/redo event is requested. NOTE:<br> Transactions can
contain multiple operations - you can open a transaction and
add any (reasonable) number of operations to it (of the same
or differing types) before committing to the transaction
log. NOTE/WARNING:<br> The payload data is serialized to
JSON before being inserted into the transaction log and the
underlying implementation uses the JSON.stringify() function
to serialize the data. Any non-primitive data, such as
classes or minecraft native objects will not serialize to
JSON properly, so you should avoid using them as payload
data.

#### World Ready

This function can't be called in early-execution mode.
