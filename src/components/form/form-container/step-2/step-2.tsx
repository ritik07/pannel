import React, { useEffect } from "react";
import { Row, Col, Space, Card, DatePicker, Typography, Form } from "antd";
import ButtonContinue from "../../../button-continue/button-continue";
import CSS from "./step-2.module.scss";
import { useDispatch } from "react-redux";
import { setProgress } from "../../../../redux/actions/tabProgress";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;

interface IStep2Props {
  onContinue?: Function;
  active?: number;
}

const Step2 = ({ onContinue = () => {}, active }: IStep2Props) => {
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(setProgress(3));
  }, []);

  const handleOnContinue = () => {
    if (true) {
      navigate("/claim/step-3");
      dispatch(setProgress(3));
    }
    // onContinue(active);
  };


  useEffect(() => {
    dispatch(setProgress(2));
  }, []);

  return (
    <div>
      <Text disabled className="cs-fw-500">
        {"Lorem ipsum dolor sit"}
      </Text>

      <Row gutter={[20, 20]} className="cs-tm-30">
        <Col span={7}>
          <Row>
            <Col span={15}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  {"Lorem"}
                </Text>

                <Text className="cs-fw-600">
                  {"Lorem ipsum dolor sit, dolor sit."}
                </Text>
              </Space>
            </Col>
          </Row>

          <Row gutter={[20, 20]} className="cs-tm-24">
            <Col span={8}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  {"Lorem"}
                </Text>

                <Text className="cs-fw-600">{"Lorem ipsum."}</Text>
              </Space>
            </Col>

            <Col span={2}></Col>

            <Col span={8}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  {"Lorem"}
                </Text>

                <Text className="cs-fw-600">{"Lorem ipsum."}</Text>
              </Space>
            </Col>
          </Row>

          <Row gutter={[20, 20]} className="cs-tm-24">
            <Col span={24}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  {"Lorem"}
                </Text>

                <Text className="cs-fw-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit dsad
                  sadsad dsa dsad dsa <br />
                  quam mollitia.
                  <br />
                </Text>
              </Space>
            </Col>
          </Row>
        </Col>

        <Col span={6}>
          <Typography.Title level={3}>
            {"Lorem ipsum dolor sit"}
          </Typography.Title>
          <Typography.Title level={5} disabled className="cs-fw-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography.Title>

          <Card className="cs-tm-20 cs-bg-fff">
            <Form>
              <Typography.Title level={5} disabled className="cs-fw-600">
                Lorem ipsum dolor sit amet adipisicing elit.
              </Typography.Title>
              <Form.Item>
                <DatePicker
                  className="cs-tm-8"
                  size="large"
                  style={{ width: "60%" }}
                />
              </Form.Item>
              <div className="cs-tm-30">
                <Typography.Title level={5} className="cs-fw-600">
                  Lorem ipsum dolor sit amet adipisicing elit.
                </Typography.Title>
              </div>
            </Form>
          </Card>
          <div className="cs-tm-40 cs-dis-flex cs-jc-end">
            <ButtonContinue clickEvent={handleOnContinue} text="Continue" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Step2;
