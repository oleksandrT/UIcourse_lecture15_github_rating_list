import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router'

class UserItem extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <Link to="/user/2">{this.props.user.name}</Link>
                </td>
                <td>
                    {this.props.user.stars}
                </td>
            </tr>
        )
    }
}

export default UserItem;