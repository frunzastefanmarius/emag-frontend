import React, { useEffect, useState } from 'react';
import { getUsers } from '../services/userService';
import User from './User';

const UserContainer = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(setUsers).catch(console.error);
    }, []);

    return <User users={users} />;
};

export default UserContainer;
