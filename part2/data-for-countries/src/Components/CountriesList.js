import React, { useState } from "react";

import Country from "./Country";
import Weather from "./Weather";

function CountriesList({ countries }) {
  const [show, setShow] = useState(new Array(countries.length).fill(false));

  function handleClick(index) {
    setShow(show.map((val, i) => (i === index ? !val : val)));
  }
  function display() {
    if (countries.length === 1) {
      const country = countries[0];
      return (
        <>
          <Country country={country} />
          <Weather
            location={country.capital.length ? country.capital[0] : country}
            lat={country.latlng[0]}
            lon={country.latlng[1]}
          />
        </>
      );
    }
    return (
      <div>
        {countries.map((country, i) => {
          return (
            <div key={country.name.common}>
              {show[i] ? <Country country={country} /> : country.name.common}{" "}
              <button onClick={() => handleClick(i)}>{show[i] ? "hide" : "show"}</button>
            </div>
          );
        })}
      </div>
    );
  }

  return display();
}

export default CountriesList;
