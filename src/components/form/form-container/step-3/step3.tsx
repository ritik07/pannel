import React, { useEffect } from "react";
import ButtonContinue from "../../../button-continue/button-continue";
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
import CSS from "./step-3.module.scss";
import BankAds from "./bank-ads";
import Part1 from "./part-1/part-1";
import Part2 from "./part-2/part-2";

const { Text, Title } = Typography;

interface IStep3Props {
  onContinue?: Function;
  active: number;
  setProgressValue: Function;
  progressValue: number;
}

const Step3 = ({
  onContinue = Function,
  active,
  setProgressValue,
  progressValue,
}: IStep3Props) => {
  useEffect(() => {
    setProgressValue(1);
  }, []);

  const handleOnContinue = () => {
    onContinue(active);
  };

  const handleOnNext = () => {
    setProgressValue(progressValue + 1);
  };

  return (
    <div>
      {progressValue === 1 && (
        <Part1
          active={active}
          progressValue={progressValue}
          setProgressValue={setProgressValue}
          handleOnNext={handleOnNext}
        />
      )}

      {progressValue === 2 && <Part2 handleOnContinue={handleOnContinue} />}
    </div>
  );
};

export default Step3;
