import React, { useEffect } from "react";
import { Col, Row, Space, Typography } from "antd";
import SelectBankButton from "./select-bank-button/select-bank-button";
import ButtonContinue from "../../../../button-continue/button-continue";
import PriceView from "./price-view/price-view";
import { useDispatch, useSelector } from "react-redux";
import {
  setProgress,
  setNestedProgress,
  setPannelData,
} from "../../../../../redux/actions/tabProgress";
import { useNavigate } from "react-router-dom";
import bg from "../../assets/bg.png";
import CSS from "../../step-1/current.form-container.module.scss";

const { Text, Title } = Typography;

const Part2 = () => {
  /**
   * @initialize
   */
  const navigate = useNavigate();
  const dispatch: Function = useDispatch();

  /**
   * @selectors
   */
  const pannelData = useSelector((state: any) => state.pannelData.pannelData);

  useEffect(() => {
    dispatch(setNestedProgress(3));
    /**
     * @Logic clear editBank from session and redux once user comes here
     */
    let sessionUserData: any = sessionStorage.getItem("userData");
    let temp = JSON.parse(sessionUserData);
    sessionStorage.setItem(
      "userData",
      JSON.stringify({
        ...temp,
        editBank: undefined,
      })
    );
    /**
     * sync redux with session storage
     */
    dispatch(
      setPannelData({
        ...temp,
        editBank: undefined,
      })
    );
  }, []);

  const handleOnContinue = () => {
    if (true) {
      navigate("/claim/step-4");
      dispatch(setProgress(4));
    }
  };

  return (
    <div>
      <Space direction="vertical">
        <Text className="cs-fw-600">{"Step 2"}</Text>
        <Text disabled className="cs-fw-600">
          {"Bank details"}
        </Text>
      </Space>

      <Row className="cs-tm-30" gutter={[20, 20]}>
        <Col xl={6} sm={9} className="cs-tm-10">
          <div>
            <div>
              <Title level={4}>Select Bank</Title>
              <div className="cs-tm-20">
                <SelectBankButton bankData={pannelData.account_details} />
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

        <Col xl={7} sm={9} className="cs-tm-10">
          <PriceView policyData={pannelData.policy_details[0]} />
        </Col>
        <div>
          <img src={bg} alt="bg" className={CSS.current_form_bg_image} />
        </div>
      </Row>
    </div>
  );
};

export default Part2;
