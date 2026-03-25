import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const cities = [
    "Bengaluru","Hyderabad","Chennai","Koduru",
    "Tirupati","Mumbai","Delhi","Goa",
    "Kolkata","Pune","Ahmedabad","Jaipur","Lucknow",
    "Surat","Kanpur","Nagpur","Indore","Bhopal",
    "Visakhapatnam","Patna","Vadodara","Coimbatore"
  ];

  const handleSubmit = () => {
    if (city) {
      navigate(`/weather/${city}`);
    } else {
      alert("Please select a city");
    }
  };

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">🌦 Weather App</h1>

        <p className="home-subtitle">
          Select a city to check weather
        </p>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="home-select"
        >
          <option value="">-- Select City --</option>
          {cities.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>

        <button onClick={handleSubmit} className="home-button">
          Get Weather
        </button>
      </div>
    </div>
  );
}

export default Home;