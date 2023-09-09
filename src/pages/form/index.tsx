import React from "react";
import CSS from "./form.page.module.scss";
import FormHeader from "../../components/form/header/form-header.molecules";
import FormTab from "../../components/form/tab/tabs";
import { ITEMS } from "./constant/form.constant";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const Form = () => {
  const progress = useSelector((state: any) => state.tabProgress.progress);
  const nestedProgress = useSelector(
    (state: any) => state.nestedTabProgress.nestedTabProgress
  );

  return (
    <div>
      <FormHeader />
      <FormTab
        active={progress}
        items={ITEMS({ active: progress, progressValue: nestedProgress })}
      />
      <div className={CSS.form_child_container}>
        <div></div>
        <div className="cs-tm-40">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
