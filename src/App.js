import React, { Component } from 'react';
import Login from './Login/Login';
import SendMessage from './Messages/SendMessage';
import MyMessages from './Messages/MyMessages';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <SendMessage />
        <MyMessages />
      </div>
    );
  }
}

export default App;
