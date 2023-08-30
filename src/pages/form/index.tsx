import React, { useState } from "react";
import CSS from "./form.page.module.scss";
import FormHeader from "../../components/form/header/form-header.molecules";
import FormTab from "../../components/form/tab/tabs.molecule";
import { ITEMS } from "./constant/form.constant";
import CurrentForm from "../../components/form/form-container/current.form-container";

export const Form = () => {
  const [active, setActive] = useState(1);

  const handleTabClick = (value: number) => {
    setActive(value + 1);
  };

  const getTabChildren = (value: number): JSX.Element => {
    switch (value) {
      case 1:
        return (
          <div>
            <h3>
              <CurrentForm
                active={active}
                onContinue={() => handleTabClick(value)}
              />
            </h3>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>Children 2</h3>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Children 3</h3>
          </div>
        );
      case 4:
        return (
          <div>
            <h3>Children 4</h3>
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
        items={ITEMS({ active: active })}
      />
      <div className={CSS.form_child_container}>
        <div></div>
        <div className="cs-tm-40">{getTabChildren(active)}</div>
      </div>
    </div>
  );
};
