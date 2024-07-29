import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({ users, onDelete }) => (
    <div>
        <h1>Users</h1>
        <Link to="/users/create">
            <button>Create New User</button>
        </Link>
        <table>
            <thead>
            <tr>
                <th>ID</th>
                <th>Username</th>
                <th>Active</th>
                <th>Buyer</th>
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {users.map(user => (
                <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.username}</td>
                    <td>{user.isActive ? 'Yes' : 'No'}</td>
                    <td>{user.isBuyer ? 'Yes' : 'No'}</td>
                    <td>
                        <button onClick={() => onDelete(user.id)}>Delete</button>
                        <Link to={`/users/update/${user.id}`}>
                            <button>Update</button>
                        </Link>
                    </td>
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
    onDelete: PropTypes.func.isRequired,
};

export default User;
