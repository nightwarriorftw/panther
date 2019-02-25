import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from "./common/AppHeader/AppHeader";
import AppFooter from "./common/AppFooter/AppFooter";

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <AppFooter />
      </div>
      );
    }
  }
  
  export default App;
  