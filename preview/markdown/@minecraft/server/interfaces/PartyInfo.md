[**Script API - v1.26.20.28**](../../../README.md)

***

[Script API - v1.26.20.28](../../../packages.md) / [@minecraft/server](../README-1.md) / PartyInfo

# Interface: PartyInfo

**`Beta`**

Contains information about a player's party membership. This
object is a snapshot of the player's party state at the time
it was retrieved and is not kept up to date.

## Source

```ts
export interface PartyInfo {
    isLeader: boolean;
    partyId: string;
}
```

## Properties

### isLeader

> **isLeader**: `boolean`

#### Remarks

Whether this player is the leader of their party.

***

### partyId

> **partyId**: `string`

#### Remarks

The unique identifier of the party this player belongs to.
