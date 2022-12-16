function Country({ country }) {
  return (
    <div>
      <h2>{country.name.common}</h2>
      {country.capital.length && <p>Capital: {country.capital[0]}</p>}
      <p>Area: {country.area} sq. km</p>
      <h3>Languages</h3>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} width="100px" alt="country flag" />
    </div>
  );
}

export default Country;
