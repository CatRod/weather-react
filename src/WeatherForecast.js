import React from "react";

export default function WeatherForecast(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div className="WeatherForecast">
      <div className="row first-day">
        <div className="col week">{day()}</div>
        <div className="col">
          <img
            src={props.data.condition.icon_url}
            alt={props.data.condition.icon}
            width="50"
            className="icon"
          />
        </div>
        <div className="col">
          <div className="row">
            {Math.round(props.data.temperature.maximum)}°C
          </div>
          <div className="row min">
            {Math.round(props.data.temperature.minimum)}°C
          </div>
        </div>
      </div>
    </div>
  );
}

// Falta inserir o codigo do WeatherInfo.js
