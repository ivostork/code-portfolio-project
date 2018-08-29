import React from "react";
import Navigation from './navigation';

import { Route, Link } from "react-router-dom";

import CodeInfo from "./pages/codeinfo";
import Colors from "./pages/colors";
import Grid from "./pages/grid";
import Typography from "./pages/typography";
import Buttons from "./pages/buttons";
import InputsSelects from "./pages/inputsselects";
import Datepicker from "./pages/datepicker";
import CheckboxesRadios from "./pages/checkboxesradios";
import SegmentedControls from "./pages/segmentedcontrols";
import Badges from "./pages/badges";
import Tables from "./pages/tables";

export default class Structure extends React.Component {
  render() {
    return (
      <div className="styleguide">
        <div className="header">
          <div className="container">            
              <div>              
                <Link to="/" className="logo">
                  <span className="sr-only">
                    Link to code info
                  </span>
                </Link>               
              </div>                          
          </div>
        </div>        
        <div className="container">
          <div className="layout">
            <Navigation />
            <div className="content">          
                <Route exact path="/" component={CodeInfo} />          
                <Route path="/colors" component={Colors} />
                <Route path="/grid" component={Grid} />
                <Route path="/typography" component={Typography} />
                <Route path="/buttons" component={Buttons} />
                <Route path="/inputsselects" component={InputsSelects} />
                <Route path="/datepicker" component={Datepicker} />
                <Route path="/checkboxesradios" component={CheckboxesRadios} />
                <Route path="/segmentedcontrols" component={SegmentedControls} />
                <Route path="/badges" component={Badges} />
                <Route path="/tables" component={Tables} />          
            </div>
        </div>
        </div>
      </div>
    );
  }
}