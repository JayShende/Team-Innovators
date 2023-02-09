import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import styles from "../styles/uploadImg.module.css";
import { Spacer } from "@nextui-org/react";

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free", // Get production API keys from Upload.io
});

// Configuration options: https://upload.io/uploader#customize
const options = {
  styles: {
    colors: {
      primary: "#39b54a", // Hex codes only.
      active: "#008439",
    },
  },
  multi: false,
};

export default function FileUploader({
  setImgLink,
  imgLink,
  disableStarticHero,
}) {
  return (
    <>
      <UploadButton
        uploader={uploader}
        options={options}
        onComplete={(files) => {
          // Optional.
          if (files.length === 0) {
            console.log("No files selected.");
          } else {
            console.log("Files uploaded:");
            let Link = files.map((f) => f.fileUrl);
            setImgLink(Link[0]);
            console.log(imgLink);
            disableStarticHero;
          }
        }}
      >
        {({ onClick }) => (
          <button className={styles.uploadImg} onClick={onClick}>
            Upload Image...
            <Spacer x={1} />
            <i class="bx bxs-upvote"></i>
          </button>
        )}
      </UploadButton>
    </>
  );
}
