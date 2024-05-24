# Weather API Planning Doc

## Keys to be displayed
`weather` is an object of 2 keys {location, current}

- city =  `weather.location.name`
- state =  `weather.location.region`
- country = `weather.location.country`

- temperatureCelsius = `weather.current.temp_c`
- temperatureFahrenheit = `weather.current.temp_f`
- condition = `weather.current.condition.text`
- windSpeed = `weather.current.condition.wind_mph`

## Formatting based on current weather (temperature, condition, wind)
Possibly use images and/or colors