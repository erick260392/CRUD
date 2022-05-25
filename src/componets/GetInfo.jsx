import React from "react";

const GetInfo = ({ info, country }) => {
  switch (info) {
    case "demography":
      return (
        <div>
          <h2>Demography</h2>
          <p>
            <b>population: </b> {country.population}
          </p>
          <p>
            <b>area: </b>
            {country.area}
          </p>
        </div>
      );

    case "location":
      return (
        <div>
          <h2>Location</h2>
          <p>
            <b>continent: </b>
            {country.continents?.[0]}
          </p>
          <p>
            <b>region: </b>
            {country.region}
          </p>
          <p>
            <b>sub region: </b>
            {country.subregion}
          </p>
        </div>
      );

    default:
      return (
        <div>
          <h2>Capital</h2>
          <p>
            <b>Capital: </b>
            {country.capital?.[0]}
          </p>
        </div>
      );
  }
};

export default GetInfo;
