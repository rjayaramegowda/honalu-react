import React from "react";
import { FilterList } from "./FilterList";
import { FiltersVO } from "../models/fileters.model";

const FilterListSM = (props: { vo: FiltersVO | null | undefined }) => {
  return (
    <>
      <div className="col-md-3 mb-3 d-md-none d-block ">
        <button
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          className="btn btn-warning rounded-circle"
          type="button"
          style={{ width: 48, height: 48 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-sliders"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z"
            />
          </svg>
        </button>
      </div>
      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-body">
              <FilterList vo={props.vo} />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary rounded-pill px-3"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Ends*/}
    </>
  );
};

export default FilterListSM;
