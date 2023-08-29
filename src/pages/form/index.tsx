import React, { useState } from "react";
import FormHeader from "./molecules/form-header/form-header.molecules";
import FormTab from "./molecules/form-tab/tabs.molecule";
import CSS from "./form.page.module.scss";
import { ITEMS } from "./form.constant";

export const Form = () => {
  const [active, setActive] = useState(1);

  const handleTabClick = (value: number) => {
    setActive(value);
  };

  const getTabChildren = (value: number): JSX.Element => {
    switch (value) {
      case 1:
        return (
          <div>
            <h3>Children 1</h3>
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
        onChange={handleTabClick}
        items={ITEMS({ active: active })}
      />
      <div className={CSS.form_child_container}>
        <div></div>
        <div className="cs-tm-40">{getTabChildren(active)}</div>
      </div>
    </div>
  );
};
