import React from "react";
import InputWrap from "./../../core/inputWrap";
import InputText from "./../../core/inputBoolean";

export default class CheckboxesRadios extends React.Component {
  render() {

    let listOfPayments = ["Bank Account", "Direct Debit", "Paypal", "Other payment service"];
    let listOfFunds = ["Santander", "Barclays", "Lloyds", "Aviva"];

    return (
      <div>
        <h1>
          Checkboxes, radios
        </h1>
        <div className="mb-20">
          <p>
            Checkboxes
          </p>
          <InputWrap 
            label="Payment method"
            type="radio"
            groupName="payment"
            inputItems={listOfPayments}/>
        </div>
        <div className="mb-20">
          <p>
            Radio buttons
          </p>
          <InputWrap 
            label="Funds"
            type="checkbox"
            groupName="fund"
            inputItems={listOfFunds}/>
          </div>
      </div>
    );
  }
}