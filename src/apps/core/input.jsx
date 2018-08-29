import React from "react";

export default class Input extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {    
    let validationMessage;

    // html structure for input
    let whichControls = this.props.type;    
    
    let controls; 

    //class for input
    let classForInput;

    let classForForm = "form-group" + ((this.props.invalid != null) ? " is-invalid" : "");
    let classForFormDisabled = ((this.props.readonly != null) ? " is-disabled" : "");

    let finalClassForForm = classForForm + " " + classForFormDisabled;

    //label description scenario
    let labelDescription;
    let isLabelDescription = (this.props.description != null) ? true : false;

    let isReadOnly = (this.props.readonly != null) ? true : false;

    if(this.props.invalid != null) {
      validationMessage = <div className="validation-message">{this.props.validationMessage}</div>
    }


    if(isLabelDescription) {
      labelDescription = <div className="label-description">{this.props.description}</div>;
    }

    if(whichControls === "text") {
      if(!isReadOnly) {
        controls = <input type="text" id={this.props.label} name={this.props.label}/>;
        
      } else {
        controls = <input readOnly type="text" id={this.props.label} name={this.props.label}/>;
      }
      classForInput="controls-text";      
    }

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