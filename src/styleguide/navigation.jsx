import React from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

import CodeInfo from "./pages/codeinfo";
import Colors from "./pages/colors";
import Grid from "./pages/grid";
import Typography from "./pages/typography";
import Buttons from "./pages/buttons";
import InputsSelects from "./pages/inputsselects";
import CheckboxesRadios from "./pages/checkboxesradios";
import SegmentedControls from "./pages/segmentedcontrols";
import Badges from "./pages/badges";
import Tables from "./pages/tables";



export default class Navigation extends React.Component {
  render () {
    return (
      <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Code info</Link>
            </li>
            <li>
              <Link to="/colors">Colors</Link>
            </li>
            <li>
              <Link to="/grid">Grid</Link>
            </li>
            <li>
              <Link to="/typography">Typography</Link>
            </li>
            <li>
              <Link to="/buttons">Buttons</Link>
            </li>
            <li>
              <Link to="/inputsselects">Inputs, selects</Link>
            </li>
            <li>
              <Link to="/checkboxesradios">Checkboxes, radio buttons</Link>
            </li>
            <li>
              <Link to="/segmentedcontrols">Segmented controls</Link>
            </li>
            <li>
              <Link to="/badges">Badges</Link>
            </li>
            <li>
              <Link to="/tables">Tables</Link>
            </li>
          </ul>
          
          <Route exact path="/" component={CodeInfo} />
          
          <Route path="/colors" component={Colors} />
          <Route path="/grid" component={Grid} />
          <Route path="/typography" component={Typography} />
          <Route path="/buttons" component={Buttons} />
          <Route path="/inputsselects" component={InputsSelects} />
          <Route path="/checkboxesradio" component={CheckboxesRadios} />
          <Route path="/segmentedcontrols" component={SegmentedControls} />
          <Route path="/badges" component={Badges} />
          <Route path="/tables" component={Tables} />
        </div>
      </Router>
    );
  }
}