import React, { Component } from "react";
import fire from "./config/fire";
import Home from "./Home";
import Login from "./Login";
import Data_mc from "./data_mc";
import Data_adj from "./data_adj";
import Types from "./types";
import Mc_Calculations from "./Mc_Calculations";
import Adj_Calculations from "./Adj_Calculations";
import { Route, Routes } from "react-router-dom";
import Mttf from "./Mttf";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        // console.log(user);
      } else {
        this.setState({ user: null });
      }
    });
  }
  render() {
    return (
      <div className="App">
        {/* {this.state.user ? (<Home />) : (<Login />)} */}

        <Routes>
          <Route
            exact
            path="/"
            element={this.state.user ? <Home /> : <Login />}
          />
          <Route
            exact
            path="/data_mc"
            element={<Data_mc user={this.state.user} />}
          />
          <Route
            exact
            path="/data_adj"
            element={<Data_adj user={this.state.user} />}
          />
          <Route exact path="/types" element={<Types />} />
          <Route
            exact
            path="/Adj_Calculations"
            element={<Adj_Calculations user={this.state.user} />}
          />
          <Route
            exact
            path="/Mc_Calculations"
            element={<Mc_Calculations user={this.state.user} />}
          />
          <Route
            exact
            path="/Mttf"
            element={<Mttf user={this.state.user} />}
          />
        </Routes>
      </div>
    );
  }
}
