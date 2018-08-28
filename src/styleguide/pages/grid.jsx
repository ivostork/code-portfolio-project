import React from "react";


export default class Grid extends React.Component {
  render() {
    return (
      <div>
        <h1>Grid</h1>
        <br/>
        <p>
         The parent class is <strong>.row</strong> and the sibling class is <strong>.col-auto</strong>
        </p>
        <br/>
        <div className="row">
          <div className="col-auto">
            <div className="grid-col">
              .col-auto
            </div>
          </div>
          <div className="col-auto">
            <div className="grid-col">
              .col-auto
            </div>
          </div>
          <div className="col-auto">
            <div className="grid-col">
              .col-auto
            </div>
          </div>
        </div>
        <br />
        <br />
        <br/>
        <br/>
        <p>
         The parent class is <strong>.row.narrow-gutter</strong> and the sibling class is <strong>.col-auto</strong>
        </p>
        <br/>
        <div className="row narrow-gutter">
          <div className="col-auto">
            <div className="grid-col">
              .col-auto
            </div>
          </div>
          <div className="col-auto">
            <div className="grid-col">
              .col-auto
            </div>
          </div>
          <div className="col-auto">
            <div className="grid-col">
              .col-auto
            </div>
          </div>
        </div>
        <br />
        <br />
        <br/>
        <p>
         The parent class is <strong>.row</strong> and the sibling class is <strong>.col</strong>
        </p>
        <br/>
        <div className="row">
          <div className="col">
            <div className="grid-col">
              .col
            </div>
          </div>
          <div className="col">
            <div className="grid-col">
              .col
            </div>
          </div>
          <div className="col">
            <div className="grid-col">
              .col
            </div>
          </div>
        </div>
        <br />
        <br />
        <br/>
        <p>
         The parent class is <strong>.row</strong> and the sibling classes are <strong>.col-md-4.col-xs-12</strong> and <strong>.col-md-8.col-xs-12</strong> 
        </p>
        <br/>
        <div className="row">
          <div className="col-md-4 col-xs-12">
            <div className="grid-col">
              .col-md-4.col-xs-12
            </div>
          </div>
          <div className="col-md-8 col-xs-12">
            <div className="grid-col">
              .col-md-8.col-xs-12
            </div>
          </div>          
        </div>
      </div>
    );
  }
}