import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import './styling/index.scss';

const BasicExample = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Button</Link>
        </li>
        <li>
          <Link to="/module">Module</Link>
       </li>
        <li>
          <Link to="/alert">Alert</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Button} />
      <Route path="/module" component={Module} />
      <Route path="/alert" component={Alert} />
    </div>
  </Router>
);

const Button = () => (
  <div>
    <h2>Button component</h2>
  </div>
);

const Module = () => (
  <div>
    <h2>Module</h2>
  </div>
);

const Alert = () => (
  <div>
    <h2>Alert</h2>
  </div>
);


ReactDOM.render(
  <BasicExample />,
  app
);