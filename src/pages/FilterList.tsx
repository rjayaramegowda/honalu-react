import { ChangeEvent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  sortByAge,
  selectDataProvider,
} from "../features/counter/counterSlice";
import { Profile } from "../models/profile.model";

type Props = {};
export const FilterList = ({}: Props) => {
  const dispatch = useAppDispatch();
  const dataProvider = useAppSelector(selectDataProvider);

  function handleChange(e: ChangeEvent<HTMLSelectElement>): void {
    console.log(e.target.value);
    const s1 = [...dataProvider];
    s1.sort(
      (a: Profile, b: Profile) => Number(a.basic.age) - Number(b.basic.age)
    );
    dispatch(sortByAge(s1));
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
              onChange={(e) => handleChange(e)}
              className="form-select"
            >
              <option selected>Choose...</option>
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
                <label className="visually-hidden" htmlFor="autoSizingSelect">
                  Preference
                </label>
                <select className="form-select" id="autoSizingSelect">
                  <option value={1}>18</option>
                  <option value={2}>19</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <div className="col-auto align-self-center">to</div>
              <div className="col-auto">
                <label className="visually-hidden" htmlFor="autoSizingSelect">
                  Preference
                </label>
                <select className="form-select" id="autoSizingSelect">
                  <option value={1}>24</option>
                  <option value={2}>19</option>
                  <option value={3}>3</option>
                </select>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <h6>Height</h6>
            <div className="row">
              <div className="col-auto">
                <label className="visually-hidden" htmlFor="autoSizingSelect">
                  Preference
                </label>
                <select className="form-select" id="autoSizingSelect">
                  <option value={1}>140 cm</option>
                  <option value={2}>141 cm</option>
                  <option value={3}>142 cm</option>
                </select>
              </div>
              <div
                className="col-auto align-self-center"
                style={{ padding: "0" }}
              >
                to
              </div>
              <div className="col-auto">
                <label className="visually-hidden" htmlFor="autoSizingSelect">
                  Preference
                </label>
                <select className="form-select" id="autoSizingSelect">
                  <option value={1}>160 cm</option>
                  <option value={2}>161 cm</option>
                  <option value={3}>162</option>
                </select>
              </div>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Marital Status"
              >
                <option selected>Doesn't Matter</option>
                <option value={1}>Never Married</option>
                <option value={2}>Divorced</option>
                <option value={3}>Windowed</option>
                <option value={4}>Others</option>
              </select>
              <label htmlFor="floatingSelect">Marital Status </label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Marital Status"
              >
                <option selected>Doesn't Matter</option>
                <option value={1}>Hindu</option>
                <option value={2}>Christian</option>
                <option value={3}>Muslim</option>
                <option value={3}>Buddhist</option>
                <option value={4}>Others</option>
              </select>
              <label htmlFor="floatingSelect">Religion</label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Marital Status"
              >
                <option selected>Doesn't Matter</option>
                <option value={1}>Kannada</option>
                <option value={2}>Hindi</option>
                <option value={3}>Tamil</option>
                <option value={3}>Telugu</option>
                <option value={3}>Others</option>
              </select>
              <label htmlFor="floatingSelect">Mother Tongue</label>
            </div>
          </li>
          <li className="list-group-item">
            <div className="form-floating">
              <select
                className="form-select"
                id="floatingSelect"
                aria-label="Religion"
              >
                <option selected>Doesn't Matter</option>
                <option value={1}>India</option>
                <option value={2}>Germany</option>
                <option value={3}>Oman</option>
              </select>
              <label htmlFor="floatingSelect">Country Living In </label>
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
