import React from 'react';
import { User } from '../../models/User';
import UsersListRow from '../UsersListRow';

export default class UsersList extends React.Component 
{
    constructor() 
    {
        super();
        this.state = {
            users: [
                new User(1, 'info@info.com', 'Dende'),
                new User(2, 'bamba@info.com', 'Mario'),
                new User(3, 'sempronio@info.com', 'Caio')
            ]
        };
    }

    onDelete = user => 
    {
        const users = [...this.state.users];

        users.splice((this.state.users.indexOf(user)), 1);

        this.setState({
            users
        });
    }

    render() {
        const items = this.state.users.map(user => <UsersListRow key={user.id} onDelete={this.onDelete} user = {user} />)

        return (
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>email</th>
                        <th>username</th>
                    </tr>
                </thead>
                <tbody>
                    { items }
                </tbody>
            </table>
        )
    }
}