import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

class SelectPlayers extends Component {
  state = {};
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <Sidebar />
          </div>
          <div className="col-md-9">
            <Main />
          </div>
        </div>
      </div>
    );
  }
}

export default SelectPlayers;
