import axios from "axios";
import React, { useEffect, useState } from "react";









const ApiCountry = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);

  console.log(countries);

  return (
    <div>
      Hello world
      <ul>
        {countries.map((country) => (
          <li key={country.cca2}>{country.name.official}</li>
        ))}
      </ul>
    </div>
  );
};

export default ApiCountry;
