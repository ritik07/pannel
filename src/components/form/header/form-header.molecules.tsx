import React from "react";
import CSS from "./form-header.molecules.module.scss";
import { Typography } from "antd";

const { Title } = Typography;

const FormHeader = () => {
  return (
    <div>
      <div className={CSS.header_container}>
        <div>
          <Title level={3}>Lorizzel ipizzel</Title>
          <Title className="cs-color-primary" level={3}>
            Dorizzel sit
          </Title>
        </div>
        <div className="cs-dis-flex cs-ai-end">
          <Title level={5}>ID #0108-12223-4</Title>
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
