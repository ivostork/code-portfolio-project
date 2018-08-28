import React from "react";

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
      
      <div className="form-group">
        <label for="first-name">
          First name
        </label>
        <div className="controls">
          <input type="text" id="first-name"/>
        </div>
      </div>

      </div>
    );
  }
}