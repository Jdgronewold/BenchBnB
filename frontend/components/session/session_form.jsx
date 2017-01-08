import React from 'react';
import { Link, withRouter } from 'react-router';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateState = this.updateState.bind(this);
    this.redirect = this.redirect.bind();
  }

  redirect() {
    this.props.router.push("/");
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.router.push('/'));
  }

  updateState(property) {
    return (e) => { this.setState({[property]: e.currentTarget.value});};
  }

  render() {
    const buttonText = (this.props.formType === "/signup" ? "Sign Up" : "Log in");
    const linkText = (this.props.formType === "/signup" ? "login" : "signup");
    return (
      <div className="form-container">
        <span className="form-switch">
          Please {buttonText} or {' '}
          <Link to={linkText}>  {linkText}</Link>
        </span>
        <form className="form-box" onSubmit={this.handleSubmit}>
          <label>Username
            <br/>
            <input
              type="text"
              onChange={this.updateState("username")}
              value={this.state.username}
              />
          </label>
          <br/>
          <label>Password
            <br/>
            <input
              type="password"
              onChange={this.updateState("password")}
              value={this.state.password}
            />
          </label>
          <button>{buttonText}</button>
        </form>
        <br/>
      </div>
    );
  }
}

export default withRouter(SessionForm);
