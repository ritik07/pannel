import React, { useEffect } from "react";
import { Row, Col, Space, Form, Card, DatePicker } from "antd";
import CSS from "./current.form-container.module.scss";
import bg from "../assets/bg.png";
import { Typography } from "antd";
import ButtonContinue from "../../../button-continue/button-continue";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setProgress } from "../../../../redux/actions/tabProgress";

const { Text } = Typography;

interface ICurrentFormProps {
  onContinue?: Function;
  active?: number;
}

const CurrentForm = ({ onContinue = () => {}, active }: ICurrentFormProps) => {
  const navigate = useNavigate();

  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(setProgress(1));
  }, []);

  const handleOnContinue = () => {
    if (true) {
      navigate("/claim/step-3");
      dispatch(setProgress(2));
    }
  };

  return (
    <div>
      <Text disabled className="cs-fw-500">
        {"Lorem ipsum dolor sit"}
      </Text>
      <Row>
        <Col span={12}>
          <Row className="cs-tm-30">
            <Col span={8}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  {"Lorem"}
                </Text>

                <Text className="cs-fw-600">{"Lorem ipsum dolor sit"}</Text>
              </Space>
            </Col>

            <Col span={8}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  {"Lorem"}
                </Text>

                <Text className="cs-fw-600">{"Lorem ipsum dolor sit"}</Text>
              </Space>
            </Col>

            <Col span={8}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  {"Lorem"}
                </Text>

                <Text className="cs-fw-600">{"Lorem ipsum dolor sit"}</Text>
              </Space>
            </Col>
          </Row>

          <Row className="cs-tm-25">
            <Col span={8}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  {"Lorem"}
                </Text>

                <Text className="cs-fw-600">{"Lorem ipsum dolor sit"}</Text>
              </Space>
            </Col>

            <Col span={8}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  {"Lorem"}
                </Text>

                <Text className="cs-fw-600">{"Lorem ipsum dolor sit"}</Text>
              </Space>
            </Col>

            <Col span={8}>
              <Space direction="vertical">
                <Text disabled className="cs-fw-600">
                  {"Lorem"}
                </Text>

                <Text className="cs-fw-600">{"Lorem ipsum dolor sit"}</Text>
              </Space>
            </Col>
          </Row>
        </Col>

        <Col span={8}>
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
        </Col>
      </Row>
      <Row className="cs-tm-25">
        <Col span={20}>
          <Text disabled className="cs-fw-600">
            {"Lorem"}
          </Text>
          <div className="cs-dis-flex cs-jc-sb">
            <Text
              className="cs-fw-600"
              style={{ width: "300px", wordBreak: "break-all" }}
            >
              {
                "Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit. Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit."
              }
            </Text>

            <ButtonContinue clickEvent={handleOnContinue} text="Continue" />
          </div>
        </Col>

        <Col span={4}></Col>
        <div>
          <img src={bg} alt="bg" className={CSS.current_form_bg_image} />
        </div>
      </Row>
    </div>
  );
};

export default CurrentForm;
