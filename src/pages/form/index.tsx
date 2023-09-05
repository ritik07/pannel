import React, { useState, useEffect } from "react";
import CSS from "./form.page.module.scss";
import FormHeader from "../../components/form/header/form-header.molecules";
import FormTab from "../../components/form/tab/tabs";
import { ITEMS } from "./constant/form.constant";
import CurrentForm from "../../components/form/form-container/step-1/current.form-container";
import Step2 from "../../components/form/form-container/step-2/step-2";
import Step3 from "../../components/form/form-container/step-3/step3";
import Step4 from "../../components/form/form-container/step-4/step4";

export const Form = () => {
  const [active, setActive] = useState(1);
  const [progressValue, setProgressValue] = useState(0);

  const handleTabClick = (value: number) => {
    setActive(value + 1);
  };

  const getTabChildren = (
    value: number,
    setProgressValue: Function
  ): JSX.Element => {
    switch (value) {
      case 1:
        return (
          <CurrentForm
            active={active}
            onContinue={() => handleTabClick(value)}
          />
        );
      case 2:
        return (
          <Step2 active={active} onContinue={() => handleTabClick(value)} />
        );
      case 3:
        return (
          <Step3
            active={active}
            onContinue={() => handleTabClick(value)}
            setProgressValue={(value: number) => setProgressValue(value)}
            progressValue={progressValue}
          />
        );
      case 4:
        return (
          <div>
            <Step4 active={active} onContinue={() => handleTabClick(value)} />
          </div>
        );

      default:
        return (
          <div>
            <h3>Children 2</h3>
          </div>
        );
    }
  };

  return (
    <div>
      <FormHeader />
      <FormTab
        active={active}
        // onChange={handleTabClick}
        items={ITEMS({ active: active, progressValue: progressValue })}
      />
      <div className={CSS.form_child_container}>
        <div></div>
        <div className="cs-tm-40">
          {getTabChildren(active, setProgressValue)}
        </div>
      </div>
    </div>
  );
};
