import React from "react";

const CountryStateCity = () => {
  return (
    <>
      <div className="row mb-3">
        <label htmlFor="inputCountry" className="col-sm-4 col-form-label">
          Country Living In :
        </label>
        <div className="col-auto">
          <select id="inputCountry" className="form-select">
            <option>India</option>
            <option>Germany</option>
          </select>
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="inputState" className="col-sm-4 col-form-label">
          State Living In :
        </label>
        <div className="col-auto">
          <select id="inputState" className="form-select">
            <option>Choose...</option>
            <option>Karnataka</option>
            <option>Kerala</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputCity" className="col-sm-4 col-form-label">
          City Living In: ((Nearest City)
        </label>
        <div className="col-auto">
          <select id="inputCity" className="form-select">
            <option>Choose...</option>
            <option>Mysuru</option>
            <option>Bengaluru</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default CountryStateCity;
