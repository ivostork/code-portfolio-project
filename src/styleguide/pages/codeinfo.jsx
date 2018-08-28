import React from "react";

export default class CodeInfo extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Code info
        </h1>
        <br/>
        <ul className="list">
          <li>
            Designed by Sketch
          </li>
          <li>
            Front end - Webpack project with SCSS and React
          </li>
        </ul>
        <br/>
        <p>
          You can find the code for the project on this <a href="">Github link</a>
        </p>
      </div>
    );
  }
}