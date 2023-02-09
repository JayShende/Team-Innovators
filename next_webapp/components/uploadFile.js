import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";
import styles from "../styles/uploadImg.module.css";

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

const FileUploader = () => (
  <UploadButton
    uploader={uploader}
    options={options}
    onComplete={(files) => {
      alert(files.map((x) => x.originalFile.fileUrl).join("\n"));
      console.log([0]);
    }}
  >
    {({ onClick }) => (
      <button className={styles.uploadImg} onClick={onClick}>
        Upload Image...
      </button>
    )}
  </UploadButton>
);

export default FileUploader;
