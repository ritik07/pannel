import React from "react";
import {
  Card,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Space,
  Typography,
} from "antd";
import SelectBankButton from "./select-bank-button/select-bank-button";
import ButtonContinue from "../../../../button-continue/button-continue";
import PriceView from "./price-view/price-view";

const { Text, Title } = Typography;

interface IPart2 {
  handleOnContinue: Function;
}

const Part2 = ({ handleOnContinue }: IPart2) => {
  return (
    <div>
      <Space direction="vertical">
        <Text className="cs-fw-600">{"Step 2"}</Text>
        <Text disabled className="cs-fw-600">
          {"Bank details"}
        </Text>
      </Space>

      <Row className="cs-tm-30" gutter={[20, 20]}>
        <Col xl={6} sm={9} className="cs-tm-40">
          <div>
            <div>
              <Title level={4}>Select Bank</Title>
              <div className="cs-tm-20">
                <SelectBankButton />
              </div>
            </div>
            <Row>
              <Col span={20}>
                <div className="cs-tm-40 cs-jc-end cs-dis-flex">
                  <ButtonContinue
                    clickEvent={() => handleOnContinue()}
                    text="Continue"
                  />
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col span={1}></Col>

        <Col xl={7} sm={9} className="cs-tm-40">
          <PriceView />
        </Col>
      </Row>
    </div>
  );
};

export default Part2;
