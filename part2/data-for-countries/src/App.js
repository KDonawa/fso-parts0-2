import axios from "axios";
import React, { useState, useEffect } from "react";
import CountriesList from "./Components/CountriesList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setAllCountries(response.data);
    });
  }, []);

  function handleSearch(event) {
    setSearchTerm(event.target.value);

    const filtered = allCountries.filter((country) =>
      country.name.common.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setFilteredCountries(filtered);
  }

  function display() {
    if (filteredCountries.length > 10) return "Too many matches, specify another filter";
    return <CountriesList countries={filteredCountries} />;
  }

  return (
    <div>
      <div>
        find countries <input type="text" value={searchTerm} onChange={handleSearch} />
      </div>
      <div>{display()}</div>
    </div>
  );
}

export default App;
