import React from "react";
import Input from "./../../core/input";

export default class InputsSelects extends React.Component {
  render() {
    return (
      <div>
      <h1>
        Inputs, selects
      </h1>
      <p>
        Inputs
      </p>
      
      <div className="row mb-24">
        <div className="col-xs-12">  
          <div className="row">
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
        </div>        
      </div>

      <p>Readonly input</p>
      <div className="row mb-24">
        <div className="col-xs-12">  
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <Input label="Customer ID" type="text" readonly="true" />
            </div>            
          </div>
        </div>        
      </div>

      <p>Invalid input</p>
      <div className="row mb-24">
        <div className="col-xs-12">  
          <div className="row">
            <div className="col-sm-12 col-lg-4">
              <Input label="Bank Account Number" type="text" invalid="true" validationMessage="Please insert correct format of Bank Account Number" />
            </div>            
          </div>
        </div>        
      </div>
      </div>
    );
  }
}