import React from "react";
import { Link } from "react-router-dom";

const WeatherHeader = ({ handleType }) => {
  return (
    <>
      <div className={"buttonBack"}>
        <Link id="RouterNavLink" className={"styledLink"} to="/">
          Home
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
            First Service
          </button>
          <button
            type="button"
            onClick={handleType("second_api")}
            className="btn btn-primary"
          >
            Second Service
          </button>
        </div>
      </div>
    </>
  );
};

export default WeatherHeader;
