import React, { Component } from 'react';

import ReactDOM from 'react-dom';

import UserProfile from './UserProfile.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: 'Jake'
    };
  }

  render() {
    return (
      <div>
        <UserProfile currentUser={this.state.currentUser} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');

ReactDOM.render(<App />, rootElement);
