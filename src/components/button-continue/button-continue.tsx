import React from "react";
import { Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import CSS from "./button-continue.module.scss";

const { Text } = Typography;

interface IButtonProps {
  clickEvent: Function;
  text: string;
}

const ButtonContinue = ({ clickEvent, text }: IButtonProps) => {
  return (
    <div
      className="cs-dis-flex cs-ai-end cs-cursor-pointer"
      onClick={() => clickEvent()}
    >
      <div className={CSS.current_form_continue}>
        <Text className="cs-fw-700">{text}</Text>
        <div className="cs-lm-5 cs-dis-flex cs-center">
          <RightOutlined />
        </div>
      </div>
    </div>
  );
};

export default ButtonContinue;
