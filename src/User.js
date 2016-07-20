import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router'

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: ''
        };
    }

    componentWillMount() {
        let _this = this;
        let userId = this.props.params.userId;
        let targetUrl = "https://api.github.com/user/" + userId;

        $.ajax(targetUrl)
            .done(function (data) {
                _this.setState({ userData: data });
            })
            .fail(function (err, msg) {
                console.log('error, message: ', err, msg);
                _this.setState({ userData: '' });
            });
    }

    render() {
        return (
            <div>
                <h1>{this.state.userData.name}</h1>
                <p><strong>Location:</strong> {this.state.userData.location}</p>
                <p><strong>Login:</strong> {this.state.userData.login}</p>
                <p><strong>Email:</strong> {this.state.userData.email}</p>
                <p><strong>Followers:</strong> {this.state.userData.followers}</p>
            </div>
        )
    }
}

export default User;