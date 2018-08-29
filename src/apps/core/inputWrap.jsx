import React from "react";
import InputText from "./inputText";
import InputBoolean from "./inputBoolean";

export default class InputWrap extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {    
    //classes for form group
    let isInvalid = (this.props.invalid != null) ? true : false;
    let isReadOnly = (this.props.readonly != null) ? true : false;

    let classForForm = "form-group" + ((isInvalid) ? " is-invalid" : "");
    let classForFormDisabled = ((isReadOnly) ? " is-disabled" : "");
    let finalClassForForm = classForForm + " " + classForFormDisabled;

    //validation message
    let validationMessage;
    if(this.props.invalid != null) {
      validationMessage = <div className="validation-message">{this.props.validationMessage}</div>
    }


    //label description scenario
    let labelDescription;
    let isLabelDescription = (this.props.description != null) ? true : false;
    if(isLabelDescription) {
      labelDescription = <div className="label-description">{this.props.description}</div>;
    }

    let structureTypeText = (this.props.type === "select" || this.props.type === "text" || this.props.type === "datepicker") ? true : false;

    let structureForOutput = (structureTypeText) ? (
      <div className={finalClassForForm}>
        <label htmlFor={this.props.label}>
          {this.props.label}
        </label>
        {validationMessage}
          <InputText 
            type={this.props.type} 
            readonlyvalue={isReadOnly} 
            inputItems = {this.props.inputItems} /> 
        {labelDescription}
      </div>) : (
        <fieldset className={finalClassForForm}>
          <legend htmlFor={this.props.label}>
            {this.props.label}
          </legend>
          {validationMessage}
          <InputBoolean 
            type={this.props.type} 
            readonlyvalue={isReadOnly} 
            inputItems = {this.props.inputItems}
            groupName = {this.props.groupName} /> 
          {labelDescription}
        </fieldset>
      );
    
    return (
      <div>
        {structureForOutput}
      </div>
    );
  }
}