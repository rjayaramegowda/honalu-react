import { ChangeEvent, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  sortByAge,
  selectFilteredData,
  selectResultData,
  selectCasteListAll,
  selectCityListAll,
  selectMaritalStatusList,
  selectReligionList,
  selectMotherTongueList,
  selectCountryList,
} from "../reducers/slice/profilesSlice";
import { Profile } from "../models/profile.model";
import { FiltersVO } from "../models/fileters.model";

export const FilterList = (props: { vo: FiltersVO | null | undefined }) => {
  const dispatch = useAppDispatch();
  const dataProvider = useAppSelector(selectFilteredData);
  const resultData = useAppSelector(selectResultData);

  const maritalStatusRef = useRef("Doesn't Matter");
  const religionRef = useRef("Doesn't Matter");
  const casteRef = useRef("Doesn't Matter");
  const motherTongueRef = useRef("Doesn't Matter");
  const countryRef = useRef("Doesn't Matter");
  const cityRef = useRef("Doesn't Matter");

  const [casteValue, setCasteValue] = useState("Doesn't Matter");
  const [cityValue, setCityValue] = useState("Doesn't Matter");
  const [sortDefaultValue, setsortDefaultValue] = useState("Choose");

  const [minAge, setMinAge] = useState(20);
  const [maxAge, setMaxAge] = useState(50);

  const casteListAll = useAppSelector(selectCasteListAll);
  const cityListAll = useAppSelector(selectCityListAll);

  //DD List
  const maritalStatusList = useAppSelector(selectMaritalStatusList);
  const religionList = useAppSelector(selectReligionList);
  const [casteList, setCasteList] = useState([...casteListAll]);
  const motherTongueList = useAppSelector(selectMotherTongueList);
  const countryList = useAppSelector(selectCountryList);
  const [cityList, setcityList] = useState([...cityListAll]);

  // Repeat
  const maritalStatusListItems = maritalStatusList.map((ms: any) => (
    <option key={ms} value={ms}>
      {ms}
    </option>
  ));

  const religionListItems = religionList.map((ms: any) => (
    <option key={ms} value={ms}>
      {ms}
    </option>
  ));

  const casteListItems = casteList.map((ms) => (
    <option key={ms.caste} value={ms.caste}>
      {ms.caste}
    </option>
  ));

  const motherTongueListItems = motherTongueList.map((ms: any) => (
    <option key={ms} value={ms}>
      {ms}
    </option>
  ));

  const countryListItems = countryList.map((ms: any) => (
    <option key={ms} value={ms}>
      {ms}
    </option>
  ));

  const cityListItems = cityList.map((ms) => (
    <option key={ms.city} value={ms.city}>
      {ms.city}
    </option>
  ));

  function handleSortBy(e: ChangeEvent<HTMLSelectElement>): void {
    setsortDefaultValue(e.target.value);
    switch (e.target.value) {
      case "age":
        dispatch(sortByAge(getSortedByAge([...dataProvider])));
        break;

      case "date_created":
        dispatch(sortByAge(getSortedByProfileCreated([...dataProvider])));
        break;

      default:
        break;
    }
  }

  function filterByMaritalStatus(e: ChangeEvent<HTMLSelectElement>): void {
    maritalStatusRef.current = e.target.value;
    applyFilter();
  }

  function filterByReligion(e: ChangeEvent<HTMLSelectElement>): void {
    religionRef.current = e.target.value;
    casteRef.current = "Doesn't Matter";
    setCasteValue("Doesn't Matter");
    applyFilter();

    const a1 =
      e.target.value === "Doesn't Matter"
        ? casteListAll
        : [...casteListAll].filter((item) => e.target.value === item.religion);
    setCasteList(a1);
  }

  function filterByCaste(e: ChangeEvent<HTMLSelectElement>): void {
    casteRef.current = e.target.value;
    setCasteValue(e.target.value);
    applyFilter();
  }

  function filterByMotherTongue(e: ChangeEvent<HTMLSelectElement>): void {
    motherTongueRef.current = e.target.value;
    applyFilter();
  }

  function filterByCountry(e: ChangeEvent<HTMLSelectElement>): void {
    countryRef.current = e.target.value;
    cityRef.current = "Doesn't Matter";
    setCityValue("Doesn't Matter");
    applyFilter();

    const a1 =
      e.target.value === "Doesn't Matter"
        ? cityListAll
        : [...cityListAll].filter((item) => e.target.value === item.country);
    setcityList(a1);
  }

  function filterByCity(e: ChangeEvent<HTMLSelectElement>): void {
    cityRef.current = e.target.value;
    setCityValue(e.target.value);
    applyFilter();
  }

  function applyFilter() {
    const a1 = [...resultData].filter(filterFunction);
    dispatch(sortByAge(a1));
  }

  function filterFunction(p: Profile) {
    setsortDefaultValue("Choose");
    if (Number(p.basic.age) < minAge || Number(p.basic.age) > maxAge) {
      return false;
    }
    if (
      p.basic.marital_status != maritalStatusRef.current &&
      maritalStatusRef.current != "Doesn't Matter"
    ) {
      return false;
    }

    if (
      p.doctrine.religion != religionRef.current &&
      religionRef.current != "Doesn't Matter"
    ) {
      return false;
    }

    if (
      p.doctrine.caste != casteRef.current &&
      casteRef.current != "Doesn't Matter"
    ) {
      return false;
    }

    if (
      p.doctrine.mother_tongue != motherTongueRef.current &&
      motherTongueRef.current != "Doesn't Matter"
    ) {
      return false;
    }

    if (
      p.location.country != countryRef.current &&
      countryRef.current != "Doesn't Matter"
    ) {
      return false;
    }

    if (
      p.location.city != cityRef.current &&
      cityRef.current != "Doesn't Matter"
    ) {
      return false;
    }

    return true;
  }

  function getSortedByAge(s1: Profile[]) {
    return s1.sort((a: Profile, b: Profile) => {
      return Number(a.basic.age) - Number(b.basic.age);
    });
  }

  function getSortedByProfileCreated(s1: Profile[]) {
    return s1.sort((a: Profile, b: Profile) => {
      return b.account.profile_created - a.account.profile_created;
    });
  }

  return (
    <>
      <div className="card mb-3">
        <div className="card-header">Sort By</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <label htmlFor="inputState" className="form-label d-none">
              Sort By
            </label>
            <select
              id="inputState"
              onChange={(e) => handleSortBy(e)}
              className="form-select"
              value={sortDefaultValue}
            >
              <option value="choose">Choose</option>
              <option value="age">Age</option>
              <option value="date_created">Date Created</option>
            </select>
          </li>
        </ul>
      </div>
      <div className="card">
        <div className="card-header">Filter By</div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <h6>Age</h6>
            <div className="row">
              <div className="col-auto">
                <input
                  className="form-control"
                  type="number"
                  id="minAgeIT"
                  name="minAge"
                  min="18"
                  max="50"
                  value={minAge}
                  onChange={(e) => setMinAge(Number(e.target.value))}
                  onBlur={applyFilter}
                />
              </div>
              <div className="col-auto align-self-center">to</div>
              <div className="col-auto">
                <input
                  className="form-control"
                  type="number"
                  id="maxAgeIT"
                  name="maxAge"
                  min="18"
                  max="60"
                  value={maxAge}
                  onChange={(e) => setMaxAge(Number(e.target.value))}
                  onBlur={applyFilter}
                />
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-floating">
              <select
                className="form-select"
                id="maritalStatusSelect"
                aria-label="Marital Status"
                onChange={(e) => filterByMaritalStatus(e)}
                defaultValue="Doesn't Matter"
              >
                <option value="Doesn't Matter">Doesn't Matter</option>
                {maritalStatusListItems}
              </select>
              <label htmlFor="maritalStatusSelect">Marital Status</label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-floating">
              <select
                className="form-select"
                id="religionSelect"
                aria-label="Marital Status"
                defaultValue="Doesn't Matter"
                onChange={(e) => filterByReligion(e)}
              >
                <option value="Doesn't Matter">Doesn't Matter</option>
                {religionListItems}
              </select>
              <label htmlFor="religionSelect">Religion</label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-floating">
              <select
                className="form-select"
                id="casteSelect"
                aria-label="Marital Status"
                defaultValue="Doesn't Matter"
                onChange={(e) => filterByCaste(e)}
                value={casteValue}
              >
                <option value="Doesn't Matter">Doesn't Matter</option>
                {casteListItems}
              </select>
              <label htmlFor="casteSelect">Caste</label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-floating">
              <select
                className="form-select"
                id="motherTongueSelect"
                aria-label="Marital Status"
                defaultValue="Doesn't Matter"
                onChange={(e) => filterByMotherTongue(e)}
              >
                <option value="Doesn't Matter">Doesn't Matter</option>
                {motherTongueListItems}
              </select>
              <label htmlFor="motherTongueSelect">Mother Tongue</label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-floating">
              <select
                className="form-select"
                id="countrySelect"
                aria-label="Religion"
                defaultValue="Doesn't Matter"
                onChange={(e) => filterByCountry(e)}
              >
                <option value="Doesn't Matter">Doesn't Matter</option>
                {countryListItems}
              </select>
              <label htmlFor="countrySelect">Country Living In </label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-floating">
              <select
                className="form-select"
                id="citySelect"
                aria-label="Religion"
                defaultValue="Doesn't Matter"
                onChange={(e) => filterByCity(e)}
                value={cityValue}
              >
                <option value="Doesn't Matter">Doesn't Matter</option>
                {cityListItems}
              </select>
              <label htmlFor="citySelect">City </label>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};
