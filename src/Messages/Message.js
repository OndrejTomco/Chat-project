import React, { Component } from 'react';

class Message extends Component {
  render(props) {
    return (
      <div className="message">
      <div>{this.props.from}: {this.props.message}</div>
       
      </div>
    );
  }
}

export default Message;