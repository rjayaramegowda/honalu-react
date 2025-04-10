import React from "react";
import { useNavigate } from "react-router";
import CountryStateCity from "./CountryStateCity";

const Register = () => {
  return (
    <>
      <div className="col-md-3 mb-3 mt-1">
        {/* Profile Begins*/}
        <div className="card text-bg-dark border-0 mb-4">
          <img
            src="./images/users/no-photo.png"
            className="card-img"
            alt="..."
          />
          <div
            className="card-img-overlay pb-2"
            style={{
              background: "linear-gradient(0deg, #111, transparent)",
              top: "auto",
            }}
          >
            <h5 className="card-title mt-5 pt-2 text-center">Dayanand</h5>
            <div className="text-center">
              <button
                className="btn btn-success rounded-pill px-3"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="bi bi-arrow-right me-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
                Upload Photo
              </button>
            </div>
          </div>
        </div>
        {/* Profile Ends*/}
      </div>
      <div className="col-md-9">
        <div className="row g-3">
          <div className="col-12">
            <div className="card">
              <div className="card-header">Sign Up</div>
              <div className="card-body">
                <h5 className="card-title">Basic Details</h5>
                <div className="row mb-3">
                  <label
                    htmlFor="inputGender"
                    className="col-sm-4 col-form-label"
                  >
                    Gender *:
                  </label>
                  <div className="col-auto">
                    <select
                      id="inputGender"
                      className="form-select"
                      required={true}
                    >
                      <option disabled>Choose...</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputCityDOB"
                    className="col-sm-4 col-form-label"
                  >
                    Date of Birth *:
                  </label>
                  <div className="col-auto">
                    <input
                      type="date"
                      name="party"
                      min="1970-04-01"
                      max="2007-04-20"
                      required={true}
                      className="form-control"
                      id="inputCityDOB"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputMarital"
                    className="col-sm-4 col-form-label"
                  >
                    Marital Status *:
                  </label>
                  <div className="col-auto">
                    <select id="inputMarital" className="form-select">
                      <option disabled>Choose...</option>
                      <option value="Never Married">Never Married</option>
                      <option value="Divorced">Divorced</option>
                      <option value="Windowed">Windowed</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputGender"
                    className="col-sm-4 col-form-label"
                  >
                    Height *:
                  </label>
                  <div className="col-auto">
                    <input
                      type="number"
                      defaultValue=""
                      className="form-control"
                      id="inputCity"
                      min={120}
                      max={225}
                    />
                  </div>
                  <div className="col-auto">cm</div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputGender"
                    className="col-sm-4 col-form-label"
                  >
                    Diet *:
                  </label>
                  <div className="col-auto">
                    <select id="inputGender" className="form-select">
                      <option disabled>Choose...</option>
                      <option value="Veg">Veg</option>
                      <option value="Non-Veg">Non-Veg</option>
                      <option value="Eggetarian">Eggetarian</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputGender"
                    className="col-sm-4 col-form-label"
                  >
                    Religion *
                  </label>
                  <div className="col-auto">
                    <select id="inputGender" className="form-select">
                      <option>Choose...</option>
                      <option>Doesn't Matter</option>
                      <option value={1}>Hindu</option>
                      <option value={2}>Christian</option>
                      <option value={3}>Muslim</option>
                      <option value={3}>Buddhist</option>
                      <option value={4}>Others</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputGender"
                    className="col-sm-4 col-form-label"
                  >
                    Community *
                  </label>
                  <div className="col-auto">
                    <select id="inputGender" className="form-select">
                      <option>Choose...</option>
                      <option>Doesn't Matter</option>
                      <option>Urs</option>
                      <option>Vokkaliga</option>
                      <option>Viswabrahmin</option>
                      <option>Vysya</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputGender"
                    className="col-sm-4 col-form-label"
                  >
                    Mother Tongue *
                  </label>
                  <div className="col-auto">
                    <select id="inputGender" className="form-select">
                      <option>Choose...</option>
                      <option>Doesn't Matter</option>
                      <option value={1}>Kannada</option>
                      <option value={2}>Hindi</option>
                      <option value={3}>Tamil</option>
                      <option value={3}>Telugu</option>
                      <option value={3}>Others</option>
                    </select>
                  </div>
                </div>
                <CountryStateCity />
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">About Me</h5>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows={5}
                  defaultValue={""}
                />
              </div>
            </div>
          </div>
          <div className="col-12 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Education &amp; Career</h5>
                <div className="row mb-3">
                  <label
                    htmlFor="inputGender"
                    className="col-sm-4 col-form-label"
                  >
                    Highest Qualification:
                  </label>
                  <div className="col-auto">
                    <select id="inputGender" className="form-select">
                      <option>Choose...</option>
                      <option>MBA</option>
                      <option>BE</option>
                      <option>MBBS</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputGender"
                    className="col-sm-4 col-form-label"
                  >
                    Working With:
                  </label>
                  <div className="col-auto">
                    <select id="inputGender" className="form-select">
                      .<option>Choose...</option>
                      <option>Private Company</option>
                      <option>Govt</option>
                      <option>Business / Self Employed</option>
                      <option>Not Working</option>
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <label
                    htmlFor="inputGender"
                    className="col-sm-4 col-form-label"
                  >
                    Working As:
                  </label>
                  <div className="col-auto">
                    <select id="inputGender" className="form-select">
                      <option>Choose...</option>
                      <option>Human Resources Professional</option>
                      <option>Banking Professional</option>
                      <option>Software Developer</option>
                      <option>Management</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <button
                  className="btn btn-primary rounded-pill px-3"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={16}
                    height={16}
                    fill="currentColor"
                    className="bi bi-arrow-right me-2"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
