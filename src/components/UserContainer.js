import React, { useEffect, useState } from 'react';
import { getUsers, deleteUser } from '../services/userService';
import User from './User';

const UserContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, []);

    const loadUsers = () => {
        getUsers().then(setUsers).catch(console.error);
    };

    const handleDelete = (id) => {
        deleteUser(id)
            .then(loadUsers)
            .catch(console.error);
    };

    return <User users={users} onDelete={handleDelete} />;
};

export default UserContainer;
