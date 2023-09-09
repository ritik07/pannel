import React, { useEffect } from "react";
import { Col, Row, Typography } from "antd";
import Uploader from "./uploader";
import CSS from "./step4.module.scss";
import {
  setProgress,
  setNestedProgress,
} from "../../../../redux/actions/tabProgress";
import { useDispatch } from "react-redux";

const Step4 = () => {
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(setProgress(4));
    dispatch(setNestedProgress(3));
  }, []);
  return (
    <div>
      <Typography.Text disabled className="cs-fw-600">
        {"Lorem"}
      </Typography.Text>

      <Row className="cs-tm-30" gutter={[20, 20]}>
        <Col xl={7} className="cs-rm-20 cs-tm-30">
          <Typography.Title level={4}>
            Lorem voluptatibus doloremque.
          </Typography.Title>

          <div className="cs-tm-20">
            <Typography.Text type="secondary">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
              tenetur eligendi perferendis sunt distinctio, saepe fugiat dolores
              repellendus minima odio.
            </Typography.Text>
          </div>

          <div className="cs-tm-20">
            <Typography.Text type="secondary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium fugit quis, nisi, assumenda ipsa exercitationem
              tenetur inventore esse libero voluptas officia dignissimos
              voluptates fuga hic adipisci expedita illo, corrupti temporibus.
            </Typography.Text>
          </div>
        </Col>

        <Col xl={10} className={CSS.cs_upload_wrapper}>
          <Uploader />
        </Col>
      </Row>
    </div>
  );
};

export default Step4;
