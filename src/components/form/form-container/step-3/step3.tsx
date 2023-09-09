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
import Part0 from "./part-0/part-0";
import { useDispatch, useSelector } from "react-redux";
import {
  setProgress,
  setNestedProgress,
} from "../../../../redux/actions/tabProgress";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

const { Text, Title } = Typography;

const Step3 = () => {
  const dispatch: Function = useDispatch();
  const navigate = useNavigate();

  const nestedProgress = useSelector(
    (state: any) => state.nestedTabProgress.nestedTabProgress
  );

  useEffect(() => {
    dispatch(setProgress(3));
  }, []);

  const handleOnContinue = () => {
    if (true) {
      navigate("/claim/step-3");
      dispatch(setProgress(3));
    }
  };

  useEffect(() => {
    console.log("nestedProgress", nestedProgress);
  }, [nestedProgress]);

  const handleOnNext = () => {
    let temp = nestedProgress;
    console.log("nestedProgress", nestedProgress);
    dispatch(setNestedProgress(temp + 1));
  };

  return (
    <div>
      <Outlet />
      {/* {nestedProgress === 1 && (
        <Part0 progressValue={nestedProgress} handleOnNext={handleOnNext} />
      )}
      {nestedProgress === 2 && (
        <Part1 progressValue={nestedProgress} handleOnNext={handleOnNext} />
      )}

      {nestedProgress === 3 && <Part2 handleOnContinue={handleOnContinue} />} */}
    </div>
  );
};

export default Step3;
