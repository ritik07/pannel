import React, { useEffect } from "react";
import ButtonContinue from "../../../../button-continue/button-continue";
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
import BankAds from "../bank-ads";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setNestedProgress } from "../../../../../redux/actions/tabProgress";

const { Text, Title } = Typography;

const Part1 = () => {
  const dispatch: Function = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(setNestedProgress(1));
  }, []);

  const nestedProgress = useSelector(
    (state: any) => state.nestedTabProgress.nestedTabProgress
  );

  const [form] = Form.useForm();

  const handleOnNext = () => {
    if (true) {
      navigate("/claim/step-3/part-2");
      let temp = nestedProgress;
      dispatch(setNestedProgress(temp + 1));
    }
  };

  return (
    <div>
      <Space direction="vertical">
        <Text className="cs-fw-600">{"Step 2"}</Text>
        <Text disabled className="cs-fw-600">
          {"Lorem"}
        </Text>
      </Space>

      <Row className="cs-tm-30" gutter={[20, 20]}>
        <Col xl={7} sm={9} className="cs-tm-40">
          <div>
            <div>
              <Title level={4}>Secure Payment Setup</Title>
              <Text type="secondary" className="cs-fw-600">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut
                perferendis vitae est rem expedita minus autem, aut nostrum
                labore, odit quis quae quidem necessitatibus quaerat quam optio
                molestiae architecto eius. Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Beatae alias rem ut saepe, facere
                id, totam doloremque hic illum dignissimos sed molestias quaerat
                mollitia repellat quos odio aperiam eaque molestiae.
              </Text>

              <div className="cs-tm-20">
                <BankAds />
              </div>
            </div>
          </div>
        </Col>

        <Col xl={6} sm={6}>
          <Title level={4}>Add Bank Details</Title>
          <Card className="cs-tm-10 cs-bg-fff">
            <Form layout="vertical" form={form}>
              <Form.Item label="Name on the Account" required name={"name"}>
                <Input placeholder="Name on the account" />
              </Form.Item>

              <Form.Item
                label="Account Number"
                required
                name={"account_number"}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="Account number"
                />
              </Form.Item>

              <Form.Item
                label="Verify Account Number"
                required
                name={"verify_account_number"}
              >
                <InputNumber
                  style={{ width: "100%" }}
                  placeholder="Re-enter account number"
                />
              </Form.Item>

              <Form.Item name={"ifsc_cdoe"} label="IFSC Code" required>
                <Input placeholder="IFSC" />
              </Form.Item>
            </Form>

            <div className="cs-jc-end cs-dis-flex">
              <ButtonContinue clickEvent={handleOnNext} text="Next" />
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Part1;
