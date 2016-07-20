import React from 'react';
import {render} from 'react-dom';
import { Link } from 'react-router'

class UserItem extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <Link to={"/user/" + this.props.user.id}>{this.props.user.name}</Link>
                </td>
                <td>
                    {this.props.user.followers}
                </td>
            </tr>
        )
    }
}

export default UserItem;