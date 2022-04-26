export const changeData = (data, type) => {
  switch (type) {
    case "first_api":
      return {
        name: data.name,
        country: data.country,
        temp: Math.floor(data.main.temp - 273.15),
        temp_max: Math.floor(data.main.temp_max - 273.15),
        weather: data.weather[0]?.main,
        wind: data.wind?.speed,
        feels: Math.floor(data.main.feels_like - 273.15),
      };
    case "second_api":
      return {
        name: data.location.name,
        country: data.location.country,
        temp: data.current.temp_c,
        temp_max: data.current.temp_f,
        weather: data.current?.condition?.text,
        wind: data.current?.wind_mph,
        feels: data.current?.feelslike_c,
      };

    default:
      return {
        name: data.name,
        country: data.country,
        temp: Math.floor(data.main.temp - 273.15),
        temp_max: Math.floor(data.main.temp_max - 273.15),
        weather: data.weather[0]?.main,
        wind: data.wind?.speed,
        feels: Math.floor(data.main.feels_like - 273.15),
      };
  }
};
