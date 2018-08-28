import React from "react";

export default class Colors extends React.Component {
  render() {
    return (
      <div>
        <h1>
        Colors
        </h1>
        <span>Primary color, accent color</span>
        <div className="row mb-20">
          <div className="col-auto">
            <div className="color" style={{backgroundColor: "#E6625E"}}>
            </div>
          </div>
          <div className="col-auto">
            <div className="color" style={{backgroundColor: "#54BDD7"}}>
            </div>
          </div>
        </div>
        <span>Copy colors</span>
        <div className="row mb-20">
          <div className="col-auto">
            <div className="color" style={{backgroundColor: "#333333"}}>
            </div>
          </div>
          <div className="col-auto">
            <div className="color" style={{backgroundColor: "rgba(0,0,0,.54"}}>
            </div>
          </div>
          <div className="col-auto">
            <div className="color" style={{backgroundColor: "rgba(0,0,0,.24"}}>
            </div>
          </div>
        </div>
        <span>Background colors</span>
        <div className="row mb-20">
          <div className="col-auto">
            <div className="color" style={{backgroundColor: "#ffffff"}}>
            </div>
          </div>
          <div className="col-auto">
            <div className="color" style={{backgroundColor: "#f0f0f0"}}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}