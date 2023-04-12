import React, { Component } from "react";
import fire from "./config/fire";
import "./login.css";
import image from "./components/avatar.png";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      mode: "",
      e: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  changeMode = (mode, e) => {
    this.setState({ mode, e });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.mode === "Login") this.login(this.state.e);
    else if (this.state.mode === "Signup") this.signup(this.state.e);
  };
  login = (e) => {
    e.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        // console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  signup = (e) => {
    e.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((u) => {
        // console.log(u);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="page">
        <div className="head">
          <h1>Welcome to this Factory Simulation Software, </h1>
          <h1>DO ENTER YOUR CREDENTIALS TO LOGIN</h1>
        </div>
        <form className="log" onSubmit={this.handleSubmit}>
          <img src={image} className="avatar" />
          <h1>Login</h1>
          <div className="cred">
            {" "}
            <input
              type="email"
              id="email"
              name="email"
              placeholder="email"
              onChange={this.handleChange}
              value={this.state.email}
              required
            ></input>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={this.handleChange}
              value={this.state.password}
              required
            ></input>
          </div>
          <div className="buttons">
            <button
              className="login"
              onClick={(e) => this.changeMode("Login", e)}
            >
              <b>Login</b>
            </button>
            <h4>Don't have an account?</h4>
            <button
              className="login"
              onClick={(e) => this.changeMode("Signup", e)}
            >
              <b>Signup</b>
            </button>
          </div>
        </form>
      </div>
    );
  }
}
