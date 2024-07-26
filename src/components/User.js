import React from 'react';
import PropTypes from 'prop-types';

const User = ({ users }) => (
    <div>
        <h1>Users</h1>
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.username}</li>
            ))}
        </ul>
    </div>
);

User.propTypes = {
    users: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            username: PropTypes.string.isRequired,
            password: PropTypes.string.isRequired,
            isActive: PropTypes.bool.isRequired,
            isBuyer: PropTypes.bool.isRequired,
        })
    ).isRequired,
};

export default User;
