import React from "react";

export default function WeatherInfo(props) {
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
            <h1>{Math.round(props.data.currentTemp)} ºC</h1>
            <p>
              <small>Feels like {Math.round(props.data.feelsTemp)}ºC</small>
            </p>
          </div>
          <div className="row">
            <p className="info text-capitalize">{props.data.description}</p>
            <p className="wind">Wind: {props.data.wind} km/h</p>
            <p className="humidity">Humidity: {props.data.humidity}%</p>
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
  );
}