import React from "react";
import PropTypes, { any } from "prop-types";
import { Profile } from "../models/profile.model";

const ProfileDetailsRightCol = (props: { vo: Profile | null | undefined }) => {
  return (
    <div className="row g-3">
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Basic Details</h5>
            <p className="card-text">
              Birth Date : {props.vo?.basic.date_of_birth} <br />
              Marital Status : {props.vo?.basic.marital_status}
              <br />
              Lives In: {props.vo?.location.location}
              <br />
              Religion : {props.vo?.doctrine.religion}
              <br />
              Community: {props.vo?.doctrine.caste}
              <br />
              Mother Tongue: {props.vo?.doctrine.mother_tongue}
              <br />
              Diet: {props.vo?.lifestyle.diet}
              <br />
            </p>
          </div>
        </div>
      </div>
      <div className="col-12">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">About Me</h5>
            <p className="card-text">{props.vo?.trait.about_me}</p>
          </div>
        </div>
      </div>
      <div className="col-12 mb-4">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Education &amp; Career</h5>
            <p className="card-text">
              {props.vo?.education.display_education}
              <br />
              {props.vo?.profession.industry}
              <br />
              {props.vo?.profession.occupation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

ProfileDetailsRightCol.propTypes = {
  vo: any,
};

export default ProfileDetailsRightCol;
