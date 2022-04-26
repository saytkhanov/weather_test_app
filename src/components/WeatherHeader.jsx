import React from "react";
import { Link } from "react-router-dom";

const WeatherHeader = ({ handleType }) => {
  return (
    <>
      <div className={"buttonBack"}>
        <Link id="RouterNavLink" className={"styledLink"} to="/">
          Главная
        </Link>
      </div>
      <div className={"text-center mb-3"}>
        <div
          className="styleBtn btn-group"
          role="group"
          aria-label="Basic example"
        >
          <button
            type="button"
            onClick={handleType("first_api")}
            className="btn btn-primary"
          >
            Сервер 1
          </button>
          <button
            type="button"
            onClick={handleType("second_api")}
            className="btn btn-primary"
          >
            Сервер 2
          </button>
        </div>
      </div>
    </>
  );
};

export default WeatherHeader;
