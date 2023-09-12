import React from "react";
import { Typography, Row, Col, Space, Card } from "antd";
import CSS from "./prive-view.module.scss";
import bg from "../../.../../../assets/bg.png";

const { Text, Title } = Typography;

interface IPriceView {
  policyData: any;
}

const PriceView = ({ policyData }: IPriceView) => {
  return (
    <div>
      <Col span={24}>
        <Space direction="vertical">
          <Title level={4}>Policy Details</Title>
        </Space>

        <div className="cs-tm-20">
          <Card className={CSS.container}>
            <Text>Brief about the policy.</Text>
            <div
              className={
                CSS.cs_feature_pricing_container + " cs-tm-20 cs-bm-20"
              }
            >
              <Row gutter={[20, 20]}>
                <Col span={12}>
                  <Space direction="vertical" className="cs-lm-10">
                    <Text className="cs-clr-fff cs-fw-700">Coverage time</Text>
                    <Text className="cs-clr-fff cs-fw-700">
                      {policyData.coverage}
                    </Text>
                  </Space>
                </Col>
                <Col span={11} className="cs-dis-flex cs-jc-end">
                  <Space direction="vertical">
                    <Text className="cs-clr-fff cs-fw-700">Premiun price</Text>
                    <Title level={3} className="cs-clr-fff cs-fw-700">
                      ₹{policyData.premium}
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
