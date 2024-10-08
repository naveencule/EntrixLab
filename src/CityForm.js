import React, { useState } from "react";
import './CityForm.css'; // Importing CSS file for styling

const CityForm = () => {
  const [city, setCity] = useState("");
  const [cityList, setCityList] = useState([]);
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() === "") {
      setError("City name cannot be empty or only whitespace!");
      return;
    }

    if (cityList.includes(city.trim().toLowerCase())) {
      setError("This city is already in the list!");
      return;
    }

    setCityList([...cityList, city.trim().toLowerCase()]);
    setCity("");
    setError("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
        />
        <button type="submit">Add City</button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul className="city-list">
        {cityList.map((city, index) => (
          <li key={index} className="city-item">
            <span className="dot">•</span> {city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CityForm;
