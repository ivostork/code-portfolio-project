import React from "react";

export default class Input extends React.Component {
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


    // input type
    let whichControls = this.props.type;    
    let controls; 
    let classForInput;

    //input text
    if(whichControls === "text") {
      if(!isReadOnly) {
        controls = <input type="text" id={this.props.label} name={this.props.label}/>;
        
      } else {
        controls = <input readOnly type="text" id={this.props.label} name={this.props.label}/>;
      }
      classForInput="controls-text";      
    }

    //input select
    if(whichControls === "select") {      
      let selectItems = this.props.selectItems;
      let selectItems2 = selectItems.map((item) =>
        <option key={item.toString()} value={item}>
          {item}
        </option>
      );

      if(!isReadOnly) {
        controls =       
        <select id={this.props.label} name={this.props.label}>
          {selectItems2}
        </select>;
      } else {
        controls =       
        <select disabled id={this.props.label} name={this.props.label}>
          {selectItems2}
        </select>;
      }
      classForInput="controls-select";
    }

    //input datepicker
    if(whichControls === "datepicker") {
      if(!isReadOnly) {
        controls = <input type="text" id={this.props.label} name={this.props.label}/>;
        
      } else {
        controls = <input readOnly type="text" id={this.props.label} name={this.props.label}/>;
      }
      classForInput="controls-datepicker";      
    }

    return (
      <div className={finalClassForForm}>
        <label htmlFor={this.props.label}>
          {this.props.label}
        </label>
        {validationMessage}
        <div className={classForInput}>
          {controls}
        </div>
        {labelDescription}
      </div>
    );
  }
}