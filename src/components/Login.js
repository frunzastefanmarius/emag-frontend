import React, {useEffect, useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {login} from '../services/authService';

const Login = ({ setAuth }) => {
    const navigate = useNavigate();
    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await login(credentials);
            const user = JSON.stringify(data);
            localStorage.setItem('authToken', user); // Store user details in authToken
            setAuth(user);
            setIsLoggedIn(true);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate]);

    return (
        <div className="auth-container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit} className="auth-form">
                <label>
                    Username:
                    <input type="text" name="username" value={credentials.username} onChange={handleChange} required/>
                </label>
                <br/>
                <label>
                    Password:
                    <input type="password" name="password" value={credentials.password} onChange={handleChange}
                           required/>
                </label>
                <br/>
                <button type="submit">Login</button>
            </form>
            <p>
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
        </div>
    );
};

export default Login;
