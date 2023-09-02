import React from "react";
import { BankOutlined, PlusOutlined } from "@ant-design/icons";
import CSS from "./select-bank-button.module.scss";
import { Typography, Row, Col } from "antd";

interface IButtonCard {
  data: any[];
  active: number;
  onSelect: Function;
}

const { Text, Title } = Typography;

const ButtonCard = ({ data, active, onSelect }: IButtonCard) => {
  return (
    <div>
      {data.map((item) => {
        return (
          <Row className="cs-bm-20" key={item.id}>
            <Col
              span={20}
              onClick={() => onSelect(item.id)}
              className={`${
                active === item.id
                  ? CSS.cs_active_bank_card_container
                  : CSS.cs_bank_card_container
              } cs-cursor-pointer`}
            >
              <Row gutter={[20, 20]}>
                <Col span={4}>
                  <BankOutlined
                    className={
                      `${
                        active === item.id
                          ? CSS.cs_active_button
                          : CSS.cs_inactive_button
                      }` + " cs-fs-35"
                    }
                  />
                </Col>

                <Col
                  span={20}
                  className="cs-dis-flex cs-center cs-w-100 cs-jc-sb"
                >
                  <div>
                    <Title level={5}>{item.no}</Title>
                  </div>

                  <div className="cs-dis-flex">
                    <div className="cs-dis-flex cs-center">
                      <Title level={5}>{item.name}</Title>
                    </div>
                    <div
                      className={
                        `${
                          active === item.id
                            ? CSS.outer_radio_btn
                            : CSS.outer_radio_btn_inactive
                        }` + " cs-lm-10 cs-dis-flex cs-center"
                      }
                    >
                      <div
                        className={`${
                          active === item.id
                            ? CSS.radio_btn
                            : CSS.radio_btn_inactive
                        }`}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col className="cs-lm-20 cs-dis-flex cs-center">
              <Title level={5} className="cs-color-primary cs-cursor-pointer">
                Edit
              </Title>
            </Col>
          </Row>
        );
      })}

      <div>
        <Row className="cs-bm-20">
          <Col
            span={20}
            // onClick={() => onSelect(item.id)}
            className={`${CSS.cs_bank_card_container} cs-cursor-pointer`}
          >
            <Row gutter={[20, 20]}>
              <Col span={4}>
                <BankOutlined
                  className={`${CSS.cs_inactive_button}` + " cs-fs-35"}
                />
              </Col>

              <Col
                span={20}
                className="cs-dis-flex cs-center cs-w-100 cs-jc-sb"
              >
                <div>
                  <Title level={5}>{"Add Bank Account"}</Title>
                </div>

                <div className="cs-dis-flex">
                  <div
                    className={
                      `${CSS.cs_button_add_bank}` +
                      " cs-lm-10 cs-dis-flex cs-center"
                    }
                  >
                    <PlusOutlined className="cs-fs-22" />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ButtonCard;
