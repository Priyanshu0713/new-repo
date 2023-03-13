import { Filter } from '@mui/icons-material';
import { color } from '@mui/system';
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Button from 'react-bootstrap/Button';


import { components } from "react-select";
import Select from "react-select";
import Multiselect from 'multiselect-react-dropdown';


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
  const [selectedCities, setSelectedCities] = useState([]);
  const [filteredCities, setFilteredCities] = useState([]);

  const yearOptions = [
    { label: '1950' },
    { label: '1947' },
    { label: '1995' },
    { label: '1987' },
    { label: '1970' },
    { label: '1690' },
    { label: '1727' },
    { label: '1775' },
  ];
  const cityOptions = [
    { label: 'Mumbai' },
    { label: 'Delhi' },
    { label: 'Bengaluru' },
    { label: 'Chennai' },
    { label: 'Hyderabad' },
    { label: 'Kolkata' },
    { label: 'Jaipur' },
    { label: 'Lucknow' },
  ];

  const stateOptions = [
    { label: 'Maharashtra' },
    { label: 'Delhi' },
    { label: 'Karnataka' },
    { label: 'Tamil Nadu' },
    { label: 'Telangana' },
    { label: 'West Bengal	' },
    { label: 'Rajasthan' },
    { label: 'Uttar Pradesh' },
  ];

  const YearOption = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => props.selectOption(props.data)}
          />
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };
  function filterCities() {
    let filtered = [...cities];
    if (selectedYears.length > 0) {
      filtered = filtered.filter((city) =>
        selectedYears.some((year) => year.label == city.year.toString())
      );
    }
    if (selectedStates.length > 0) {
      filtered = filtered.filter((city) =>
        selectedStates.some((state) => state.label == city.state)
      );
    }
    if (filteredCities.length > 0) {
      filtered = filtered.filter((city) =>
        filteredCities.some((fcity) => fcity.label == city.name)
      );
    }
    return filtered;
  }
  
  const filtered = filterCities();
  return (
    <>
      <Select
        isMulti
        options={yearOptions}
        value={selectedYears}
        components={{ Option: YearOption }}
        onChange={(selectedOptions) =>
          setSelectedYears(selectedOptions)
        }
        hideSelectedOptions={false}
        placeholder="Select Year..."
      />
      <Select
        isMulti
        options={cityOptions}
        value={filteredCities}
        components={{ Option: YearOption }}
        onChange={(selectedOptions) =>
          setFilteredCities(selectedOptions)
        }
        hideSelectedOptions={false}
        placeholder="Select City..."

      />
      <Select
        isMulti
        options={stateOptions}
        value={selectedStates}
        components={{ Option: YearOption }}
        onChange={(selectedOptions) =>
          setSelectedStates(selectedOptions)
        }
        hideSelectedOptions={false}
        placeholder="Select State..."
      />
      
      <div className="App">
        <>
          <div>
            <table>
              <tr>
                <th>Name</th>
                <th>State</th>
                <th>Est. Year</th>
              </tr>
              {filtered.map((val, key) => {
                return (
                  <tr key={key}>
                    <td>{val.name}</td>
                    <td>{val.state}</td>
                    <td>{val.year}</td>
                  </tr>
                );
              })}
            </table>
          </div>
        </>
      </div>
    </>
  );
}

export default CityTable;
