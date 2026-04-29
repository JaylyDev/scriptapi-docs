[**Script API - v1.26.10**](../../../README.md)

***

[Script API - v1.26.10](../../../packages.md) / [@minecraft/server-gametest](../README.md) / Tags

# Class: Tags

These well-known tags can be used to classify different
tests into suites to run.

## Source

```ts
export class Tags {
    private constructor();
    static readonly suiteAll = 'suite:all';
    static readonly suiteDebug = 'suite:debug';
    static readonly suiteDefault = 'suite:default';
    static readonly suiteDisabled = 'suite:disabled';
    static readonly suiteNextUpdate = 'suite:nextupdate';
}
```

## Constructors

### Constructor

> `private` **new Tags**(): `Tags`

#### Returns

`Tags`

## Properties

### suiteAll

> `readonly` `static` **suiteAll**: `"suite:all"` = `'suite:all'`

#### Remarks

Indicates that the tagged test should be a part of all
suites.

#### World Ready

This property can't be read in early-execution mode.

***

### suiteDebug

> `readonly` `static` **suiteDebug**: `"suite:debug"` = `'suite:debug'`

#### Remarks

Indicates that the tagged test should be a part of an
internal (debug) test suite.

#### World Ready

This property can't be read in early-execution mode.

***

### suiteDefault

> `readonly` `static` **suiteDefault**: `"suite:default"` = `'suite:default'`

#### Remarks

Indicates that the tagged test should be a part of the
default test suite.

#### World Ready

This property can't be read in early-execution mode.

***

### suiteDisabled

> `readonly` `static` **suiteDisabled**: `"suite:disabled"` = `'suite:disabled'`

#### Remarks

Indicates that the tagged test should be a part of a suite
of disabled tests.

#### World Ready

This property can't be read in early-execution mode.

***

### suiteNextUpdate

> `readonly` `static` **suiteNextUpdate**: `"suite:nextupdate"` = `'suite:nextupdate'`
