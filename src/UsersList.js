import React from 'react';
import {render} from 'react-dom';
import UserItem from './UserItem'

class UsersList extends React.Component {
    render() {
        let allUsers = this.props.users;
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>User</th>
                        <th>Stars</th>
                    </tr>
                </thead>
                <tbody>
                    {allUsers.map((user) => {
                        return <UserItem key={user.id} user={user} />
                    })}
                </tbody>
            </table>
        )
    }
}

export default UsersList;