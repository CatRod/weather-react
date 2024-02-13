import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === `celsius`) {
    return (
      <div className="WeatherTemp">
        <h1>
          {Math.round(props.celsius)}{" "}
          <span className="h5">
            °C |{" "}
            <a href="/" onClick={showFahrenheit}>
              °F
            </a>
          </span>
        </h1>
        <p>Feels like {Math.round(props.feels)}°C </p>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemp">
        <h1>
          {Math.round(fahrenheit)}{" "}
          <span className="h5">
            <a href="/" onClick={showCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </h1>
        <p>Feels like {Math.round(props.feels)}°C </p>
      </div>
    );
  }
}
