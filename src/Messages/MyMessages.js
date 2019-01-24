import React, { Component } from 'react';
import Message from './Message';

class MyMessages extends Component {
    constructor(props) {
        super(props);
        this.getMessages = this.getMessages.bind(this);

        this.state = {
            messages:[
                {from:'john',message:"hello"}
            ]
        };

    }
     getMessages(){

        let token = sessionStorage.getItem('token');
        let login = sessionStorage.getItem('login');
    
        let url = 'http://www.itsovy.sk:1201';
    
        fetch(url + '/getmessages', {
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
                this.setState({
                    messages: data.messages
                });
    
            });
    
    }

    render() {
        return (
            <div className="MyMessages">

                <button id="sendMessageBtn" onClick={this.getMessages}>Get my messages</button>
                {
                    this.state.messages.map((message) => {
                        return <Message message = {message.message} from = {message.from}/>
                    })
                }

            </div>
        );
    }
}

export default MyMessages;