import { Route, Routes } from "react-router-dom";
import { Layout } from "../components/templates/layout.template";
import { Form } from "../pages/form";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Form />} />
      </Route>
    </Routes>
  );
};

export default Router;
