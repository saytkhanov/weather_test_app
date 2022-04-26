import React, {useState} from "react";
import { date, day, year, month } from "../constants/getDate";

const Weather = ({ weather, setSearch }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(value);
  };

  return (
    <div className="col-md-4">
      <div className="card bg-dark text-white border-0">
        <img
          src={`https://source.unsplash.com/600x900/?${weather.weather}`}
          className="card-img"
          alt="background"
        />
        <div className="card-img-overlay">
          <form onSubmit={handleSubmit}>
            <div className="input-group mb-4 w-75 mx-auto">
              <input
                type="search"
                className="form-control"
                placeholder="Search city"
                aria-label="Search city"
                aria-describedby="basic-addon2"
                name="search"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
              />
              <button
                type="submit"
                className="input-group-text"
                id="basic-addon2"
              >
                <i className="fas fa-search" />
              </button>
            </div>
          </form>
          <div className="bg-dark text-center bg-opacity-50 py-3">
            <h2 className="card-title">{weather.name}</h2>
            <p className="card-text lead">
              {day}, {month} {date}, {year}
            </p>
            <hr />
            <i className={`fas  fa-cloud fa-4x`} />
            <h1 className={"fw-bolder mb-5"}> {weather.temp} &deg;C</h1>
            <p className="lead fw-bolder mb-0">{weather.weather}</p>
            <p className={"lead"}>
              {" "}
              Feels like: {weather.feels} &deg;C | Wind: {weather.wind} &deg;C
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
