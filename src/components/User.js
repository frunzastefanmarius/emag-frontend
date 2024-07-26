import React from 'react';
import PropTypes from 'prop-types';

const User = ({ users }) => (
    <div>
        <h1>Users</h1>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Active</th>
                <th>Buyer</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.isActive ? 'Yes' : 'No'}</td>
                    <td>{user.isBuyer ? 'Yes' : 'No'}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
);

User.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            isActive: PropTypes.bool.isRequired,
            isBuyer: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default User;
