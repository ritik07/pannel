import React from "react";
import ButtonContinue from "../../../button-continue/button-continue";
import CSS from "./step-2.module.scss";

interface IStep2Props {
  onContinue: Function;
  active: number;
}

const Step2 = ({ onContinue, active }: IStep2Props) => {
  const handleOnContinue = () => {
    onContinue(active);
  };
  return (
    <div>
      <ButtonContinue clickEvent={handleOnContinue} text="Continue" />
    </div>
  );
};

export default Step2;
