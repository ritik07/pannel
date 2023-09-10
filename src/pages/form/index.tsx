import React, { useEffect } from "react";
import CSS from "./form.page.module.scss";
import FormHeader from "../../components/form/header/form-header.molecules";
import FormTab from "../../components/form/tab/tabs";
import { ITEMS } from "./constant/form.constant";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const RESPONSE_API = {
  data: {
    //root data -> step 3 part 0
    Full_Name: "amkt",
    Gender: null,
    DOB: null,
    Username: null,
    Mobile_Number: "9958546267",
    Permanent_Address: null, // address
    employment_details: [
      {
        //filter on A: step 1
        Employment_Type: "fulle-time",
        Joining_Date: "yesterday",
        Manager_Name: "kabhi2",
        Manager_Contact_Number: "9810027267",
        Manager_Email: "kabhi@abc.com",
        Hr_Name: "Nadhu",
        Hr_Contact_Number: "9978446266",
        Hr_Email: "Nadhu@abc.com",
        status: "A",
        companyDetails: [],
      },
      {
        Employment_Type: "time",
        Company_ID: "0",
        Joining_Date: "yesterday",
        Manager_Name: "kabhi2",
        Manager_Contact_Number: "9810027267",
        Manager_Email: "kabhi@abc.com",
        Hr_Name: "Nadhu",
        Hr_Contact_Number: "9978446266",
        Hr_Email: "Nadhu@abc.com",
        status: "B",
      },
    ],
    account_details: [
      {
        Account_Number: "524103809",
        Account_Name: "amit ky",
        Ifsc_Code: "IDKI000321",
        Bank_Name: "IDKI",
      },
      {
        Account_Number: "52410380",
        Account_Name: "amit ky",
        Ifsc_Code: "IDFC000321",
        Bank_Name: "IDFC",
      },
      {
        Account_Number: "764328",
        Account_Name: "amit ky",
        Ifsc_Code: "nsjfhbsfa",
        Bank_Name: "ICIC",
      },
      {
        Account_Number: "52410387",
        Account_Name: "amit ky",
        Ifsc_Code: "HDFC000321",
        Bank_Name: "HDFC",
      },
    ],
    claim_details: [
      {
        claimId: "64f781e8e9cc60173e0e7f08",
        userId: "64f3b69866788b348da99044",
        isAcknowledged: true,
        claimStatus: "Initiated",
        claimRaisedAt: "2023-09-05T19:30:48.500Z",
        createdBy: "server",
        updatedAt: null,
        updatedBy: null,
        User_ID: "64f3b69866788b348da99044",
      },
    ],
    // bank edit screen right part
    policy_details: [
      {
        coverage: "2years",
        premium: "2745",
      },
    ],
    document_details: [], // document_url: ------
  },
  status: 200,
  message: "User details fetching successful for claims",
};

export const Form = () => {
  const progress = useSelector((state: any) => state.tabProgress.progress);
  const nestedProgress = useSelector(
    (state: any) => state.nestedTabProgress.nestedTabProgress
  );

  /**
   * API call
   */

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    const response = await new Promise((resolve, reject) => {
      try {
        setTimeout(() => {
          resolve(RESPONSE_API);
        }, 1500);
      } catch (error) {
        console.log("error", error);
      }
    });
  };

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
