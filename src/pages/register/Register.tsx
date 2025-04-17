import React, { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router";
import CountryStateCity from "./CountryStateCity";
import { communityList, religionList } from "../../data/communityListData";
import {
  highestQualifications,
  motherTounge,
  workingTypes,
} from "../../data/commonData";
import { Community } from "../../models/common.model";
import UploadImage from "./UploadImage";

const Register = () => {
  const [communities, setCommunities] = useState<Community[]>([]);

  const communityListItems = communities.map(({ child, parent }) => (
    <option key={child} value={child}>
      {child}
    </option>
  ));

  const religionListItems = religionList.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const motherToungeItems = motherTounge.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const highestQualificationsItems = highestQualifications.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  const workingTypesItems = workingTypes.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  function handleReligionChange(e: ChangeEvent<HTMLSelectElement>) {
    setCommunities(
      communityList.filter((item) => item.parent === e.target.value)
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <>
      <div className="col-md-3 mb-3 mt-1">
        <UploadImage />
      </div>
      <div className="col-md-9">
        <form onSubmit={(e) => handleSubmit(e)} xvpn-watching-form="true">
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
                        <option value="">Choose</option>
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
                      <select
                        required
                        id="inputMarital"
                        className="form-select"
                      >
                        <option value="">Choose</option>
                        <option value="Never Married">Never Married</option>
                        <option value="Divorced">Divorced</option>
                        <option value="Windowed">Windowed</option>
                        <option value="Others">Others</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputHeight"
                      className="col-sm-4 col-form-label"
                    >
                      Height *:
                    </label>
                    <div className="col-auto">
                      <input
                        type="number"
                        defaultValue=""
                        className="form-control"
                        id="inputHeight"
                        required
                        min={120}
                        max={225}
                      />
                    </div>
                    <div className="col-auto">cm</div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputDiet"
                      className="col-sm-4 col-form-label"
                    >
                      Diet *:
                    </label>
                    <div className="col-auto">
                      <select required id="inputDiet" className="form-select">
                        <option value="">Choose</option>
                        <option value="Veg">Veg</option>
                        <option value="Non-Veg">Non-Veg</option>
                        <option value="Eggetarian">Eggetarian</option>
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputReligion"
                      className="col-sm-4 col-form-label"
                    >
                      Religion *
                    </label>
                    <div className="col-auto">
                      <select
                        id="inputReligion"
                        required
                        className="form-select"
                        onChange={(e) => handleReligionChange(e)}
                      >
                        <option value="">Choose</option>
                        {religionListItems}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputCommunity"
                      className="col-sm-4 col-form-label"
                    >
                      Community *
                    </label>
                    <div className="col-auto">
                      <select
                        id="inputCommunity"
                        required
                        className="form-select"
                      >
                        <option value="">Choose</option>
                        {communityListItems}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputMotherTongue"
                      className="col-sm-4 col-form-label"
                    >
                      Mother Tongue *
                    </label>
                    <div className="col-auto">
                      <select
                        required
                        id="inputMotherTongue"
                        className="form-select"
                      >
                        <option value="">Choose</option>
                        {motherToungeItems}
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
                  <h5 className="card-title">About Me*</h5>
                  <textarea
                    required
                    className="form-control"
                    id="inputAboutMe"
                    rows={5}
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
                      htmlFor="inputEducation"
                      className="col-sm-4 col-form-label"
                    >
                      Highest Qualification:
                    </label>
                    <div className="col-auto">
                      <select
                        id="inputEducation"
                        required
                        className="form-select"
                      >
                        <option value="">Choose...</option>
                        {highestQualificationsItems}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputAcademicRanks"
                      className="col-sm-4 col-form-label"
                    >
                      Academic Ranks or Title
                    </label>
                    <div className="col-sm-7">
                      <input
                        placeholder="e.g. Bachelor in Engineering, Computer Science"
                        className="form-control"
                        id="inputAcademicRanks"
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputWorkingWith"
                      className="col-sm-4 col-form-label"
                    >
                      Working With:
                    </label>
                    <div className="col-auto">
                      <select id="inputWorkingWith" className="form-select">
                        <option value="">Choose</option>
                        {workingTypesItems}
                      </select>
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inpuJobTitle"
                      className="col-sm-4 col-form-label"
                    >
                      Job Title:
                    </label>
                    <div className="col-sm-7">
                      <input
                        className="form-control"
                        id="inpuJobTitle"
                        placeholder="e.g. Software Development Engineer"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="inpuCompanyName"
                      className="col-sm-4 col-form-label"
                    >
                      Company Name:
                    </label>
                    <div className="col-sm-7">
                      <input
                        className="form-control"
                        id="inpuCompanyName"
                        placeholder="e.g. Infosys"
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="inpuWorkLocation"
                      className="col-sm-4 col-form-label"
                    >
                      Work Location:
                    </label>
                    <div className="col-sm-7">
                      <input
                        className="form-control"
                        id="inpuWorkLocation"
                        placeholder="e.g. Bengaluru, Karnataka, India "
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-primary rounded-pill px-3"
                    type="submit"
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
        </form>
      </div>
    </>
  );
};

export default Register;
