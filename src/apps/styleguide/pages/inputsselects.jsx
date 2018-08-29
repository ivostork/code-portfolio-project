import React from "react";
import Input from "./../../core/input";

export default class InputsSelects extends React.Component {
  render() {

    let listOfStates = ["Czechia", "Austria"];
    let listOfDistricts = ["Moravia", "Bavaria"];
    let listOfCities = ["Brno", "Prague"];

    return (
      <div>
      <h1>
        Inputs, selects
      </h1>
      <h2>
        Text inputs
      </h2>

      <div className="row mb-20">
        <div className="col-sm-12 col-lg-fluid">
          <Input label="First Name" type="text" />
        </div>
        <div className="col-sm-12 col-lg-fluid">
          <Input label="Second Name" type="text" />
        </div>
        <div className="col-sm-12 col-lg-fluid">
          <Input label="Third Name" type="text" description="Third name is optional but quite common in Spain" />
        </div>
      </div>

      <div className="row mb-20">
        <div className="col-sm-12 col-lg-4">
          <Input label="Customer ID" type="text" readonly="true" />
        </div>            
      </div>
  
      <div className="row mb-20">
        <div className="col-sm-12 col-lg-4">
          <Input label="Bank Account Number" type="text" invalid="true" validationMessage="Please insert correct format of Bank Account Number" />
        </div>            
      </div>

      <h2>
        Selects
      </h2>
      
      <div className="row">
      <div className="col-sm-12 col-lg-fluid">      
          <Input label="State" type="select" selectItems={listOfStates} />
        </div>
        <div className="col-sm-12 col-lg-fluid">
          <Input label="District" type="select" selectItems={listOfDistricts}/>
        </div>
        <div className="col-sm-12 col-lg-fluid">
          <Input label="City" type="select" selectItems={listOfCities} readonly="true"/>
        </div>
      </div>
      </div>
    );
  }
}