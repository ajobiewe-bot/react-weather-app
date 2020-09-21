import React from "react";
import "./Weather.css";

const Emoji = (props) => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

export default function Weather() {
  let weatherData = {
    humidity: 80,
    wind: 10,
    temperature: 23,
    realFeel: 23,
    maxTemp: 23,
    minTemp: 16,
  };
  return (
    <div className="content">
      <div className="row">
        <div className="col-4 data">
          <p>
            <Emoji label="humidity" symbol="💧" />
            Humidity : <span>{weatherData.humidity}</span>%
          </p>
          <p>
            <Emoji label="wind" symbol="💨" /> Wind :{" "}
            <span>{weatherData.wind}</span>
            km/hr
          </p>
        </div>
      </div>
      <div className="row temperature">
        <div className="col ">
          <p>
            Real feel : <span>{weatherData.realFeel}</span>
            <sup className="degree">°C</sup>
          </p>
          <p>
            ↑<span>{weatherData.maxTemp}</span>
            <sup>°</sup>↓<span>{weatherData.minTemp}</span>
            <sup>°</sup>
          </p>
        </div>
      </div>
    </div>
  );
}
