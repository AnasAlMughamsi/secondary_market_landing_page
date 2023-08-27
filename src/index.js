import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.scss';
import ReactGA from "react-ga4";

// import { HashRouter as Router } from "react-router-dom";

ReactGA.initialize("G-0Y1P76PFV2");
ReactGA.send("Seconday Landing Main");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

