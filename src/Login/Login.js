import React, { Component } from 'react';

const logUser = () => {

  let username = document.getElementById('login').value;
  let password = document.getElementById('password').value;

  let url = 'http://www.itsovy.sk:1201';

  fetch(url + '/login', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: username,
      password: password,
    })
  })
    .then(res => res.json())
    .then(data => {
      sessionStorage.setItem('token', data.token);
      sessionStorage.setItem('login', data.login);

    });

}

const LogOutUser = () => {
  let url = 'http://www.itsovy.sk:1201';
  let token = sessionStorage.getItem('token');
  let login = sessionStorage.getItem('login');
  
  fetch(url + '/logout', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      login: login,
      token: token,
    })
  })
  .then(res => res.json())
    .then(data => {
     console.log(data);

    });

}


class Login extends Component {

  render() {
    return (
      <div className="LoginWrapper">
        <input type="text" id="login"></input>
        <input type="password" id="password"></input>
        <button id="loginBtn" onClick={logUser}>Log in</button>
        <button id="logoutBtn" onClick={LogOutUser}>Log out</button>

      </div>
    );
  }
}

export default Login;