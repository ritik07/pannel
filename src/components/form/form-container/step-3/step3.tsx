import React, { useEffect } from "react";
import CSS from "./step-3.module.scss";
import { useDispatch } from "react-redux";
import { setProgress } from "../../../../redux/actions/tabProgress";
import { Outlet } from "react-router-dom";

const Step3 = () => {
  const dispatch: Function = useDispatch();

  useEffect(() => {
    dispatch(setProgress(3));
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Step3;
