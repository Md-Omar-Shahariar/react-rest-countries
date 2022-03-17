import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, population, flags } = props.country;

  return (
    <div className="country">
      <h2>Country Name: {name.common}</h2>
      <img src={flags.svg} alt="" />
      <h4>Population: {population}</h4>
    </div>
  );
};

export default Country;
