import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      currentTemp: response.data.main.temp,
      feelsTemp: response.data.main.feels_like,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png`,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="container" text-center>
        <div className="card main">
          <div className="row search">
            <div className="col-4">
              <form>
                <input
                  type="search"
                  className="form-control"
                  placeholder="Enter a city"
                  autoFocus="on"
                />
              </form>
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="SEARCH"
                className="form-control btn btn-primary search-button w-100"
              />
            </div>
            <div className="col-3">
              <input
                type="button"
                value="Current Location"
                className="form-control btn btn-primary search-button"
              />
            </div>
            <div className="col-3">
              <div className="row city">{weatherData.city}</div>
              <div className="row">
                <FormattedDate date={weatherData.date} />
              </div>
            </div>
          </div>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    const apiKey = "6e6ec494746b5229a9f2d526478c924c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}

// FALTA criar a handleResponse!!
