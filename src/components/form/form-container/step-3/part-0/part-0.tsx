import React, { useState } from "react";
import { Col, Divider, Form, Row, Space, Typography } from "antd";
import DocumentCard from "./document-card/document-card";
import ButtonContinue from "../../../../button-continue/button-continue";

const { Text, Title } = Typography;

interface IStep3Props {
  onContinue?: Function;
  active: number;
  setProgressValue: Function;
  progressValue: number;
  handleOnNext: Function;
}

const Part0 = ({
  onContinue = Function,
  active,
  setProgressValue,
  progressValue,
  handleOnNext,
}: IStep3Props) => {
  const [form] = Form.useForm();

  const [panFile, setPanFile] = useState<{
    panFileValue: string;
    panFileStatus: "upload" | "download";
  }>({
    panFileValue: "",
    panFileStatus: "upload",
  });

  // useEffect(() => {
  //   console.log("panFile", panFile);
  // });

  const [aadharFile, setAadharFile] = useState<{
    aadharFileValue: string;
    aadharFileStatus: "upload" | "download";
  }>({
    aadharFileValue: "",
    aadharFileStatus: "upload",
  });

  const onPANUpload = async (fileObj: any) => {
    let response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 100);
    });

    if (response) {
      setPanFile((rest) => ({
        ...rest,
        panFileValue: fileObj.name,
        panFileStatus: "download",
      }));
    }
  };

  const onAadharUpload = async (fileObj: any) => {
    let response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(true);
      }, 100);
    });

    if (response) {
      setAadharFile((rest) => ({
        ...rest,
        aadharFileValue: fileObj.name,
        aadharFileStatus: "download",
      }));
    }
  };

  return (
    <div>
      <Space direction="vertical">
        <Text className="cs-fw-600">{"Step 1"}</Text>
        <Text disabled className="cs-fw-600">
          {"Lorem"}
        </Text>
      </Space>

      <Row className="cs-tm-30" gutter={[10, 10]}>
        <Col span={2}>
          <Title level={5} type="secondary">
            lorem
          </Title>

          <Title level={5}>John HU</Title>
        </Col>

        <Col span={2}>
          <Title level={5} type="secondary">
            lorem
          </Title>

          <Title level={5}>Male</Title>
        </Col>

        <Col span={2}>
          <Title level={5} type="secondary">
            lorem
          </Title>

          <Title level={5}>06-02-1992</Title>
        </Col>

        <Col span={4}>
          <Title level={5} type="secondary">
            lorem
          </Title>

          <Title level={5}>JohnHU@testmail.com</Title>
        </Col>

        <Col span={4}>
          <Title level={5} type="secondary">
            lorem
          </Title>

          <Title level={5}>+91 9834571290</Title>
        </Col>
      </Row>

      <Row className="cs-tm-30">
        <Col span={24}>
          <Title level={5} disabled>
            Lorem, ipsum
          </Title>
          <Title level={5}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro
            inventore pariatur animi, ommodi dicta reprehenderit, India.
          </Title>
        </Col>
      </Row>

      <Divider className="cs-tm-40" />

      <div>
        <Text disabled className="cs-fw-600">
          {"KYC Details"}
        </Text>
      </div>
      <Row gutter={[20, 20]} className="cs-tm-10">
        <Col span={5}>
          <DocumentCard
            value="pan"
            type={panFile.panFileStatus}
            title="PAN Card"
            onPANUpload={onPANUpload}
          />
        </Col>

        <Col span={5}>
          <DocumentCard
            value="aadhar"
            type={aadharFile.aadharFileStatus}
            title="Add Aadhar Card"
            onAadharUpload={onAadharUpload}
          />
        </Col>
      </Row>
      <Row>
        <Col span={14}></Col>
        <Col span={2}>
          <div className="cs-jc-end cs-dis-flex">
            <ButtonContinue clickEvent={handleOnNext} text="Next" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Part0;
