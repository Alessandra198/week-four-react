import React from "react";
import "./Forecast.css";

export default function Forecast() {
  let daily = ["Thu", "Fri", "Sat", "Sun", "Mon"];

  function showDay(day) {
    return (
      <div className="weather-forecast-day">
        <div className="weather-forecast-date">{daily[day]}</div>
        <div>
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
            alt="weather-icon"
            className="weather-forecast-icon"
          />
        </div>
        <div className="weather-forecast-temperatures">
          <div className="weather-forecast-temperature">
            <strong>19°</strong>
          </div>
          <div className="weather-forecast-temperature">13º</div>
        </div>
      </div>
    );
  }

  return (
    <div className="Forecast">
      <div>{showDay(0)}</div>
      <div>{showDay(1)}</div>
      <div>{showDay(2)}</div>
      <div>{showDay(3)}</div>
      <div>{showDay(4)}</div>
    </div>
  );
}
