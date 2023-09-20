import React from "react";
import { BANK_LOGOS } from "./constant/banks";
import { Col, Row } from "antd";

const BankAds = () => {
  return (
    <div>
      <Row gutter={[0, 20]}>
        <Col span={4} className="cs-dis-flex cs-vt-center">
          <img src={BANK_LOGOS[0]} style={{ width: "80%" }} />
        </Col>
        <Col span={8} className="cs-dis-flex cs-vt-center">
          <img src={BANK_LOGOS[1]} style={{ width: "88%" }} />
        </Col>
        <Col span={8} className="cs-dis-flex cs-vt-center">
          <img src={BANK_LOGOS[2]} style={{ width: "50%" }} />
        </Col>
        <Col span={7} className="cs-dis-flex cs-vt-center">
          <img src={BANK_LOGOS[3]} style={{ width: "70%" }} />
        </Col>
        <Col span={6} className="cs-dis-flex cs-vt-center">
          <img src={BANK_LOGOS[4]} style={{ width: "70%" }} />
        </Col>
      </Row>
    </div>
  );
};

export default BankAds;
