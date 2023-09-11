import React, { useRef, ChangeEvent } from "react";
import { Typography } from "antd";
import { PaperClipOutlined, PlusOutlined } from "@ant-design/icons";
import CSS from "./document-card.module.scss";

interface IDocumentCard {
  type: "upload" | "download";
  title: string;
  showDownload?: boolean;
  //
  onPANUpload?: Function;
  onAadharUpload?: Function;
  value: "pan" | "aadhar";
}

const DocumentCard = ({
  type,
  title,
  showDownload = false,
  value,
  onPANUpload = () => {},
  onAadharUpload = () => {},
}: IDocumentCard) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileInputChange = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileSelect = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (value === "pan") {
      onPANUpload(selectedFile);
    } else {
      onAadharUpload(selectedFile);
    }

    // Do something with the selected file (e.g., upload it or process it)
    console.log("Selected file:", selectedFile);
  };

  return (
    <div>
      {type === "upload" && (
        <div className={CSS.cs_custom_card_kyc} onClick={handleFileInputChange}>
          <div className="cs-dis-flex cs-jc-sb">
            <div className="cs-dis-flex">
              <div className={CSS.icon_upload_container}>
                <PlusOutlined />
              </div>
              <div className="cs-dis-flex cs-center cs-lm-5">
                <Typography.Title level={5}>{title}</Typography.Title>
              </div>
            </div>
            <div className="cs-dis-flex cs-center"></div>
          </div>
          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileSelect}
          />
        </div>
      )}

      {type === "download" && (
        <div className={CSS.cs_custom_card_kyc_download}>
          <div className="cs-dis-flex cs-jc-sb">
            <div className="cs-dis-flex">
              <div className={CSS.icon_download_container}>
                <PaperClipOutlined />
              </div>
              <div className="cs-dis-flex cs-center cs-lm-5">
                <Typography.Title level={5}>{title}</Typography.Title>
              </div>
            </div>

            <div className="cs-dis-flex cs-center">
              <Typography.Text className="cs-color-primary cs-pointer">
                Download
              </Typography.Text>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentCard;
