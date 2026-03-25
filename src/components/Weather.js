import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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
    return <h2 style={{ textAlign: "center" }}>Loading...</h2>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>

        
        <h1 style={styles.city}>{data.name}</h1>

        
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
          alt="weather"
        />

        
        <h2 style={styles.temp}>{Math.round(data.main.temp)}°C</h2>

        
        <p style={styles.weather}>{data.weather[0].main}</p>

       
        <div style={styles.grid}>

          <div style={styles.box}>
            💧
            <p>Humidity</p>
            <strong>{data.main.humidity}%</strong>
          </div>

          <div style={styles.box}>
            💨
            <p>Wind</p>
            <strong>{data.wind.speed} m/s</strong>
          </div>

          <div style={styles.box}>
            🌡
            <p>Feels Like</p>
            <strong>{Math.round(data.main.feels_like)}°C</strong>
          </div>

          <div style={styles.box}>
            📊
            <p>Pressure</p>
            <strong>{data.main.pressure} hPa</strong>
          </div>
        <button onClick={() => navigate("/")} style={styles.backBtn}>
            ⬅ Back
        </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to right, #74ebd5, #ACB6E5)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: "30px",
    position: "relative",
    borderRadius: "20px",
    textAlign: "center",
    width: "350px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  city: {
    fontSize: "28px",
    fontWeight: "bold",
  },
  temp: {
    fontSize: "48px",
    margin: "10px 0",
  },
  weather: {
    fontSize: "18px",
    color: "#555",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px",
    marginTop: "20px",
  },
  box: {
    background: "#f1f5f9",
    padding: "10px",
    borderRadius: "10px",
  },
  backBtn: {
  position: "absolute",
  top: "20px",
  left: "20px",
  padding: "8px 12px",
  border: "none",
  borderRadius: "8px",
  background: "#333",
  color: "#fff",
  cursor: "pointer",
},
};

export default Weather;