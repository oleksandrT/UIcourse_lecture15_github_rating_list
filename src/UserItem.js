import React from 'react';
import {render} from 'react-dom';

class UserItem extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    {this.props.user.name}
                </td>
                <td>
                    {this.props.user.stars}
                </td>
            </tr>
        )
    }
}

export default UserItem;