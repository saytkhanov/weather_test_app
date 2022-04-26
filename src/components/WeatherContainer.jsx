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
  const [value, setValue] = useState("");
  const [type, setType] = useState("");
  const weather = useSelector(weatherSelector);
  const loading = useSelector(loadingSelector);
  const error = useSelector(errorSelector);
  const dispatch = useDispatch();
  console.log(weather)

  useEffect(() => {
    dispatch(getWeather(search, type));
    // eslint-disable-next-line
  }, [search, type]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(value);
  };

  const handleType = (type) => () => setType(type);

  if (loading) {
    return <div>Идет загрузка...</div>;
  }

  if (error) {
    return <div>Произошла ошибка</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <WeatherHeader handleType={handleType} />
        <Weather
          weather={weather}
          handleType={handleType}
          handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
        />
      </div>
    </div>
  );
};

export default WeatherContainer;
