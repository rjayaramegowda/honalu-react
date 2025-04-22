import React, { useState } from "react";
import PropTypes, { any, string } from "prop-types";
import { Profile } from "../models/profile.model";
import { useAppDispatch } from "../app/hooks";
import { setActiveProfile } from "../reducers/slice/profilesSlice";
import { Link } from "react-router";
import { IMG_PROFILE, IMG_URL } from "../data/commonData";

ProfileCard.propTypes = {
  vo: any,
};

function ProfileCard(props: { vo: Profile }) {
  const dispatch = useAppDispatch();

  function hancleClick() {
    dispatch(setActiveProfile(props.vo as Profile));
  }
  return (
    <div className="col-md-4">
      {/* Profile Begins*/}
      <div className="card text-bg-dark border-0 mb-4">
        <img
          src={IMG_URL + IMG_PROFILE + props.vo?.photo_details.photos[0].medium}
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
          <h5 className="card-title mt-5 pt-2">
            {props.vo.basic.display_name}
          </h5>
          <p className="card-text mb-1">
            {props.vo.basic.age} Yrs, {props.vo.doctrine.religion},{" "}
            {props.vo.doctrine.caste}, {props.vo.doctrine.mother_tongue}, <br />
            {props.vo.location.location}
          </p>
          <div className="text-center">
            <Link
              to="./details"
              className="btn btn-success rounded-pill px-5"
              type="button"
              onClick={hancleClick}
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
              View Details
            </Link>
          </div>
        </div>
      </div>
      {/* Profile Ends*/}
    </div>
  );
}

export default ProfileCard;
