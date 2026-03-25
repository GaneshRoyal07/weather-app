


import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const cities = [
  "Bengaluru","Hyderabad","Chennai","Mumbai","Delhi","Goa",
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
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🌦 Weather App</h1>

        <p style={styles.subtitle}>Select a city to check weather</p>

        <select
          value={city}
          onChange={(e) => setCity(e.target.value)}
          style={styles.select}
        >
          <option value="">-- Select City --</option>
          {cities.map((c, i) => (
            <option key={i} value={c}>{c}</option>
          ))}
        </select>

        <button onClick={handleSubmit} style={styles.button}>
          Get Weather
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    paddingTop: "50px",   
    paddingBottom: "100px", 
    background: "linear-gradient(to right, #667eea, #764ba2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    background: "#fff",
    padding: "40px",
    borderRadius: "20px",
    textAlign: "center",
    width: "350px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
  },
  subtitle: {
    color: "#666",
    marginBottom: "20px",
  },
  select: {
    width: "100%",
    padding: "10px",
    marginBottom: "20px",
    borderRadius: "10px",
    position: "relative",
    zIndex: 1,

  },
  button: {
    width: "100%",
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#667eea",
    color: "#fff",
    fontSize: "16px",
    cursor: "pointer",
  },
};

export default Home;