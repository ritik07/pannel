import React from "react";
import TextAtom from "../../common/text/text";
import { Row, Col } from "antd";
import CSS from "./current.form-container.module.scss";
import bg from "./assets/bg.png";
import { ArrowRightOutlined } from "@ant-design/icons";

const CurrentForm = () => {
  return (
    <div>
      <TextAtom text="Lorem ipsum dolor sit" type="label" />
      <Row>
        <Col span={5}>
          <TextAtom text="Lorem" type="heading-label" className="cs-tm-20" />
          <TextAtom
            text="Lorem ipsum dolor sit"
            type="heading"
            className="cs-tm-6"
          />
        </Col>

        <Col span={5}>
          <TextAtom text="Lorem" type="heading-label" className="cs-tm-20" />
          <TextAtom
            text="Lorem ipsum dolor sit"
            type="heading"
            className="cs-tm-6"
          />
        </Col>

        <Col span={5}>
          <TextAtom text="Lorem" type="heading-label" className="cs-tm-20" />
          <TextAtom
            text="Lorem ipsum dolor sit"
            type="heading"
            className="cs-tm-6"
          />
        </Col>
      </Row>

      <Row className="cs-tm-10">
        <Col span={5}>
          <TextAtom text="Lorem" type="heading-label" className="cs-tm-20" />
          <TextAtom
            text="Lorem ipsum dolor sit"
            type="heading"
            className="cs-tm-6"
          />
        </Col>

        <Col span={5}>
          <TextAtom text="Lorem" type="heading-label" className="cs-tm-20" />
          <TextAtom
            text="Lorem ipsum dolor sit"
            type="heading"
            className="cs-tm-6"
          />
        </Col>

        <Col span={5}>
          <TextAtom text="Lorem" type="heading-label" className="cs-tm-20" />
          <TextAtom
            text="Lorem ipsum dolor sit"
            type="heading"
            className="cs-tm-6"
          />
        </Col>
      </Row>

      <Row>
        <Col span={20}>
          <TextAtom text="Lorem" type="heading-label" className="cs-tm-20" />
          <div className="cs-dis-flex cs-jc-sb">
            <TextAtom
              style={{ width: "300px", wordBreak: "breakAll" }}
              text="Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit. Lorem ipsum dolor sit lorem ipsum dolor sit lorem ipsum dolor sit."
              type="heading"
              className="cs-tm-6"
            />

            <div className={"cs-dis-flex cs-ai-end"}>
              <div className={CSS.current_form_continue}>Continue</div>
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
