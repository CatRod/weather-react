import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      city: response.data.name,
      currentTemp: response.data.main.temp,
      feelsTemp: response.data.main.feels_like,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
    setReady(true);
  }

  if (ready) {
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
              <div className="row">{weatherData.city}</div>
              <div className="row">
                <FormattedDate date={weatherData.date} />
              </div>
            </div>
          </div>
          <div className="row">
            <br />
          </div>
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="image">
                  <img
                    src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                    alt="sun"
                    width="150"
                  />
                </div>
              </div>
              <div className="row">
                <h1>{Math.round(weatherData.currentTemp)} ºC</h1>
                <p>
                  <small>
                    Feels like {Math.round(weatherData.feelsTemp)}ºC
                  </small>
                </p>
              </div>
              <div className="row">
                <p className="info">{weatherData.description}</p>
                <p className="wind">Wind: {weatherData.wind} km/h</p>
                <p className="humidity">Humidity: {weatherData.humidity}%</p>
              </div>
            </div>
            <div className="col-6">
              <div className="card five-days" styles="width: 17rem;">
                <div className="row first-day">
                  <div className="col week">Mon</div>
                  <div className="col">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII="
                      alt="sun"
                      width="40"
                    />
                  </div>
                  <div className="col">
                    <div className="row">36ºC</div>
                    <div className="row min">19ºC</div>
                  </div>
                </div>
                <div className="row rule">
                  <hr />
                </div>
                <div className="row">
                  <div className="col week">Tue</div>
                  <div className="col">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII="
                      alt="sun"
                      width="40"
                    />
                  </div>
                  <div className="col">
                    <div className="row">34ºC</div>
                    <div className="row min">21ºC</div>
                  </div>
                </div>
                <div className="row rule">
                  <hr />
                </div>
                <div className="row">
                  <div className="col week">Wed</div>
                  <div className="col">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII="
                      alt="sun"
                      width="40"
                    />
                  </div>
                  <div className="col">
                    <div className="row">36ºC</div>
                    <div className="row min">20ºC</div>
                  </div>
                </div>
                <div className="row rule">
                  <hr />
                </div>
                <div className="row">
                  <div className="col week">Thu</div>
                  <div className="col">
                    <img
                      src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEgAACxIB0t1+/AAAAQBJREFUaN7t2csNwyAMBmBGYYSMwhgdgxEYjRW6ARu4HNyqB0CKednElf5b2/hLSALGAICRHKMABSjgUMDdD7xfLifkxByoJOJ33O3/nwHIhVgsKDWKriXhb+0WQD6wJxZegvhlADzrcUDhpeFlpwLyAa5BZ711Na4pgAXFNxFdABw2K4r/R9iRgLiw+N89MQSATxvYFN8F2DB0qkOJCggbi/8m9AASA0AiAXBuA0ziKIDACBAogMgIECkAYBUFKEABzwOIf4yKf5HJnkqIn8wxmk775y5oxC8pj1jUH9FWEd/YOqK1eERz94j2euFqUCF7NzjYbzHpLqUCFKCAJfkAq7RimK7qUtAAAAAASUVORK5CYII="
                      alt="cloudy"
                      width="43"
                    />
                  </div>
                  <div className="col">
                    <div className="row">32ºC</div>
                    <div className="row min">19ºC</div>
                  </div>
                </div>
                <div className="row rule">
                  <hr />
                </div>
                <div className="row last-day">
                  <div className="col week">Fri</div>
                  <div className="col">
                    <img
                      src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                      alt="cloudy"
                      width="43"
                    />
                  </div>
                  <div className="col">
                    <div className="row">28ºC</div>
                    <div className="row min">19ºC</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <br />
            </div>
            <div className="row cat">
              <small>
                Coded by{" "}
                <a
                  href="https://github.com/CatRod/CatRod_WeatherApp"
                  target="_blank"
                  rel="noreferrer"
                >
                  CatRod
                </a>
              </small>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "6e6ec494746b5229a9f2d526478c924c";
    let city = "Lisbon";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}

// FALTA criar a handleResponse!!
