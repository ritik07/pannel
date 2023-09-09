import React from "react";
import { Checkbox, Col, Divider, Row, Typography } from "antd";
import CSS from "./ack.module.scss";
import { UserOutlined, FileOutlined } from "@ant-design/icons";
import ButtonContinue from "../../components/button-continue/button-continue";

const Ack = () => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  return (
    <div className={CSS.ack_container}>
      <div className={CSS.ack_title}>
        <Typography.Title className="cs-color-primary-1" level={3}>Lorem ipsum</Typography.Title>
      </div>
      <div>
        <div className="cs-dis-flex cs-center cs-vh-100">
          <div className={CSS.card_container}>
            <Row>
              <Col span={8}>
                <div className={CSS.left_pannel}>
                  <div>
                    <Typography.Title level={4} className="cs-color-secondary">
                      Lorem ipsum
                    </Typography.Title>

                    <Row gutter={[20, 20]} className="cs-tm-30">
                      <Col span={5}>
                        <div className="cs-dis-flex">
                          <div className={CSS.icon_wrapper}>
                            <UserOutlined style={{ fontSize: 20 }} />
                          </div>
                        </div>
                      </Col>
                      <Col span={19} className="cs-dis-flex cs-vt-center">
                        <Typography.Title level={3}>John Hu</Typography.Title>
                      </Col>
                    </Row>

                    <Row gutter={[10, 10]} className="cs-tm-20">
                      <Col span={5}>
                        <div className="cs-dis-flex">
                          <div className={CSS.icon_wrapper}>
                            <FileOutlined style={{ fontSize: 20 }} />
                          </div>
                        </div>
                      </Col>
                      <Col span={19} className="cs-dis-flex cs-vt-center">
                        <div>
                          <Typography.Title level={3}>
                            Lorizzel ID
                          </Typography.Title>
                          <Typography.Text>
                            # 4524-423-612-221-09
                          </Typography.Text>
                        </div>
                      </Col>
                    </Row>
                    <div className={CSS.date}>Date: {formattedDate}</div>
                  </div>
                </div>
              </Col>
              <Col span={16}>
                <div className={CSS.right_pannel}>
                  <div className="cs-tm-40">
                    <div>
                      <Typography.Text type="secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Labore ipsam expedita atque doloremque quia obcaecati
                        unde, eum possimus quasi nisi maxime sit, voluptatem
                        quam accusantium cupiditate, perferendis mollitia
                        numquam hic? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Fugiat saepe molestiae accusantium
                        vitae eius expedita? Repudiandae possimus minus debitis
                        vitae, nostrum aspernatur quia amet animi architecto
                        unde. Optio, fugiat facilis.
                      </Typography.Text>
                    </div>

                    <Divider className="cs-tm-40" />

                    <div className="cs-dis-flex">
                      <Checkbox />
                      <div className="cs-lm-10">
                        <Typography.Text>I Acknowledge</Typography.Text>
                      </div>
                    </div>

                    <div className="cs-tm-30">
                      <ButtonContinue clickEvent={() => {}} text="Continue" />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ack;
