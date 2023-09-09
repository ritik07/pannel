import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/templates/layout.template";
import { Form } from "../pages/form";
import Ack from "../pages/ack/ack";
import Step2 from "../components/form/form-container/step-2/step-2";
import CurrentForm from "../components/form/form-container/step-1/current.form-container";
import Step3 from "../components/form/form-container/step-3/step3";
import Part0 from "../components/form/form-container/step-3/part-0/part-0";
import Part1 from "../components/form/form-container/step-3/part-1/part-1";
import Part2 from "../components/form/form-container/step-3/part-2/part-2";
import Step4 from "../components/form/form-container/step-4/step4";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />}>
        <Route index element={<CurrentForm />} />
        <Route path="/claim/step-2" element={<Step2 />} />
        <Route path="/claim/step-3" element={<Step3 />}>
          <Route index element={<Part0 />} />
          <Route path="/claim/step-3/part-1" element={<Part1 />} />
          <Route path="/claim/step-3/part-2" element={<Part2 />} />
        </Route>
        <Route path="/claim/step-4" element={<Step4 />} />
      </Route>
      <Route path="/acknowledge" element={<Ack />} />
    </Routes>
  );
};

export default Router;
