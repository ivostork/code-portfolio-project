import React from "react";


export default class NavigationLightbox extends React.Component {
  constructor(props) {
    super(props);
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.closeNavigation();    
  }

  render() {
    return(
      <div>
        Lightbox
        <button type="button" onClick={this.handleClick}>
          close
        </button>

        {this.props.children}

      </div>
    );
  }
}