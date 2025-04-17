import { useState } from "react";
import UploadWidget from "./UploadWidget";

const UploadImage = () => {
  const [url, updateUrl] = useState(
    "https://res.cloudinary.com/dyv5ztkkq/image/upload/v1744895278/d1nkhmvfamrm6k2xrjnj.png"
  );

  /**
   * handleOnUpload
   */

  function handleOnUpload(error: any, result: any, widget: any) {
    console.log("handleOnUpload() = ", result);
    if (error) {
      console.log(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    updateUrl(result?.info?.secure_url);
  }

  return (
    <div className="card text-bg-dark border-0 mb-4">
      <img src={url} className="card-img" alt="..." />

      <div
        className="card-img-overlay pb-2"
        style={{
          background: "linear-gradient(0deg, #111, transparent)",
          top: "auto",
        }}
      >
        <h5 className="card-title mt-5 pt-2 text-center">Dayanand</h5>

        <div className="text-center">
          <UploadWidget onUpload={handleOnUpload}>
            {({ open }) => {
              return (
                <button
                  onClick={() => open()}
                  className="btn btn-success rounded-pill px-3"
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
                  Upload Photo
                </button>
              );
            }}
          </UploadWidget>
        </div>
      </div>
    </div>
  );
};

export default UploadImage;
