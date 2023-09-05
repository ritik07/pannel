import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/templates/layout.template";
import { Form } from "../pages/form";
import Ack from "../pages/ack/ack";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Form />} />
      </Route>
      <Route path="/acknowledge" element={<Ack />} />
    </Routes>
  );
};

export default Router;
