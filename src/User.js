import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router'

class User extends React.Component {
    render() {
        return (
            <div>
                <Link to="/" className="btn btn-default">Back to list</Link>
                <h1>Name: Bob</h1>
                <p>Stars: 5</p>
                <p>{this.props.params.userId}</p>
            </div>
        )
    }
}

export default User;