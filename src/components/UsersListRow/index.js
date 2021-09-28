import React from 'react';

export default class UsersListRow extends React.Component
{
    constructor(props) 
    {
        super(props);

        this.state = {
            user: props.user
        };
    }

    render() 
    {
        return (
            <tr>
                <td>{ this.props.user.id }</td>
                <td>{ this.props.user.email }</td>
                <td>{ this.props.user.username }</td>
                <td>
                    <button onClick={() => this.props.onDelete(this.props.user) }>Delete</button>
                </td>
            </tr>
        )
    }
}