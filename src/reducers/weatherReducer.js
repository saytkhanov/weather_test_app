import * as types from "../constants/actionTypes";

const initialState = {
  data: {},
  loading: false,
  error: null,
};

export const weatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.WEATHER_START:
      return {
        ...state,
        loading: true,
      };
    case types.WEATHER_FULFILLED:
      return {
        ...state,
        data: action.payload,
        loading: false
      };
    case types.WEATHER_ERROR:
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export const changeData = (data, type) => {
  switch (type) {
    case "first_api":
      return {
        name: data.name,
        temp: Math.floor(data.main.temp - 273.15),
        temp_max: Math.floor(data.main.temp_max - 273.15),
        weather: data.weather[0]?.main,
        wind: data.wind?.speed,
        feels: Math.floor(data.main.feels_like - 273.15),
      };
    case "second_api":
      return {
        name: data.location.name,
        temp: data.current.temp_c,
        temp_max: data.current.temp_f,
        weather: data.current?.condition?.text,
        wind: data.current?.wind_mph,
        feels: data.current?.feelslike_c,
      };

    default:
      return {
        name: data.name,
        temp: Math.floor(data.main.temp - 273.15),
        temp_max: Math.floor(data.main.temp_max - 273.15),
        weather: data.weather[0]?.main,
        wind: data.wind?.speed,
        feels: Math.floor(data.main.feels_like - 273.15),
      };
  }
};
