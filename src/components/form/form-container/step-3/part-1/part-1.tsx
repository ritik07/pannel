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
import { createNotification } from "../../../../../utils/notify";

const { Text, Title } = Typography;

const Part1 = () => {
  /**
   * @initialize
   */
  const dispatch: Function = useDispatch();
  const navigate = useNavigate();

  /**
   * @selectors
   */
  const nestedProgress = useSelector(
    (state: any) => state.nestedTabProgress.nestedTabProgress
  );
  const pannelData = useSelector((state: any) => state.pannelData.pannelData);

  function maskingString(str: string, start: number, end: number) {
    if (
      !str ||
      start < 0 ||
      start >= str.length ||
      end < 0 ||
      end > str.length ||
      start >= end
    ) {
      return str;
    }
    const maskLength = end - start;
    const maskedStr =
      str.substring(0, start) + "*".repeat(maskLength) + str.substring(end);
    return maskedStr;
  }

  useEffect(() => {
    dispatch(setNestedProgress(1));
    /**
     * @Logic check if it is edit mode
     */
    let isEdit = pannelData.editBank;
    if (isEdit) {
      isEdit.Account_Number = maskingString(
        isEdit.Account_Number,
        0,
        isEdit.Account_Number.length - 3
      );
      form.setFieldsValue(pannelData.editBank);
      form.setFieldsValue({
        Account_Number_Verify: pannelData.editBank.Account_Number,
      });
    }
  }, []);

  const [form] = Form.useForm();

  const handleOnNext = async () => {
    let formResponse = form.getFieldsValue();
    for (const property in formResponse) {
      if (!formResponse[property]) {
        createNotification("error", {
          title: "Error",
          message: "All fields are mandatory",
        });
        return;
      }
    }
    navigate("/claim/step-3/part-2");
    let temp = nestedProgress;
    dispatch(setNestedProgress(temp + 1));
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
              <Form.Item
                label="Name on the Account"
                required
                name={"Account_Name"}
              >
                <Input placeholder="Name on the account" />
              </Form.Item>

              <Form.Item
                label="Account Number"
                required
                name={"Account_Number"}
              >
                <Input style={{ width: "100%" }} placeholder="Account number" />
              </Form.Item>

              <Form.Item
                label="Verify Account Number"
                required
                name={"Account_Number_Verify"}
              >
                <Input
                  style={{ width: "100%" }}
                  placeholder="Re-enter account number"
                />
              </Form.Item>

              <Form.Item name={"Ifsc_Code"} label="IFSC Code" required>
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
