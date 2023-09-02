import React, { useState } from "react";
import ButtonCard from "./button-card";

const DUMMY = [
  { name: "HDFC", no: "xxxxxxxx1930", id: 1 },
  { name: "ICICI", no: "xxxxxxxx8311", id: 3 },
];
const SelectBankButton = () => {
  const [activeAccount, setActiveAccount] = useState(1);

  const onSelect = (activeId: number) => {
    setActiveAccount(activeId);
  };

  return (
    <div>
      <ButtonCard data={DUMMY} active={activeAccount} onSelect={onSelect} />
    </div>
  );
};

export default SelectBankButton;
