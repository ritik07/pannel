import React from "react";
import CSS from "./form-header.molecules.module.scss";
import TextAtom from "../../../../components/atoms/text/text";

const FormHeader = () => {
  return (
    <div>
      <div className={CSS.header_container}>
        <div>
          <TextAtom text="Lorizzel ipizzel" type="header-1" />
          <TextAtom
            style={{ color: "#5555f1" }}
            text="Dorizzel sit"
            type="header-1"
          />
        </div>
        <div>
          <TextAtom text="ID #008-12223-4" type="header" />
        </div>
      </div>
    </div>
  );
};

export default FormHeader;
