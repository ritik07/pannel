import React, { useState, useEffect } from "react";
import { Col, Divider, Form, Row, Space, Typography } from "antd";
import DocumentCard from "./document-card/document-card";
import ButtonContinue from "../../../../button-continue/button-continue";
import {
  setNestedProgress,
  setPannelData,
} from "../../../../../redux/actions/tabProgress";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const { Text, Title } = Typography;

const Part0 = () => {
  /**
   * @initialize
   */
  const dispatch: Function = useDispatch();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  /**
   * @selectors
   */
  const nestedProgress = useSelector(
    (state: any) => state.nestedTabProgress.nestedTabProgress
  );
  const pannelData = useSelector((state: any) => state.pannelData.pannelData);

  /**
   * @state
   */
  const [panFile, setPanFile] = useState<{
    panFileValue: string;
    panFileStatus: "upload" | "download";
  }>({
    panFileValue: "",
    panFileStatus: "upload",
  });

  const [aadharFile, setAadharFile] = useState<{
    aadharFileValue: string;
    aadharFileStatus: "upload" | "download";
  }>({
    aadharFileValue: "",
    aadharFileStatus: "upload",
  });

  /**
   * @Effects
   */
  useEffect(() => {
    let documentDetail = pannelData["document_details"];
    if (documentDetail.length) {
      let pan = documentDetail.find((x: { name: string }) => x?.name === "PAN");
      let aadhar = documentDetail.find(
        (x: { name: string }) => x?.name === "AADHAR"
      );

      if (pan) {
        setPanFile({
          panFileStatus: "download",
          panFileValue: pan?.link,
        });
      }

      if (aadhar) {
        setAadharFile({
          aadharFileStatus: "download",
          aadharFileValue: aadhar?.link,
        });
      }
    }
  }, []);

  /**
   * @Functions
   */
  const handleOnNext = () => {
    if (true) {
      /**
       * @Logic if account details is there then skip the add account screen move to part 2
       */
      if (pannelData.account_details.length) {
        navigate("/claim/step-3/part-2");
        let temp = nestedProgress;
        dispatch(setNestedProgress(temp + 2));
      } else {
        navigate("/claim/step-3/part-1");
        let temp = nestedProgress;
        dispatch(setNestedProgress(temp + 1));
      }
    }
  };

  const onPANUpload = async (fileObj: any) => {
    let response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        );
      }, 1500);
    });
    // Retrieve and update the user data from sessionStorage
    let sessionUserData: any = sessionStorage.getItem("userData");

    if (response) {
      setPanFile((rest) => ({
        ...rest,
        panFileValue: fileObj.name,
        panFileStatus: "download",
      }));

      /**
       * @action - update session storage and sync it with redux dispatch
       */
      let temp = JSON.parse(sessionUserData);
      sessionStorage.setItem(
        "userData",
        JSON.stringify({
          ...temp,
          document_details: [
            ...temp["document_details"],
            {
              name: "PAN",
              link: response,
            },
          ],
        })
      );
    }
  };

  const onAadharUpload = async (fileObj: any) => {
    let response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
        );
      }, 1500);
    });
    // Retrieve and update the user data from sessionStorage
    let sessionUserData: any = sessionStorage.getItem("userData");

    if (response) {
      setAadharFile((rest) => ({
        ...rest,
        aadharFileValue: fileObj.name,
        aadharFileStatus: "download",
      }));

      /**
       * @action - update session storage and sync it with redux dispatch
       */
      let temp = JSON.parse(sessionUserData);
      sessionStorage.setItem(
        "userData",
        JSON.stringify({
          ...temp,
          document_details: [
            ...temp["document_details"],
            {
              name: "AADHAR",
              link: response,
            },
          ],
        })
      );
    }
  };

  return (
    <div>
      <Space direction="vertical">
        <Text className="cs-fw-600">{"Step 1"}</Text>
        <Text disabled className="cs-fw-600">
          {"Personal Details"}
        </Text>
      </Space>

      <Row className="cs-tm-30" gutter={[10, 10]}>
        <Col span={2}>
          <Title level={5} type="secondary">
            Name
          </Title>

          <Title level={5}>{pannelData.Full_Name}</Title>
        </Col>

        <Col span={2}>
          <Title level={5} type="secondary">
            Gender
          </Title>

          <Title level={5}>{pannelData.Gender}</Title>
        </Col>

        <Col span={3}>
          <Title level={5} type="secondary">
            Date of Birth
          </Title>

          <Title level={5}>{pannelData.DOB}</Title>
        </Col>

        <Col span={5}>
          <Title level={5} type="secondary">
            Email
          </Title>

          <Title level={5}>{pannelData.Username}</Title>
        </Col>

        <Col span={5}>
          <Title level={5} type="secondary">
            Phone number
          </Title>

          <Title level={5}>+91 {pannelData.Mobile_Number}</Title>
        </Col>
      </Row>

      <Row className="cs-tm-30">
        <Col span={24}>
          <Title level={5} disabled>
            Permanent Address
          </Title>
          <Title level={5}>{pannelData.Permanent_Address}</Title>
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
            title="Aadhar Card"
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
