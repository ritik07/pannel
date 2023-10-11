import React from "react";
import { Checkbox, Col, Divider, Row, Typography } from "antd";
import CSS from "./ack.module.scss";
import { UserOutlined, FileOutlined } from "@ant-design/icons";
import ButtonContinue from "../../components/button-continue/button-continue";
import bg from "../../components/form/form-container/assets/bg.png";

const Ack = () => {
  const currentDate = new Date();
  const day = String(currentDate.getDate()).padStart(2, "0");
  const month = String(currentDate.getMonth() + 1).padStart(2, "0");
  const year = currentDate.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  return (
    <div className={CSS.ack_container}>
      <div className={CSS.ack_title}>
        <Typography.Title className="cs-color-primary-1" level={3}>
          Lorem ipsum
        </Typography.Title>
      </div>
      <div>
        <div className="cs-dis-flex cs-center cs-pos-rel">
          <Row className={CSS.card_container} gutter={[20, 20]}>
            <Col className={CSS.left_pannel} xl={9} xs={24}>
              <div className={CSS.m_l_30}>
                <Typography.Title level={4} className="cs-color-secondary">
                  Lorem ipsum
                </Typography.Title>

                <Row gutter={[20, 20]} className="cs-tm-30">
                  <Col xl={5}>
                    <div className="cs-dis-flex">
                      <div className={CSS.icon_wrapper}>
                        <UserOutlined style={{ fontSize: 20 }} />
                      </div>
                    </div>
                  </Col>
                  <Col xl={19} className="cs-dis-flex cs-vt-center">
                    <Typography.Title level={3}>John Hu</Typography.Title>
                  </Col>
                </Row>

                <Row gutter={[10, 10]} className="cs-tm-20">
                  <Col xl={5}>
                    <div className="cs-dis-flex">
                      <div className={CSS.icon_wrapper}>
                        <FileOutlined style={{ fontSize: 20 }} />
                      </div>
                    </div>
                  </Col>
                  <Col xl={19} className="cs-dis-flex cs-vt-center">
                    <div>
                      <Typography.Title level={3}>Lorizzel ID</Typography.Title>
                      <Typography.Text># 4524-423-612-221-09</Typography.Text>
                    </div>
                  </Col>
                </Row>
                <div className={CSS.date}>Date: {formattedDate}</div>
              </div>
            </Col>
            <Col xl={15} xs={24}>
              <div className={CSS.right_pannel}>
                <div className="cs-tm-40">
                  <div>
                    <Typography.Text type="secondary">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Labore ipsam expedita atque doloremque quia obcaecati
                      unde, eum possimus quasi nisi maxime sit, voluptatem quam
                      accusantium cupiditate, perferendis mollitia numquam hic?
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fugiat saepe molestiae accusantium
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
                    <ButtonContinue
                      clickEvent={() => {
                        sessionStorage.clear();
                      }}
                      text="Continue"
                    />
                  </div>
                </div>
              </div>
            </Col>
          </Row>
          <img className={CSS.cs_bg_image} src={bg} />
        </div>
      </div>

      <div className={CSS.cs_left_bottom_semi_raduis}></div>
      <div className={CSS.cs_right_bottom_semi_raduis}></div>
      <div className={CSS.cs_right_1_bottom_semi_raduis}></div>
    </div>
  );
};

export default Ack;
