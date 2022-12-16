import { useState, useEffect } from "react";
import axios from "axios";

function Weather({ location, lat, lon }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
    axios.get(url).then((response) => {
      setData(response.data);
    });
  }, [lat, lon]);

  function displayWeather() {
    if (Object.entries(data).length === 0) return "";
    return (
      <>
        <p>Temperature {data.main.temp} C</p>
        <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="weather icon" />
        <p>Wind {data.wind.speed} m/s</p>
      </>
    );
  }

  return (
    <div>
      <h3>Weather in {location}</h3>
      {displayWeather()}
    </div>
  );
}

export default Weather;
