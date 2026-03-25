import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Weather.css";

function Weather() {
  const { city } = useParams();
  const [data, setData] = useState(null);
  const navigate = useNavigate();

  const API_KEY = "399f2bbcd6af15eb159396cb423a5238";

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},IN&appid=${API_KEY}&units=metric`
      )
      .then((res) => setData(res.data))
      .catch(() => alert("Error fetching data"));
  }, [city]);

  if (!data) {
    return <h2 className="loading">Loading...</h2>;
  }

  return (
    <div className="weather-container">
      <div className="weather-card">

        <button onClick={() => navigate("/")} className="back-btn">
          ⬅ Back
        </button>

        <h1 className="city">{data.name}</h1>

        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weather"
        />

        <h2 className="temp">{Math.round(data.main.temp)}°C</h2>

        <p className="weather-text">{data.weather[0].main}</p>

        <div className="grid">
          <div className="box">
            💧
            <p>Humidity</p>
            <strong>{data.main.humidity}%</strong>
          </div>

          <div className="box">
            💨
            <p>Wind</p>
            <strong>{data.wind.speed} m/s</strong>
          </div>

          <div className="box">
            🌡
            <p>Feels Like</p>
            <strong>{Math.round(data.main.feels_like)}°C</strong>
          </div>

          <div className="box">
            📊
            <p>Pressure</p>
            <strong>{data.main.pressure} hPa</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;