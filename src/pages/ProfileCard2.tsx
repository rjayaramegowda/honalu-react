import React, { useRef, useState } from "react";
import PropTypes, { any } from "prop-types";
import { Profile } from "../models/profile.model";
import {
  filterDashbaordData,
  selectDasboardActivePage,
  selectDashboardData,
  selectFilteredData,
  selectResultData,
  setActiveProfile,
  updateResultData,
} from "../reducers/slice/profilesSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { connect } from "react-redux";
import { Link } from "react-router";
import { IMG_PROFILE, IMG_URL } from "../data/commonData";

const ProfileCard2 = (props: { vo: Profile | null | undefined }) => {
  const dispatch = useAppDispatch();
  const resultData = useAppSelector(selectResultData);
  const dashboardData = useAppSelector(selectDashboardData);

  const [activeTab, setActiveTab] = useState(
    useAppSelector(selectDasboardActivePage)
  );

  const showCancelBtn = activeTab !== "Declined" ? true : false;
  const showAcceptBtn = activeTab === "Recieved" ? true : false;
  const showContactBtn = activeTab === "Accepted" ? true : false;
  const showConnectBtn = false;

  function updateConnection(s1: string) {
    const findIndex = resultData.indexOf(props.vo as Profile);
    const connect1 = { ...props.vo?.connect, status: s1 };

    const a1 = [...resultData].map((p, i) =>
      i == findIndex ? Object.assign({}, p, { connect: connect1 }) : p
    );
    dispatch(updateResultData(a1));

    const a2 = dashboardData.filter((item) =>
      item.basic.username != props.vo?.basic.username ? true : false
    );
    dispatch(filterDashbaordData(a2));
  }

  function hancleClick() {
    dispatch(setActiveProfile(props.vo as Profile));
  }

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-4 col-md-3">
          <img
            src={
              IMG_URL + IMG_PROFILE + props.vo?.photo_details.photos[0].medium
            }
            className="img-fluid rounded p-1 pt-2 p-md-3 ms-1"
            alt="..."
          />
        </div>
        <div className="col-8 col-md-9">
          <div className="card-body">
            <h6 className="card-title">{props.vo?.basic.display_name}</h6>
            <p className="card-text">
              {props.vo?.basic.age} Yrs, {props.vo?.doctrine.religion},{" "}
              {props.vo?.doctrine.caste}, {props.vo?.doctrine.mother_tongue},{" "}
              <br />
              {props.vo?.location.location}
            </p>
            <h6 className="card-title d-none d-md-block">About Me</h6>
            <p className="card-text d-none d-md-block">
              {props.vo?.trait.about_me}
            </p>

            <p className={showConnectBtn ? "alert alert-danger" : "d-none"}>
              She Declined your Invitation. This member cannot be contacted.
            </p>

            <p className=" d-none d-md-block">
              <Link
                className="link-underline-primary "
                to="../details"
                type="button"
                onClick={hancleClick}
              >
                View Details
              </Link>
            </p>

            <button
              className={
                showAcceptBtn
                  ? "btn btn-danger rounded-pill mt-2 me-3"
                  : "d-none"
              }
              type="button"
              onClick={() => updateConnection("Accepted")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-heart-fill me-2"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                />
              </svg>
              Accept
            </button>

            <button
              className={
                showContactBtn
                  ? "btn btn-success rounded-pill mt-2 me-3"
                  : "d-none"
              }
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-telephone me-2"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z" />
              </svg>
              Contact
            </button>

            <button
              className={
                showConnectBtn
                  ? "btn btn-success rounded-pill mt-2 me-3"
                  : "d-none"
              }
              type="button"
              onClick={() => updateConnection("Sent")}
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
              Connect
            </button>

            <button
              className={
                showCancelBtn
                  ? "btn btn-outline-danger rounded-pill mt-2 me-3"
                  : "d-none"
              }
              type="button"
              onClick={() => updateConnection("Declined")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                className="bi bi-x-lg me-2"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileCard2.propTypes = {
  vo: any,
};

export default ProfileCard2;
