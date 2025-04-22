import React, { ChangeEvent, useState } from "react";
import { Country, State, City } from "country-state-city";
import { communityList, religionList } from "../../data/communityListData";
import {
  highestQualifications,
  motherTounge,
  workingTypes,
} from "../../data/commonData";
import { Community } from "../../models/common.model";
import UploadImage from "./UploadImage";
import {
  Appearance,
  Basic,
  Doctrine,
  Education,
  Lifestyle,
  Location,
  Photo,
  PhotoDetails,
  Profession,
  Profile,
  Trait,
} from "../../models/profile.model";
import { useAddProfileMutation } from "../../reducers/api/profilesApi";
import CountryStateCity from "./CountryStateCity";

const Register = () => {
  const [addProfile] = useAddProfileMutation();
  const [communities, setCommunities] = useState<Community[]>([]);

  const [displayName, setDisplayName] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [dob, setDob] = useState("");
  const [height, setHeight] = useState(0);
  const [diet, setDiet] = useState("");
  const [religion, setReligion] = useState("");
  const [caste, setCaste] = useState("");
  const [motherTongue, setMotherTongue] = useState("");
  const [country, setCountry] = useState("India");
  const [state, setState] = useState("Karnataka");
  const [city, setCity] = useState("");
  const [edu, setEdu] = useState("");
  const [displayEducation, setDisplayEducation] = useState("");
  const [workingWith, setWorkingWith] = useState("");
  const [occupation, setOccupation] = useState("");
  const [employer, setEmployer] = useState("");
  const [aboutMe, setAboutMe] = useState("");
  const [phtoURL, setPhtoURL] = useState("");

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
    setReligion(e.target.value);
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //createProfile();
  }

  function createProfile() {
    const basic: Basic = {
      display_name: displayName,
      gender: gender,
      age: age,
      marital_status: maritalStatus,
      date_of_birth: dob,
    };

    const appearance: Appearance = {
      height: height,
    };

    const lifestyle: Lifestyle = {
      diet: diet,
    };

    const doctrine: Doctrine = {
      religion: religion,
      caste: caste,
      mother_tongue: motherTongue,
    };

    const location: Location = {
      country: country,
      state: state,
      city: city,
    };

    const education: Education = {
      education: edu,
      display_education: displayEducation,
    };

    const profession: Profession = {
      working_with: workingWith,
      occupation: occupation,
      employer: employer,
    };

    const trait: Trait = {
      about_me: aboutMe,
    };

    const photo: Photo = {
      medium: phtoURL,
    };

    const photo_details: PhotoDetails = {
      photos: [photo],
    };

    const p: Profile = {
      id: 123,
      basic,
      appearance,
      lifestyle,
      doctrine,
      location,
      education,
      profession,
      trait,
      photo_details,
    };
    addProfile(p);
  }

  return (
    <>
      <div className="col-md-3 mb-3 mt-1">
        <UploadImage onPhotoUpload={(url) => setPhtoURL(url)} />
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
                      htmlFor="inputDisplayName"
                      className="col-sm-4 col-form-label"
                    >
                      Full Name:
                    </label>
                    <div className="col-sm-7">
                      <input
                        className="form-control"
                        id="inputDisplayName"
                        placeholder="Enter your fullname"
                        onChange={(e) => setDisplayName(e.target.value)}
                      />
                    </div>
                  </div>

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
                        onChange={(e) => setGender(e.target.value)}
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
                        onChange={(e) => setDob(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <label
                      htmlFor="inputAge"
                      className="col-sm-4 col-form-label"
                    >
                      Age *:
                    </label>
                    <div className="col-auto">
                      <input
                        type="number"
                        defaultValue=""
                        className="form-control"
                        id="inputAge"
                        required
                        min={18}
                        max={80}
                        onChange={(e) => setAge(e.target.value)}
                      />
                    </div>
                    <div className="col-auto">Years</div>
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
                        onChange={(e) => setMaritalStatus(e.target.value)}
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
                        onChange={(e) => setHeight(Number(e.target.value))}
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
                      <select
                        required
                        id="inputDiet"
                        className="form-select"
                        onChange={(e) => setDiet(e.target.value)}
                      >
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
                        onChange={(e) => setCaste(e.target.value)}
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
                        onChange={(e) => setMotherTongue(e.target.value)}
                      >
                        <option value="">Choose</option>
                        {motherToungeItems}
                      </select>
                    </div>
                  </div>

                  <CountryStateCity
                    onCityChange={(c) => setCity(c)}
                    onCountryChange={(c) => setCountry(c)}
                    onStateChange={(s) => setState(s)}
                  />
                  {/* <div className="row mb-3">
                    <label
                      htmlFor="inputCountry"
                      className="col-sm-4 col-form-label"
                    >
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
                    <label
                      htmlFor="inputState"
                      className="col-sm-4 col-form-label"
                    >
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
                    <label
                      htmlFor="inputCity"
                      className="col-sm-4 col-form-label"
                    >
                      City Living In: ((Nearest City)
                    </label>
                    <div className="col-auto">
                      <select
                        id="inputCity"
                        required
                        className="form-select"
                        defaultValue="Chamarajanagar"
                        onChange={(e) => setCity(e.target.value)}
                      >
                        <option value="">Choose</option>
                        {cityList.map(({ name }) => (
                          <option key={name} value={name}>
                            {name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div> */}
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
                    onChange={(e) => setAboutMe(e.target.value)}
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
                        onChange={(e) => setEdu(e.target.value)}
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
                        onChange={(e) => setDisplayEducation(e.target.value)}
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
                      <select
                        id="inputWorkingWith"
                        className="form-select"
                        onChange={(e) => setWorkingWith(e.target.value)}
                      >
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
                      Occupation or Job Title:
                    </label>
                    <div className="col-sm-7">
                      <input
                        className="form-control"
                        id="inpuJobTitle"
                        placeholder="e.g. Software Development Engineer"
                        onChange={(e) => setOccupation(e.target.value)}
                      />
                    </div>
                  </div>

                  <div className="row mb-3">
                    <label
                      htmlFor="inpuEmployer"
                      className="col-sm-4 col-form-label"
                    >
                      Employer:
                    </label>
                    <div className="col-sm-7">
                      <input
                        className="form-control"
                        id="inpuEmployer"
                        placeholder="e.g. Infosys"
                        onChange={(e) => setEmployer(e.target.value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="card-footer">
                  <button
                    className="btn btn-primary rounded-pill px-3"
                    type="button"
                    onClick={createProfile}
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
