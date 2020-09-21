import React from "react";
import "./City.css";

export default function City() {
  let cityData = {
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
    description: "Mostly Cloudy",
    city: "Vancouver",
  };
  return (
    <div className="row City">
      <div className="col-12">
        <h2>
          <span>{cityData.city}</span>
          <br />
          <span className="icon">
            {" "}
            <img src={cityData.imgUrl} alt={cityData.description} />
          </span>
          <div>
            <span className="temp">23</span>
            <sup className="units">
              <a href="/" className="units active">
                °C{" "}
              </a>{" "}
              <span className="units active">|</span>
              <a href="/" className="units">
                °F{" "}
              </a>
            </sup>
          </div>
          <small className="description">{cityData.description}</small>
        </h2>
      </div>
    </div>
  );
}
