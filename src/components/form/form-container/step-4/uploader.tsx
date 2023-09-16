import React, { useEffect, useState } from "react";
import { FileAddOutlined } from "@ant-design/icons";
import { UploadProps, Typography, message, Upload } from "antd";
import { useDispatch, useSelector } from "react-redux";

const { Dragger } = Upload;

const Uploader = () => {
  /**
   * @Props
   */
  const props: UploadProps = {
    name: "file",
    multiple: true,
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
      setFileListData(info.fileList);

      if (status === "done") {
        syncSession_X_Redux(info.fileList);
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
  };

  /**
   * @initialize
   */
  const dispatch: Function = useDispatch();

  /**
   * @selectors
   */
  const pannelData = useSelector((state: any) => state.pannelData.pannelData);
  /**
   * @state
   */
  const [fileListData, setFileListData] = useState<any[]>([]);

  useEffect(() => {
    if (pannelData?.fileListData?.length) {
      setFileListData(pannelData.fileListData);
    }
  }, []);

  /**
   * @Functions
   */
  const syncSession_X_Redux = (value: any[], isRemove: boolean = false) => {
    let sessionUserData: any = sessionStorage.getItem("userData");
    let tempFileListData;
    if (!isRemove) {
      let restValue = sessionUserData.fileListData;

      if (restValue) {
        tempFileListData = [...value, restValue];
      } else {
        tempFileListData = [...value];
      }
    } else {
      tempFileListData = value;
    }
    console.log("tempFileListData", tempFileListData);
    /**
     * @action - update session storage and sync it with redux dispatch
     */
    let temp = JSON.parse(sessionUserData);
    if (sessionUserData) {
      sessionStorage.setItem(
        "userData",
        JSON.stringify({
          ...temp,
          fileListData: tempFileListData,
        })
      );
    }
  };

  const uploadImage = async (options: any) => {
    const { onSuccess, onError, file, onProgress } = options;
    try {
      const fmData = new FormData();
      console.log("fmData", fmData);
      // const config = {
      //   headers: { "content-type": "multipart/form-data" },
      //   onUploadProgress: (event: any) => {
      //     console.log((event.loaded / event.total) * 100);
      //     onProgress({ percent: (event.loaded / event.total) * 100 }, file);
      //   },
      // };
      fmData.append("image", file);
      let response = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(file);
        }, 1200);
      });
      if (response) {
        onSuccess(response);
      } else {
        onError({ event: "error" });
      }
      console.log("response", response);
    } catch (error: any) {
      onError({ message: "error" });
      console.log("error", error);
    }
  };

  const handleRemove = (value: any) => {
    console.log("value", value.uid);
    console.log("fileListData", fileListData);
    let response = removeItemByUid(fileListData, value.uid);
    console.log("response", response);
    syncSession_X_Redux(response, true);
  };

  function removeItemByUid(array: any, uidToRemove: any) {
    return array.filter((item: any) => item.uid !== uidToRemove);
  }

  return (
    <Dragger
      onRemove={handleRemove}
      fileList={fileListData}
      {...props}
      customRequest={uploadImage}
    >
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
};

export default Uploader;
