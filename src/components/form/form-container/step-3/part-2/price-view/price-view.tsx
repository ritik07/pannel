import React from "react";
import { Typography, Row, Col, Space, Card } from "antd";
import CSS from "./prive-view.module.scss";
import bg from "../../.../../../assets/bg.png";

const { Text, Title } = Typography;

const PriceView = () => {
  return (
    <div>
      <Col span={24}>
        <Space direction="vertical">
          <Title level={4}>Lorem ipsum dolor</Title>
        </Space>

        <div className="cs-tm-20">
          <Card className={CSS.container}>
            <Text>Dolizzle ipsum, consectetur.</Text>
            <div className={CSS.cs_feature_pricing_container + " cs-tm-20 cs-bm-20"}>
              <Row gutter={[20, 20]}>
                <Col span={12}>
                  <Space direction="vertical" className="cs-lm-10">
                    <Text className="cs-clr-fff cs-fw-700">Lorem ipsum</Text>
                    <Text className="cs-clr-fff cs-fw-700">
                      Sit amet, consectetur
                    </Text>
                  </Space>
                </Col>
                <Col span={11} className="cs-dis-flex cs-jc-end">
                  <Space direction="vertical">
                    <Text className="cs-clr-fff cs-fw-700">Dolor sit</Text>
                    <Title level={3} className="cs-clr-fff cs-fw-700">
                      ₹2,736
                    </Title>
                  </Space>
                </Col>
              </Row>
            </div>
            <img className={CSS.cs_bg_image} src={bg} />
          </Card>
        </div>
      </Col>
    </div>
  );
};

export default PriceView;
