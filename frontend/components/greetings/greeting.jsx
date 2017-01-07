import React from 'react';
import { Link } from 'react-router';

class Greeting extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    let greeting;
    if(this.props.currentUser === null) {
      return (
        <div>
          <Link to={'signup'}>Sign Up</Link>
          <br></br>
          <Link to={'login'}>Log In</Link>
        </div>
      );
    } else {
      return (
        <div>
          <h2> {this.props.currentUser.username}</h2>
          <button onClick={this.handleLogout}>Log Out</button>
        </div>
      );
    }

  }
}

export default Greeting;
