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
import { createNotification } from "../../../../../utils/notify";
import bg from "../../assets/bg.png";
import CSS from "../../step-1/current.form-container.module.scss";

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
    if (panFile.panFileValue.length && aadharFile.aadharFileValue.length) {
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
    } else {
      createNotification("error", {
        title: "Error",
        message: "Please complete the KYC first",
      });
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
        <Text className="cs-fw-500">{"Step 1"}</Text>
        <Text disabled className="cs-fw-500">
          {"Personal Details"}
        </Text>
      </Space>

      <Row className="cs-tm-30" gutter={[10, 10]}>
        <Col xl={2} xs={5}>
          <Space direction="vertical">
            <Text disabled className="cs-fw-500">
              Name
            </Text>

            <Text className="cs-fw-500">{pannelData.Full_Name}</Text>
          </Space>
        </Col>

        <Col xl={2} xs={5}>
          <Space direction="vertical">
            <Text disabled className="cs-fw-500">
              Gender
            </Text>

            <Text className="cs-fw-500">{pannelData.Gender}</Text>
          </Space>
        </Col>

        <Col xl={3} xs={5}>
          <Space direction="vertical">
            <Text disabled className="cs-fw-500">
              Date of Birth
            </Text>

            <Text className="cs-fw-500">{pannelData.DOB}</Text>
          </Space>
        </Col>

        <Col xl={5} xs={5}>
          <Space direction="vertical">
            <Text disabled className="cs-fw-500">
              Email
            </Text>

            <Text className="cs-fw-500">{pannelData.Username}</Text>
          </Space>
        </Col>

        <Col xl={5} xs={5}>
          <Space direction="vertical">
            <Text disabled className="cs-fw-500">
              Phone number
            </Text>

            <Text className="cs-fw-500">+91 {pannelData.Mobile_Number}</Text>
          </Space>
        </Col>
      </Row>

      <Row className="cs-tm-30">
        <Col xl={24} xs={24}>
          <Space direction="vertical">
            <Text disabled className="cs-fw-500">
              Permanent Address
            </Text>
            <Text className="cs-fw-500">{pannelData.Permanent_Address}</Text>
          </Space>
        </Col>
      </Row>

      <Divider className="cs-tm-40" />

      <div>
        <Text disabled className="cs-fw-500">
          {"KYC Details"}
        </Text>
      </div>
      <Row gutter={[20, 20]} className="cs-tm-10">
        <Col xl={5} xs={24}>
          <DocumentCard
            value="pan"
            type={panFile.panFileStatus}
            title="PAN Card"
            onPANUpload={onPANUpload}
          />
        </Col>

        <Col xl={5} xs={24}>
          <DocumentCard
            value="aadhar"
            type={aadharFile.aadharFileStatus}
            title="Aadhar Card"
            onAadharUpload={onAadharUpload}
          />
        </Col>
      </Row>
      <Row gutter={[20, 20]}>
        <Col xl={14} xs={24}></Col>
        <Col xl={2} xs={24}>
          <div className="cs-jc-end cs-dis-flex">
            <ButtonContinue clickEvent={handleOnNext} text="Next" />
          </div>
        </Col>
        <div>
          <img src={bg} alt="bg" className={CSS.current_form_bg_image} />
        </div>
      </Row>
    </div>
  );
};

export default Part0;
