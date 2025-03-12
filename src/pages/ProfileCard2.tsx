import React from "react";
import PropTypes, { any } from "prop-types";
import { Profile } from "../models/profile.model";

const ProfileCard2 = (props: { vo: Profile | null | undefined }) => {
  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-3">
          <img
            src={props.vo?.photo_details.photos[0].medium}
            className="img-fluid rounded p-3 ms-1"
            alt="..."
          />
        </div>
        <div className="col-9">
          <div className="card-body">
            <h6 className="card-title">{props.vo?.basic.display_name}</h6>
            <p className="card-text">
              {props.vo?.basic.age} Yrs, {props.vo?.doctrine.religion},{" "}
              {props.vo?.doctrine.caste}, {props.vo?.doctrine.mother_tongue},{" "}
              <br />
              {props.vo?.location.location}
            </p>
            <h5 className="card-title d-none d-md-block">About Me</h5>
            <p className="card-text d-none d-md-block">
              {props.vo?.trait.about_me}
            </p>
            <p className=" d-none d-md-block">
              <a className="link-underline-primary " href="./profile.html">
                Read More
              </a>
            </p>
            <button
              className="btn btn-outline-secondary rounded-pill"
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
              Cancel Request
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
