import React, { useState } from "react";
import ButtonCard from "./button-card";

interface ISelectBankProps {
  bankData: any[];
}

const SelectBankButton = ({ bankData }: ISelectBankProps) => {
  const [activeAccount, setActiveAccount] = useState(1);

  const onSelect = (activeId: number) => {
    setActiveAccount(activeId);
  };

  return (
    <div>
      <ButtonCard data={bankData} active={activeAccount} onSelect={onSelect} />
    </div>
  );
};

export default SelectBankButton;
