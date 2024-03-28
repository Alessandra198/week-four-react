import React from "react";
import "./City.css";

export default function City() {
  return (
    <div className="City">
      <div className="current-weather">
        <div>
          <h1 className="current-city">Paris</h1>
          <p className="current-details">
            Sunday 20:03, moderate rain <br />
            Humidity: <strong>87%</strong>, Wind: <strong>7.2km/h</strong>
          </p>
        </div>
        <div className="current-temperature">
          <span className="current-temperature-icon">☀️</span>
          <span className="current-temperature-value">24</span>
          <span className="current-temperature-unit">°C</span>
        </div>
      </div>
    </div>
  );
}
