import React from "react";
import CustomLink from './customLink';

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let links = [
      {
        path:"/inbox",
        name:"Inbox",
      },
      {
        path:"/search",
        name:"Search",
      },
      {
        path:"/report",
        name:"Report",
      }       
    ];

    let renderedLinks = links.map((item, index) => 
      (
        <div key={index}>
          <CustomLink path={item.path} name={item.name} handleCloseButton={this.props.handleCloseButton} isLightboxOn={this.props.isLightboxOn} />
        </div>
      )
    );
    

    return(
      <div>
        {renderedLinks}
      </div>
    );
  }
}