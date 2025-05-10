import { useState } from "react";
import UploadWidget from "./UploadWidget";
import { IMG_PROFILE, IMG_URL } from "../../data/commonData";

interface IUploadImageProps {
  onPhotoUpload: (country: string) => void;
}

const UploadImage: React.FunctionComponent<IUploadImageProps> = (props) => {
  const [url, updateUrl] = useState(
    IMG_URL + IMG_PROFILE + "/v1745338879/yx1heemh74kxdqnhduix.jpg"
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

    const pic_url = result?.info?.secure_url;

    updateUrl(result?.info?.secure_url);
    props.onPhotoUpload(pic_url.split("upload")[1]);
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
