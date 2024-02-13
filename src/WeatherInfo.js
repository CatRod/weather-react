import React, { useState } from "react";
import WeatherTemp from "./WeatherTemp";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function WeatherInfo(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherInfo">
        <div className="row">
          <br />
        </div>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="image">
                <img
                  src={props.data.icon}
                  alt={props.data.description}
                  width="150"
                />
              </div>
            </div>
            <div className="row">
              <WeatherTemp
                celsius={props.data.currentTemp}
                feels={props.data.feelsTemp}
              />
            </div>
            <div className="row">
              <p className="info text-capitalize">{props.data.description}</p>
              <p className="wind">Wind: {props.data.wind} km/h</p>
              <p className="humidity">Humidity: {props.data.humidity}%</p>
            </div>
          </div>
          <div className="col-6">
            <div className="card five-days" styles="width: 17rem;">
              <div className="row">
                <WeatherForecast data={forecast[1]} />
              </div>
              <div className="row rule">
                <hr />
              </div>
              <div className="row">
                <WeatherForecast data={forecast[2]} />
              </div>
              <div className="row rule">
                <hr />
              </div>
              <div className="row">
                <WeatherForecast data={forecast[3]} />
              </div>
              <div className="row rule">
                <hr />
              </div>
              <div className="row">
                <WeatherForecast data={forecast[4]} />
              </div>
              <div className="row rule">
                <hr />
              </div>
              <div className="row last-day">
                <WeatherForecast data={forecast[5]} />
              </div>
            </div>
          </div>
          <div className="row cat">
            <small>
              Coded by{" "}
              <a
                href="https://github.com/CatRod/weather-react"
                target="_blank"
                rel="noreferrer"
              >
                CatRod
              </a>
            </small>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "b1cea7t0od14d46cdd6335af4c977e43";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
