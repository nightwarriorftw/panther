import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./common/AppHeader/AppHeader";
import Album from "./common/EventAlbum/Album";

class App extends Component {
  render() {
    return (
      <div>
        <AppHeader />
        <div className="Events">
          <Album />
        </div>
      </div>
    );
  }
}

export default App;
