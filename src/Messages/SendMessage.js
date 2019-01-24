import React, { Component } from 'react';

const sendMessage = () => {
  let message = document.getElementById('myMessage').value;
  let reciever = document.getElementById('reciever').value;

  let token = sessionStorage.getItem('token');
  let login = sessionStorage.getItem('login');

  let url = 'http://www.itsovy.sk:1201';

  fetch(url + '/sendmessage', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: login,
      token: token,
      user:reciever,
      message:message
    })
  })
    // .then(res => res.json())
    .then(data => {
      console.log(data);

    });

}


class SendMessage extends Component {
    render() {
        return (
            <div className="messages">
                <input type="text" id="myMessage"></input>
                <input type="text" id="reciever"></input>

                <button id="sendMessageBtn" onClick={sendMessage}>Send message</button>

            </div>
        );
    }
}

export default SendMessage;
