import React from 'react';
import { Link } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    debugger
  }

  updateState(property) {
    return (e) => { this.setState({[property]: e.currentTarget.value});};
  }

  render() {
    const buttonText = (this.props.formType === "signup" ? "Sign Up" : "Log in");
    const linkText = (this.props.formType === "signup" ? "login" : "signup");
    return (
      <div className="form-container">
        <form className="form-box" onSubmit={this.handleSubmit}>
          <label>Username
            <input
              type="text"
              onChange={this.updateState("username")}
              value={this.state.username}
              />
          </label>
          <br></br>
          <label>Password
            <input
              type="password"
              onChange={this.updateState("password")}
              value={this.state.password}
            />
          </label>
          <button>{buttonText}</button>
        </form>
        <br></br>
        <div>
          <Link to={linkText}>{linkText}</Link>
        </div>
      </div>
    );
  }
}

export default SessionForm;
