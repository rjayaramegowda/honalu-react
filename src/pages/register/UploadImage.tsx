import React from "react";

const UploadImage = () => {
  return (
    <div className="card text-bg-dark border-0 mb-4">
      <img src="./images/users/no-photo.png" className="card-img" alt="..." />
      <div
        className="card-img-overlay pb-2"
        style={{
          background: "linear-gradient(0deg, #111, transparent)",
          top: "auto",
        }}
      >
        <h5 className="card-title mt-5 pt-2 text-center">Dayanand</h5>
        <div className="text-center">
          <button className="btn btn-success rounded-pill px-3" type="button">
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
            Upload Photo
          </button>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
