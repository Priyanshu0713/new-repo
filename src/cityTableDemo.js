import React, { useState, useEffect } from "react";

// Mock data
const cities = [
  { name: "Mumbai", state: "Maharashtra", year: 1950 },
  { name: "Delhi", state: "Delhi", year: 1947 },
  { name: "Bengaluru", state: "Karnataka", year: 1995 },
  { name: "Chennai", state: "Tamil Nadu", year: 1987 },
  { name: "Hyderabad", state: "Telangana", year: 1970 },
  { name: "Kolkata", state: "West Bengal", year: 1690 },
  { name: "Jaipur", state: "Rajasthan", year: 1727 },
  { name: "Lucknow", state: "Uttar Pradesh", year: 1775 },
];

function CityTable() {
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedStates, setSelectedStates] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  // Update filtered cities when selected years or states change
  useEffect(() => {
    const newFilteredCities = cities.filter((city) => {
      const yearMatch =
        selectedYears.length === 0 ||
        selectedYears.some((year) => year === city.year);
      const stateMatch =
        selectedStates.length === 0 || selectedStates.includes(city.state);
      return yearMatch && stateMatch;
    });
    setFilteredCities(newFilteredCities);
  }, [selectedYears, selectedStates]);

  // Event handlers for year and state filters
  function handleYearChange(event) {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const newSelectedYears = selectedOptions.map((option) =>
      parseInt(option.value)
    );
    setSelectedYears(newSelectedYears);
  }

  function handleStateChange(event) {
    const selectedOptions = Array.from(event.target.selectedOptions);
    const newSelectedStates = selectedOptions.map((option) => option.value);
    setSelectedStates(newSelectedStates);
  }

  return (
    <div>
      <label htmlFor="year-filter">Filter by Year:</label>
      <select id="year-filter" multiple onChange={handleYearChange}>
        <option value="1690">1690</option>
        <option value="1727">1727</option>
        <option value="1775">1775</option>
        <option value="1947">1947</option>
        <option value="1950">1950</option>
        <option value="1970">1970</option>
        <option value="1987">1987</option>
        <option value="1995">1995</option>
      </select>
      <label htmlFor="state-filter">Filter by State:</label>
      <select id="state-filter" multiple onChange={handleStateChange}>
        <option value="Delhi">Delhi</option>
        <option value="Karnataka">Karnataka</option>
        <option value="Maharashtra">Maharashtra</option>
        <option value="Rajasthan">Rajasthan</option>
        <option value="Tamil Nadu">Tamil Nadu</option>
        <option value="Telangana">Telangana</option>
        <option value="Uttar Pradesh">Uttar Pradesh</option>
        <option value="West Bengal">West Bengal</option>
      </select>
      <table>
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Cities</th>
            <th>State</th>
            <th>Est. Year</th>
          </tr>
        </thead>
        <tbody>
          {filteredCities.map((city, index) => (
            <tr key={city.name}>
              <td>{index + 1}</td>
              <td>{city.name}</td>
              <td>{city.state}</td>
              <td>{city.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default CityTable;
