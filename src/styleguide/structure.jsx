import React from "react";
import Navigation from './navigation';

export default class Structure extends React.Component {
  render() {
    return (
      <div>
        <div>
          Header
        </div>
        <Navigation />
      </div>
    );
  }
}