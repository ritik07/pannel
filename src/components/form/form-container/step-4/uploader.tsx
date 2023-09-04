import React from "react";
import { FileAddOutlined } from "@ant-design/icons";
import { UploadProps, Typography } from "antd";
import { message, Upload } from "antd";

const { Dragger } = Upload;

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
  beforeUpload: (file) => {
    // Check if the file type is PDF
    const isPDF = file.type === "application/pdf";
    if (!isPDF) {
      message.error("You can only upload PDF files!");
    }
    return isPDF ? true : Upload.LIST_IGNORE; // Prevent adding non-PDF files to the list
  },
  onChange(info) {
    const { status } = info.file;
    if (status !== "uploading") {
      console.log(info.file, info.fileList);
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files);
  },
};
const uploadImage = (options: any) => {
  const { onSuccess, onError, file, onProgress } = options;

  const fmData = new FormData();
  const config = {
    headers: { "content-type": "multipart/form-data" },
    onUploadProgress: (event: any) => {
      console.log((event.loaded / event.total) * 100);
      onProgress({ percent: (event.loaded / event.total) * 100 }, file);
    },
  };
  fmData.append("image", file);
  setTimeout(() => {
    onSuccess(file);
  }, 1000);
};

const Uploader = () => (
  <Dragger {...props} customRequest={uploadImage}>
    <div className="cs-bm-30">
      <Typography.Text type="secondary">File uploader</Typography.Text>
    </div>
    <p className="ant-upload-drag-icon">
      <FileAddOutlined className="cs-clr-black" />
    </p>
    <p className="ant-upload-text">
      <span className="cs-color-primary">Add files</span> or drop files here
    </p>
    <p className="ant-upload-hint">
      We're currently supporting PDF <br />
      under the size of 8mb
    </p>
  </Dragger>
);

export default Uploader;
