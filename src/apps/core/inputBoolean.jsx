import React from "react";

export default class InputBoolean extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // input type
    let whichControls = this.props.type;    
    
    //html structrue
    let controlsClass;
    let controlsItems;
    

    //radio, checkbox
    if(whichControls === "radio" || whichControls === "checkbox") {
      controlsItems = this.props.inputItems.map((item) =>
        <div className="controls-boolean-item" key={item.toString()}>
          <input type={whichControls} id={item} name={this.props.groupName} />
          <span></span>
          <label htmlFor={item}>
            {item}
          </label>
        </div>
      );
      controlsClass="controls-boolean";      
    }

    return (
      <div className={controlsClass}>
        {controlsItems}
      </div>
    );
  }
}