[**Script API - v1.26.0**](../../../README.md)

***

[Script API - v1.26.0](../../../packages.md) / [@minecraft/server](../README-1.md) / WeatherChangeBeforeEvent

# Class: WeatherChangeBeforeEvent

Contains information related to changes in weather in the
environment.

## Constructors

### Constructor

> `private` **new WeatherChangeBeforeEvent**(): `WeatherChangeBeforeEvent`

#### Returns

`WeatherChangeBeforeEvent`

## Properties

### cancel

> **cancel**: `boolean`

#### Remarks

If set to true the weather change will be cancelled.

#### World Ready

This property can't be read in early-execution mode.

***

### duration

> **duration**: `number`

#### Remarks

Sets the duration of the new weather (in ticks).

#### World Ready

This property can't be read in early-execution mode.

***

### newWeather

> **newWeather**: [`WeatherType`](../enumerations/WeatherType-1.md)

#### Remarks

The type of weather that will be applied.

#### World Ready

This property can't be read in early-execution mode.

***

### previousWeather

> `readonly` **previousWeather**: [`WeatherType`](../enumerations/WeatherType-1.md)

#### Remarks

The type of weather that it was prior to the event being
fired.

#### World Ready

This property can't be read in early-execution mode.
