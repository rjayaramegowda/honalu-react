import { ChangeEvent, useRef, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  sortByAge,
  selectDataProvider,
} from "../features/counter/counterSlice";
import { Profile } from "../models/profile.model";
import { profilesDataProvider } from "../data/profileListData";

type Props = {};
export const FilterList = ({}: Props) => {
  const dispatch = useAppDispatch();
  const dataProvider = useAppSelector(selectDataProvider);

  const maritalStatusRef = useRef("Doesn't Matter");
  const cityRef = useRef("Doesn't Matter");
  const religionRef = useRef("Doesn't Matter");
  const casteRef = useRef("Doesn't Matter");
  const motherTongueRef = useRef("Doesn't Matter");
  const countryRef = useRef("Doesn't Matter");

  function handleSortBy(e: ChangeEvent<HTMLSelectElement>): void {
    console.log(e.target.value);
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
    const a1 = [...profilesDataProvider].filter(filterFunction);
    dispatch(sortByAge(a1));
  }

  function filterByReligion(e: ChangeEvent<HTMLSelectElement>): void {
    religionRef.current = e.target.value;
    const a1 = [...profilesDataProvider].filter(filterFunction);
    dispatch(sortByAge(a1));
  }

  function filterByCaste(e: ChangeEvent<HTMLSelectElement>): void {
    casteRef.current = e.target.value;
    const a1 = [...profilesDataProvider].filter(filterFunction);
    dispatch(sortByAge(a1));
  }

  function filterByMotherTongue(e: ChangeEvent<HTMLSelectElement>): void {
    motherTongueRef.current = e.target.value;
    const a1 = [...profilesDataProvider].filter(filterFunction);
    dispatch(sortByAge(a1));
  }

  function filterByCountry(e: ChangeEvent<HTMLSelectElement>): void {
    countryRef.current = e.target.value;
    const a1 = [...profilesDataProvider].filter(filterFunction);
    dispatch(sortByAge(a1));
  }

  function filterByCity(e: ChangeEvent<HTMLSelectElement>): void {
    cityRef.current = e.target.value;
    const a1 = [...profilesDataProvider].filter(filterFunction);
    dispatch(sortByAge(a1));
  }

  function filterFunction(p: Profile) {
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
    <div className="col-md-3 mb-3 bg-light p-3 d-none d-md-block">
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
              defaultValue="choose"
            >
              <option value="choose" disabled={true}>
                Choose
              </option>
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
                <label className="visually-hidden" htmlFor="ageSelect">
                  Preference
                </label>
                <select className="form-select" id="ageSelect">
                  <option value={1}>18</option>
                  <option value={2}>19</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <div className="col-auto align-self-center">to</div>
              <div className="col-auto">
                <label className="visually-hidden" htmlFor="autoSizingSelect1">
                  Preference
                </label>
                <select className="form-select" id="autoSizingSelect1">
                  <option value={1}>24</option>
                  <option value={2}>19</option>
                  <option value={3}>3</option>
                </select>
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
                <option>Doesn't Matter</option>
                <option>Never Married</option>
                <option>Divorced</option>
                <option>Widowed</option>
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
                <option>Hindu</option>
                <option>Christian</option>
                <option>Muslim</option>
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
              >
                <option value="Doesn't Matter">Doesn't Matter</option>
                <option>Gowda</option>
                <option>Lingayath</option>
                <option>Vokkaliga</option>
                <option>Ansari</option>
                <option>Born Again</option>
                <option>Catholic</option>
                <option>Other</option>
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
                <option>Kannada</option>
                <option>Malayalam</option>
                <option>Marathi</option>
                <option>Telugu</option>
                <option>Others</option>
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
                <option>India</option>
                <option>USA</option>
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
              >
                <option value="Doesn't Matter">Doesn't Matter</option>
                <option>Bengaluru</option>
                <option>Mysuru</option>
                <option>Ramdurg</option>
                <option>Bengaluru</option>
                <option>New York</option>
                <option>Chicago</option>
                <option>Dallas</option>
              </select>
              <label htmlFor="citySelect">City </label>
            </div>
          </li>
          <li className="list-group-item">
            <button
              type="button"
              className="btn btn-secondary rounded-pill px-3"
            >
              Clear Filter
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
