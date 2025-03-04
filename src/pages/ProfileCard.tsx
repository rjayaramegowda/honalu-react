import React from "react";
import PropTypes, { any, string } from "prop-types";
import { Profile } from "../models/profile.model";

ProfileCard.propTypes = {
  vo: any,
};

function ProfileCard(props: { vo: Profile | null | undefined }) {
  return (
    <div className="col-md-4">
      {/* Profile Begins*/}
      <div className="card text-bg-dark border-0 mb-4">
        <img
          src={props.vo?.photo_details.photos[0].medium}
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
            {props.vo?.basic.display_name}
          </h5>
          <p className="card-text mb-1">
            {props.vo?.basic.age} Yrs, {props.vo?.basic.marital_status},{" "}
            {props.vo?.location.location}
          </p>
          <div className="text-center">
            <a
              href="profile.html"
              className="btn btn-success rounded-pill px-5"
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
              Connect
            </a>
          </div>
        </div>
      </div>
      {/* Profile Ends*/}
    </div>
  );
}

export default ProfileCard;
