import React, { useEffect, useState } from "react";
import { Row, Col, Space, Form, Card, DatePicker } from "antd";
import CSS from "./current.form-container.module.scss";
import bg from "../assets/bg.png";
import { Typography } from "antd";
import ButtonContinue from "../../../button-continue/button-continue";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setPannelData,
  setProgress,
} from "../../../../redux/actions/tabProgress";
import moment from "moment";
import dayjs from "dayjs";
import Spinner from "../../../spinner/spinner";
import { createNotification } from "../../../../utils/notify";

const { Text } = Typography;

const CurrentForm = () => {
  const navigate = useNavigate();
  const pannelData = useSelector((state: any) => state.pannelData.pannelData);
  const [formData, setFormData] = useState<any>({});

  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(setProgress(1));
    if (pannelData.memoData) {
      console.log("pannelData", pannelData);
      console.log("setting from memo data", pannelData.memoData);
      setFormData(pannelData.memoData);
    }
  }, [pannelData, dispatch]);

  const handleOnContinue = () => {
    if (pannelData.memoData) {
      navigate("/claim/step-3");
      dispatch(setProgress(2));
    } else {
      createNotification("error", {
        title: "Error",
        message: "Please select tranistion date",
      });
    }
  };

  const getCompanyDetail = () => {
    let result = pannelData.employment_details.filter(
      (x: any) => x.status === "A"
    );
    return result[0];
  };

  const handleTransitionDate = (event: moment.Moment | null) => {
    // Check if event is not null (user selected a date)
    if (event) {
      let tranistionDate = event.toISOString(); // Convert the date to ISO format
      // Retrieve and update the user data from sessionStorage
      let sessionUserData: any = sessionStorage.getItem("userData");

      /**
       * @action - update session storage and sync it with redux dispatch
       */
      let temp = JSON.parse(sessionUserData);
      if (sessionUserData) {
        sessionStorage.setItem(
          "userData",
          JSON.stringify({
            ...temp,
            memoData: { tranistion_data: tranistionDate },
          })
        );
      }
      /**
       * sync redux with session storage
       */
      dispatch(
        setPannelData({
          ...temp,
          memoData: { tranistion_data: tranistionDate },
        })
      );
    }
  };

  return pannelData ? (
    <div>
      <Text disabled className="cs-fw-500">
        {"Your Employment Details"}
      </Text>
      <Row gutter={[10, 10]}>
        <Col xl={13} xs={24}>
          <Row gutter={[20, 20]} className="cs-tm-30">
            <Col xl={9} xs={9}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  {"Company Name"}
                </Text>

                <Text className="cs-fw-600">
                  {getCompanyDetail().companyDetails[0].name}
                </Text>
              </Space>
            </Col>
            <Col xl={1} xs={1}></Col>
            <Col xl={4} xs={4}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  Manager Name
                </Text>

                <Text className="cs-fw-600">
                  {getCompanyDetail().Manager_Name}
                </Text>
              </Space>
            </Col>
            <Col xl={3} xs={3}></Col>

            <Col xl={7} xs={7}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  Human Resources Personnel
                </Text>

                <Text className="cs-fw-600">{getCompanyDetail().Hr_Name}</Text>
              </Space>
            </Col>
          </Row>

          <Row gutter={[20, 20]} className="cs-tm-25">
            <Col xl={5} xs={8}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  Employment Type
                </Text>

                <Text className="cs-fw-600">
                  {getCompanyDetail().Employment_Type}
                </Text>
              </Space>
            </Col>

            <Col xl={5} xs={8}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  Joining Month
                </Text>

                <Text className="cs-fw-600">
                  {getCompanyDetail().Joining_Date}
                </Text>
              </Space>
            </Col>

            <Col xl={7} xs={10}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  Manager Contact Details
                </Text>

                <Text className="cs-fw-600">
                  {getCompanyDetail().Manager_Email}
                </Text>
              </Space>
            </Col>

            <Col xl={7} xs={7}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  HR Contact Details
                </Text>

                <Text className="cs-fw-600">
                  {getCompanyDetail().Manager_Email}
                </Text>
              </Space>
            </Col>
          </Row>

          <Row className="cs-tm-25">
            <Col xl={24} xs={24}>
              <Text disabled className="cs-fw-600">
                Workspace Address
              </Text>
              <div style={{ width: "330px" }}>
                <Text
                  className="cs-fw-600"
                  style={{ width: "300px", wordBreak: "break-all" }}
                >
                  {getCompanyDetail().companyDetails[0].address}
                </Text>
              </div>
            </Col>
          </Row>
        </Col>

        <Col xl={9} xs={24}>
          <Typography.Title level={3} className="cs-fw-600">
            Employment Transition Date
          </Typography.Title>
          <Typography.Title level={5} type="secondary" className="cs-fw-600">
            A Step Towards New Beginnings
          </Typography.Title>
          <Card className="cs-tm-20 cs-bg-fff">
            <Form>
              <Typography.Title level={5} disabled className="cs-fw-600">
                {/* {formData.metaData.tranistion_date} */}
                Employment Transition Date
              </Typography.Title>
              <Form.Item>
                <DatePicker
                  value={
                    pannelData["memoData"] &&
                    pannelData["memoData"].tranistion_data
                      ? dayjs(pannelData["memoData"].tranistion_data)
                      : undefined
                  }
                  defaultValue={undefined}
                  format={"DD/MM/YYYY"}
                  onChange={(e: any) => handleTransitionDate(e)}
                  className="cs-tm-8"
                  size="large"
                  style={{ width: "60%" }}
                />
              </Form.Item>
              <div className="cs-tm-30">
                <Typography.Text className="cs-fw-600">
                  We're here to support you on your path to new opportunites
                </Typography.Text>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
      <Row className="cs-tm-25">
        <Col xl={22} xs={22}>
          {/* <Text disabled className="cs-fw-600">
            Workspace Address
          </Text> */}
          <div className="cs-dis-flex cs-jc-sb">
            <div></div>
            {/* <Text
              className="cs-fw-600"
              style={{ width: "300px", wordBreak: "break-all" }}
            >
              {getCompanyDetail().companyDetails[0].address}
            </Text> */}

            <ButtonContinue clickEvent={handleOnContinue} text="Continue" />
          </div>
        </Col>

        <Col xl={2} xs={2}></Col>
        <div>
          <img src={bg} alt="bg" className={CSS.current_form_bg_image} />
        </div>
      </Row>
    </div>
  ) : (
    <Spinner />
  );
};

export default CurrentForm;
