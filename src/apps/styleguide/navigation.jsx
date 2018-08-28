import React from "react";
import { NavLink } from "react-router-dom";

export default class Navigation extends React.Component {
  render () {
    return (      
        <div className="navigation">

          <NavLink to="/colors">Colors</NavLink>

          <NavLink to="/grid">Grid</NavLink>    
          
          <NavLink to="/typography">Typography</NavLink>      
          
          <NavLink to="/buttons">Buttons</NavLink>      
          
          <NavLink to="/inputsselects">Inputs, selects</NavLink>        
          
          <NavLink to="/checkboxesradios">Checkboxes, radio buttons</NavLink>      
          
          <NavLink to="/segmentedcontrols">Segmented controls</NavLink>      
          
          <NavLink to="/badges">Badges</NavLink>        
          
          <NavLink to="/tables">Tables</NavLink>      

        </div>   
    );
  }
}