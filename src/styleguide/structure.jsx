import React from "react";
import Navigation from './navigation';

export default class Structure extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="container">
            <div className="logo"/>
          </div>
        </div>
        <Navigation />
      </div>
    );
  }
}