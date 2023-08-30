import React from "react";
import { Row, Col, Space } from "antd";
import CSS from "./current.form-container.module.scss";
import bg from "./assets/bg.png";
import { RightOutlined } from "@ant-design/icons";
import { Typography } from "antd";

const { Title, Text } = Typography;

interface ICurrentFormProps {
  onContinue: Function;
  active: number;
}

const CurrentForm = ({ onContinue, active }: ICurrentFormProps) => {
  const handleOnContinue = () => {
    onContinue(active);
  };

  return (
    <div>
      <Text disabled className="cs-fw-500">
        {"Lorem ipsum dolor sit"}
      </Text>
      <Row className="cs-tm-30">
        <Col span={5}>
          <Space direction="vertical">
            <Text disabled className="cs-fw-600">
              {"Lorem"}
            </Text>

            <Text className="cs-fw-600">{"Lorem ipsum dolor sit"}</Text>
          </Space>
        </Col>

        <Col span={5}>
          <Space direction="vertical">
            <Text disabled className="cs-fw-600">
              {"Lorem"}
            </Text>

            <Text className="cs-fw-600">{"Lorem ipsum dolor sit"}</Text>
          </Space>
        </Col>

        <Col span={5}>
          <Space direction="vertical">
            <Text disabled className="cs-fw-600">
              {"Lorem"}
            </Text>

            <Text className="cs-fw-600">{"Lorem ipsum dolor sit"}</Text>
          </Space>
        </Col>
      </Row>

      <Row className="cs-tm-25">
        <Col span={5}>
          <Space direction="vertical">
            <Text disabled className="cs-fw-600">
              {"Lorem"}
            </Text>

            <Text className="cs-fw-600">{"Lorem ipsum dolor sit"}</Text>
          </Space>
        </Col>

        <Col span={5}>
          <Space direction="vertical">
            <Text disabled className="cs-fw-600">
              {"Lorem"}
            </Text>

            <Text className="cs-fw-600">{"Lorem ipsum dolor sit"}</Text>
          </Space>
        </Col>

        <Col span={5}>
          <Space direction="vertical">
            <Text disabled className="cs-fw-600">
              {"Lorem"}
            </Text>

            <Text className="cs-fw-600">{"Lorem ipsum dolor sit"}</Text>
          </Space>
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

            <div className={"cs-dis-flex cs-ai-end cs-cursor-pointer"} onClick={handleOnContinue}>
              <div className={CSS.current_form_continue}>
                <Text>Continue</Text>
                <div className="cs-lm-5 cs-dis-flex cs-center">
                  <RightOutlined />
                </div>
              </div>
            </div>
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
