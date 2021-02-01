import React, { Component } from 'react';
import './App.css';
import { Top } from '../components'
import logoLight from "../assets/logo/logo_light.png";
import logoDark from "../assets/logo/logo_dark.png";

class App extends Component {
  render() {
    return (
      <div className="index">
        <Top logo={logoLight || logoDark} />
        <div className="contents">WORK FOR ByteDance</div>
      </div>
    );
  }
}

export default App;
