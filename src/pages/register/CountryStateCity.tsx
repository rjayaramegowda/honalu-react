import React, { useState } from "react";
import { Country, State, City } from "country-state-city";

interface ICountryStateCityProps {
  onCountryChange: (country: string) => void;
  onStateChange: (state: string) => void;
  onCityChange: (city: string) => void;
}

const CountryStateCity: React.FunctionComponent<ICountryStateCityProps> = (
  props
) => {
  const [selectedCountry, setSelectedCountry] = useState("IN");
  const [selectedState, setSelectedState] = useState("KA");
  const [countryList, setCountryList] = useState(Country.getAllCountries());
  const [stateList, setstateList] = useState(
    State.getStatesOfCountry(selectedCountry)
  );
  const [cityList, setCityList] = useState(
    City.getCitiesOfState(selectedCountry, selectedState)
  );

  function handleCountryChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setstateList(State.getStatesOfCountry(e.target.value));
    setSelectedCountry(e.target.value);
    setCityList([]);
    props.onCountryChange(e.target.selectedOptions[0].label);
  }

  function handleStateChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setCityList(City.getCitiesOfState(selectedCountry, e.target.value));
    setSelectedState(e.target.value);
    props.onStateChange(e.target.selectedOptions[0].label);
  }

  return (
    <>
      <div className="row mb-3">
        <label htmlFor="inputCountry" className="col-sm-4 col-form-label">
          Country Living In :
        </label>
        <div className="col-auto">
          <select
            onChange={(e) => handleCountryChange(e)}
            id="inputCountry"
            required
            className="form-select"
            defaultValue="IN"
          >
            <option value="">Choose</option>
            {countryList.map(({ name, isoCode }) => (
              <option key={isoCode} value={isoCode}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputState" className="col-sm-4 col-form-label">
          State Living In :
        </label>
        <div className="col-auto">
          <select
            onChange={(e) => handleStateChange(e)}
            id="inputState"
            required
            className="form-select"
            defaultValue="KA"
          >
            <option value="">Choose</option>
            {stateList.map(({ name, isoCode }) => (
              <option key={isoCode} value={isoCode}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputCity" className="col-sm-4 col-form-label">
          City Living In: ((Nearest City)
        </label>
        <div className="col-auto">
          <select
            id="inputCity"
            required
            className="form-select"
            defaultValue=""
            onChange={(e) => props.onCityChange(e.target.value)}
          >
            <option value="">Choose</option>
            {cityList.map(({ name }) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
};

export default CountryStateCity;
