import * as types from "../constants/actionTypes";
import { changeData } from "../constants/data";

export const weatherStart = () => ({
  type: types.WEATHER_START,
});

export const weatherFulfilled = (data) => ({
  type: types.WEATHER_FULFILLED,
  payload: data,
});

export const weatherError = (error) => ({
  type: types.WEATHER_START,
  payload: error,
});

export const getApiUrl = (city, type) => {
  switch (type) {
    case "first_api":
      return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8f21b2d64258441897474f2cdf84d44b`;
    case "second_api":
      return `http://api.weatherapi.com/v1/current.json?key=c1da04c1435948f691b191121222404&q=${city}&aqi=no`;
    default:
      return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8f21b2d64258441897474f2cdf84d44b`;
  }
};

export const getWeather = (search, type) => {
  return async (dispatch) => {
    dispatch(weatherStart());
    try {
      const response = await fetch(getApiUrl(search, type));
      const json = await response.json();
      dispatch(weatherFulfilled(changeData(json, type)));
    } catch (e) {
      dispatch(weatherError(e.toString()));
    }
  };
};
