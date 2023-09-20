import React, { useState } from "react";
import ButtonCard from "./button-card";
import { useDispatch } from "react-redux";
import { setPannelData } from "../../../../../../redux/actions/tabProgress";

interface ISelectBankProps {
  bankData: any[];
}

const SelectBankButton = ({ bankData }: ISelectBankProps) => {
  const [activeAccount, setActiveAccount] = useState(1);
  const dispatch: Function = useDispatch();

  function updateAccountStatus(data: any, accountNumberToUpdate: string) {
    if (data && data.account_details && Array.isArray(data.account_details)) {
      let found = false; // A flag to track if the account with "A" status is found

      // Loop through the account details
      data.account_details.forEach((account: any) => {
        if (account.Account_Number === accountNumberToUpdate) {
          account.status = "A"; // Update the status to "A" for the specified account
          found = true; // Set the flag to true
        } else {
          account.status = "B"; // Set the status to "B" for other accounts
        }
      });

      // If the specified account was not found, add it with "A" status
      if (!found) {
        data.account_details.push({
          Account_Number: accountNumberToUpdate,
          Account_Name: "", // You can set other properties as needed
          Ifsc_Code: "",
          Bank_Name: "",
          active: true,
          status: "A",
        });
      }
    }
  }

  const onSelect = (Account_Number: string) => {
    let sessionUserData: any = sessionStorage.getItem("userData");
    let temp = JSON.parse(sessionUserData);
    console.log("temp", temp);
    updateAccountStatus(temp, Account_Number);
    console.log("active", temp);
    sessionStorage.setItem(
      "userData",
      JSON.stringify({
        ...temp,
      })
    );
    /**
     * sync redux with session storage
     */
    dispatch(
      setPannelData({
        ...temp,
      })
    );
  };

  return (
    <div>
      <ButtonCard data={bankData} active={activeAccount} onSelect={onSelect} />
    </div>
  );
};

export default SelectBankButton;
