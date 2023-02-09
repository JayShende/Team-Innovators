import { Uploader } from "uploader"; // Installed by "react-uploader".
import { UploadButton } from "react-uploader";

// Initialize once (at the start of your app).
const uploader = Uploader({
  apiKey: "free", // Get production API keys from Upload.io
});

// Configuration options: https://upload.io/uploader#customize
const options = { multi: true };

const FileUploader = () => (
  <UploadButton
    uploader={uploader}
    options={options}
    onComplete={(files) => alert(files.map((x) => x.fileUrl).join("\n"))}
  >
    {({ onClick }) => <button onClick={onClick}>Upload a file...</button>}
  </UploadButton>
);

export default FileUploader;
