[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README.md) / WeatherChangeAfterEvent

# Class: WeatherChangeAfterEvent

Contains information related to changes in weather in the
environment.

## Constructors

### Constructor

> `private` **new WeatherChangeAfterEvent**(): `WeatherChangeAfterEvent`

#### Returns

`WeatherChangeAfterEvent`

## Properties

### dimension

> `readonly` **dimension**: `string`

#### Remarks

Dimension in which the weather has changed.

#### World Ready

This property can't be read in early-execution mode.

***

### newWeather

> `readonly` **newWeather**: [`WeatherType`](../enumerations/WeatherType.md)

#### Remarks

The weather type after the weather was changed.

#### World Ready

This property can't be read in early-execution mode.

***

### previousWeather

> `readonly` **previousWeather**: [`WeatherType`](../enumerations/WeatherType.md)

#### Remarks

The weather type before the weather was changed.

#### World Ready

This property can't be read in early-execution mode.
