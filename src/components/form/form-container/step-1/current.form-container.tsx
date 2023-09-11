import React, { useEffect, useState } from "react";
import { Row, Col, Space, Form, Card, DatePicker } from "antd";
import CSS from "./current.form-container.module.scss";
import bg from "../assets/bg.png";
import { Typography } from "antd";
import ButtonContinue from "../../../button-continue/button-continue";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setProgress } from "../../../../redux/actions/tabProgress";

const { Text } = Typography;

const CurrentForm = () => {
  const navigate = useNavigate();
  const pannelData = useSelector((state: any) => state.pannelData.pannelData);

  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(setProgress(1));
    console.log("pannelData", pannelData);
  }, [pannelData, dispatch]);

  const handleOnContinue = () => {
    if (true) {
      navigate("/claim/step-3");
      dispatch(setProgress(2));
    }
  };

  const getCompanyDetail = () => {
    let result = pannelData.employment_details.filter(
      (x: any) => x.status === "A"
    );
    return result[0];
  };

  return (
    <div>
      <Text disabled className="cs-fw-500">
        {"Your Employment Details"}
      </Text>
      <Row gutter={[20, 20]}>
        <Col span={13}>
          <Row className="cs-tm-30">
            <Col span={9}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  {"Company Name"}
                </Text>

                <Text className="cs-fw-600">
                  {getCompanyDetail().companyDetails[0].name}
                </Text>
              </Space>
            </Col>
            <Col span={1}></Col>
            <Col span={4}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  Manager Name
                </Text>

                <Text className="cs-fw-600">
                  {getCompanyDetail().Manager_Name}
                </Text>
              </Space>
            </Col>
            <Col span={3}></Col>

            <Col span={7}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  Human Resources Personnel
                </Text>

                <Text className="cs-fw-600">{getCompanyDetail().Hr_Name}</Text>
              </Space>
            </Col>
          </Row>

          <Row className="cs-tm-25">
            <Col span={5}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  Employment Type
                </Text>

                <Text className="cs-fw-600">
                  {getCompanyDetail().Employment_Type}
                </Text>
              </Space>
            </Col>

            <Col span={5}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  Joining Month
                </Text>

                <Text className="cs-fw-600">
                  {getCompanyDetail().Joining_Date}
                </Text>
              </Space>
            </Col>

            <Col span={7}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  Manager Contact Details
                </Text>

                <Text className="cs-fw-600">
                  {getCompanyDetail().Manager_Email}
                </Text>
              </Space>
            </Col>

            <Col span={7}>
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
            <Col span={24}>
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

        <Col span={9}>
          <Typography.Title level={3} className="cs-fw-600">
            Employment Transition Date
          </Typography.Title>
          <Typography.Title level={5} type="secondary" className="cs-fw-600">
            A Step Towards New Beginnings
          </Typography.Title>
          <Card className="cs-tm-20 cs-bg-fff">
            <Form>
              <Typography.Title level={5} disabled className="cs-fw-600">
                Employment Transition Date
              </Typography.Title>
              <Form.Item>
                <DatePicker
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
        <Col span={22}>
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

        <Col span={2}></Col>
        <div>
          <img src={bg} alt="bg" className={CSS.current_form_bg_image} />
        </div>
      </Row>
    </div>
  );
};

export default CurrentForm;
