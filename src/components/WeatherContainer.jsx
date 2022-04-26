import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  errorSelector,
  loadingSelector,
  weatherSelector,
} from "../selectors/weatherSelector";
import { getWeather } from "../actions/weatherActions";
import Weather from "./Weather";
import WeatherHeader from "./WeatherHeader";

const WeatherContainer = () => {
  const [search, setSearch] = useState("moscow");
  const [type, setType] = useState("");
  const weather = useSelector(weatherSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getWeather(search, type));
    // eslint-disable-next-line
  }, [search, type]);


  const handleType = (type) => () => setType(type);

  if (error) {
    return <div>Произошла ошибка</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <WeatherHeader handleType={handleType} />
        {loading ? (
            <div className="col-md-4 text-center">
              <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>.</div>
        ) : (
          <Weather
            weather={weather}
            handleType={handleType}
            setSearch={setSearch}
          />
        )}
      </div>
    </div>
  );
};

export default WeatherContainer;
